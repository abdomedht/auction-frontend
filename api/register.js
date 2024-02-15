import { Alert } from 'react-native';
const register =  async (values) => {
    
    try {
      const { confirmPassword, ...formData } = values; 
      console.log('formData:', formData);
      const response = await fetch('https://auction-online-iw6c.onrender.com/api/Users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData), 
      });
      


      if (response.ok) {
        const data = await response.json();
        Alert.alert('register Created Successfully', JSON.stringify(data));
        return response;
      }
      else if(response.status === 400){
        Alert.alert('register Failed', 'Email already exists');
      } 
      
      
      else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to register. Please try again later.');
    }
  }
  export default register;