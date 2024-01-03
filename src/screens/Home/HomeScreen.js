import { View, StyleSheet } from "react-native";
import React from "react";
import KullaniciInfo from "../../components/KullaniciInfo";
import Seriler from "./specialComponents/Seriler";
import { Colors } from "../../constants/colors";
import Kart from "./specialComponents/Kart";
import AnimatedButton from "./specialComponents/kelimeGrupButon";

const HomeScreen = ({ navigation, route }) => {
  const { email } = route.params;
  onPressHandler = () => {
    navigation.navigate("Gruplar");
  };
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <KullaniciInfo
          userName={"Resul"}
          basariSirasi={"Sıralaman: 7"}
          hosgeldin={"Hoş Geldin "}
          mesaj={"Hadi Öğrenmeye Başlayalım"}
        />
        <Seriler seriesName={"7"} userId={email} />
        <Kart />
        <AnimatedButton onPress={onPressHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
  container: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
});
export default HomeScreen;
