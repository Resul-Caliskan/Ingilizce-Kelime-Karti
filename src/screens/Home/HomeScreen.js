import { View, StyleSheet } from "react-native";
import React from "react";
import KullaniciInfo from "./specialComponents/KullaniciInfo";
import Seriler from "./specialComponents/Seriler";
import { Colors } from "../../constants/colors";
import Kart from "./specialComponents/Kart";

export default function HomeScreen() {
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <KullaniciInfo userName={"Resul"} basariSirasi={7} />
        <Seriler seriesName={"7"} />
        <Kart />
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
