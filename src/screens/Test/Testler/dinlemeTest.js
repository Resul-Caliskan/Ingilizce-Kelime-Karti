import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { Colors } from "../../../constants/colors";
import shuffleArray from "../../../backEnd/functions/shuffleArray";

const Card = ({ kelime, renk, rotate, onPress, pressable }) => (
  <TouchableOpacity
    style={{ flex: 1, margin: 10 }}
    onPress={() => onPress(kelime)}
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
const sozluk = [
  { ingilizce: "Hello", turkce: "Merhaba" },
  { ingilizce: "Goodbye", turkce: "Hoşça kal" },
  { ingilizce: "Please", turkce: "Lütfen" },
  { ingilizce: "Thank you", turkce: "Teşekkür ederim" },
  { ingilizce: "Yes", turkce: "Evet" },
  { ingilizce: "No", turkce: "Hayır" },
  { ingilizce: "Excuse me", turkce: "Affedersiniz" },
  { ingilizce: "Sorry", turkce: "Özür dilerim" },
];

const DinlemeTest = ({ navigation }) => {
  const [puan, setPuan] = useState(0);
  const [seri, setSeri] = useState(0);
  const [can, setCan] = useState(3);
  const [kelimeIndex, setKelimeIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [kartlar, setKartlar] = useState(
    shuffleArray(
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
    )
  );

  const tiklama = (kelime) => {
    if (sozluk[kelimeIndex].ingilizce === kelime) {
      // TIKLANILAN DOĞRUYSA YEŞİL YAP
      setKartlar(
        kartlar.map((kart) =>
          kart.kelime === kelime
            ? { ...kart, renk: "limegreen", pressable: true }
            : { ...kart }
        )
      );
      setSeri(seri + 1);
      if (kelimeIndex + 1 < sozluk.length) {
        // EĞER SIRADAKİ KELİME VARSA YENİ KELİMEYE GEÇ
        setKelimeIndex(kelimeIndex + 1);
      } else {
        // EĞER SON KELİMEYE GELİNDİYSE OYUN BİTİRİLEBİLİR
        // Burada isteğe bağlı olarak oyun bitirme işlemleri yapılabilir.
      }
      setPuan(puan+1);
    } else {
      //EĞER TIKLANILAN YANLIŞSA ROTATE ET VE KIRMIZI YAP
      setKartlar(
        kartlar.map((kart) =>
          kart.kelime === kelime ? { ...kart, renk: "red" } : kart
        )
      );
      Animated.timing(kartlar.find((kart) => kart.kelime === kelime).rotate, {
        toValue: 5,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setKartlar(
          kartlar.map((kart) => ({
            ...kart,
            renk: kart.pressable ? kart.renk : "#383e42",
            rotate: kart.pressable ? kart.rotate : new Animated.Value(0),
          }))
        );
        setSeri(0);

        //CAN DEĞERİNİ AZALTACAĞIM
      });
    }
  };

  const kelimeyiSeslendir = (Kelime) => {
    setLoading(true);

    Speech.speak(Kelime, {
      language: "en",
      onDone: () => {
        setLoading(false);
      },
      onError: (error) => {
        setLoading(false);
        console.error("Speech synthesis error:", error);
      },
    });
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
        <Text style={styles.headerText}>Dinleme Testi</Text>
      </View>
      {/* DURUM SATIRI */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.durum}>
          Puan: {puan} {"🌟"}
        </Text>
        <Text style={styles.durum}>Seri: {seri}</Text>
        <Text style={styles.durum}>
          {kelimeIndex + 1}/{sozluk.length}
        </Text>
      </View>
      {/* KELİME SATIRI */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            style={{ margin: 20 }}
            name="cards-heart"
            color={"red"}
            size={50}
          />
          <Text style={styles.can}>{can}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "30%",
            top: "15%",
          }}
        >
          <Text style={styles.kelime}>Kelimenin Anlamı:</Text>
          <Text
            style={[
              styles.kelime,
              {
                fontWeight: 700,
                fontSize: 20,
                borderBottomWidth: 1,
                color: Colors.mediumspringgreen,
                paddingBottom: 2,
                borderColor: Colors.mediumspringgreen,
                borderRadius: 20,
              },
            ]}
          >
            {sozluk[kelimeIndex].turkce}
          </Text>
        </View>
        <TouchableOpacity
          disabled={loading}
          style={styles.voice}
          onPress={() => kelimeyiSeslendir(sozluk[kelimeIndex].ingilizce)}
        >
          {loading ? (
            <MaterialCommunityIcons
              name="progress-download"
              color="dodgerblue"
              size={60}
            />
          ) : (
            <MaterialCommunityIcons
              style={{
                backgroundColor: "#383e42",
                borderRadius: 5,
                borderWidth: 0.3,
                borderColor: "white",
              }}
              name="account-voice"
              color={"white"}
              size={60}
            />
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        // contentContainerStyle= {{justifyContent:"center"}}
        data={kartlar.filter((item) => item.dil === "ingilizce")}
        keyExtractor={(item) => `${item.id}${item.dil}`}
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Card
              kelime={item.kelime}
              rotate={item.rotate}
              renk={item.renk}
              pressable={item.pressable}
              onPress={tiklama}
            />
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
};

export default DinlemeTest;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.black,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    backgroundColor: "black",
    flexWrap: "wrap",
    alignContent: "center",
  },

  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 10,
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
  voice: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderLeftWidth: 0.3,
    borderEndWidth: 1,
    borderBottomWidth: 1.5,
    borderColor: "white",
  },
  can: {
    position: "absolute",
    left: 40,
    top: 32,
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  durum: { margin: 5, marginHorizontal: 15, color: "white", fontSize: 16 },
  kelime: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",

    width: 95,
    height: 95,
    borderRadius: 5,
  },
});
