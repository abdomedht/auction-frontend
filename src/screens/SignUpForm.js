import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextInputField from '../components/TextInputField-signUp';
import ErrorText from '../components/ErrorText';
import register from '../api/register';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const validationSchema = yup.object().shape({
  firstName: yup.string().required('*required'),
  lastName: yup.string().required('*required'),
  email: yup.string().email('Invalid email').required('*required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('*required'),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Invalid phone number')
    .required('*required'),
});

const MySignUpForm = ({ navigation }) => {
  const handleSubmit = async (values) => {
    try {
      const res = await register(values);

      if (res.status >= 200 && res.status < 300) {
        navigation.navigate('LoginForm');
      }
    } catch (error) {
      console.error('Registration failed:', error);
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
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            
            <ErrorText text={touched.password && errors.password} />
            <TextInputField
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            
            <ErrorText text={touched.confirmPassword && errors.confirmPassword} />
            <TextInputField
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            
            <ErrorText text={touched.phone && errors.phone} />
            <TextInputField
              placeholder="Phone Number"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
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
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F7F6F4',
  },
  container: {
    padding: moderateScale(20),
    paddingTop: verticalScale(150),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6F4',
  },
  submitButton: {
    alignItems: 'center',
    width: scale(200),
    height: verticalScale(48),
    borderRadius: moderateScale(25),
    backgroundColor: '#FF5500',
    justifyContent: 'center',
    marginTop: verticalScale(50),
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MySignUpForm;
