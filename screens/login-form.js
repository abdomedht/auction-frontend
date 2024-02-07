/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
const MyReactNativeForm = () => (


   <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={(values) => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.container}>
         <TextInput
           style={styles.input}
           placeholder="Email"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           keyboardType="email-address"
           autoCapitalize="none"
         />
         <TextInput
           style={styles.input}
           placeholder="Password"
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           secureTextEntry
         />
         <TouchableOpacity
           onPress={handleSubmit}
           style={styles.submitButton}
         >
           <Text style={styles.buttonText}>LOGIN</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.signUpButton}      >
          <Text style={styles.Text}>create an account</Text>
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
     backgroundColor: '#f8f8f8', 
     bottom: 0,
   },
   input: {
     width: 300,
     height: 50,
     borderColor: '#ccc',
     borderWidth: 1,
     marginBottom: 10,
     borderRadius: 30,
     padding: 10,
     backgroundColor: '#fff', // Background color for the input fields
   },
   submitButton: {
     alignItems: 'center',
     width: 150,
     height: 48,
     borderRadius: 25,
     backgroundColor: "#FF5500",
     justifyContent: "center", // Background color for the button
     marginTop: 20, // Add margin at the top
   },
   buttonText: {
     fontFamily: "Roboto",
     fontSize: 14,
     fontWeight: "600",
     color: "#FFFFFF",
   },
   signUpButton: {
     alignItems: 'center',     justifyContent: "center", // Background color for the button
     marginTop: 20, // Add margin at the top
   },
   Text: {
     fontFamily: "Roboto",
     fontSize: 14,
     fontWeight: "600",
     color: "#000000",
   },
 });




export default MyReactNativeForm;
