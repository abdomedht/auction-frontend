import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
export default function BoxLeft() {
    return (
        <View style={styles.box}>
            <Image
                style={styles.image}
                source={require("../../assets/productImages/FB_IMG_1608891063790.jpg")}
            />
            <Text style={styles.text}>prodduct name</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
    },
    image: {
        marginTop: verticalScale(6),
        height: verticalScale(320),
        width: scale(200),
        borderRadius: scale(15),
    },
    text: {
        fontSize: scale(15),
        alignSelf: "center",
        color: "#cfcfcf",
        fontWeight: "bold",
    },
});
