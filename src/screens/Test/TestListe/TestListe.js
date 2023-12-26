// import { View, Text, StyleSheet } from "react-native";
// import React from "react";
// import { Colors } from "../../../constants/colors";
// import TestImageButton from "./specialComponents/testButton";
// import KullaniciInfo from "../../../components/KullaniciInfo";

// export default function TestListe() {
//   return (
//     <View style={styles.back}>
//       <View style={styles.container}>
//         <KullaniciInfo
//           userName={"Resul"}
//           hosgeldin={"Hoş Geldin "}
//           mesaj={"Testler İle Öğrenmeyi Pekiştirelim"}
//         />
//         <TestImageButton
//           images={[" "," "]}
//           text={"Kelime Eşleştirme Testi"}
//           backgroundColor={Colors.element1}
//         />
//         <TestImageButton
//           images={[
//             require("../../../../assets/icon.png"),
//             require("../../../../assets/fire.png"),
//           ]}
//           text={"Dinleme Testi"}
//           backgroundColor={Colors.element1}
//         />
//         <TestImageButton
//           images={[" "," "]}
//           text={"Kelime Yazma Testi"}
//           backgroundColor={Colors.element1}
//         />
//         <TestImageButton
//           images={[" "," "]}
//           text={"Boşluk Doldurma Testi"}
//           backgroundColor={Colors.element1}
//         />
//         <TestImageButton
//           images={["",""]}
//           text={"Hatalarım"}
//           backgroundColor={Colors.element1}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   back: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: Colors.element1,
//   },
//   container: {
//     flex: 1,
//     borderBottomEndRadius: 30,
//     borderBottomStartRadius: 30,
//     width: "100%",
//     height: "100%",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: Colors.backgroundColor,
//   },
// });

import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/colors";
import TestImageButton from "./specialComponents/testButton";
import KullaniciInfo from "../../../components/KullaniciInfo";

export default function TestListe({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const butonColor = isEnabled ? '#81516B' : Colors.element1;
  const backgroundColor = isEnabled ? '#5D3954' : Colors.backgroundColor;
  const buttonText = isEnabled ? "Rastgele Getir" : "Öğrendiklerimden Getir";
  // swicth olduğunda veri tabanındaki şlemide değiştireceğim
  onPressHandler=(sayfa)=>{
    navigation.navigate(sayfa);
  }
  return (
    <View style={styles.back}>
      <View style={[styles.container,, {backgroundColor: backgroundColor}]}>
        <KullaniciInfo
          userName={"Resul"}
          hosgeldin={"Hoş Geldin "}
          mesaj={"Testler İle Öğrenmeyi Pekiştirelim"}
          backgroundColor={butonColor}
        />
        <View style={styles.switchContainer}>
          
          <Text style={{color:"white",fontSize:16}}>{buttonText}</Text>
          <Switch
            trackColor={{ false: Colors.element3, true: "#ACACE6" }}
            thumbColor={isEnabled ? "#9966CC" : Colors.element2}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TestImageButton
          images={[" "," "]}
          text={"Kelime Eşleştirme Testi"}
          backgroundColor={butonColor}
          onPress={()=>onPressHandler("EslestirmeTest")}
        />
        <TestImageButton
          images={[
            require("../../../../assets/icon.png"),
            require("../../../../assets/fire.png"),
          ]}
          text={"Dinleme Testi"}
          backgroundColor={butonColor}
        />
        <TestImageButton
          images={[" "," "]}
          text={"Kelime Yazma Testi"}
          backgroundColor={butonColor}
        />
        <TestImageButton
          images={[" "," "]}
          text={"Boşluk Doldurma Testi"}
          backgroundColor={butonColor}
        />
        <TestImageButton
          images={["",""]}
          text={"Hatalarım"}
          backgroundColor={butonColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:Colors.element1,
  },
  container: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: 1,
  },
});
