import * as SQLite from "expo-sqlite";
const openDatabaseConnection = async () => {
  return new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("kelimeler.db", undefined, resolve, reject);
  });
};

const readDataFromSQLite = async () => {
  try {
    const db = await openDatabaseConnection();
    console.log(db._name);
  } catch (error) {
    console.error("Veritabanı bağlantısı başarısız: ", error);
  }
 
};

export default readDataFromSQLite;


// return new Promise((resolve, reject) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "SELECT * FROM kelimeler",
//       null,
//       (_, result) => {
//         const data = result.rows.raw();
//         resolve(data);
//       },
//       (_, error) => {
//         console.error("SQLite veri okuma hatası:", error);
//         reject(error);
//       }
//     );
//   });
// });