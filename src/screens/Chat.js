import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Alert,
    View,
    Text,
    FlatList,
} from "react-native";
import SendMessage from "../components/chat/SendMessage";
import TopBar from "../components/chat/TopBar";
import Messages from "../components/chat/Messages";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosConfig";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";

export default function Chat({ route }) {
    const roomId = route.params._id;
    const receiverName =
        route.params.user2.firstName + " " + route.params.user2.lastName;
    const { token, userId } = useSelector((state) => state.user);
    const [messages, setMessage] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = io("wss://auction-online-iw6c.onrender.com/chat", {
            query: {
                token: token,
                chatRoomId: roomId,
            },
        });
        socket.on("connect", () => {
            // the current user state is online
            console.log("connect");
        });
        socket.on("message", (msg) => {
            setMessage((prev) => [...prev, msg]);
        });
        socket.on("disconnect", () => {
            // the current user state is online
            console.log(" disconnected");
        });
        socket.on("erorr", () => {
            // failed connect with server
            console.log(" erorr");
        });
        setSocket(socket);
        return () => {
            socket.disconnect();
        };
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    `messages/chat-rooms/${roomId}?limit=15&page=1`
                );
                if (!response.data.error) {
                    setMessage(response.data.data.messages);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);
    useEffect(() => {}, [messages]);
    if (!messages) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Animatable.View
                    animation="rotate"
                    iterationCount="infinite"
                    duration={800}>
                    <ActivityIndicator size="large" color="#FF5500" />
                </Animatable.View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <TopBar style={styles.top} user={receiverName} />
            <ImageBackground
                style={styles.image}
                source={require("../assets/official-whatsapp-background-image.png")}
                resizeMode="cover">
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item._id}
                    renderItem={(item) => <Messages msg={item.item} />}
                />
            </ImageBackground>
            <SendMessage
                style={styles.input}
                socket={socket}
                sender={userId}
                chatRoomId={roomId}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        justifyContent: "flex-start",
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
    },
    sendButton: {
        backgroundColor: "#FF5500",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    sendButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
