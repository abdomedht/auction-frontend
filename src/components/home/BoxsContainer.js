import React from "react";
import { View, StyleSheet } from "react-native";
import BoxLeft from "./Box.Left";
import BoxRight from "./Box.Right";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function BoxsContainer() {
    return (
        <View style={styles.containerBoxs}>
            <BoxLeft />
            <BoxRight />
        </View>
    );
}

const styles = StyleSheet.create({
    containerBoxs: {
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "space-between",
        paddingHorizontal: scale(10),
    },
});
