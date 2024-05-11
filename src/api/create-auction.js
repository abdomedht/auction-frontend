import axios from 'axios';
import { Platform } from 'react-native';

const createAuction = async (formValues, token) => {
  const formData = new FormData();



  try {
    const response = await axios.post(
      'https://auction-online-iw6c.onrender.com/api/auctions', 
      formValues,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, 
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Error creating auction:', error);
    throw error; 
  }
};

export default createAuction;
