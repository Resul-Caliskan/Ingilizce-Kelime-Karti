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
          source={require("../../../../assets/fire.png")}
          style={styles.image}
        />
        <Text style={styles.text}>English sentence of the day</Text>
      </View>
      {/* Kartın arka yüzü */}
      <View style={styles.face}>
        <Image
          resizeMode="cover"
          source={require("../../../../assets/fire.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Günün cümlesinin türkçesi</Text>
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
    borderEndWidth:1,
    borderBottomWidth:2,
    borderColor:"white"
  },
  face: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.element2,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",

  },
});

export default Kart;
