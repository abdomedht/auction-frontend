import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ProfilePage = ({ name, phoneNumber, email, profileImage }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="account" color={"#000"} size={100} />
            <Text style={styles.name}>Name : {name}</Text>
            <Text style={styles.phoneNumber}>Phone number : {phoneNumber}</Text>
            <Text style={styles.email}>Email : {email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 50,
    },
    phoneNumber: {
        fontSize: 18,
        marginBottom: 50,
    },
    email: {
        fontSize: 18,
    },
});

export default ProfilePage;
