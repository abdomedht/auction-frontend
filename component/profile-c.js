import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfilePage = ({ name, phoneNumber, email, profileImage }) => {
  return (
    <View style={styles.container}>
      <Image source={ profileImage} style={styles.profileImage} />
      <Text style={styles.name}>name : {name}</Text>
      <Text style={styles.phoneNumber}>phoneNumber : {phoneNumber}</Text>
      <Text style={styles.email}>email : {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  phoneNumber: {
    fontSize: 18,
    marginBottom: 50,
  },
  email: {
    fontSize: 18,
  },
});

export default ProfilePage;
