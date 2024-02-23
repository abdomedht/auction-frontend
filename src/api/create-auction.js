
import { Alert } from 'react-native';
const handleAction =async (values) => {
    try {
      const response = await fetch('https://auction-online-iw6c.onrender.com/api/Auctions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        Alert.alert('Auction Created Successfully', JSON.stringify(data));
      } else {
        throw new Error('Failed to create auction');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to create auction. Please try again later.');
    }
  }
  export default handleAction;  