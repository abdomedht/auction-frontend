import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ProductImages = ({ data }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={data.image1}
        // source={require("../assets/productImages/FB_IMG_1608891063790.jpg")}
        style={styles.bigImage}
      />
      <View style={styles.smallImages}>
        <Image source={data.image2} style={styles.smallImage} />
        <Image source={data.image3} style={styles.smallImage} />
        <Image source={data.image4} style={styles.smallImage} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  bigImage: {
    borderRadius: 15,
    alignSelf: "flex-start",
    width: 260,
    height: 260,
  },
  smallImages: {
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  smallImage: {
    borderRadius: 15,
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
});
export default ProductImages;
