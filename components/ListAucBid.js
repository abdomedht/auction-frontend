import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ListAucBid = ({ openAuction, details }) => {
  return (
    <TouchableOpacity onPress={openAuction}>
      <View style={styles.boxAuction}>
        <Text style={styles.textBid}>{details.title}</Text>
        <Text style={styles.textBid}>{details.currentPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxAuction: {
    // backgroundColor: "#E6DDEF",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textBid: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default ListAucBid;
