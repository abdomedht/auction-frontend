/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const MyAuctionsPage = ({ navigateToCreateAuction }) => {
  // eslint-disable-next-line no-unused-vars
  const [bidAuctions, setBidAuctions] = useState([
    { id: 1, title: 'iPhone 12 Pro Max', currentPrice: '$1200' },
    { id: 2, title: 'MacBook Pro 13"', currentPrice: '$1500' },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [createdAuctions, setCreatedAuctions] = useState([
    { id: 3, title: 'Nintendo Switch', currentPrice: '$300' },
    { id: 4, title: 'Sony PlayStation 5', currentPrice: '$500' },
  ]);

  // Function to fetch data for auctions the user has bid on
  const fetchBidAuctions = () => {
    // Simulated API call
    // Replace with actual API call
    // const data = await fetch('api/bidAuctions');
    // setBidAuctions(data);
  };

  // Function to fetch data for auctions the user has created
  const fetchCreatedAuctions = () => {
    // Simulated API call
    // Replace with actual API call
    // const data = await fetch('api/createdAuctions');
    // setCreatedAuctions(data);
  };

  useEffect(() => {
    fetchBidAuctions();
    fetchCreatedAuctions();
  }, []);

  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Auctions I Bid On:</Text>
          {bidAuctions.map(auction => (
            <TouchableOpacity key={auction.id} style={styles.auctionItem}>
              <Text>{auction.title}</Text>
              <Text>Current Price: {auction.currentPrice}</Text>
            </TouchableOpacity>
          ))}
          
          <Text style={styles.sectionTitle}>Auctions I Created:</Text>
          {createdAuctions.map(auction => (
            <TouchableOpacity key={auction.id} style={styles.auctionItem}>
              <Text>{auction.title}</Text>
              <Text>Current Price: {auction.currentPrice}</Text>
            </TouchableOpacity>
          ))}
          
         
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.createButton} onPress={navigateToCreateAuction}>
            <Text style={styles.createButtonText}>Create Auction</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    top: 40,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  auctionItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#FF5500',
    borderRadius: 25,
    paddingVertical: 15,
    width: 200,
    marginVertical: 10,
    alignSelf: 'center',
    
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MyAuctionsPage;
