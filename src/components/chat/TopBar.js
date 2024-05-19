import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function TopBar({ navigation, user }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                    name="arrow-left"
                    color={"#FF5500"}
                    size={scale(22)}
                />
            </TouchableOpacity>
            <View style={styles.userInfo}>
                <Image
                    style={styles.contactImage}
                    source={require("../../assets/user-avatar-icon-512x512-vufpcmdn.png")}
                />
                <Text style={styles.userName}>{user}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginTop: verticalScale(30),
        marginLeft: scale(5),
    },
    backButton: {
        marginTop: verticalScale(8),
    },
    userInfo: {
        flexDirection: "row",
    },
    contactImage: {
        width: scale(40),
        height: verticalScale(40),
        borderRadius: scale(25),
        marginRight: scale(10),
        marginLeft: scale(10),
        marginBottom: scale(8),
    },
    userName: {
        alignSelf: "center",
    },
});
