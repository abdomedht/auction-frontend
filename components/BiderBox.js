import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const BIDERS = [
  {
    bider: "EL beloo",
    bid: "10000",
  },
  {
    bider: "Sawy",
    bid: "6030",
  },
  {
    bider: "Asraf",
    bid: "6000",
  },
  {
    bider: "Abdo",
    bid: "5040",
  },
  {
    bider: "Madd",
    bid: "7123",
  },
  {
    bider: "Fer3on",
    bid: "8123",
  },
];
BIDERS.sort((a, b) => b.bid - a.bid);

// console.log(BIDERS);
const BiderBox = () => {
  return (
    <FlatList
      data={BIDERS}
      keyExtractor={(item) => item.bid}
      renderItem={({ item }) => (
        <View style={styles.biderBox}>
          <Text style={styles.textBid}>{item.bider}</Text>
          <Text style={styles.textBid}>${item.bid}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  biderBox: {
    backgroundColor: "#E6DDEF",
    padding: 20,
    marginBottom: 10,
    borderRadius: 15,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBid: {
    fontWeight: "bold",
  },
});

export default BiderBox;
