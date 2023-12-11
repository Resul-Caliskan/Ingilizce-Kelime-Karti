import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,StatusBar } from 'react-native';
import { Colors } from '../../../constants/colors';

const KullaniciInfo = ({userName}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../../../assets/favicon.png')}
      />
      <Text style={styles.welcomeText}>Hoş geldin {userName},</Text>
      <Text style={styles.continueText}>Hadi öğrenmeye devam edelim</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.navyBlue,
    width:Dimensions.get('window').width-5,
    height: Dimensions.get('window').height / 6,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent:"center",
    alignItems: 'flex-end',
    padding: 20,
    marginTop:StatusBar.currentHeight,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth:2,
    borderColor:"white"
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

export default KullaniciInfo;
