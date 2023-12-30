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
import ModalComponent from "./specialComponents/Modal/modal";
// Her bir kartın bilgilerini içeren bir dizi
const data = [
  {
    id: "1",
    text: "İş Dünyası",
    bgColor: "#FF5733",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "2",
    text: "Gezi ve Seyahat",
    bgColor: "#FFC300",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "3",
    text: "Ev ve Eşyalar",
    bgColor: "#DAF7A6",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "4",
    text: "Gıda ve Yemek Pişirme",
    bgColor: "#900C3F",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "5",
    text: "Sağlık ve Tıp",
    bgColor: "#581845",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "6",
    text: "Eğitim",
    bgColor: "#C70039",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "7",
    text: "Hobi ve Eğlence",
    bgColor: "#870000",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "8",
    text: "Doğa ve Çevre",
    bgColor: "#FF6F91",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "9",
    text: "Teknoloji",
    bgColor: "#1B998B",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "10",
    text: "Kişisel İlişkiler",
    bgColor: "#2E294E",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "11",
    text: "Alışveriş",
    bgColor: "#FFFD82",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "12",
    text: "Dil Öğrenme",
    bgColor: "#011638",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "13",
    text: "Günlük Yaşam",
    bgColor: "#FFC300",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "14",
    text: "Spor",
    bgColor: "#FF5733",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "15",
    text: "Müzik",
    bgColor: "#900C3F",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "16",
    text: "Sanat ve Kültür",
    bgColor: "#DAF7A6",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "17",
    text: "Bilim ve Teknoloji",
    bgColor: "#581845",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "18",
    text: "Hukuk ve Politika",
    bgColor: "#C70039",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "19",
    text: "Ekonomi ve Finans",
    bgColor: "#FFC300",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "20",
    text: "Medya ve Haberler",
    bgColor: "#FF5733",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "21",
    text: "Çevre ve Ekoloji",
    bgColor: "#900C3F",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "22",
    text: "Psikoloji ve Felsefe",
    bgColor: "#DAF7A6",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "23",
    text: "Din ve Spiritüalite",
    bgColor: "#581845",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "24",
    text: "Moda ve Güzellik",
    bgColor: "#C70039",
    textColor: "#FFFFFF",
    imageSource: require("../../../assets/fire.png"),
  },
  {
    id: "25",
    text: "Yerel Kültür ve Gelenekler",
    bgColor: "#FFC300",
    textColor: "#000000",
    imageSource: require("../../../assets/fire.png"),
  },

  // Diğer kartlar...
];

export default function Gruplar({ navigation }) {
  const [progresses, setProgresses] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState([
    "Baslik",
    0.5,
    "Api",
    navigation,
  ]);
  useEffect(() => {
    data.forEach((item) => {
      setProgresses((prev) => ({
        ...prev,
        [item.id]: Math.random(), // Burada progress değerini hesaplayabilirsiniz
      }));
     // console.log(item.text);
    });
  }, []);
  onPressHandlerBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/** MODAL BURADA */}
      <ModalComponent
        baslik={modalInfo[0]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        progress={modalInfo[1]}
        navgation={navigation}
      />
      <View style={styles.innerContaier}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => {
              onPressHandlerBack();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={35}
            />
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
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalInfo([item.text, progresses[item.id], "api"]);
                }}
              >
                <Card
                  id={item.id}
                  text={item.text}
                  bgColor={item.bgColor}
                  imageSource={item.imageSource}
                  progress={progresses[item.id] || 0}
                  textColor={item.textColor}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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
  innerContaier: {
    flex: 1,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    marginBottom: 15,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  card: { flex: 1, margin: 30 },
  flat: { flex: 1, flexWrap: "wrap" },
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
