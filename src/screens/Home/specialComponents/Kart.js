import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import FlipCard from "react-native-flip-card";
import { Colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");
const Kart = () => (
  <View style={styles.card}>
    <FlipCard style={styles.card}>
      {/* Kartın ön yüzü */}
      <View style={styles.face}>
        <Image
          resizeMode="cover"
          source={require("../../../../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.text}>English sentence of the day</Text>
      </View>
      {/* Kartın arka yüzü */}
      <View style={styles.face}>
        <Image
          resizeMode="cover"
          source={require("../../../../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Günün cümlesinin türkçes</Text>
      </View>
    </FlipCard>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    height: height / 9,
    borderRadius: 15,
    overflow: "hidden",
  },
  face: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Kart;
