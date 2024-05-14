import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Alert, FlatList } from "react-native";
import TopBarHome from "../components/home/TopBarHome";
import axiosInstance from "../api/axiosConfig";
import BoxsContainer from "../components/home/BoxsContainer";
import BidBox from "../components/home/BidBox";
console.log("executed Home");

const Home = ({ navigation }) => {
    const [auctions, setAuctions] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("auctions");
                if (!response.data.error) {
                    setAuctions(response.data.data.auctions);
                    console.log(auctions[0]);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);

    console.log("from home");
    console.log(auctions);
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHome
                handlePress={() => {
                    navigation.navigate("search");
                }}
            />
            <BoxsContainer />
            <FlatList
                horizontal={true}
                data={auctions}
                keyExtractor={(item) => item._id}
                renderItem={(item) => (
                    <BidBox
                        handlePress={() => {
                            navigation.navigate("AuctionRoom", item);
                            // console.log(item.item._id);
                        }}
                        route={item.item}
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
