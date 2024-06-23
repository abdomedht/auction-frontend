import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    SafeAreaView,
    Alert,
} from "react-native";
import axiosInstance from "../api/axiosConfig";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";
const ContactItem = ({ contact, handlePress }) => (
    <TouchableOpacity style={styles.contactItem} onPress={handlePress}>
        <Image
            source={require("../assets/user-avatar-icon-512x512-vufpcmdn.png")}
            style={styles.contactImage}
        />
        <View style={styles.contactDetails}>
            <Text style={styles.contactName}>
                {contact.user2.firstName + " " + contact.user2.lastName}
            </Text>
        </View>
    </TouchableOpacity>
);

const ChatList = ({ navigation }) => {
    const [chatRooms, setChat] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "chat-rooms?limit=15&page=1"
                );
                if (!response.data.error) {
                    setChat(response.data.data.chatRooms);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);
    useEffect(() => {}, [chatRooms]);
    if (chatRooms.length < 1) {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F6F4" }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Contacts</Text>
                </View>
                <FlatList
                    data={chatRooms}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ContactItem
                            contact={item}
                            handlePress={() => {
                                navigation.navigate("Chat", item);
                            }}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        // backgroundColor: "#E6DDEF",
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    contactDetails: {
        flex: 1,
    },
    contactName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    contactPhoneNumber: {
        color: "#666",
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingTop: 60,
    },
});

export default ChatList;
