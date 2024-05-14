import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const ProductImages = ({ data }) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={data.product.images[0]} style={styles.bigImage} />
            <View style={styles.smallImages}>
                <Image
                    source={data.product.images[1]}
                    style={styles.smallImage}
                />
                <Image
                    source={data.product.images[2]}
                    style={styles.smallImage}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        marginBottom: verticalScale(10),
    },
    bigImage: {
        borderRadius: scale(15),
        alignSelf: "flex-start",
        width: 260,
        height: 260,
    },
    smallImages: {
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    smallImage: {
        borderRadius: 15,
        width: 80,
        height: 80,
        resizeMode: "cover",
    },
});
export default ProductImages;
