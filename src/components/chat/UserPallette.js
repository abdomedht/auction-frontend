import React from "react";
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";

export default function UserPallette({ route, openChat }) {
    return (
        <TouchableOpacity onPress={openChat} style={styles.contactItem}>
            <View style={styles.contactDetails}>
                <Text style={styles.contactName}>{route._id}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    contactDetails: {
        flex: 1,
    },
    contactName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    contactPhoneNumber: {
        color: "#666",
    },
});
