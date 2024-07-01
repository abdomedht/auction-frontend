import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function BoxRight({
    up,
    down,
    buttomRightPress,
    topRightPress,
}) {
    if (!up) {
        return (
            <View>
                <Text> route is not exist:BoxRight</Text>
            </View>
        );
    }
    return (
        <View>
            <TouchableOpacity onPress={topRightPress}>
                <Image style={styles.imageOne} source={{ uri: up.images[0] }} />
            </TouchableOpacity>
            <Text style={styles.text}>{up.name}</Text>
            <TouchableOpacity onPress={buttomRightPress}>
                <Image
                    style={styles.imageOne}
                    source={{ uri: down.images[0] }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{down.name}</Text>
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
