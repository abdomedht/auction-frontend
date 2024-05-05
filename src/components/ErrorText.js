import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorText = ({ text }) => {
  if (!text) {
    return null;
  }

  return <Text style={styles.errorText}>{text}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 5,
  },
});

export default ErrorText;
