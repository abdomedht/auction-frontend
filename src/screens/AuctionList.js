import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuctionBox from "../components/AuctionBox";
import Pluss from "../components/buttons/Pluss";

const AuctionList = ({ navigation }) => {
    const [auctionList, setAuction] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(
                    "auctions/user?limit=15&page=1"
                );
                if (!response.data.error) {
                    setAuction(response.data.data.auctions);
                    console.log(response.data.data.auctions);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    useEffect(() => {}, [auctionList]);
    if (auctionList.length < 1) {
        return (
            <View>
                <Text>loading</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.auctions}>Auctions </Text>
            <FlatList
                data={auctionList}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <AuctionBox
                        openAuction={() => {
                            navigation.navigate("AuctionRoom", { item });
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
