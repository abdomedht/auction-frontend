import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import handleLogin from '../api/login';
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string().min(5, 'Password must be at least 6 characters').required('*required'),
});

const LoginForm = ({ navigation }) => {
  const handleSubmit = async (values) => {
    try {
      
      
      const res  =   await handleLogin(values);
      
      if (res.ok) {
      navigation.navigate('HomeTabs');}
    } catch (error) {
      
      console.error('Registration failed:', error);
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate("SignUpForm")}
          >
            <Text style={styles.text}>Create an account</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  input: {
    width: 300,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  submitButton: {
    alignItems: 'center',
    width: 250,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FF5500',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontSize: 12,
  },
});

export default LoginForm;
