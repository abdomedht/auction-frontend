import { Alert } from "react-native";
import axiosInstance from "./axiosConfig";

const handleLogin = async (values) => {
    try {
        const response = await axiosInstance.post("users/login", values);
        if (!response.data.error) {
            return response.data.data;
        } else {
            Alert.alert(response.data.error);
            return null;
        }
    } catch (error) {
        Alert.alert(error.message);
        return null;
    }
};

export default handleLogin;
