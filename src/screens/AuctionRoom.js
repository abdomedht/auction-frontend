import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Alert,
    Modal,
    TouchableOpacity,
    Text,
} from "react-native";
import ProductImages from "../components/ProductImages";
import ProductDesc from "../components/ProductDesc";
import BiderBox from "../components/BiderBox";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosConfig";
import { io } from "socket.io-client";
import SendBid from "../components/auction/SendBid";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AuctionRoom = ({ route, navigation }) => {
    const data = route.params;
    const sellerId = data.seller._id;
    // console.log(data);
    const { userId, token } = useSelector((state) => state.user);
    const [socket, setSocket] = useState(null);
    const [bids, setBid] = useState(null);
    const [modalVis, setModalVis] = useState(false);

    const createChatRoom = async () => {
        try {
            const response = await axiosInstance.post("chat-rooms", {
                user2Id: sellerId,
            });
            if (!response.data.error) {
                console.log(response.data);
                navigation.naviate("ChatList");
            } else {
                Alert.alert(response.data.error);
                console.log(response.data);
                console.log(`response: ${error.message}`);
            }
        } catch (error) {
            navigation.naviate("ChatList");
        }
    };
    useEffect(() => {
        const socket = io("wss://auction-online-iw6c.onrender.com/auction", {
            query: {
                token: token,
                auctionId: data._id,
            },
        });
        socket.on("connect", () => {
            console.log("connect");
        });
        socket.on("bid", (bid) => {
            setBid((prev) => [bid, ...prev]);
            console.log(bids[0]);
        });
        socket.on("disconnect", () => {
            console.log(" disconnected");
        });
        socket.on("erorr", () => {
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
                    `bids/auctions/${data._id}?limit=15&page=1`
                );
                if (!response.data.error) {
                    setBid(response.data.data.bids);
                    console.log(bids);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error.message);
            }
        })();
    }, []);
    useEffect(() => {}, [bids]);
    if (!bids) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
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
            <ProductImages
                data={data}
                style={styles.ProductImages}
                handlePress={() => navigation.goBack()}
            />
            <ProductDesc data={data} />
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => {
                    setModalVis(true);
                }}>
                <Text style={styles.heighst}> Bid now </Text>
                <MaterialCommunityIcons
                    name="gavel"
                    color={"#FF5500"}
                    size={37}
                    style={styles.icon}
                />
                <Text style={styles.heighst}>
                    {" "}
                    Heighst bid {data.initialPrice}{" "}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={createChatRoom}>
                <Text style={styles.heighst}> Buy now </Text>
                <MaterialCommunityIcons
                    name="chat"
                    color={"#FF5500"}
                    size={37}
                    style={styles.icon}
                />
                <Text style={styles.heighst}>{data.maxPrice}</Text>
            </TouchableOpacity>

            <Modal
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    // margin: 0,
                }}
                visible={modalVis}
                onRequestClose={() => setModalVis(false)}
                animationType="fade">
                <SafeAreaView>
                    <BiderBox bids={bids} />
                    {token && data.status === "running" && (
                        <SendBid
                            socket={socket}
                            buyerId={userId}
                            auctionId={data._id}
                        />
                    )}
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },
    ProductImages: {},
    touchableOpacity: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heighst: {
        backgroundColor: "#E6DDEF",
        fontSize: 18,
        height: 40,
        borderRadius: 5,
        paddingVertical: 6,
    },
});

export default AuctionRoom;
