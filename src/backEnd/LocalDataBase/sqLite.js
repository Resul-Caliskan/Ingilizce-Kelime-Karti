import { openDatabase } from "expo-sqlite";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "../firebaseFunctions/firebaseConfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const db = openDatabase("kelimeler.db");

const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS kelimeler (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        groupID INTEGER,
        firstTime INTEGER,
        seen INTEGER,
        english TEXT,
        turkish TEXT,
        pronunciation TEXT
      )
    `);
  });
};

const saveDataToSQLite = async () => {
  try {
    // Firebase'den tüm grup bilgilerini çek
    const collectionName = "gruplar";
    const documentName = "kelimeler";
    const fieldName = "Veriler"; // Değiştirmeniz gerekebilir

    const documentRef = doc(
      collection(firestore, collectionName),
      documentName
    );
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();

      if (data && data[fieldName]) {
        const allGroupsData = data[fieldName];

        // SQLite tablosunu oluştur
        createTables();

        // Tüm gruplardaki kelimeleri SQLite'e ekle
        Object.keys(allGroupsData).forEach((groupName) => {
          const groupData = allGroupsData[groupName];
          if (groupData && groupData["kelimeler"]) {
            groupData["kelimeler"].forEach((kelime) => {
              const {
                ilkKez,
                goruldu,
                kelime: { ingilizce, turkce, okunusu },
              } = kelime;

              // firstTime ve seen değerlerini uygun şekilde sakla
              const firstTimeValue = ilkKez ? 1 : 0;
              const seenValue = goruldu ? 1 : 0;

              // SQLite'e ekle
              db.transaction((tx) => {
                tx.executeSql(
                  `
                  INSERT INTO kelimeler (
                    groupID,
                    firstTime,
                    seen,
                    english,
                    turkish,
                    pronunciation
                  ) VALUES (?, ?, ?, ?, ?, ?)
                `,
                  [
                    groupData.GrupoID,
                    firstTimeValue,
                    seenValue,
                    ingilizce,
                    turkce,
                    okunusu,
                  ],
                  (_, result) => {
                    // Ekleme işlemi tamamlandı
                    console.log("Eklendi:", result);
                  },
                  (_, error) => {
                    // Ekleme işlemi hata verdi
                    console.log("Hata:", error);
                  }
                );
              });
            });
          }
        });
        console.log("Veriler SQLite'e başarıyla eklendi.");
      } else {
        console.log("Belirli alan içinde grup bilgileri bulunamadı.");
      }
    } else {
      console.log("Doküman bulunamadı.");
    }
  } catch (error) {
    console.error("Veri çekme veya SQLite'e ekleme hatası:", error);
  } finally {
    await dbKapat();
  }
};
const dbKapat = async () => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM kelimeler", [], (_, result) => {
      console.log("Son işlem tamamlandı, veritabanı kapatılıyor.");
      db.closeAsync()
        .then(() => console.log("Veritabanı başarıyla kapatıldı"))
        .catch((error) => console.error("Veritabanı kapatılırken hata oluştu:", error));
    });
  });
};


export default saveDataToSQLite;
