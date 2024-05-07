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

const AddAuction = () => {
  const [images, setImages] = useState([]);
  const [isStartPickerOpen, setStartPickerOpen] = useState(false); // Correct initialization
  const [isEndPickerOpen, setEndPickerOpen] = useState(false);

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

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    buyPrice: Yup.number()
      .required('Buy Price is required')
      .positive('Must be a positive number'),
    startAuctionPrice: Yup.number()
      .required('Start Auction Price is required')
      .positive('Must be a positive number'),
    startAuctionDate: Yup.date().required('Start Date and Time are required'),
    endAuctionDate: Yup.date()
      .required('End Date and Time are required')
      .min(Yup.ref('startAuctionDate'), 'End Date must be after the Start Date'),
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7F6F4' }}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            productName: '',
            description: '',
            images: [],
            buyPrice: '',
            startAuctionPrice: '',
            startAuctionDate: new Date(), // Default to current
            endAuctionDate: new Date(),  // Default to current
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log('Form values:', values);
            try {
              const response = await fetch('', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              });

              if (response.ok) {
                Alert.alert('Success', 'Auction Created Successfully');
                resetForm(); // Reset the form fields
                setImages([]); // Clear images after submission
              } else {
                throw new Error('Failed to create auction');
              }
            } catch (error) {
              console.error('Error:', error);
              Alert.alert(
                'Error',
                'Failed to create auction. Please try again later.'
              );
              console.log('Form values:', values);
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
                    {touched.startAuctionDate && errors.startAuctionDate && (
                      <Text style={styles.error}>{errors.startAuctionDate}</Text>
                    )}
                    <TouchableOpacity
                      style={styles.datePickerButton}
                      onPress={() => setStartPickerOpen(true)}
                    >
                      <Text>{values.startAuctionDate.toLocaleString()}</Text>
                    </TouchableOpacity>
                    {isStartPickerOpen && (
                      <DateTimePicker
                        value={values.startAuctionDate}
                        mode="date"
                        onChange={(event, selectedDate) => {
                          setStartPickerOpen(false);
                          if (selectedDate) {
                            setFieldValue('startAuctionDate', selectedDate);
                          }
                        } } />
                    )}
                  </View>

                  {/* End Auction Date and Time */}
                  <View>
                    <Text style={styles.label}>End Auction Date and Time:</Text>
                    {touched.endAuctionDate && errors.endAuctionDate && (
                      <Text style={styles.error}>{errors.endAuctionDate}</Text>
                    )}
                    <TouchableOpacity
                      style={styles.datePickerButton}
                      onPress={() => setEndPickerOpen(true)}
                    >
                      <Text>{values.endAuctionDate.toLocaleString()}</Text>
                    </TouchableOpacity>
                    {isEndPickerOpen && (
                      <DateTimePicker
                        value={values.endAuctionDate}
                        mode="date"
                        onChange={(event, selectedDate) => {
                          setEndPickerOpen(false);
                          if (selectedDate) {
                            setFieldValue('endAuctionDate', selectedDate);
                          }
                        } } />
                    )}
                  </View>

                  {/* Other form fields */}
                  <View>
                    {touched.productName && errors.productName && (
                      <Text style={styles.error}>{errors.productName}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Product Name"
                      value={values.productName}
                      onChangeText={handleChange('productName')}
                      onBlur={handleBlur('productName')} />
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
                    {touched.buyPrice && errors.buyPrice && (
                      <Text style={styles.error}>{errors.buyPrice}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Buy Price"
                      keyboardType="numeric"
                      value={values.buyPrice}
                      onChangeText={handleChange('buyPrice')}
                      onBlur={handleBlur('buyPrice')} />
                  </View>

                  {/* Start Auction Price */}
                  <View>
                    {touched.startAuctionPrice && errors.startAuctionPrice && (
                      <Text style={styles.error}>{errors.startAuctionPrice}</Text>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Start Auction Price"
                      keyboardType="numeric"
                      value={values.startAuctionPrice}
                      onChangeText={handleChange('startAuctionPrice')}
                      onBlur={handleBlur('startAuctionPrice')} />
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
    paddingTop: '150@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerButton: {
    height: '40@vs',
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: '10@ms',
    justifyContent: "center",
    paddingHorizontal: '10@ms',
    width: '350@ms',
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
  },
  uploadText: {
    color: '#FFF',
    fontSize: '15@ms',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: '10@vs',
  },
  image: {
    width: '150@ms',
    height: '150@ms',
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
