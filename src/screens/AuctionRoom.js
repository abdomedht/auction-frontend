import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProductImages from "../components/ProductImages";
import ProductDesc from "../components/ProductDesc";
import BiderBox from "../components/BiderBox";
const AuctionRoom = ({ route }) => {
    const data = route.params.item;
    console.log(data);
    return (
        <SafeAreaView style={styles.container}>
            {/* <ProductImages data={data} /> */}
            {/* <ProductDesc data={data} /> */}
            {/* <BiderBox /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
});

export default AuctionRoom;
