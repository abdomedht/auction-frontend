import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Alert } from "react-native";
import TopBarHome from "../components/home/TopBarHome";
import axiosInstance from "../api/axiosConfig";
import BoxsContainer from "../components/home/BoxsContainer";

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
    return (
        <SafeAreaView style={styles.container}>
            <TopBarHome
                handlePress={() => {
                    navigation.navigate("search");
                }}
            />
            <BoxsContainer />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Home;
