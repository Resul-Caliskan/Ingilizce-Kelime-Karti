// import { View, StyleSheet } from "react-native";
// import React, { useState, useEffect } from "react";
// import KullaniciInfo from "../../components/KullaniciInfo";
// import Seriler from "./specialComponents/Seriler";
// import { Colors } from "../../constants/colors";
// import Kart from "./specialComponents/Kart";
// import AnimatedButton from "./specialComponents/kelimeGrupButon";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// const HomeScreen = ({ navigation, route }) => {
//   const { email } = route.params;
//   const [name, setName] = useState("");
//   const [score, setScore] = useState(0);
//   const fetchData = async () => {
//     try {
//       // Firestore'dan belirli bir kullanıcının verilerini çek
//       const userDoc = await firebase
//         .firestore()
//         .collection("users")
//         .doc(route.params.email)
//         .get();
//       if (userDoc.exists) {
//         const userData = userDoc.data();

//         setScore(userData.score || 0);
//         setName(userData.name || "");
//       } else {
//         console.log("Kullanıcı belgesi bulunamadı.");
//       }
//     } catch (error) {
//       console.error("Veri çekme hatası:", error.message);
//     }
//   };
//   useEffect(() => {
//     fetchData(); // useEffect içinde fetchData fonksiyonunu çağır
//   }, [email]);
//   onPressHandler = () => {
//     navigation.navigate("Gruplar");
//   };
//   return (
//     <View style={styles.back}>
//       <View style={styles.container}>
//         <KullaniciInfo
//           userName={name}
//           basariSirasi={"Toplam Puanın: " + score}
//           hosgeldin={"Hoş Geldin "}
//           mesaj={"Hadi Öğrenmeye Başlayalım"}
//         />
//         <Seriler seriesName={"7"} userId={email} />
//         <Kart />
//         <AnimatedButton onPress={onPressHandler} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   back: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: Colors.element1,
//   },
//   container: {
//     flex: 1,
//     borderBottomEndRadius: 30,
//     borderBottomStartRadius: 30,
//     width: "100%",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: Colors.backgroundColor,
//   },
// });
// export default HomeScreen;
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import KullaniciInfo from "../../components/KullaniciInfo";
import Seriler from "./specialComponents/Seriler";
import { Colors } from "../../constants/colors";
import Kart from "./specialComponents/Kart";
import AnimatedButton from "./specialComponents/kelimeGrupButon";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const HomeScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState(route.params.email);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const userDoc = await firebase
        .firestore()
        .collection("users")
        .doc(route.params.email)
        .get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        setScore(userData.score || 0);
        setName(userData.name || "");
      } else {
        console.log("Kullanıcı belgesi bulunamadı.");
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error.message);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setEmail(route.params.email);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, [email]);

  const onPressHandler = () => {
    navigation.navigate("Gruplar");
  };

  return (
    <ScrollView
      style={styles.back}
      contentContainerStyle={styles.container} // contentContainerStyle prop'u kullanıldı
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <KullaniciInfo
        userName={name}
        basariSirasi={"Toplam Puanın: " + score}
        hosgeldin={"Hoş Geldin "}
        mesaj={"Hadi Öğrenmeye Başlayalım"}
      />
      <Seriler seriesName={"7"} userId={email} />
      <Kart />
      <AnimatedButton onPress={onPressHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
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
