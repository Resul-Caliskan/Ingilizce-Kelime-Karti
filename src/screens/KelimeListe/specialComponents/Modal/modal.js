import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { Colors } from "../../../../constants/colors";
import getWordsUntilIndex from "../../../../backEnd/firebaseFunctions/getDataFireBase";

// Kullanım örneği
const collectionName = 'gruplar';
const documentName = 'kelimeler';
const datas= 'Veriler';

const fetchDataAndNavigate = async (collectionName, documentName, datas,group,count,navgation) => {
  try {
    // getWordsUntilIndex işlemini await kullanarak bekletiyoruz
    const kelimeler = await getWordsUntilIndex(collectionName, documentName, datas,group, count);

    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(kelimeler);
    // Bu kısımda Gideceği sayfayla ilgili props'ları vereceğiz
    navgation.navigate("KelimeKartiListe", { kelimeler: kelimeler });
  } catch (error) {
    console.error("Veri alınamadı. Hata:", error);
    // Hata durumunda isteğinizi uygun bir şekilde ele alabilirsiniz
  }
};

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  progress,
  baslik,
  api,
  navgation,
}) => {
  const [count, setCount] = useState(0);

  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
        setCount(0);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.headerView}>
          <Text style={styles.modalHeader}>{baslik}</Text>
          <TouchableOpacity
            style={styles.headerTouch}
            onPress={() => {
              setModalVisible(!modalVisible);
              setCount(0);
            }}
          >
            <Text style={[styles.textStyle, { color: "red", fontSize: 26 }]}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        {/* PROGRESS BAR*/}
        <Progress.Bar
          progress={progress}
          width={180}
          borderWidth={1}
          borderColor="white"
          color="limegreen"
          height={10}
        />

        <Text style={styles.modalText}>
          % {parseInt(progress * 100)} Tamamlandı {"\n"}{" "}
          {parseInt(progress * 100) > 60
            ? "🔥🔥🔥  Aman Aman   🔥🔥🔥"
            : parseInt(progress * 100) > 30
            ? "🔥🔥 Alev Alev  🔥🔥"
            : parseInt(progress * 100) > 10
            ? "🎊  Helal Olsun  🎊"
            : ""}
        </Text>
        <Text style={[styles.modalText, { marginBottom: 2 }]}>
          Getirilecek Kelime Kartı {"\n"}Sayısı:{" "}
        </Text>
        {/** SAYI KUTUSU */}
        <View style={styles.countView}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>{count}</Text>
        </View>
        <Text style={[styles.modalText, { marginBottom: 2, color: "red" }]}>
          {count > 15 ? "Bu kadarı öğrenmek için fazla değil mi ?" : ""}
        </Text>
        {/** ARTI EKSI BUTONLARI */}
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[
              styles.buttons,
              count == 0 ? { backgroundColor: "grey" } : {},
            ]}
            disabled={count == 0 ? true : false}
            onPress={() => {
              setCount(count - 1);
            }}
          >
            <Text style={styles.textStyle}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttons,
              count >= 20 ? { backgroundColor: "grey" } : {},
            ]}
            disabled={count >= 20 ? true : false}
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Text style={styles.textStyle}>+</Text>
          </TouchableOpacity>
        </View>

        {/** KART GETIRME BUTONU */}
        <TouchableOpacity
          style={[
            styles.openButton,
            count == 0 ? { backgroundColor: "grey" } : {},
          ]}
          disabled={count == 0 ? true : false}
          onPress={() => {
            // kelimeler alındıktan sonra diğer işlemleri gerçekleştiriyoruz
            setModalVisible(!modalVisible);
            fetchDataAndNavigate(collectionName, documentName, datas,"EvVeEsyalar",count,navgation);
          }}
        >
          <Text style={styles.textStyle}>Kartları Getir</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.darkGrey,
    borderStartWidth: 3,
    borderTopWidth: 5,
    borderEndWidth: 3,
    borderColor: "limegreen",
    width: "100%",
    height: "70%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerView: {
    padding: 5,
    width: "100%",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: "20%",
    height: "30%",
    backgroundColor: Colors.element2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    margin: 18,
  },
  openButton: {
    backgroundColor: "limegreen",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  modalHeader: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 20,
    color: "white",
    position: "absolute",
  },
  countView: {
    backgroundColor: "lightgray",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "20%",
    height: "20%",
  },
  headerTouch: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 5,
    top: 10,
    padding: 10,
  },
});

export default ModalComponent;
