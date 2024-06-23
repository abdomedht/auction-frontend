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
    const [auctions, setAuctions] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "auctions?limit=15&page=1"
                );
                if (!response.data.error) {
                    setAuctions(response.data.data.auctions);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    useEffect(() => {}, [auctions]);
    if (auctions.length < 1) {
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
            <BoxsContainer data={auctions} />
            <FlatList
                horizontal={true}
                data={auctions.slice(3, auctions.length)}
                keyExtractor={(item) => item._id}
                renderItem={(item) => (
                    <BidBox
                        handlePress={() => {
                            navigation.navigate("AuctionRoom", { item });
                        }}
                        allData={item.item}
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
