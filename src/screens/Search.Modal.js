import React from "react";
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { View } from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Search = ({ vis, onRequest }) => {
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
                    />
                </View>
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
});

export default Search;
