import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

export default function BidBox({ allData }) {
    const start = allData.startDate.split("T")[0];
    return (
        <TouchableOpacity style={[styles.boxHorizontal]}>
            <Image
                style={styles.productImageList}
                source={{
                    uri: allData.product.images[0],
                }}
            />
            <Text style={{ fontSize: scale(14), paddingTop: scale(10) }}>
                {allData.product.name}
            </Text>
            <View>
                <Text style={styles.text}>Starts in: {start}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: verticalScale(5),
        fontSize: scale(12),
        fontWeight: "100",
    },
    productImageList: {
        marginTop: verticalScale(6),
        minHeight: verticalScale(120),
        minWidth: scale(140),
        borderRadius: scale(15),
    },
    boxHorizontal: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6DDEF",
        width: scale(160),
        height: verticalScale(188),
        marginRight: scale(10),
        marginTop: scale(8),
        borderRadius: scale(10),
    },
});
