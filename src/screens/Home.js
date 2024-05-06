import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, SafeAreaView } from "react-native";
import TopBarHome from "../components/TopBarHome";
import ListHorizBid from "../components/ListHorizBid";
import ImageHome from "../components/ImageHome";
import BoxHorizComing from "../components/BoxHorizComing";
console.log("executed Home");
const PRODUCTS = [
<<<<<<< HEAD
  {
    id: 0,
    productImage: require("../assets/productImages/FB_IMG_1608891063790.jpg"),
    productName: "Fiat 500",
    currentPriceBid: "$50.000",
  },
  {
    id: 1,
    productImage: require("../assets/productImages/5d02da5df552836db894cead8a68f5f3 1.png"),
    productName: "huawei-freebuds-4i",
    currentPriceBid: "$700",
  },
  {
    id: 2,
    productImage: require("../assets/productImages/MacBook_Air_Retina_M1_240x160 1.png"),
    productName: "MacBook_Air_Retina",
    currentPriceBid: "$1030",
  },
];
const COMING = [
  {
    id: 0,
    productImage: require("../assets/productImages/944744_1f632825a2484b929c5f22350a4de635_mv2 1.png"),
    productName: "Huawei Matebook x13",
    startIn: "12Feb 09:00am",
  },
  {
    id: 1,
    productImage: require("../assets/productImages/d_cc 1.png"),
    productName: "Alexa Home",
    startIn: "6March 01:00pm",
  },
  {
    id: 2,
    productImage: require("../assets/productImages/au-galaxy-buds-live-r180-sm-r180nzkaasa-casefrontopencombinationmysticblack-275665649 1.png"),
    productName: "galaxy buds",
    startIn: "11Dec 11:00am",
  },
=======
    {
        id: 0,
        productImage: require("../../assets/productImages/FB_IMG_1608891063790.jpg"),
        productName: "Fiat 500",
        currentPriceBid: "$50.000",
    },
    {
        id: 1,
        productImage: require("../../assets/productImages/5d02da5df552836db894cead8a68f5f3 1.png"),
        productName: "huawei-freebuds-4i",
        currentPriceBid: "$700",
    },
    {
        id: 2,
        productImage: require("../../assets/productImages/MacBook_Air_Retina_M1_240x160 1.png"),
        productName: "MacBook_Air_Retina",
        currentPriceBid: "$1030",
    },
];
const COMING = [
    {
        id: 0,
        productImage: require("../../assets/productImages/944744_1f632825a2484b929c5f22350a4de635_mv2 1.png"),
        productName: "Huawei Matebook x13",
        startIn: "12Feb 09:00am",
    },
    {
        id: 1,
        productImage: require("../../assets/productImages/d_cc 1.png"),
        productName: "Alexa Home",
        startIn: "6March 01:00pm",
    },
    {
        id: 2,
        productImage: require("../../assets/productImages/au-galaxy-buds-live-r180-sm-r180nzkaasa-casefrontopencombinationmysticblack-275665649 1.png"),
        productName: "galaxy buds",
        startIn: "11Dec 11:00am",
    },
>>>>>>> c79958e235edd9aed3176c79fd138325e6dca064
];

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHome
                handlePress={() => {
                    navigation.navigate("search");
                }}
            />
            <ImageHome />
            <ListHorizBid
                PRODUCTS={PRODUCTS}
                handlePress={() => {
                    console.log("imagine auction bid ");
                    // navigation.navigate("AuctionRoom");
                }}
            />
            <BoxHorizComing
                PRODUCTS={COMING}
                handlePress={() => {
                    console.log("imagine auction coming");
                    // navigation.navigate("AuctionRoom");
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#cfcfcf",
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
});
export default Home;
