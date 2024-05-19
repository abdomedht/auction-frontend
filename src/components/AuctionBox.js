import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const AuctionBox = ({ openAuction, details }) => {
    return (
        <TouchableOpacity onPress={openAuction}>
            <View style={styles.boxAuction}>
                <Text style={styles.textBid}>{details.product.name}</Text>
                <Text style={styles.textBid}>{details.product.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxAuction: {
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
export default AuctionBox;
