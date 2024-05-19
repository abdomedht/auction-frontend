import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
export default function Messages({ msg }) {
    const { userId } = useSelector((state) => state.user);
    return (
        <View style={msg.sender._id === userId ? styles.view : styles.xView}>
            <Text style={styles.text}>{msg.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    xView: {
        backgroundColor: "#fff",
        width: scale(150),
        minHeight: verticalScale(25),
        marginLeft: scale(7),
        marginBottom: scale(7),
        borderRadius: scale(10),
        flexDirection: "row",
        borderColor: "#000",
        borderWidth: scale(1),
        marginTop: verticalScale(10),
    },
    view: {
        backgroundColor: "#fff",
        width: scale(150),
        minHeight: verticalScale(25),
        marginLeft: scale(7),
        marginBottom: scale(7),
        borderRadius: scale(10),
        flexDirection: "row",
        borderColor: "#000",
        borderWidth: scale(1),
        alignSelf: "flex-end",
        marginTop: verticalScale(10),
    },

    text: {
        fontSize: scale(15),
        alignSelf: "center",
        marginRight: scale(15),
        marginLeft: scale(5),
    },
    time: {
        fontSize: scale(10),
        alignSelf: "flex-end",
        padding: scale(1),
    },
    contactImage: {
        width: scale(20),
        height: verticalScale(20),
        borderRadius: scale(25),
        marginRight: scale(10),
        marginLeft: scale(3),
        marginBottom: scale(3),
    },
});
