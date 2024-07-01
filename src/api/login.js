import { Alert } from "react-native";
import axiosInstance from "./axiosConfig";

const handleLogin = async (values) => {
    try {
        const response = await axiosInstance.post("users/login", values);
        if (!response.data.error) {
            return response.data.data;
        } else {
            console.log(response.data.error);
            Alert.alert(response.data.error);
            return null;
        }
    } catch (error) {
        console.log(error.message);
        Alert.alert(error.message);
        return null;
    }
};

export default handleLogin;
