/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('*required'),
});

const LoginForm = ({ navigation }) => {
  // Input component for form fields
  const FormInput = ({ field, ...props }) => (
    <TextInput
      style={styles.input}
      onChangeText={field.onChange(field.name)}
      onBlur={field.onBlur(field.name)}
      value={field.value}
      {...props}
    />
  );

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          {/* Email input */}
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <FormInput
            field={{ value: values.email, onChange: handleChange, onBlur: handleBlur, name: 'email' }}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          {/* Password input */}
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <FormInput
            field={{ value: values.password, onChange: handleChange, onBlur: handleBlur, name: 'password' }}
            placeholder="Password"
            secureTextEntry
          />
          
          {/* Login button */}
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          
          {/* Sign up button */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => {
              navigation.navigate("SignUpForm");
            }}
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
    marginBottom: 40,
    borderRadius: 10,
    padding: 10,
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
    marginTop: 60,
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
