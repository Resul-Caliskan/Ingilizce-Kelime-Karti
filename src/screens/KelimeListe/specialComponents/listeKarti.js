import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";

const Card = ({ id, bgColor, imageSource, text, progress, textColor }) => {
  return (
    <View
      style={[
        styles.card,
        id % 2 == 1
          ? {
              borderStartWidth: 3,
              borderBottomWidth: 3,
              borderColor: textColor,
            }
          : { borderEndWidth: 3, borderBottomWidth: 3, borderColor: textColor },
        { backgroundColor: bgColor },
      ]}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      <View style={styles.bar}>
        <Progress.Bar
          progress={progress}
          width={100}
          borderWidth={2}
          borderColor={textColor}
          color="limegreen"
          height={8}
        />
        <Text style={{ color: textColor }}>%{parseInt(progress * 100)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 5,
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
    padding: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  bar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 2,
  },
});

export default Card;
