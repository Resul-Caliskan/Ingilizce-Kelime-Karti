import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "../../../constants/colors";

const chartConfig = {
  backgroundGradientFrom: Colors.navyBlue,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Colors.navyBlue,
  backgroundGradientToOpacity: 0,
  fillShadowGradient: "rgb(26, 255, 146)", // The color used for the fill shadow gradient
  fillShadowGradientOpacity: 0.8,
  color: () => `rgb(26, 255, 146)`,
  labelColor: () => `white`,
  decimalPlaces: 0,
  barPercentage: 1,
  propsForLabels: {
    fontSize: 14,
    letterSpacing: 1,
  },
  propsForBackgroundLines: {
    strokeDasharray: "5,5", // Pattern of dashes and gaps used to paint the lines (e.g., '5,5')
    strokeWidth: 0.5, // Width of the lines
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
        data: [20, 45, 28, 23, 30, 43, 12],
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
        height={Dimensions.get("window").height / 4.9}
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
    backgroundColor: Colors.navyBlue,
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").height / 3.5,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    alignItems:"flex-start"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seriesName: {
    color: "#fff",
    fontSize: 20,
    marginRight: 0,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

export default Seriler;