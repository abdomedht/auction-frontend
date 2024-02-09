import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert, Image,ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import * as ImagePicker from 'expo-image-picker';

const CreateAuctionForm = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (setFieldValue) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });

    if (!pickerResult.cancelled) {
      if (images.length < 3) {
        setImages([...images, pickerResult.uri]);
        setFieldValue('images', [...images, pickerResult.uri]); // Update Formik field value
      } else {
        Alert.alert('Maximum Images Reached', 'You can upload up to 3 images.');
      }
    }
  };

  return (
    <ScrollView style={{flex:1,backgroundColor: '#F7F6F4',}}>
      <View style={styles.container}>
      <Formik
        initialValues={{ 
          productName: '', 
          description: '', 
          images: [], 
          buyPrice: '', 
          startAuctionPrice: '', 
          auctionDuration: '' 
        }}
        validationSchema={Yup.object().shape({ // Define validation schema using Yup
          productName: Yup.string().required('*required'),
          buyPrice: Yup.number().required('*required').positive('Buy price must be positive').integer('Buy price must be an integer'),
          startAuctionPrice: Yup.number().required('*required').positive('Start auction price must be positive').integer('Start auction price must be an integer'),
          auctionDuration: Yup.number().required('*required').positive('Auction duration must be positive').integer('Auction duration must be an integer'),
        })}
        onSubmit={async (values) => {
          try {
            const response = await fetch('endpoint', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required
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
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
          <>
            {touched.productName && errors.productName && <Text style={styles.error}>{errors.productName}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Product Name"
              value={values.productName}
              onChangeText={handleChange('productName')}
              onBlur={handleBlur('productName')}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              multiline
            />
            {touched.buyPrice && errors.buyPrice && <Text style={styles.error}>{errors.buyPrice}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Buy Price"
              value={values.buyPrice}
              onChangeText={handleChange('buyPrice')}
              onBlur={handleBlur('buyPrice')}
              keyboardType="numeric"
            />
            {touched.startAuctionPrice && errors.startAuctionPrice && <Text style={styles.error}>{errors.startAuctionPrice}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Start Auction Price"
              value={values.startAuctionPrice}
              onChangeText={handleChange('startAuctionPrice')}
              onBlur={handleBlur('startAuctionPrice')}
              keyboardType="numeric"
            />
            {touched.auctionDuration && errors.auctionDuration && <Text style={styles.error}>{errors.auctionDuration}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Auction Duration (hours)"
              value={values.auctionDuration}
              onChangeText={handleChange('auctionDuration')}
              onBlur={handleBlur('auctionDuration')}
              keyboardType="numeric"
            />
            {touched.auctionDuration && errors.auctionDuration && <Text style={styles.error}>{errors.auctionDuration}</Text>}
            <TouchableOpacity onPress={() => handleImageUpload(setFieldValue)} style={styles.uploadButton}>
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              {values.images.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={styles.image} />
              ))}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitText}>CREATE AUCTION</Text>
            </TouchableOpacity>
          
          </>
        )}
      </Formik>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
    width: 350,
    backgroundColor: '#fff',
    fontSize: 15,
  },
  uploadButton: {
    backgroundColor: '#FF5500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 200,
    alignItems: 'center', 
  },
  uploadText: {
    color: '#FFF',
    
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#FF5500',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: 300,
    marginTop: 80,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 5,
    fontSize: 10, 
  },
});

export default CreateAuctionForm;
