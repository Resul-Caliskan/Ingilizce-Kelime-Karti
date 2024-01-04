import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Colors } from "../../constants/colors";
import KullaniciInfo from "../../components/KullaniciInfo";

const LeaderboardScreen = ({ route }) => {
  const { email } = route.params;
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [sira, setSira] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const snapshot = await firebase
        .firestore()
        .collection("users")
        .orderBy("score", "desc")
        .get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.id,
        name: doc.data().name,
        score: doc.data().score,
      }));
      setLeaderboardData(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Parametre olarak gelen email ile eşleşen kişinin bilgilerini güncelle
    const user = leaderboardData.find((item) => item.email === email);
    if (user) {
      setName(user.name);
      setScore(user.score);
      setSira(leaderboardData.indexOf(user) + 1);
    }
  }, [leaderboardData, email]);

  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <KullaniciInfo
          hosgeldin={"Liderlik Tablosu"}
          mesaj={"Sevgili " + name + " Puanın: " + score}
          basariSirasi={"Sırlaman: " + sira}
        />
        <FlatList
          data={leaderboardData}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.item,
                {
                  backgroundColor:
                    item.email === email ? Colors.limeGreen : Colors.element1,
                },
              ]}
            >
              <Text style={styles.itemText}>
                {index + 1 === 1 ? "👑 " : index + 1 + "."}
                {item.name}
              </Text>
              <Text style={styles.itemText}>Puan: {item.score}</Text>
            </View>
          )}
        />
        {/* Parametre olarak gelen e-posta ile eşleşen kişinin bilgilerini göster
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>{name}</Text>
          <Text style={styles.userInfoText}>Score: {score}</Text>
          <Text style={styles.userInfoText}>Sıra: {sira}</Text>
        </View> */}
      </View>
    </View>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.white,
  },
  item: {
    width: "80%",
    margin: 16,
    padding: 10,
    borderRadius: 8,
  },
  itemText: { fontSize: 18 },
  userInfo: {
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.limeGreen, // ya da istediğiniz renk
  },
  userInfoText: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default LeaderboardScreen;
