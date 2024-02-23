import { Alert } from 'react-native';

const handleLogin = async (values) => {
    
    try {
      const response = await fetch('https://auction-online-iw6c.onrender.com/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Login Successful:', data);
        Alert.alert('Login Successful', 'You have successfully logged in!');
        return response
      } 
      else if(response.status === 400){
        Alert.alert('Login Failed', 'User not found');
      }
      else {
        throw new Error('Failed to login');
      }

    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to login. Please try again later.');
    } 
  };
  export default handleLogin;