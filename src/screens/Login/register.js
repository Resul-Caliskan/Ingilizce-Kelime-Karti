// RegisterScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "../../backEnd/firebaseFunctions/firebaseConfig";

firebase.initializeApp(firebaseConfig);

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [weeklyStats, setWeeklyStats] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleRegister = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // Kullanıcı bilgilerini Firestore'a kaydet
      await firebase.firestore().collection("users").doc(email).set({
        name,
        score,
        weeklyStats,
      });

      console.log("Kullanıcı başarıyla oluşturuldu:", userCredential.user.uid);
      navigation.replace("Home", { email: email });
    } catch (error) {
      console.error("Kullanıcı oluşturma hatası:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default RegisterScreen;
