import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert,ScrollView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('Invalid email').required('required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('required'),
});

const MySignUpForm = () => (
  <ScrollView style={{flex:1,backgroundColor:'#F7F6F4'}}>
    <Formik
    initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phoneNumber: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      Alert.alert('Submitted!', JSON.stringify(values));
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>
      {touched.firstName && errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        value={values.firstName}
      />
      {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
        value={values.lastName}
      />
      {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
      />
      {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secureTextEntry
      />
      {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        secureTextEntry
      />
      {touched.phoneNumber && errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        value={values.phoneNumber}
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
    )}
  </Formik>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6F4'
     
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    borderRadius: 10, 
    backgroundColor: '#FFF'

  },
  submitButton: {
    alignItems: 'center',
    width: 200,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#FF5500", 
    justifyContent: "center", 
    marginTop: 100, 
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontSize: 10,

  },
});

export default MySignUpForm;
