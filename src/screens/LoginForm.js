import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import TextInputField from '../components/TextInputField-login'; // Reusable input field component
import ErrorText from '../components/ErrorText'; // Reusable error text component
import handleLogin from '../api/login'; // Login handler

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('*required'),
});

const LoginForm = ({ navigation }) => {
  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await handleLogin(values);
      if (response.status >= 200 && response.status < 300) {
        navigation.navigate('HomeTabs'); // Successful login
      } else {
        Alert.alert('Login failed', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Unexpected error', 'Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleLoginSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View style={styles.container}>
          <ErrorText text={touched.email && errors.email} />
          <TextInputField
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorText={touched.email && errors.email} // Pass error status for styling
          />

          <ErrorText text={touched.password && errors.password} />
          <TextInputField
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorText={touched.password && errors.password} // Pass error status for styling
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUpForm')}
          >
            <Text style={styles.signUpText}>Create an account</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  submitButton: {
    alignItems: 'center',
    width: scale(250),
    height: verticalScale(48),
    borderRadius: moderateScale(15),
    backgroundColor: '#FF5500',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  signUpText: {
    fontFamily: 'Roboto',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#000000',
  },
});

export default LoginForm;
