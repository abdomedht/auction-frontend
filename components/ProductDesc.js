import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductDesc = ({ data }) => {
  return (
    <View style={styles.desContainer}>
      <Text style={[styles.productName]}>{data.title}</Text>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        {data.desc}
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
