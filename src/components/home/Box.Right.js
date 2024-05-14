import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function BoxRight() {
    return (
        <View>
            <View>
                <Image
                    style={styles.imageOne}
                    source={require("../../assets/productImages/pexels-kenejd-spahiu-10914594.jpg")}
                />
                <Text style={styles.text}>product name</Text>
            </View>
            <View>
                <Image
                    style={styles.imageOne}
                    source={require("../../assets/productImages/mac/1_rombicamybookeclipcepclt-00304.jpg")}
                />
                <Text style={styles.text}>product name</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        // backgroundColor: "blue",
    },
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
