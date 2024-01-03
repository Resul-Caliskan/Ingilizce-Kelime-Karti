import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "../../../constants/colors";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const chartConfig = {
  // backgroundGradientFrom: Colors.navyBlue,
  backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: "",
  backgroundGradientToOpacity: 0,
  // fillShadowGradient: "rgb(26, 255, 146)", // The color used for the fill shadow gradient
  fillShadowGradientOpacity: 0,
  color: () => Colors.anaEkranYazi,
  labelColor: () => Colors.anaEkranYazi,
  decimalPlaces: 0,
  barPercentage: 1,
  propsForLabels: {
    fontSize: 14,
    letterSpacing: 1,
  },
  propsForDots: {
    // Customization properties for the dots in line chart
    r: "6", // Radius of the dots
    strokeWidth: "3", // Stroke width of the dots
    stroke: "#ffffff", // Stroke color of the dots
  },
  useShadowColorFromDataset: false, // optional
};

const Seriler = ({ seriesName, userId }) => {
  const [Id, setId] = useState("");
  const [data, setData] = useState({
    labels: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0], // Başlangıçta verileri sıfırla
      },
    ],
  });
  const fetchData = async () => {
    try {
      await setId(userId);
      // Firestore'dan belirli bir kullanıcının verilerini çek
      const userDoc = await firebase
        .firestore()
        .collection("users")
        .doc(Id)
        .get();
      if (userDoc.exists) {
        const userData = userDoc.data();

        // userData içindeki weeklyStats'i data state'ine ata
        setData({
          labels: [
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi",
            "Pazar",
          ],
          datasets: [
            {
              data: userData.weeklyStats || [0, 0, 0, 0, 0, 0, 0],
            },
          ],
        });
      } else {
        console.log("Kullanıcı belgesi bulunamadı.");
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error.message);
    }
  };
  useEffect(() => {
    fetchData(); // useEffect içinde fetchData fonksiyonunu çağır
  }, [userId]);
  const handleReload = () => {
    fetchData(); // Reload butonuna basıldığında veriyi tekrar çek
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.reloadButton} onPress={handleReload}>
        <Text style={styles.reloadButtonText}>Reload</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.seriesName}>Serim {seriesName}</Text>
        <Image
          style={styles.avatar}
          source={require("../../../../assets/fire.png")}
        />
        <Text style={styles.seriesName}>gündür devam ediyor</Text>
      </View>
      <LineChart
       style={{position:"absolute",left:0,top:45}}
        data={data}
        width={Dimensions.get("window").width - 70}
        height={Dimensions.get("window").height / 4.4}
        chartConfig={chartConfig}
        verticalLabelRotation={-90}
        withVerticalLines={false}
        fromZero={true}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.element1,
    width: "93%",
    height: Dimensions.get("window").height / 3.2,
    borderRadius: 30,
    padding: 10,
    margin: 15,
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seriesName: {
    color: Colors.anaEkranYazi,
    fontSize: 20,
    marginRight: 0,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  reloadButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: Colors.mediumspringgreen,
    borderRadius: 5,
  },
  reloadButtonText: {
    color: Colors.white,
  },
});
export default Seriler;
