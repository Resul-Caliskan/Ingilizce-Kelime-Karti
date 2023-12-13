import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import * as Progress from "react-native-progress";

const Card = ({ bgColor, imageSource, text, progress }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.bar}>
        <Progress.Bar
          progress={progress}
          width={100}
          borderWidth={2}
          borderColor="black"
          color="limegreen"
        />
        <Text>%{parseInt(progress*100)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    width: Dimensions.get("window").width/3,
    height: Dimensions.get("window").height/5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    height: "75%",
    position: "absolute",
  },
  text: {
    position: "absolute",
    top: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center"
  },
  bar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 2,
  },
});

export default Card;
