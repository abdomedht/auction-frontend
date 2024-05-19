import React from "react";
import { View, StyleSheet } from "react-native";
import BoxLeft from "./Box.Left";
import BoxRight from "./Box.Right";
import { scale, verticalScale } from "react-native-size-matters";

export default function BoxsContainer({ data }) {
    const dataLeft = data[0];
    const dataRightUp = data[1];
    const dataRightDown = data[2];
    return (
        <View style={styles.containerBoxs}>
            <BoxLeft dataLeft={dataLeft} />
            <BoxRight up={dataRightUp} down={dataRightDown} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerBoxs: {
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingHorizontal: scale(7),
        borderRadius: 15,
        marginTop: verticalScale(8),
    },
});
