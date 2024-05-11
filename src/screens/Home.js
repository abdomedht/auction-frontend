import React, { useState } from "react";
import Pluss from "../components/Pluss";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import TopBarHome from "../components/TopBarHome";
import ListHorizBid from "../components/ListHorizBid";
import ImageHome from "../components/ImageHome";
import BoxHorizComing from "../components/BoxHorizComing";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterReducer";
console.log("executed Home");
const PRODUCTS = [
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
];

const Home = ({ navigation }) => {
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHome />
            <ImageHome />
            <Text>{value}</Text>
            <ListHorizBid
                PRODUCTS={PRODUCTS}
                handlePress={() => {
                    dispatch(increment());
                }}
            />
            {/* <Pluss handlePress={console.log("give me more")} /> */}
            <BoxHorizComing
                PRODUCTS={COMING}
                handlePress={() => {
                    dispatch(decrement());
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
