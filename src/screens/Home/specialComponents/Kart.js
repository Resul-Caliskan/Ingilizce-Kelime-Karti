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
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const animatedStyle = {
    borderRadius: 20,
    margin: 5,
    backgroundColor: colorAnimation.interpolate({
      inputRange: [0, 2],
      outputRange: [Colors.element1, Colors.element3],
    }),
  };
  return (
    <Animated.View style={animatedStyle}>
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    height: height / 9,
    borderRadius: 15,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "white",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default Kart;
