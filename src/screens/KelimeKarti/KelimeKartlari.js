import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import KelimeKarti from "./kelimeKarti";
import { Colors } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const KelimeKartlari = ({navigation,route}) => {
  const {kelimeler}=route.params;
  return (
    <View style={styles.container}>
      <View style={styles.innerContaier}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => {
              navigation.goBack();
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
              ingilizceKelime={kelime.ingilizce}
              okunusu={kelime.okunusu}
              turkceAnlam={kelime.turkce}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default KelimeKartlari;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.element1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: { flex: 1, width: "90%" },
  innerContaier: {
    flex: 1,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    marginBottom:15,
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
