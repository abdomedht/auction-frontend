import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
console.log("executed Home");

const PRODUCTS = [
  {
    productImage: require("../assets/productImages/FB_IMG_1608891063790.jpg"),
    productName: "Fiat 500",
    currentPriceBid: "$50.000",
  },
  {
    productImage: require("../assets/productImages/5d02da5df552836db894cead8a68f5f3 1.png"),
    productName: "huawei-freebuds-4i",
    currentPriceBid: "$700",
  },
  {
    productImage: require("../assets/productImages/MacBook_Air_Retina_M1_240x160 1.png"),
    productName: "MacBook_Air_Retina",
    currentPriceBid: "$1030",
  },
];
const BIDSNOW = [
  {
    productImage: require("../assets/productImages/944744_1f632825a2484b929c5f22350a4de635_mv2 1.png"),
    productName: "Huawei Matebook x13",
  },
  {
    productImage: require("../assets/productImages/d_cc 1.png"),
    productName: "Alexa Home",
  },
];
// console.log(PRODUCTS.productImage);
// const productImage =
//   "../assets/productImages/5d02da5df552836db894cead8a68f5f3 1.png";
// const productName = "Sony WH/1000XM4";
// const currentPriceBid = "5000";
// const buyNow = "5500";

const image = require("../assets/f036f0084a0a0722dbeaf8f121c5b276.jpg");
const Home = () => {
  const [icon, setIcon] = useState({ name: "heart-outline", color: "grey" });
  const handlePress = () => {
    setIcon((prevProps) => ({
      name: prevProps.name === "heart-outline" ? "heart" : "heart-outline",
      color: prevProps.color === "grey" ? "red" : "grey",
    }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            style={styles.search}
            placeholder="Search products"
            inputMode="text"
          />
          <MaterialCommunityIcons
            name="bell"
            color={"#CFCFCF"}
            size={35}
            style={styles.materialIcon}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/f036f0084a0a0722dbeaf8f121c5b276.jpg")}
            style={{
              borderRadius: 20,
              width: 380,
              height: 150,
            }}
          />
        </View>
      </View>
      <Text style={styles.textHeader}>Bid now</Text>
      <View style={styles.list}>
        <FlatList
          horizontal={true}
          data={PRODUCTS}
          keyExtractor={(item) => item.productName}
          renderItem={({ item }) => (
            <View style={[styles.boxHorizontal]}>
              <Image
                source={item.productImage}
                style={styles.productImageList}
              />
              <Text style={{ fontSize: 12, paddingTop: 10 }}>
                {item.productName}
              </Text>
              <View
                style={{
                  backgroundColor: "#E4E3E3",
                  borderRadius: 30,
                  width: 148,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ paddingTop: 5, fontSize: 14, fontWeight: "bold" }}
                >
                  Highest bid: {item.currentPriceBid}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <Text style={styles.textHeader}>More</Text>
      <View>
        <FlatList
          data={BIDSNOW}
          keyExtractor={(item) => item.productName}
          renderItem={({ item }) => (
            <View style={styles.bidNow}>
              <TouchableOpacity onPress={handlePress}>
                <MaterialCommunityIcons
                  name={icon.name}
                  color={icon.color}
                  size={26}
                  style={{ paddingLeft: "70%" }}
                />
              </TouchableOpacity>
              <Image
                source={item.productImage}
                style={{ flexGrow: 0, maxHeight: 73, maxWidth: 115 }}
              />
              <Text style={{ paddingTop: 10 }}>{item.productName}</Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#F7F6F4",
  },
  search: {
    backgroundColor: "#fff",
    width: 303,
    height: 46,
    left: -10,
    borderRadius: 10,
  },
  materialIcon: {
    right: -10,
  },
  list: {
    flex: 4,
  },
  boxHorizontal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CFCFCF",
    width: 160,
    height: 188,
    marginRight: 10,
    borderRadius: 10,
  },
  slider: {
    flex: 5,
  },
  bidNow: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6DDEF",
    width: 169,
    height: 179,
    marginRight: 10,
    borderRadius: 10,
  },
  imagesBid: {
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: { padding: 10, fontSize: 20, fontWeight: "bold" },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  productImageList: {
    flexGrow: 1,
    maxHeight: 100,
    maxWidth: 140,
    borderRadius: 5,
  },
});
export default Home;
