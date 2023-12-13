import React, { useEffect, useRef } from "react";
import {
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");

const AnimatedButton = ({ onPress }) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const fontSizeAnimation = useRef(new Animated.Value(0)).current; // Yeni eklenen satır

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          // Yeni eklenen satır
          Animated.timing(colorAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: false,
          }),
          Animated.timing(fontSizeAnimation, {
            // Yeni eklenen satır
            toValue: 1,
            duration: 800,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          // Yeni eklenen satır
          Animated.timing(colorAnimation, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }),
          Animated.timing(fontSizeAnimation, {
            // Yeni eklenen satır
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }),
        ]),
      ])
    ).start();
  }, []);

  const animatedStyle = {
    borderRadius: 12,
    width: width / 1.4,
    height: height / 10,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 30,
    backgroundColor: colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.element1, Colors.element2],
    }),
  };

  const animatedTextStyle = {
    // Yeni eklenen satır
    fontSize: fontSizeAnimation.interpolate({
      // Değiştirilen satır
      inputRange: [0, 1],
      outputRange: [14, 22],
    }),
    fontWeight: "bold",
    color: "white",
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          onPress();
        }}
      >
        <Animated.Text style={animatedTextStyle}>
          Hadi Öğrenmeye Başlayalım
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  container: {
    width: width / 1.44,
    height: height / 10.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.element3,
    borderWidth: 1,
  },
});
