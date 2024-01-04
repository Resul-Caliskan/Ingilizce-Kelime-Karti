import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import FlipCard from "react-native-flip-card";
import { Colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");
const Kart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FlipCard style={styles.card}>
          {/* Kartın ön yüzü */}
          <View style={[styles.face,{backgroundColor:Colors.gunluk1}]}>
            {/* <Image
              resizeMode="cover"
              source={require("../../../../assets/fire.png")}
              style={styles.image}
            /> */}
            <Text style={styles.text}>
              No amount of worry can change the future
            </Text>
          </View>
          {/* Kartın arka yüzü */}
          <View style={[styles.face,{backgroundColor:Colors.limeGreen}]}>
            {/* <Image
              resizeMode="cover"
              source={require("../../../../assets/fire.png")}
              style={styles.image}
            /> */}
            <Text style={styles.text}>Hiçbir kaygı geleceği değiştiremez</Text>
          </View>
        </FlipCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 20, margin: 5 },
  card: {
    width: width / 1.1,
    height: height / 7,
    borderRadius: 15,
    overflow: "hidden",
  },
  face: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    paddingHorizontal:2,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.anaEkranYazi,
  },
});

export default Kart;
