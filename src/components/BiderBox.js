import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const BiderBox = ({ bids }) => {
    return (
        <FlatList
            data={bids}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View style={styles.biderBox}>
                    <Text style={styles.textBid}>
                        {item.buyer.firstName + " " + item.buyer.lastName}
                    </Text>
                    <Text style={styles.textBid}>{item.price} EGP</Text>
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
