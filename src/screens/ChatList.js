import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "123-456-7890",
    image: require("../../assets/profilePhoto/13d98ca39a742dce8ea3fe9fce8b9298.jpg"),
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    image: require("../../assets/profilePhoto/15cf851ec833e19e06f4cc02dc77c852.jpg"),
  },
  {
    id: 3,
    name: "Alice Johnson",
    phoneNumber: "456-789-0123",
    image: require("../../assets/profilePhoto/7418a925e469a3b6f452e1330f15d6f2.jpg"),
  },
  // Add more contacts as needed
];

const ContactItem = ({ contact, openChat }) => (
  <TouchableOpacity onPress={openChat} style={styles.contactItem}>
    <Image source={contact.image} style={styles.contactImage} />
    <View style={styles.contactDetails}>
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactPhoneNumber}>{contact.phoneNumber}</Text>
    </View>
  </TouchableOpacity>
);

// eslint-disable-next-line no-unused-vars
const ChatList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F6F4" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Contacts</Text>
        </View>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ContactItem
              contact={item}
              openChat={() => {
                navigation.navigate("Chat", item);
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // backgroundColor: "#E6DDEF",
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactPhoneNumber: {
    color: "#666",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingTop: 60,
  },
});

export default ChatList;
