import { Alert } from "react-native";
import axios from "axios";

const register = async (values) => {
    try {
        // Exclude `confirmPassword` from the data sent to the server
        const { confirmPassword, ...formData } = values;
        // Make the POST request to register the user
        const response = await axios.post(
            "https://auction-online-iw6c.onrender.com/api/users/register",
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status === 201) {
            // Typically, 201 indicates resource creation
            console.log("Register Created Successfully:", response.data);
            Alert.alert(
                "Register Created Successfully",
                JSON.stringify(response.data)
            );
            return response; // Return the created resource or response data
        } else if (response.status === 400) {
            Alert.alert("Register Failed", "Email already exists");
        } else if (response.status >= 500) {
            Alert.alert("Server Error", "Please try again later");
        }
    } catch (error) {
        if (error.response) {
            // Error response from the server
            const status = error.response.status;
            if (status === 400) {
                Alert.alert("Register Failed", "Email already exists ");
            } else if (status >= 500) {
                // Server-side error
                Alert.alert("Server Error", "Please try again later");
            } else {
                Alert.alert("Error", `An error occurred: ${status}`);
            }
        } else if (error.request) {
            // No response from the server
            Alert.alert(
                "Network Error",
                "No response from server. Please check your network."
            );
        } else {
            // Other errors (e.g., setup or coding issues)
            console.error("Error:", error.message);
            Alert.alert(
                "Unexpected Error",
                `An error occurred: ${error.message}`
            );
        }
    }
};

export default register;
