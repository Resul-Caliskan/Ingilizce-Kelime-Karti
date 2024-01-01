import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import FlipCard from "react-native-flip-card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
import * as Speech from "expo-speech";
const KelimeKarti = ({ ingilizceKelime, okunusu, turkceAnlam }) => {
  const [loading, setLoading] = useState(false);
  const handleAddToList = () => {
    // Listeye ekleme işlevi burada olacak
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
      <FlipCard
        style={styles.card}
        friction={5}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
      >
        {/* Ön yüz */}
        <View style={styles.frontFace}>
          <View style={styles.textView}>
            <Text style={[styles.text, { margin: 15 }]}>
              {ingilizceKelime}
            </Text>
            <Text style={[styles.text, { borderTopWidth: 1 }]}>{okunusu}</Text>

            <TouchableOpacity
          disabled={loading}
          style={styles.voice}
          onPress={() => kelimeyiSeslendir(ingilizceKelime)}
        >
          {loading ? (
            <MaterialCommunityIcons
              name="progress-download"
              color="dodgerblue"
              size={30}
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
              size={30}
            />
          )}
        </TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.turnCard}
              name="cursor-default-click-outline"
              color={Colors.black}
              size={25}
            />
          </View>

          <TouchableOpacity onPress={handleAddToList}>
            <View style={styles.add}>
              <Text style={styles.text2}>Listeme Ekle</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Arka yüz */}
        <View style={styles.backFace}>
          <View style={styles.textView}>
            <Text style={[styles.text, { margin: 15 }]}>{turkceAnlam}</Text>
            <MaterialCommunityIcons
              style={styles.turnCard}
              name="cursor-default-click-outline"
              color={Colors.black}
              size={25}
            />
          </View>
          <TouchableOpacity onPress={handleAddToList}>
            <View style={styles.add}>
              <Text style={styles.text2}>Listeme Ekle</Text>
            </View>
          </TouchableOpacity>
        </View>
      </FlipCard>
    </View>
  );
};

export default KelimeKarti;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
  },
  frontFace: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "honeydew",
    width: width * 0.55,
    height: height * 0.45,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
  backFace: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "honeydew",
    width: width * 0.55,
    height: height * 0.45,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.element1,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 2,
  },
  textView: {
    marginTop: 10,
    borderEndWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 10,
    width: "85%",
    height: "75%",
    backgroundColor: "honeydew",
    alignItems: "center",
    justifyContent: "center",
  },
  voice: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderBottomWidth: 1,
  },
  turnCard: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  add: {
    borderRadius: 10,
    margin: 15,
    backgroundColor: Colors.element2,
    padding: 8,
  },
  text2: { fontSize: 16, fontWeight: "500" },
});
