import React from "react";
import { ScrollView, View, Text, StyleSheet, StatusBar,TouchableOpacity } from "react-native";
import KelimeKarti from "./kelimeKarti";
import { Colors } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const kelimeler = [
  {
    ingilizceKelime: "Hello World",
    okunusu: "həˈloʊ",
    turkceAnlam: "Merhaba",
  },
  {
    ingilizceKelime: "World",
    okunusu: "wɜːrld",
    turkceAnlam: "Dünya",
  },
  {
    ingilizceKelime: "entertainment",
    okunusu: "riˈækt",
    turkceAnlam: "Tepki",
  },
];

const KelimeKartiListe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContaier}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => {
              onPressHandler();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Kelime Kartları</Text>
        </View>
      
      <ScrollView style={styles.scrollView}>
        {kelimeler.map((kelime, index) => (
          <KelimeKarti
            key={index}
            ingilizceKelime={kelime.ingilizceKelime}
            okunusu={kelime.okunusu}
            turkceAnlam={kelime.turkceAnlam}
          />
        ))}
      </ScrollView>
      </View>
    </View>
  );
};

export default KelimeKartiListe;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.element1,
        justifyContent: "center",
        alignItems: "center",
      },
      scrollView:{flex:1},
  innerContaier: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 10,
    borderStartWidth: 2,
    borderBottomWidth: 3,
    borderColor: "white",
    paddingBottom: 40,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    left: 5,

    paddingBottom: 10,
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    paddingBottom: 10,
  },
});
