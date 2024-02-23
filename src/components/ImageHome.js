import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ImageHome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/f036f0084a0a0722dbeaf8f121c5b276.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 20,
    width: 380,
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
  },
});

export default ImageHome;
