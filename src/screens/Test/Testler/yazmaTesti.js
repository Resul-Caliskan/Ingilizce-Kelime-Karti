import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { Colors } from "../../../constants/colors";
import shuffleArray from "../../../backEnd/functions/shuffleArray";

const YazmaTest = ({ navigation }) => {
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

  const [inputText, setInputText] = useState("");
  const [kelimeIndex, setKelimeIndex] = useState(0);
  const [check, setCheck] = useState(0);
  const [loading, setLoading] = useState(false);
  const [puan, setPuan] = useState(0);
  const [seri, setSeri] = useState(0);
  const handleLetterPress = (letter) => {
    setInputText((prevText) => prevText + letter);
  };

  const handleClearPress = () => {
    setInputText("");
    setCheck(0);
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
  const renderLetterButtons = (index) => {
    const kelime = sozluk[index];

    return (
      <View key={kelimeIndex} style={styles.wordContainer}>
        {kelime.ingilizce
          .toUpperCase()
          .split("")
          .map((harf, harfIndex) => (
            <TouchableOpacity
              key={harfIndex}
              style={styles.letterButton}
              onPress={() => {
                //KELİMEYİ DOĞRU YAZDIĞINI BURADA KONTROL EDİYORUM !!!!!
                if (harfIndex === check) {
                  handleLetterPress(harf);
                  setCheck(check + 1);
                  if (kelime.ingilizce.length - 1 === check) {
                    setTimeout(() => {
                      setKelimeIndex(kelimeIndex + 1);
                      handleClearPress();
                    }, 900);
                  }
                }
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "800" }}>{harf}</Text>
            </TouchableOpacity>
          ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons name="arrow-left" color={"white"} size={35} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Yazma Testi</Text>
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
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "30%",
            top: "15%",
          }}
        >
          <Text style={styles.kelime}>Kelimenin Anlamı:</Text>
          <Text
            style={[
              styles.kelime,
              {
                fontWeight: 700,
                fontSize: 20,
                borderBottomWidth: 1,
                color: Colors.mediumspringgreen,
                paddingBottom: 2,
                borderColor: Colors.mediumspringgreen,
                borderRadius: 20,
              },
            ]}
          >
            {sozluk[kelimeIndex].turkce}
          </Text>
        </View>
        <TouchableOpacity
          disabled={loading}
          style={styles.voice}
          onPress={() => kelimeyiSeslendir(sozluk[kelimeIndex].ingilizce)}
        >
          {loading ? (
            <MaterialCommunityIcons
              name="progress-download"
              color="dodgerblue"
              size={60}
            />
          ) : (
            <MaterialCommunityIcons
              style={{
                backgroundColor: "#383e42",
                borderRadius: 5,
                borderWidth: 0.3,
                borderColor: "white",
              }}
              name="account-voice"
              color={"white"}
              size={60}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{inputText}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        {renderLetterButtons(kelimeIndex)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  inputText: {
    fontSize: 30,
    fontWeight: "700",
    marginRight: 10,
    color: "white",
  },

  keyboardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wordContainer: {
    width: "40%",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  letterButton: {
    margin: 5,
    padding: 20,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
  container: {
    flex: 1,

    backgroundColor: Colors.black,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    backgroundColor: "black",
    flexWrap: "wrap",
    alignContent: "center",
  },

  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 10,
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
    padding: 5,
    borderRadius: 5,
    borderLeftWidth: 0.3,
    borderEndWidth: 1,
    borderBottomWidth: 1.5,
    borderColor: "white",
  },
  can: {
    position: "absolute",
    left: 40,
    top: 32,
    color: "white",
    fontSize: 16,
  },
  durum: { margin: 5, marginHorizontal: 15, color: "white" },
  kelime: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",

    width: 95,
    height: 95,
    borderRadius: 5,
  },
});

export default YazmaTest;
