import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const getPercent = async (
  collectionName,
  documentName,
  fieldName,
  groupName,
) => {
  try {
    const documentRef = doc(
      collection(firestore, collectionName),
      documentName
    );
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();

      if (data && data[fieldName] && data[fieldName][groupName]) {
        const percent = data[fieldName][groupName]["ogrenilen"]
        const tumu=  data[fieldName][groupName]["kelimeler"].length;

        console.log("Tumu:"+tumu);
        return percent;
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

export default getPercent;
