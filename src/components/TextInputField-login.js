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
  errorText,
}) => (
  <>
    <TextInput
      style={[styles.input, errorText ? styles.errorBorder : null]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </>
);
//jkjkjkjkk
const styles = StyleSheet.create({
  input: {
    width: scale(300),
    height: verticalScale(50),
    borderColor: '#ccc',
    borderWidth: moderateScale(0),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#fff',
    marginBottom: verticalScale(30),
  },
  errorBorder: {
    borderColor: 'red', // Highlight border when there's an error
  },
});

export default TextInputField;
