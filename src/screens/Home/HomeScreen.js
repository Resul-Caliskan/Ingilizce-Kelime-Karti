import { View, StyleSheet } from "react-native";
import React from "react";
import KullaniciInfo from "./specialComponents/KullaniciInfo";
import Seriler from "./specialComponents/Seriler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <KullaniciInfo userName={"Resul"} />
      <Seriler seriesName={"7"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent:"flex-start", alignItems: "center",backgroundColor:"black" },
});
