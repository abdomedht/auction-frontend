import React from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProductImages = ({ data, handlePress }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <MaterialCommunityIcons
                    name="arrow-left-bold-circle"
                    color={"#FF5500"}
                    size={scale(30)}
                />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: data.images[0] }}
                    style={styles.bigImage}
                />
                <View style={styles.smallImages}>
                    <Image
                        source={{ uri: data.images[1] }}
                        style={styles.smallImage}
                    />
                    <Image
                        source={{ uri: data.images[2] }}
                        style={styles.smallImage}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingHorizontal: scale(7),
        borderRadius: scale(15),
        marginBottom: verticalScale(10),
        height: verticalScale(300),
        padding: scale(10),
    },
    bigImage: {
        height: verticalScale(280),
        width: scale(200),
        borderRadius: scale(15),
        resizeMode: "stretch",
    },
    smallImages: {
        justifyContent: "space-between",
    },
    smallImage: {
        height: verticalScale(140),
        width: scale(130),
        borderRadius: scale(15),
        resizeMode: "stretch",
    },
    btn: {
        marginTop: verticalScale(30),
        width: scale(35),
        height: verticalScale(30),
        padding: scale(2),
        marginLeft: scale(5),
        marginBottom: verticalScale(5),
    },
});
export default ProductImages;
