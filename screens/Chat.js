/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Text, Image } from 'react-native';

const Chat = () => {
    const [text, setText] = useState('');
  
    const onSend = (newMessages = []) => {
      // Handle sending messages
    };
  
    const renderHeader = () => (
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back button pressed')}>
          <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            style={styles.userImage}
            source={require('./assets/laptop.png')}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
        {renderHeader()}
        <View style={styles.chatMs}>
          {/* Messages go here */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            onChangeText={(newText) => setText(newText)}
            value={text}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={() => onSend([{ text: text, _id: 2, createdAt: new Date(), user: { _id: 1 } }])}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    chatMs: {
        flex:6,
        backgroundColor: '#000000',
      },
 
    container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ccc'
  },


  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 25,
    height: '40',
    backgroundColor: '#F7F7FC',
    
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'flex-start',
    overflow: 'None',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#000000',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#000000',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#F7F7FC',
  },
  sendButton: {
    backgroundColor: '#FF5500',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Chat;
