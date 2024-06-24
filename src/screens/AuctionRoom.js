import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Alert } from "react-native";
import ProductImages from "../components/ProductImages";
import ProductDesc from "../components/ProductDesc";
import BiderBox from "../components/BiderBox";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosConfig";
import { io } from "socket.io-client";
import SendBid from "../components/auction/SendBid";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";

const AuctionRoom = ({ route, navigation }) => {
    const data = route.params;
    const { userId, token } = useSelector((state) => state.user);
    const [socket, setSocket] = useState(null);
    const [bids, setBid] = useState(null);

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
            <BiderBox bids={bids} />
            {token && data.status === "running" && (
                <SendBid
                    socket={socket}
                    buyerId={userId}
                    auctionId={data._id}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    ProductImages: {},
});

export default AuctionRoom;
