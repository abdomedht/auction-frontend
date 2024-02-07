import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone Number is required'),
});

const MySignUpForm = () => (
  <Formik
    initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phoneNumber: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      Alert.alert('Submitted!', JSON.stringify(values));
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        value={values.firstName}
      />
      {touched.firstName && errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
        value={values.lastName}
      />
      {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
      />
      {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secureTextEntry
      />
      {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        secureTextEntry
      />
      {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        value={values.phoneNumber}
        keyboardType="numeric"
      />
      {touched.phoneNumber && errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
     
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 25, 
  },
  submitButton: {
    alignItems: 'center',
    width: 200,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#FF5500", 
    justifyContent: "center", 
    marginTop: 20, 
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    fontSize: 10,

  },
});

export default MySignUpForm;
