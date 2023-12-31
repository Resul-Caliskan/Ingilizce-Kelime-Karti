import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { Colors } from "../constants/colors";

const KullaniciInfo = ({
  userName,
  basariSirasi,
  hosgeldin,
  mesaj,
  backgroundColor,
}) => {
  return (
    <View
      style={
        backgroundColor == null
          ? styles.container
          : [styles.container, { backgroundColor: backgroundColor }]
      }
    >
      <Image
        style={styles.avatar}
        source={require("../../assets/favicon.png")}
      />
      <View style={styles.textView}>
        <Text style={styles.welcomeText}>
          {hosgeldin}
          {userName}
        </Text>
        <Text style={styles.continueText}>{mesaj}</Text>
        <View style={styles.header}>
          <Text style={styles.continueText}>{basariSirasi} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.element1,
    width: "95%",
    height: Dimensions.get("window").height / 6,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  avatar2: {
    width: 30,
    height: 30,
  },
  avatar: {
    marginBottom: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.anaEkranYazi,
  },
  textView: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 10,
    left: 15,
  },
  welcomeText: {
    color: Colors.anaEkranYazi,
    fontSize: 18,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  continueText: {
    color: Colors.anaEkranYazi,
    fontSize: 16,
    marginTop: 5,
    alignSelf: "flex-start",
  },
});

export default KullaniciInfo;
