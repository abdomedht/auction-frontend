import ProfilePage from "../components/ProfilePage";
import React, { useState, useEffect } from "react";
import { SafeAreaView, Alert } from "react-native";
import axiosInstance from "../api/axiosConfig";
import * as Animatable from "react-native-animatable";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
const Profile = () => {
    const { userId, token } = useSelector((state) => state.user);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("users");
                if (!response.data.error) {
                    setUserData(response.data.data.user);
                    console.log(userData.image);
                } else {
                    Alert.alert(response.data.error);
                }
            } catch (error) {
                Alert.alert(error);
            }
        })();
    }, []);
    useEffect(() => {}, [userData]);
    if (!userData) {
        return (
            <SafeAreaView
                style={{ justifyContent: "center", alignItems: "center" }}>
                <Animatable.View
                    animation="rotate"
                    iterationCount="infinite"
                    duration={800}>
                    <ActivityIndicator size="large" color="#FF5500" />
                </Animatable.View>
            </SafeAreaView>
        );
    }
    const user = {
        name: userData.firstName + " " + userData.lastName,
        phoneNumber: userData.phone,
        email: userData.email,
        profileImage: userData.image,
    };
    return (
        <ProfilePage
            name={user.name}
            phoneNumber={user.phoneNumber}
            email={user.email}
            profileImage={user.profileImage}
        />
    );
};

export default Profile;
