import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Card from "./specialComponents/listeKarti";
import { Colors } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Her bir kartın bilgilerini içeren bir dizi
const data = [
  {
    id: "1",
    text: "İş Dünyası",
    bgColor: "red",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "2",
    text: "Gezi ve Seyahat",
    bgColor: "yellow",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "3",
    text: "Ev ve Eşyalar",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "4",
    text: "Gıda ve Yemek Pişirme",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "5",
    text: "Sağlık ve Tıp",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "6",
    text: "Eğitim",
    bgColor: "red",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "7",
    text: "Hobi ve Eğlence",
    bgColor: "yellow",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "8",
    text: "Doğa ve Çevre",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "9",
    text: "Teknoloji",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "10",
    text: "Kişisel İlişkiler",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "11",
    text: "Alışveriş",
    bgColor: "red",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "12",
    text: "Dil Öğrenme",
    bgColor: "yellow",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "13",
    text: "Günlük Yaşam",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "14",
    text: "Spor",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "15",
    text: "Müzik",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "16",
    text: "Sanat ve Kültür",
    bgColor: "red",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "17",
    text: "Bilim ve Teknoloji",
    bgColor: "yellow",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "18",
    text: "Hukuk ve Politika",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "19",
    text: "Ekonomi ve Finans",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "20",
    text: "Medya ve Haberler",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "21",
    text: "Çevre ve Ekoloji",
    bgColor: "red",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "22",
    text: "Psikoloji ve Felsefe",
    bgColor: "yellow",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "23",
    text: "Din ve Spiritüalite",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "24",
    text: "Moda ve Güzellik",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "25",
    text: "Yerel Kültür ve Gelenekler",
    bgColor: "blue",
    imageSource: require("../../../assets/fire.png"),
  },
  // Diğer kartlar...
];

export default function KelimeListesi() {
  const [progresses, setProgresses] = useState({});

  useEffect(() => {
    data.forEach((item) => {
      setProgresses((prev) => ({
        ...prev,
        [item.id]: Math.random(), // Burada progress değerini hesaplayabilirsiniz
      }));
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <MaterialCommunityIcons name="arrow-left" color={"white"} size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Kelime Grupları</Text>
      </View>
      <FlatList
        style={styles.flat}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ margin: 16 }}>
            <Card
              text={item.text}
              bgColor={item.bgColor}
              imageSource={item.imageSource}
              progress={progresses[item.id] || 0}
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.element1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: { flex: 1, margin: 30 },
  flat: { flex: 1, flexWrap: "wrap" },
  header: {
    marginTop: StatusBar.currentHeight,
    borderRadius: 20,
    borderBottomWidth: 3,
    paddingBottom: 35,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    left: 10,
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
