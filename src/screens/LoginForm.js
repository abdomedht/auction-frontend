import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import TextInputField from '../components/TextInputField-login'; // Reusable input field component
import ErrorText from '../components/ErrorText'; // Reusable error text component
import handleLogin from '../api/login'; // Login handler
import { ActivityIndicator } from 'react-native';
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('*required'),
});

const LoginForm = ({ navigation }) => {
  const handleLoginSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true); // Start spinning animation
    try {
      const response = await handleLogin(values);
      if (response.status >= 200 && response.status < 300) {
         navigation.navigate('HomeTabs'); // Successful login
      } 

    } catch (error) {
      console.error('Login failed:', error);
      
    } finally {
      setSubmitting(false); // Stop spinning animation
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
            style={[styles.submitButton, isSubmitting && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              
              <Animatable.View animation="rotate" iterationCount="infinite" duration={800}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
              </Animatable.View>
            ) : (
              <Text style={styles.buttonText}>Log In</Text>
            )}
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
  disabledButton: {
    opacity: 0.8, // Lighten the button when disabled
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
