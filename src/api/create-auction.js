import axios from 'axios';
const createAuction = async (formValues, token) => {


  
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

    console.log('res',response);
    return response;
  } 
  catch (error) {
    console.error('Error creating auction:', error);
    throw error; 
  }
};

export default createAuction;