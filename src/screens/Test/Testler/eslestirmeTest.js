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
    style={{ flex: 1 }}
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
                inputRange: [0, 1, 2, 3, 4],
                outputRange: ["0deg", "10deg", "-10deg", "5deg", "-5deg"],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={{ fontSize: 16,fontWeight:"600", color: "white", flexWrap: "wrap" }}>
        {kelime}
      </Text>
    </Animated.View>
  </TouchableOpacity>
);

const EslestirmeTest = ({navigation}) => {
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
            kart.id === id ? { ...kart, renk: "limegreen", pressable: true } : kart
          )
        );
        setIlkTiklama(null);
        setIkinciTiklama(null);
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
            toValue: 4,
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
              navigation.pop();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Eşleştirme Testi</Text>
        </View>
        <FlatList
          style={styles.flatlist}
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
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop:10,
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    flexWrap: "wrap",
    alignContent:"center",
    
  },
  header: {
    marginTop: StatusBar.currentHeight - 5,
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
