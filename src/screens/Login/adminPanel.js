import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "firebase/compat/app";
import firebaseConfig from "../../backEnd/firebaseFunctions/firebaseConfig";
import "firebase/compat/firestore";
import data from "../../backEnd/dataBase";
import isDunyasi from "../../backEnd/DataBase/isDunyasi";

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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Çok İşlevsel Panel</Text>
      <TouchableOpacity
        onPress={sendDataToFirebase}
        style={{ padding: 10, backgroundColor: "blue", borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Firebase'e Veri Gönder</Text>
      </TouchableOpacity>
    </View>
  );
}
