/* eslint-disable no-undef */
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => (
   
     <LinearGradient  colors={[ '#4D0A8E','#CE048C']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        start={{ x: 1, y: 0}}
        end={{ x: 0, y: 1 }} >
            <View style={styles.container}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Auction</Text>
            <Text style={styles.bannerText}>GO</Text>
          </View>
          <View style={styles.imageRow}>
            <Image style={styles.image1} source={require('./assets/light.png')} />
            <Image style={styles.image2} source={require('./assets/laptop.png')} />
            <Image style={styles.image3} source={require('./assets/phone.png')} />
            <Image style={styles.image4} source={require('./assets/headphone.png')} />
            <Image style={styles.image5} source={require('./assets/pods.png')} />
            <Image style={styles.image6} source={require('./assets/sp.png')} />
            <Image style={styles.image7} source={require('./assets/remote.png')} />
          </View>
          <View  style={styles.LG}>
          <TouchableOpacity style={styles.buttonRow} >
            <Text style={styles.btnText} >login</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.btnSkip} >skip</Text>
          </TouchableOpacity>
          </View>
        </View>
     </LinearGradient>
   
  );

const styles = StyleSheet.create({
  container: {
   alignItems: "center",
   marginTop: 30,
   
    flex: 1,
  },
  LG:{
position:'absolute'

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
    top: 40,
  },
  image4:{
     top:-200,

     right:-100
  },
  image5:{
    top:-110,
    width: 106,
    height: 85,
    right:-40
 },
 image6:{
  top:-250,

  right:50
},
image7:{
  top:-300,
  width: 146,
  height: 97,
  right:-120
},
 
  buttonRow: {
    width: 250,
    height: 48,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    bottom: -600,
    justifyContent:'center',
    alignItems:'center',
    


  },
  btnText:{
    width: 50,
    height: 20,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    color: '#FF5500',
  },
  btnSkip:{
    width: 50,
height: 30,
fontSize: 14,
fontWeight: "500",
fontStyle: "normal",
lineHeight: 14,
color: "#FFFF",
top:670,
right:-250
  }

});

export default App;
