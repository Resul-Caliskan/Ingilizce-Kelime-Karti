import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import FlipCard from "react-native-flip-card";
const { width, height } = Dimensions.get("window");
const Kart = () => (
  <View style={styles.card}>
    <FlipCard style={styles.card}>
      {/* Kartın ön yüzü */}
      <View style={styles.face}>
        <Image
          resizeMode="cover"
          source={require("../../../../assets/icon.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Ön Yüz</Text>
      </View>
      {/* Kartın arka yüzü */}
      <View style={styles.face}>
        <Image
          resizeMode="cover"
          source={require("../../../../assets/fire.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Arka Yüz</Text>
      </View>
    </FlipCard>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    height: height / 6,
    borderRadius: 15,
    overflow: "hidden",
  },
  face: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Kart;
