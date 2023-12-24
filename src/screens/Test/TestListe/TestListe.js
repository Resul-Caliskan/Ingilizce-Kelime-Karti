import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../../constants/colors";

export default function TestListe() {
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <Text>test liste</Text>
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
  container:{
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
