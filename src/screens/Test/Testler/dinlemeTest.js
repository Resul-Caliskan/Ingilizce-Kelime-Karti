import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { Colors } from "../../../constants/colors";
const sozluk = [
  { ingilizce: "Hello", turkce: "Merhaba" },
  { ingilizce: "Goodbye", turkce: "Hoşça kal" },
  { ingilizce: "Please", turkce: "Lütfen" },
  { ingilizce: "Thank you", turkce: "Teşekkür ederim" },
  { ingilizce: "Yes", turkce: "Evet" },
  { ingilizce: "No", turkce: "Hayır" },
  { ingilizce: "Excuse me", turkce: "Affedersiniz" },
  { ingilizce: "Sorry", turkce: "Özür dilerim" },
];

const DinlemeTest = ({ navigation }) => {
  const [puan, setPuan] = useState(0);
  const [seri, setSeri] = useState(0);
  const [can, setCan] = useState(3);
  const [kelimeIndex, setKelimeIndex] = useState(5);
  const [loading, setLoading] = useState(false);
  const dogruKelimeyiBul = () => {
    // Doğru kelimeyi bulma işlemi
  };

  const kelimeyiSeslendir = (Kelime) => {
    setLoading(true);

    Speech.speak(Kelime, {
      language: "en",
      onDone: () => {
        setLoading(false);
      },
      onError: (error) => {
        setLoading(false);
        console.error("Speech synthesis error:", error);
      },
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons name="arrow-left" color={"white"} size={35} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Eşleştirme Testi</Text>
      </View>
      {/* DURUM SATIRI */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.durum}>Puan: {puan}</Text>
        <Text style={styles.durum}>Seri: {seri}</Text>
        <Text style={styles.durum}>
          {kelimeIndex + 1}/{sozluk.length}
        </Text>
      </View>
      {/* KELİME SATIRI */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            style={{ margin: 5 }}
            name="cards-heart"
            color={"red"}
            size={40}
          />
          <Text style={styles.can}>{can}</Text>
        </View>
        <Text>{sozluk[kelimeIndex].turkce}</Text>
        {/* <TouchableOpacity
          disabled={sound}
          style={styles.voice}
          onPress={kelimeyiSeslendir(sozluk[kelimeIndex].ingilizce)}
        >
          <MaterialCommunityIcons
            name="account-voice"
            color={Colors.black}
            size={60}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          disabled={loading}
          style={styles.voice}
          onPress={() => kelimeyiSeslendir(sozluk[kelimeIndex].ingilizce)}
        >
          {loading ? (
            <ActivityIndicator size="large" color={Colors.black} />
          ) : (
            <MaterialCommunityIcons
              name="account-voice"
              color={Colors.black}
              size={60}
            />
          )}
        </TouchableOpacity>
      </View>
      {sozluk.slice(0, 5).map((kelime, index) => (
        <Button
          key={index}
          title={kelime.ingilizce}
          onPress={dogruKelimeyiBul}
        />
      ))}
    </View>
  );
};

export default DinlemeTest;
const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 10,
    // borderStartWidth: 2,
    // borderBottomWidth: 3,
    // borderColor: "white",
    paddingBottom: 40,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    left: 5,

    paddingBottom: 10,
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    paddingBottom: 10,
  },
  voice: {
    margin: 10,
    borderWidth: 3,
    padding: 5,
    borderBottomWidth: 1,
  },
  can: {
    position: "absolute",
    left: 20,
    top: 15,
    color: "white",
  },
  durum: { margin: 5, marginHorizontal: 15 },
});
