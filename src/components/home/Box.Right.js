import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function BoxRight({
    up,
    down,
    buttomRightPress,
    topRightPress,
}) {
    if (!up || !up.product) {
        return (
            <View>
                <Text> route is not exist:BoxRight</Text>
            </View>
        );
    }
    return (
        <View>
            <TouchableOpacity onPress={topRightPress}>
                <Image
                    style={styles.imageOne}
                    source={{ uri: up.product.images[0] }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{up.product.name}</Text>
            <TouchableOpacity onPress={buttomRightPress}>
                <Image
                    style={styles.imageOne}
                    source={{ uri: down.product.images[0] }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{down.product.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageOne: {
        height: verticalScale(150),
        width: scale(130),
        borderRadius: scale(20),
        marginTop: verticalScale(10),
        resizeMode: "stretch",
    },
    text: {
        fontSize: scale(15),
        alignSelf: "center",
        color: "#cfcfcf",
        fontWeight: "bold",
    },
});
