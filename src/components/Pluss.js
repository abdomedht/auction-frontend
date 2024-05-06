import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, StyleSheet } from "react-native";

const AuctionForm = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.createButton} onPress={handlePress}>
      <MaterialCommunityIcons
        name="plus"
        color={"#FFFFFF"}
        size={30}
        style={styles.createButtonText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: "#FF5500",
    borderRadius: 25,
    padding: 20,
    margin: 10,
    alignSelf: "flex-end",
  },
  createButtonText: {
    alignSelf: "center",
  },
});

export default AuctionForm;
