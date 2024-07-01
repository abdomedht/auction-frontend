import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuctionBox from "../components/AuctionBox";
import Pluss from "../components/buttons/Pluss";
import axiosInstance from "../api/axiosConfig";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";

const AuctionList = ({ navigation }) => {
    const [auctionList, setAuction] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "auctions/users?limit=15&page=1"
                );
                if (!response.data.error) {
                    setAuction(response.data.data.auctions);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    useEffect(() => {}, [auctionList]);
    if (!auctionList) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {/* <Pluss handlePress={() => navigation.navigate("AddAuction")} /> */}

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
            <Text style={styles.auctions}>Auctions </Text>
            <FlatList
                data={auctionList}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <AuctionBox
                        openAuction={() => {
                            navigation.navigate("AuctionRoom", item);
                        }}
                        details={item}
                    />
                )}
            />
            <Pluss handlePress={() => navigation.navigate("AddAuction")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    auctions: {
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "center",
        borderRadius: 15,
    },
    createButton: {
        backgroundColor: "#FF5500",
        borderRadius: 25,
        padding: 20,
        // width: 200,
        margin: 10,
        alignSelf: "flex-end",
    },
    createButtonText: {
        alignSelf: "center",
    },
});

export default AuctionList;
