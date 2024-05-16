import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function BoxRight({ up, down }) {
    return (
        <View>
            <View>
                <Image
                    style={styles.imageOne}
                    source={{ uri: up.product.images[0] }}
                />
                <Text style={styles.text}>{up.product.name}</Text>
            </View>
            <View>
                <Image
                    style={styles.imageOne}
                    source={{ uri: down.product.images[0] }}
                />
                <Text style={styles.text}>{up.product.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageOne: {
        height: verticalScale(150),
        width: scale(130),
        borderRadius: scale(15),
        marginTop: verticalScale(10),
    },
    text: {
        fontSize: scale(15),
        alignSelf: "center",
        color: "#cfcfcf",
        fontWeight: "bold",
    },
});
