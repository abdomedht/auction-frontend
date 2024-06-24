import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
export default function BoxLeft({ dataLeft, leftPress }) {
    return (
        <View style={styles.box}>
            <TouchableOpacity onPress={leftPress}>
                <Image
                    style={styles.image}
                    source={{ uri: dataLeft.product.images[0] }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{dataLeft.product.name}</Text>
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
        resizeMode: "stretch",
    },
    text: {
        fontSize: scale(15),
        alignSelf: "center",
        color: "#cfcfcf",
        fontWeight: "bold",
    },
});
