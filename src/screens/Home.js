import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Alert, FlatList } from "react-native";
import TopBarHome from "../components/home/TopBarHome";
import axiosInstance from "../api/axiosConfig";
import BoxsContainer from "../components/home/BoxsContainer";
import BidBox from "../components/home/BidBox";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";
import Search from "./Search.Modal";

const Home = ({ navigation }) => {
    const [modalVis, setModalVis] = useState(false);
    const [runningAuctions, setRunningAuctions] = useState([]);
    const [pendingAuctions, setPendinggAuctions] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "auctions?status=running"
                );
                if (!response.data.error) {
                    setRunningAuctions(response.data.data.auctions);
                    // console.log(response.data.data);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "auctions?status=pending"
                );
                if (!response.data.error) {
                    setPendinggAuctions(response.data.data.auctions);
                    // console.log(pendingAuctions.length);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    // useEffect(() => {}, [runningAuctions]);
    if (runningAuctions.length < 1) {
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
            <TopBarHome
                handlePress={() => {
                    setModalVis(true);
                }}
            />
            <Search
                vis={modalVis}
                onRequest={() => {
                    setModalVis(false);
                }}
            />
            <BoxsContainer
                data={runningAuctions}
                leftPress={() => {
                    navigation.navigate("AuctionRoom", runningAuctions[0]);
                }}
                topRightPress={() => {
                    navigation.navigate("AuctionRoom", runningAuctions[1]);
                }}
                buttomRightPress={() => {
                    navigation.navigate("AuctionRoom", runningAuctions[2]);
                }}
            />
            <FlatList
                horizontal={true}
                data={pendingAuctions}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <BidBox
                        handlePress={() => {
                            navigation.navigate("AuctionRoom", item);
                        }}
                        allData={item}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Home;
