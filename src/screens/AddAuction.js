import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import createAuction from '../api/create-auction';
const AddAuction = () => {
  const [images, setImages] = useState([]);
  const [isStartPickerOpen, setStartPickerOpen] = useState(false); 
  const [isEndPickerOpen, setEndPickerOpen] = useState(false);

  const handleImageUpload = async (setFieldValue) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.images });

    if (!pickerResult.cancelled) {
      if (images.length < 3) {
            const updatedImages = [...images, pickerResult.assets[0].uri]; // Assuming pickerResult.assets is an array

        setImages([...images, pickerResult.assets[0].uri]);
        setFieldValue('images', [...images, pickerResult.assets[0].uri]); 
      } else {
        Alert.alert('Maximum Images Reached', 'You can upload up to 3 images.');
      }
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Product Name is required'),
    maxPrice: Yup.number()
      .required('Buy Price is required')
      .positive('Must be a positive number'),
    initialPrice: Yup.number()
      .required('Start Auction Price is required')
      .positive('Must be a positive number'),
    startDate: Yup.date().required('Start Date and Time are required'),
    endDate: Yup.date()
      .required('End Date and Time are required'),
      
    description: Yup.string().required('Description is required'),
    quantity: Yup.number().required('Quantity is required').positive('Must be a positive number'),
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7F6F4' }}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            images: [],
            maxPrice: '',
            quantity: '',
            initialPrice: '',
            startDate: new Date(), 
            endDate: new Date(),  
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log('Form Values:', values);
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQGdtLmNvbSIsImlkIjoiNjYzZWRjZjY2OTVkZGJkNGI5Y2E0OTJlIiwiaWF0IjoxNzE1NDM2NTU1LCJleHAiOjE3MTgwMjg1NTV9.78M0Fj70DMpFwnEju_OqlhhDxLKWjN-ZMC5_gk1TMvY'
            try {
              
              const response = await createAuction(values, token);
              console.log('Response:', response); 
              if(response.status >= 200 && response.status < 300)
                {
                Alert.alert('Success', 'Auction created successfully');
                resetForm();
               ;}
              
            } catch (error) {
              Alert.alert('Error', 'Failed to create auction. Please try again later.');
              console.log('Error creating auction:2', error);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => {
              return (
                <>
                  {/* Start Auction Date and Time */}
                  <View>
                    <Text style={styles.label}>Start Auction Date and Time:</Text>
                    {touched.startDate && errors.startDate && (
                      <Text style={styles.error}>{errors.startDate}</Text>
                    )}
                    <TouchableOpacity
                      style={styles.datePickerButton}
                      onPress={() => setStartPickerOpen(true)}
                    >
                      <Text>{values.startDate.toLocaleString()}</Text>
                    </TouchableOpacity>
                    {isStartPickerOpen && (
                      <DateTimePicker
                        value={values.startDate}
                        mode="date"
                        onChange={(event, selectedDate) => {
                          setStartPickerOpen(false);
                          if (selectedDate) {
                            setFieldValue('startDate', selectedDate);
                          }
                        } } />
                    )}
                  </View>

                  {/* End Auction Date and Time */}
                  <View>
                    <Text style={styles.label}>End Auction Date and Time:</Text>
                    {touched.endDate && errors.endDate && (
                      <Text style={styles.error}>{errors.endDate}</Text>
                    )}
                    <TouchableOpacity
                      style={styles.datePickerButton}
                      onPress={() => setEndPickerOpen(true)}
                    >
                      <Text>{values.endDate.toLocaleString()}</Text>
                    </TouchableOpacity>
                    {isEndPickerOpen && (
                      <DateTimePicker
                        value={values.endDate}
                        mode="date"
                        onChange={(event, selectedDate) => {
                          setEndPickerOpen(false);
                          if (selectedDate) {
                            setFieldValue('endDate', selectedDate);
                          }
                        } } />
                    )}
                  </View>

                  {/* Other form fields */}
                  <View>
                    {touched.name && errors.name && (
                      <Text style={styles.error}>{errors.productName}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Product Name"
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')} />
                  </View>
                  <View>
                    {touched.description && errors.description && (
                      <Text style={styles.error}>{errors.description}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="product Description"
                      value={values.description}
                      onChangeText={handleChange('description')}
                      onBlur={handleBlur('description')} />
                  </View>

                  {/* Buy Price */}
                  <View>
                    {touched.maxPrice && errors.maxPrice && (
                      <Text style={styles.error}>{errors.maxPrice}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Buy Price"
                      keyboardType="numeric"
                      value={values.maxPrice}
                      onChangeText={handleChange('maxPrice')}
                      onBlur={handleBlur('maxPrice')} />
                  </View>

                  {/* Start Auction Price */}
                  <View>
                    {touched.initialPrice && errors.initialPrice && (
                      <Text style={styles.error}>{errors.initialPrice}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Start Auction Price"
                      keyboardType="numeric"
                      value={values.initialPrice}
                      onChangeText={handleChange('initialPrice')}
                      onBlur={handleBlur('initialPrice')} />
                  </View>
                  <View>
                    {touched.quantity && errors.quantity && (
                      <Text style={styles.error}>{errors.quantity}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="quantity"
                      keyboardType="numeric"
                      value={values.quantity}
                      onChangeText={handleChange('quantity')}
                      onBlur={handleBlur('quantity')} />
                  </View>

                 {/* Image Upload Button */}
              <TouchableOpacity
                onPress={() => handleImageUpload(setFieldValue)}
                style={styles.uploadButton}
              >
                <Text style={styles.uploadText}>Upload Image</Text>
              </TouchableOpacity>

              {/* Display Uploaded Images */}
              <View style={styles.imageContainer}>
                {values.images.map((image, index) => (
                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={styles.image}
                  />
                ))}
                  </View>

                  {/* Submit Button */}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}
                  >
                    <Text style={styles.submitText}>CREATE AUCTION</Text>
                  </TouchableOpacity>
                </>
              );
            }}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '20@ms',
    paddingTop: '100@vs',
    justifyContent: 'center',
    alignItems: 'center',
        backgroundColor: "#F7F6F4",

  },
  datePickerButton: {
    height: '40@vs',
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: '10@ms',
    justifyContent: "center",
    paddingHorizontal: '10@ms',
    width: '350@ms',
    backgroundColor: "#F7F6F4"
  },
  error: {
    color: 'red',
    fontSize: '10@ms',
  },
  uploadButton: {
    backgroundColor: '#FF5500',
    borderRadius: '10@ms',
    paddingVertical: '10@vs',
    paddingHorizontal: '20@ms',
    alignItems: 'center',
    marginBottom: '10@vs',
  },
  uploadText: {
    color: '#FFF',
    fontSize: '15@ms',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: '10@vs',
    justifyContent: 'center',
  },
  image: {

    width: '100@ms',
    height: '100@ms',
    marginRight: '10@ms',
  },
  submitButton: {
    backgroundColor: '#FF5500',
    borderRadius: '10@ms',
    paddingVertical: '15@vs',
    alignItems: 'center',
    width: '300@ms',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '15@ms',
  },
  input: {
    height: '40@vs',
    width: '350@ms',
    borderRadius: '10@ms',
    paddingHorizontal: '10@ms',
    borderWidth: 0,
    borderColor: '#ccc',
    marginBottom: '20@vs',
  },

});

export default AddAuction;
