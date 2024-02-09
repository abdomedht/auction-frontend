import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView, StyleSheet } from "react-native";
import BiderBox from "../components/BiderBox";
import ProductImages from "../components/ProductImages";
import ProductDesc from "../components/ProductDesc";

const AuctionRoom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductImages />
      <ProductDesc />
      <BiderBox />
    </SafeAreaView>
  );
};

/* <Text style={[styles.text]}>Starts: 12Feb</Text> */

/* <MaterialCommunityIcons name="date" color={grey} size={26} /> */

/* <Text style={[styles.text]}>End Date : 13Feb,07:00 PM</Text> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default AuctionRoom;
