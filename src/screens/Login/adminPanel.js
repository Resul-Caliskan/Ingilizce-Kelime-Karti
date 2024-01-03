import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "firebase/compat/app";
import firebaseConfig from "../../backEnd/firebaseFunctions/firebaseConfig";
import "firebase/compat/firestore";
import data from "../../backEnd/dataBase";
import saveDataToSQLite from "../../backEnd/LocalDataBase/sqLite";
import readDataFromSQLite from "../../backEnd/LocalDataBase/getDataSql";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function AdminPanel() {
  const sendDataToFirebase = async () => {
    try {
      const db = firebase.firestore();

      await db.collection("gruplar").doc("kelimeler").set(data);

      console.log("Veri Firebase'e gönderildi.");
    } catch (error) {
      console.error("Firebase veri gönderme hatası:", error);
    }
  };
  // const kaydet = async () => {
  //   try {
  //   const veri=  await saveDataToSQLite();

  //     console.log("Veri Sql'e gönderildi.");
  //   } catch (error) {
  //     console.error("Sql veri kaydetme hatası:", error);
  //   }
  // };
  // const oku = async () => {
  //   try {
  //     console.log("okunuyor......");
  //     const data = await readDataFromSQLite();
  //     console.log('SQLite verileri:', data);
  //   } catch (error) {
  //     console.error('SQLite veri okuma hatası:', error);
  //   }
  // };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Çok İşlevsel Panel</Text>
      <TouchableOpacity
        onPress={sendDataToFirebase}
        style={{ padding: 10, backgroundColor: "blue", borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Firebase'e Veri Gönder</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={kaydet}
        style={{ margin:10,padding: 10, backgroundColor: "blue", borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>SqLite'e Veri Kaydet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={oku}
        style={{ padding: 10, backgroundColor: "blue", borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>SqLite'e Veri oku</Text>
      </TouchableOpacity> */}
    </View>
  );
}
