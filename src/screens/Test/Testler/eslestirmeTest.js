import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Colors } from "../../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Card = ({ id, dil, kelime, renk, rotate, onPress, pressable }) => (
  <TouchableOpacity
    style={{ flex: 1, margin: 10 }}
    onPress={() => onPress(id, dil)}
    disabled={pressable}
  >
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: renk,
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 1, 2, 3, 4, 5],
                outputRange: [
                  "0deg",
                  "10deg",
                  "-10deg",
                  "5deg",
                  "-5deg",
                  "0deg",
                ],
              }),
            },
          ],
        },
      ]}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        {kelime}
      </Text>
    </Animated.View>
  </TouchableOpacity>
);

const EslestirmeTest = ({ navigation }) => {
  const sozluk = [
    { ingilizce: "Hellofafdfjklasjfasdfjlj", turkce: "merhaba" },
    { ingilizce: "what", turkce: "Ne" },
    { ingilizce: "Hellofaf dfjklasj ff asdfjlj a", turkce: "merhaba" },
    { ingilizce: "what", turkce: "Ne" },
    { ingilizce: "Hellofaf dfjklasj ff asdfjlj a", turkce: "merhaba" },
    { ingilizce: "what", turkce: "Ne" },
    { ingilizce: "Hellofaf dfjklasj ff asdfjlj a", turkce: "merhaba" },
    { ingilizce: "what", turkce: "Ne" },
    // daha fazla sözlük girişi ekleyebilirsiniz
  ];

  const [ilkTiklama, setIlkTiklama] = useState(null);
  const [ikinciTiklama, setIkinciTiklama] = useState(null);
  const [puan, setPuan] = useState(0);
  const [seri, setSeri] = useState(0);
  const [kartlar, setKartlar] = useState(
    sozluk
      .map((item, id) => [
        {
          id,
          dil: "ingilizce",
          kelime: item.ingilizce,
          renk: "#383e42",
          rotate: new Animated.Value(0),
          pressable: false,
        },
        {
          id,
          dil: "turkce",
          kelime: item.turkce,
          renk: "#383e42",
          rotate: new Animated.Value(0),
          pressable: false,
        },
      ])
      .flat()
  );
  const kelimeSayisi =kartlar.length/2 ;
  const tiklama = (id, dil) => {
    if (ilkTiklama === null) {
      setIlkTiklama(id);
      setKartlar(
        kartlar.map((kart) =>
          (kart.id === id) & (kart.dil === dil)
            ? { ...kart, renk: "limegreen" }
            : kart
        )
      );
    } else {
      setIkinciTiklama(id, dil);
      if (ilkTiklama === id) {
        setKartlar(
          kartlar.map((kart) =>
            kart.id === id
              ? { ...kart, renk: "limegreen", pressable: true }
              : kart
          )
        );
        setIlkTiklama(null);
        setIkinciTiklama(null);
        setPuan(puan + 1);
        setSeri(seri + 1);
      } else {
        setKartlar(
          kartlar.map((kart) =>
            (kart.id === id) & (kart.dil === dil)
              ? { ...kart, renk: "red" }
              : kart
          )
        );
        Animated.timing(
          kartlar.find((kart) => (kart.id === id) & (kart.dil === dil)).rotate,
          {
            toValue: 5,
            duration: 300,
            useNativeDriver: true,
          }
        ).start(() => {
          setKartlar(
            kartlar.map((kart) => ({
              ...kart,
              renk: kart.pressable ? kart.renk : "#383e42",
              rotate: kart.pressable ? kart.rotate : new Animated.Value(0),
            }))
          );
          setIlkTiklama(null);
          setIkinciTiklama(null);
          setSeri(0);
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons name="arrow-left" color={"white"} size={35} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Eşleştrime Testi</Text>
      </View>
      <View style={styles.durum}>
        <Text style={styles.durumtext}>Puan:{" "+puan+ " 🌟"}</Text>
        <Text style={styles.durumtext}>
          Serim:{seri}
          {(seri >= 2) & (seri < 5)
            ? " 🎖️"
            : (seri >= 5) & (seri <= 7)
            ? " 🏆"
            : seri == kelimeSayisi ? " 💯": ""}
        </Text>
        {/* <Text style={styles.durumtext}>      </Text> */}
      </View>
      <FlatList
        style={styles.flatlist}
        // contentContainerStyle= {{justifyContent:"center"}}
        data={kartlar}
        keyExtractor={(item) => `${item.id}${item.dil}`}
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Card {...item} onPress={tiklama} />
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
};

export default EslestirmeTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: Colors.black,
  },

  card: {
    justifyContent: "center",
    alignItems: "center",

    width: 95,
    height: 95,
    borderRadius: 5,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "black",
    flexWrap: "wrap",
    alignContent: "center",
  },
  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 10,
    // borderStartWidth: 2,
    // borderBottomWidth: 3,
    // borderColor: "white",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    paddingBottom: 10,
  },
  durum: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  durumtext: {
    fontSize: 14,
    color: "white",
  },
});
