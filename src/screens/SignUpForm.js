<<<<<<< HEAD
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import TextInputField from '../components/TextInputField-signUp'; // Reusable input field component
import ErrorText from '../components/ErrorText'; // Reusable error text component
import register from '../api/register'; // Registration handler

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('*required'),
  lastName: Yup.string().required('*required'),
  email: Yup.string().email('Invalid email').required('*required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('*required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('*required'),
  phone: Yup.string().matches(/^[0-9]{11}$/, 'Invalid phone number').required('*required'),
});

const SignUpForm = ({ navigation }) => {
  const handleSignUp = async (values, { setSubmitting }) => {
    setSubmitting(true); // Start spinning animation
    try {
      const response = await register(values);

      if (response.status >= 200 && response.status < 300) {
        navigation.navigate('LoginForm'); // Successful registration
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setSubmitting(false); // Stop spinning animation
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <View style={styles.container}>
            <ErrorText text={touched.firstName && errors.firstName} />
            <TextInputField
              placeholder="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />

            <ErrorText text={touched.lastName && errors.lastName} />
            <TextInputField
              placeholder="Last Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />

            <ErrorText text={touched.email && errors.email} />
            <TextInputField
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />

            <ErrorText text={touched.password && errors.password} />
            <TextInputField
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />

            <ErrorText text={touched.confirmPassword && errors.confirmPassword} />
            <TextInputField
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />

            <ErrorText text={touched.phone && errors.phone} />
            <TextInputField
              placeholder="Phone"
              keyboardType="numeric"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />

            <TouchableOpacity
              style={[styles.submitButton, isSubmitting && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={isSubmitting} // Disable the button during submission
            >
              {isSubmitting ? (
                <Animatable.View animation="rotate" iterationCount="infinite" duration={800}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </Animatable.View>
              ) : (
                <Text style={styles.buttonText}>SIGN UP</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
=======
import React from "react";
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import register from "../api/register";
const validationSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    phone: yup
        .string()
        .matches(/^[0-9]{11}$/, "Invalid phone number")
        .required("required"),
});

const MySignUpForm = ({ navigation }) => {
    const handleSubmit = async (values) => {
        try {
            const res = await register(values);

            if (res.ok) {
                navigation.navigate("LoginForm");
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#F7F6F4" }}>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    phone: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View style={styles.container}>
                        {touched.firstName && errors.firstName && (
                            <Text style={styles.errorText}>
                                {errors.firstName}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            onChangeText={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}
                            value={values.firstName}
                        />
                        {touched.lastName && errors.lastName && (
                            <Text style={styles.errorText}>
                                {errors.lastName}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            onChangeText={handleChange("lastName")}
                            onBlur={handleBlur("lastName")}
                            value={values.lastName}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>
                                {errors.password}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            secureTextEntry
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={styles.errorText}>
                                {errors.confirmPassword}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            value={values.confirmPassword}
                            secureTextEntry
                        />
                        {touched.phone && errors.phone && (
                            <Text style={styles.errorText}>{errors.phone}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            value={values.phone}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            onPress={() => {
                                const { confirmPassword, ...formData } = values;
                                handleSubmit(formData);
                                navigation.navigate("LoginForm");
                            }}
                            style={styles.submitButton}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
>>>>>>> c79958e235edd9aed3176c79fd138325e6dca064
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  scrollView: {
    flex: 1,
    backgroundColor: '#F7F6F4',
  },
  container: {
    padding: moderateScale(20),
    paddingTop: verticalScale(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6F4',
  },
  submitButton: {
    alignItems: 'center',
    width: scale(200),
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
=======
    container: {
        padding: 20,
        paddingTop: 150,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F6F4",
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 30,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
    },
    submitButton: {
        alignItems: "center",
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
        color: "red",
        marginBottom: 5,
        fontSize: 10,
    },
>>>>>>> c79958e235edd9aed3176c79fd138325e6dca064
});

export default SignUpForm;
