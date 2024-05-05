import { Alert } from 'react-native';
import axios from 'axios';

const handleLogin = async (values,na) => {
  try {
    const response = await axios.post(
      'https://auction-online-iw6c.onrender.com/api/users/login',
      values,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status >= 200 && response.status < 300) { // Successful response
      console.log('Login Successful:', response.data);
      Alert.alert('Login Successful', 'You have successfully logged in!');
      
      return response; // Return data or response, depending on what you need
    } else if (response.status === 400) { // Bad Request
      Alert.alert('Login Failed', 'User not found');
    }
    
    else if (response.status === 500) { // Server Error
      Alert.alert('Server Error', 'Please try again later');
    }
  } catch (error) {
    if (error.response) { // The server responded with an error
      const status = error.response.status;
      if (status === 400) {
        Alert.alert('Login Failed', 'User not found');
      } 
      else if (status === 401) {
        Alert.alert('Login Failed', 'Invalid password');
      } 
      else if (status === 500) {
        Alert.alert('Server Error', 'Please try again later');
      } else {
        Alert.alert('Error', `An error occurred: ${status}`);
      }
    } else if (error.request) { // No response received
      Alert.alert('Network Error', 'No response from server. Please check your network.');
    } else { // Other errors (e.g., setup issues)
      Alert.alert('Error', `An unexpected error occurred: ${error.message}`);
    }
  }
};

export default handleLogin;
