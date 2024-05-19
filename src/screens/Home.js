import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    Alert,
    FlatList,
    View,
    Text,
} from "react-native";
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
            <View>
                <Text>loading</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHome
                handlePress={() => {
                    navigation.navigate("search");
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
