/* eslint-disable no-undef */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Home = () => (
   
     
            <View style={styles.container}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>auction</Text>
            <Text style={styles.bannerText}>CO</Text>
          </View>
          <View style={styles.imageRow}>
            <Image style={styles.image1} source={require('../assets/light.png')} />
            <Image style={styles.image2} source={require('../assets/laptop.png')} />
            <Image style={styles.image3} source={require('../assets/phone.png')} />
          </View>
        </View>
     
   
  );

const styles = StyleSheet.create({
  container: {
   alignItems: "center",
   marginTop: 30,
   backgroundColor:"#CE048C",
    flex: 1,
  },
  banner: {
      position: 'absolute',
      flex:1,
      
    top: 30,
  },
  bannerText: {
    color: '#F4BD46',
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 57.502, 
  },
  image1: {
    width: 162,
    height: 162,
    flexShrink: 0,
    left: 54,
    top: 100,
  },
  image2: {
    width: 219,
    height: 139,
    transform: [{ rotate: '5.332deg' }],
    flexShrink: 0,
    right: 70,
    top: 120,
  },
  image3: {
    width: 198,
    height: 165,
    flexShrink: 0,
    left: 54,
    top: 50,
  },
 
 
  buttonRow: {
    width: 292,
  height: 48,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    bottom: 0,
  },

});

export default Home;
