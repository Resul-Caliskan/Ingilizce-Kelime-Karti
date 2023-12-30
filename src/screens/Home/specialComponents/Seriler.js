import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "../../../constants/colors";

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

const Seriler = ({ seriesName }) => {
  const data = {
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
        data: [20, 45, 28, 23, 30, 43, 40],
      },
    ],
  }; // Bu veriyi güncelleyin

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.seriesName}>Serim {seriesName}</Text>
        <Image
          style={styles.avatar}
          source={require("../../../../assets/fire.png")}
        />
        <Text style={styles.seriesName}>gündür devam ediyor</Text>
      </View>
      <LineChart
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
    width: '93%',
    height: Dimensions.get("window").height / 3.2,
    borderRadius: 30,
    padding: 10,
    margin: 15,
    alignItems:"center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seriesName: {
    color:Colors.anaEkranYazi,
    fontSize: 20,
    marginRight: 0,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

export default Seriler;
