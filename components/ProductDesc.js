import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductDesc = () => {
  return (
    <View style={styles.desContainer}>
      <Text style={[styles.productName]}>Fiat 500</Text>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        A car produced by Fiat from 1957 to 1975. The car's designer was Dante
        Giacosa. Introduced to the public as the Nuova 500 in July 1957, the car
        was named after the popular pre-war Fiat 500 Topolino, and was
        positioned as a cheap and practical car for the city. It was only 3
        meters long and was equipped with a small 479 cc two-cylinder air-cooled
        engine
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  desContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 20,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "flex-start",
    marginLeft: 20,
    userSelect: "text",
  },
});
export default ProductDesc;
