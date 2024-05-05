import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const TextInputField = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
}) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    onBlur={onBlur}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    autoCapitalize={autoCapitalize}
  />
);

const styles = StyleSheet.create({
  input: {
    width: scale(300),  // Use scale for width
    height: verticalScale(40),  // Use verticalScale for height
    borderColor: '#ccc',
    borderWidth: moderateScale(0),  // Use moderateScale for border width
    paddingHorizontal: moderateScale(10),  // Use moderateScale for padding
    borderRadius: moderateScale(10),  // Use moderateScale for border radius
    backgroundColor: '#FFF',
    marginBottom: verticalScale(20),  // Use verticalScale for margin
  },
});

export default TextInputField;
