import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Message = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBubble}>
        <Image
          style={styles.userImage}
          source={{ uri: message.user.avatar }}
        />
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  messageBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Message;
