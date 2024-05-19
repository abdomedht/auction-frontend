import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scale, verticalScale } from "react-native-size-matters";
export default function SendBid({ socket, buyerId, auctionId }) {
    const [content, setContent] = useState("");
    useEffect(() => {}, [content]);
    return (
        <View style={styles.inputContainer}>
            <View style={styles.input}>
                <TextInput
                    placeholder="Type your bid..."
                    keyboardType="numeric"
                    onChangeText={(price) => {
                        setContent(price);
                    }}
                    value={content}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    if (socket && socket.connected && content.length > 0) {
                        socket.emit("bid", {
                            buyerId: buyerId,
                            auctionId: auctionId,
                            price: +content,
                        });
                        setContent("");
                        Keyboard.dismiss();
                    }
                }}>
                <MaterialCommunityIcons
                    name="gavel"
                    color={"#FF5500"}
                    size={37}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        marginBottom: scale(5),
        marginHorizontal: scale(5),
        alignItems: "center",
        justifyContent: "center",
        marginBottom: verticalScale(15),
    },
    input: {
        borderTopWidth: scale(1),
        backgroundColor: "#fff",
        borderTopColor: "#ccc",
        width: scale(150),
        height: verticalScale(40),
        borderRadius: scale(15),
        padding: scale(10),
    },
    icon: {
        alignSelf: "center",
        marginLeft: scale(5),
    },
});
