import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const ProductImages = ({ data }) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: data.product.images[0] }}
                style={styles.bigImage}
            />
            <View style={styles.smallImages}>
                <Image
                    source={{ uri: data.product.images[1] }}
                    style={styles.smallImage}
                />
                <Image
                    source={{ uri: data.product.images[2] }}
                    style={styles.smallImage}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingHorizontal: scale(7),
        borderRadius: 15,
        marginTop: verticalScale(40),
        marginBottom: verticalScale(10),
    },
    bigImage: {
        marginTop: verticalScale(6),
        height: verticalScale(280),
        width: scale(200),
        borderRadius: scale(15),
        resizeMode: "stretch",
    },
    smallImages: {
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    smallImage: {
        height: verticalScale(140),
        width: scale(130),
        borderRadius: scale(15),
        marginTop: verticalScale(10),
        resizeMode: "contain",
    },
});
export default ProductImages;
