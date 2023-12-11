// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Colors } from "../../../constants/colors";

// const AnlamliSozler = ({ soz }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.text}>{soz}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: Colors.navyBlue,
//     borderRadius: 15,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   text: {
//     fontFamily: "Cochin", // Burada istediğiniz fontu kullanabilirsiniz
//     fontSize: 18,
//     color: "white",
//   },
// });

// export default AnlamliSozler;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

const AnlamliSozler = ({ soz }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{soz}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: Colors.navyBlue,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    // fontFamily: 'Cochin-Bold', // Burada istediğiniz fontu kullanabilirsiniz
    fontSize: 24,
    color: Colors.navyBlue,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});

export default AnlamliSozler;
