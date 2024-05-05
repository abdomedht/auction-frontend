/* eslint-disable no-undef */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const HomeLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/productImages/Onboarding3.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* login btn nav to login form */}
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => {
            navigation.navigate("LoginForm");
          }}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        {/* skip btn nav to home tabs */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeTabs");
          }}
        >
          <Text style={styles.btnSkip}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonRow: {
    width: 250,
    height: 48,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "10%",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 18,
    color: "#FF5500",
  },
  btnSkip: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#FFFF",
    padding: 10,
    alignSelf: "flex-end",
  },
});

export default HomeLogin;
