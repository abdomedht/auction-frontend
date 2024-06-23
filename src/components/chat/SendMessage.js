import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scale, verticalScale } from "react-native-size-matters";

export default function SendMessage({ socket, sender, chatRoomId }) {
    const [content, setContent] = useState("");
    useEffect(() => {}, [content]);
    return (
        <SafeAreaView style={styles.input}>
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
                    size={28}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: scale(10),
        marginHorizontal: scale(10),
        borderTopWidth: scale(1),
        backgroundColor: "#fff",
        borderTopColor: "#ccc",
        width: "100%",
        height: verticalScale(60),
        borderRadius: scale(15),
        padding: scale(10),
    },
    icon: {
        // justifyContent: "flex-end",
        // marginLeft: scale(5),
    },
    textInput: {
        height: verticalScale(50),
    },
});
