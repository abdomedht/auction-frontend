import React, { useEffect, useState } from "react";
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    View,
    FlatList,
    Text,
} from "react-native";
import { io } from "socket.io-client";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Search = ({ vis, onRequest }) => {
    const [content, setContent] = useState([]);
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const socket = io("wss://auction-online-iw6c.onrender.com/search");
        socket.on("connect", () => {
            console.log("connect to search");
        });
        socket.on("search-result", (res) => {
            setContent(res);
            console.log(content[0]);
        });
        socket.on("disconnect", () => {
            console.log("disconnect from search");
        });
        socket.on("erorr", () => {
            console.log(" erorr");
        });
        setSocket(socket);
        return () => {
            socket.disconnect();
        };
    }, []);
    useEffect(() => {}, [content]);
    const product = (item) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        );
    };
    return (
        <Modal visible={vis} onRequestClose={onRequest} animationType="fade">
            <SafeAreaView style={styles.container}>
                <View style={styles.input}>
                    <TouchableOpacity onPress={onRequest}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            color={"#FF5500"}
                            size={24}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={{ paddingLeft: 5 }}
                        placeholder="search for products..."
                        autoFocus={true}
                        onChangeText={(text) => {
                            socket.emit("search-query", { query: text });
                        }}
                    />
                </View>
                {content.length > 0 ? (
                    <FlatList
                        data={content}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => product(item)}
                    />
                ) : (
                    <View>
                        <Text>no result</Text>
                    </View>
                )}
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: "#00000010",
        paddingHorizontal: 20,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
    },
    res: {
        width: 200,
        height: 70,
        backgroundColor: "red",
    },
});

export default Search;
