import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const getWordsUntilIndex = async (
  collectionName,
  documentName,
  fieldName,
  groupName,
  index
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
          .filter((item, i) => i < index)
          .map((item) => item.kelime);

        console.log(words);
        return words;
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

export default getWordsUntilIndex;
