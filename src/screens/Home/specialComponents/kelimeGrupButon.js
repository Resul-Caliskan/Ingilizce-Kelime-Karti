// import React, { useEffect, useRef } from "react";
// import {
//   Animated,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from "react-native";
// import { Colors } from "../../../constants/colors";
// const { width, height } = Dimensions.get("window");

// const AnimatedButton = ({ onPress }) => {
//   const colorAnimation = useRef(new Animated.Value(0)).current;
//   const fontSizeAnimation = useRef(new Animated.Value(0)).current; // Yeni eklenen satır

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.parallel([
//           // Yeni eklenen satır
//           Animated.timing(colorAnimation, {
//             toValue: 2,
//             duration: 1000,
//             useNativeDriver: false,
//           }),
//           Animated.timing(fontSizeAnimation, {
//             // Yeni eklenen satır
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: false,
//           }),
//         ]),
//         Animated.parallel([
//           // Yeni eklenen satır
//           Animated.timing(colorAnimation, {
//             toValue: 0,
//             duration: 1000,
//             useNativeDriver: false,
//           }),
//           Animated.timing(fontSizeAnimation, {
//             // Yeni eklenen satır
//             toValue: 0,
//             duration: 1000,
//             useNativeDriver: false,
//           }),
//         ]),
//       ])
//     ).start();
//   }, []);

//   const animatedStyle = {
//     borderRadius: 12,
//     width: width / 1.4,
//     height: height / 10,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 30,
//     backgroundColor: colorAnimation.interpolate({
//       inputRange: [0, 1,2],
//       outputRange: [Colors.honeydew,Colors.element1,Colors.element2],
//     }),
//   };

//   const animatedTextStyle = {
//     // Yeni eklenen satır
//     fontSize: fontSizeAnimation.interpolate({
//       // Değiştirilen satır
//       inputRange: [0, 1],
//       outputRange: [14, 20],
//     }),
//     fontWeight: "bold",
//     color: "white",
//   };

//   return (
//     <Animated.View style={animatedStyle}>
//       <TouchableOpacity
//         style={styles.container}
//         onPress={() => {
//           onPress();
//         }}
//       >
//         <Animated.Text style={animatedTextStyle}>
//           Hadi Öğrenmeye Başlayalım
//         </Animated.Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// export default AnimatedButton;

// const styles = StyleSheet.create({
//   container: {
//     width: width / 1.44,
//     height: height / 11,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.element1,
//   },
// });
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");

const AnimatedButton = ({ onPress }) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const fontSizeAnimation = useRef(new Animated.Value(0)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current; // Yeni eklenen satır

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(colorAnimation, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(fontSizeAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(rotateAnimation, {
            toValue: 3, 
            duration: 1500,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(colorAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(fontSizeAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(rotateAnimation, {
            toValue: 0,
            duration: 1000,
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
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    backgroundColor: colorAnimation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [Colors.honeydew, Colors.element1, Colors.element2],
    }),
    transform: [
      {
        rotate: rotateAnimation.interpolate({
          inputRange: [0, 1,2,3],
          outputRange: ["0deg", "-10deg","10deg","-5deg"],
        }),
      },
    ],
  };

  const animatedTextStyle = {
    fontSize: fontSizeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 20],
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
    height: height / 11,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
});
