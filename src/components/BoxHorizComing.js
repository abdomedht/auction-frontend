import React from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
} from "react-native";

const BoxHorizComing = ({ PRODUCTS, handlePress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming</Text>
            <FlatList
                horizontal={true}
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.boxHorizontal]}
                        onPress={handlePress}>
                        <Image
                            source={item.productImage}
                            style={styles.productImageList}
                        />
                        <Text style={{ fontSize: 12, paddingTop: 10 }}>
                            {item.productName}
                        </Text>
                        <View>
                            <Text
                                style={{
                                    paddingTop: 5,
                                    fontSize: 14,
                                    fontWeight: "bold",
                                }}>
                                Starts in: {item.startIn}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    text: {
        fontWeight: "800",
        fontSize: 20,
        paddingVertical: 10,
    },
    productImageList: {
        flexGrow: 1,
        maxHeight: 100,
        maxWidth: 140,
        borderRadius: 5,
    },
    boxHorizontal: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6DDEF",
        width: 160,
        height: 188,
        marginRight: 10,
        borderRadius: 10,
    },
});
export default BoxHorizComing;
