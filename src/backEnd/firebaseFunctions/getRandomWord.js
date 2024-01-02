import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import * as Notifications from 'expo-notifications';
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const getRandomWord = async (
  collectionName,
  documentName,
  fieldName,
  groupName
) => {
  try {
    const documentRef = doc(
      collection(firestore, collectionName),
      documentName
    );
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();

      if (data && data[fieldName] && data[fieldName][groupName] && data[fieldName][groupName]["kelimeler"]) {
        const words = data[fieldName][groupName]["kelimeler"]
          .map((item) => item.kelime);

        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
      } else {
        console.log("Belirli alan içinde kelimeler bulunamadı.");
        return null;
      }
    } else {
      console.log("Doküman bulunamadı.");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
};

export default getRandomWord;
