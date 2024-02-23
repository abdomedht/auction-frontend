import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView, StyleSheet } from "react-native";
import BiderBox from "../components/BiderBox";
import ProductImages from "../components/ProductImages";
import ProductDesc from "../components/ProductDesc";

const AuctionRoom = ({ route }) => {
  const data = route.params;
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <ProductImages data={data} />
      <ProductDesc data={data} />
      <BiderBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default AuctionRoom;
