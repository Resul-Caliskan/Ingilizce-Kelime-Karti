import { View, StyleSheet } from "react-native";
import React from "react";
import KullaniciInfo from "./specialComponents/KullaniciInfo";
import Seriler from "./specialComponents/Seriler";
import AnlamliSozler from "./specialComponents/AnlamliSoz";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <KullaniciInfo userName={"Resul"} basariSirasi={7}/>
      <Seriler seriesName={"7"}  />
      <AnlamliSozler soz={"Hayat Kısa Kuşlar Uçuyor"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
});
