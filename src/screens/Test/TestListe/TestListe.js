import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../../constants/colors";
import TestImageButton from "./specialComponents/testButton";
import KullaniciInfo from "../../../components/KullaniciInfo";

export default function TestListe() {
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <KullaniciInfo
          userName={"Resul"}
          hosgeldin={"Hoş Geldin "}
          mesaj={"Testler İle Öğrenmeyi Pekiştirelim"}
        />
        <TestImageButton
          images={[" "," "]}
          text={"Kelime Eşleştirme Testi"}
          backgroundColor={Colors.element1}
        />
        <TestImageButton
          images={[
            require("../../../../assets/icon.png"),
            require("../../../../assets/fire.png"),
          ]}
          text={"Dinleme Testi"}
          backgroundColor={Colors.element1}
        />
        <TestImageButton
          images={[" "," "]}
          text={"Kelime Yazma Testi"}
          backgroundColor={Colors.element1}
        />
        <TestImageButton
          images={[" "," "]}
          text={"Boşluk Doldurma Testi"}
          backgroundColor={Colors.element1}
        />
        <TestImageButton
          images={["",""]}
          text={"Hatalarım"}
          backgroundColor={Colors.element1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
  container: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
});
