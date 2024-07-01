import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const ProductDesc = ({ data }) => {
    return (
        <View style={styles.desContainer}>
            <Text style={[styles.productName]}>{data.name}</Text>
            <Text
                style={{
                    paddingHorizontal: scale(20),
                    paddingVertical: verticalScale(7),
                }}>
                {data.description}
            </Text>
            <Text style={styles.endDate}>
                End in {data.endDate.split("T")[0]}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    desContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: scale(15),
        marginBottom: verticalScale(20),
    },
    productName: {
        fontWeight: "bold",
        fontSize: scale(20),
        justifyContent: "flex-start",
        marginLeft: verticalScale(20),
        userSelect: "text",
    },
    endDate: {
        fontWeight: "bold",
        fontSize: scale(14),
        justifyContent: "flex-start",
        marginLeft: verticalScale(20),
        userSelect: "text",
        paddingBottom: verticalScale(7),
    },
});
export default ProductDesc;
