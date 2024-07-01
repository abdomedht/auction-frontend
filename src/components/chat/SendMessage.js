import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scale, verticalScale } from "react-native-size-matters";

export default function SendMessage({ socket, sender, chatRoomId }) {
    const [content, setContent] = useState("");
    useEffect(() => {}, [content]);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Type your message..."
                multiline
                onChangeText={(msg) => {
                    setContent(msg);
                }}
                value={content}
            />
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    if (socket && socket.connected && content.length > 0) {
                        socket.emit("message", {
                            sender: sender,
                            chatRoomId: chatRoomId,
                            content: content,
                        });
                        setContent("");
                    }
                }}>
                <MaterialCommunityIcons
                    name="send"
                    color={"#FF5500"}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        padding: scale(10),
    },
    icon: {
        alignSelf: "center",
    },
    textInput: {
        height: verticalScale(40),
        backgroundColor: "#fff",
        borderRadius: scale(15),
        padding: scale(7),
        width: "86%",
    },
});
