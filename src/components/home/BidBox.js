import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

export default function BidBox({ handlePress, route }) {
    console.log("from BidBox");
    console.log(route);
    // const data = route.item;
    return (
        <TouchableOpacity style={[styles.boxHorizontal]} onPress={handlePress}>
            <Image
                source={require("../../assets/productImages/FB_IMG_1608891063790.jpg")}
                style={styles.productImageList}
            />
            <Text style={{ fontSize: 12, paddingTop: 10 }}>BidBox</Text>
            <View>
                <Text style={styles.text}>Starts in:{route.startDate}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: verticalScale(5),
        fontSize: scale(14),
        fontWeight: "bold",
    },
    productImageList: {
        flexGrow: 1,
        maxHeight: 100,
        maxWidth: 140,
        borderRadius: 5,
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
