import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ProductImages = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/productImages/FB_IMG_1608891063790.jpg")}
        style={styles.bigImage}
      />
      <View style={styles.smallImages}>
        <Image
          source={require("../assets/productImages/small-yellow-car-parking-italy-fiat-double-car-98613603.webp")}
          style={styles.smallImage}
        />
        <Image
          source={require("../assets/productImages/pexels-kateryna-babaieva-3721238.jpg")}
          style={styles.smallImage}
        />
        <Image
          source={require("../assets/productImages/ead0f22381f93753ff5562e6f9691914.jpg")}
          style={styles.smallImage}
        />
      </View>
      <View style={styles.desContainer}>
        <Text style={[styles.productName]}>Fiat 500</Text>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          A car produced by Fiat from 1957 to 1975. The car's designer was Dante
          Giacosa. Introduced to the public as the Nuova 500 in July 1957, the
          car was named after the popular pre-war Fiat 500 Topolino, and was
          positioned as a cheap and practical car for the city. It was only 3
          meters long and was equipped with a small 479 cc two-cylinder
          air-cooled engine
        </Text>
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
