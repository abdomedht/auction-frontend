import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const ListHorizBid = ({ PRODUCTS, handlePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bids</Text>
      <FlatList
        horizontal={true}
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.boxHorizontal]}
            onPress={handlePress}
          >
            <Image source={item.productImage} style={styles.productImageList} />
            <Text style={{ fontSize: 12, paddingTop: 10 }}>
              {item.productName}
            </Text>
            <View
              style={{
                borderRadius: 30,
                width: 148,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Highest: {item.currentPriceBid}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: "800",
    fontSize: 20,
    paddingVertical: 10,
  },
  productImageList: {
    flexGrow: 1,
    maxHeight: 100,
    maxWidth: 140,
    borderRadius: 5,
  },
  boxHorizontal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6DDEF",
    width: 160,
    height: 188,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default ListHorizBid;
