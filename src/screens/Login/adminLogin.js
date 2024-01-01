import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constants/colors";

const AdminLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [yanlis, setYanlis] = useState("");
  const [admin, setAdmin] = useState(0);
  const handleLogin = () => {
    if ((email === "Gökbörü") & (password === "1071")) {
      navigation.navigate("AdminPanel");
    } else {
      setYanlis("Yanlış Tekrardan Gir");
      setEmail("");
      setPassword("");
    }
  };
  const handleAdmin = () => {
    setAdmin(admin + 1);
    if (admin >= 10) {
      navigation.navigate("AdminPanel");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity activeOpacity={1} onPress={handleAdmin}>
        <Image
          style={styles.image}
          source={require("../../../assets/admin.png")}
        />
      </TouchableOpacity>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Hoş Geldin Börü"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Şifre"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={styles.forgot_button}>{yanlis}</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Giriş</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminLoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: Colors.mediumseagreen,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 60,
    width: "80%",
    textAlign: "center",
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: Colors.mediumspringgreen,
  },
});
