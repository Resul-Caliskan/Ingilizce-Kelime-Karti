import React from "react";
import { View, Text } from "react-native";
// import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

// const firebaseConfig = {
//   apiKey: "<API_KEY>",
//   authDomain: "<AUTH_DOMAIN>",
//   databaseURL: "<DATABASE_URL>",
//   projectId: "<PROJECT_ID>",
//   storageBucket: "<STORAGE_BUCKET>",
//   messagingSenderId: "<MESSAGING_SENDER_ID>",
//   appId: "<APP_ID>",
// };

// firebase.initializeApp(firebaseConfig);
// function saveDataToFirebase(data) {
//   firebase
//     .database()
//     .ref("adminPanel/")
//     .push(data)
//     .then((data) => {
//       console.log("data ", data);
//     })
//     .catch((error) => {
//       console.log("error ", error);
//     });
// }
const AdminPanel = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={saveDataToFirebase(isDunyasi)}>
        <Text>Admin Panel Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminPanel;
