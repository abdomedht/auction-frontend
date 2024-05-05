import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuctionBox from "../components/AuctionBox";
import Pluss from "../components/Pluss";

const AuctionList = ({ navigation }) => {
  const bidAuctions = [
    {
      id: 0,
      title: "iPhone 12 Pro Max",
      currentPrice: "$200",
      image1: require("../assets/productImages/pexels-kenejd-spahiu-10914594.jpg"),
      image2: require("../assets/productImages/pexels-iurii-laimin-14730450.jpg"),
      image3: require("../assets/productImages/pexels-iurii-laimin-14730453.jpg"),
      image4: require("../assets/productImages/pexels-iurii-laimin-14730423.jpg"),
      desc: "IPhone 12 Pro and iPhone 12 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the flagship smartphones in the fourteenth generation of the iPhone",
    },
    {
      id: 1,
      title: "MacBook Pro 13",
      currentPrice: "$1500",
      image1: require("../assets/productImages/mac/1_rombicamybookeclipcepclt-00304.jpg"),
      image2: require("../assets/productImages/mac/4568478_3.jpg"),
      image3: require("../assets/productImages/mac/macbook-pro-2016-10.jpg"),
      image4: require("../assets/productImages/mac/s-l1600 (2).jpg"),
      desc: "The 13-inch MacBook Pro is supercharged by M2. It’s our most portable pro laptop with all-day battery life and a gorgeous Retina display",
    },
    {
      id: 2,
      title: "Nintendo Switch",
      currentPrice: "$300",
      image1: require("../assets/productImages/switch/nintendo-switch-8.jpg"),
      image2: require("../assets/productImages/switch/10-800x800.jpg"),
      image3: require("../assets/productImages/switch/ts1-18837.jpg"),
      image4: require("../assets/productImages/switch/14106587955230.jpg"),
      desc: "Video game console developed by Nintendo and released worldwide in most regions on March 3, 2017",
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      currentPrice: "$500",
      image1: require("../assets/productImages/ps/e682c63217b34c84b6a48dc155cfb897 (1).jpg"),
      image2: require("../assets/productImages/ps/PS5 DIGITAL ED-1500x1500.jpg"),
      image3: require("../assets/productImages/ps/121212.webp"),
      image4: require("../assets/productImages/ps/vpavic_4261_20201023_0058.webp"),
      desc: "Home video game console developed by Sony Interactive Entertainment. It was announced as the successor to the PlayStation 4 in April 2019",
    },
    {
      id: 4,
      title: "Fiat 500",
      currentPrice: "$2000",
      image1: require("../assets/productImages/FB_IMG_1608891063790.jpg"),
      image2: require("../assets/productImages/ead0f22381f93753ff5562e6f9691914.jpg"),
      image3: require("../assets/productImages/small-yellow-car-parking-italy-fiat-double-car-98613603.webp"),
      image4: require("../assets/productImages/pexels-kateryna-babaieva-3721238.jpg"),
      desc: "A car produced by Fiat from 1957 to 1975. The car's designer was DanteGiacosa. Introduced to the public as the Nuova 500 in July 1957, the carwas named after the popular pre-war Fiat 500 Topolino, and was positioned as a cheap and practical car for the city. It was only 3 meters long and was equipped with a small 479 cc two-cylinder air-cooledengine",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.auctions}>Auctions </Text>
      <FlatList
        data={bidAuctions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AuctionBox
            openAuction={() => {
              navigation.navigate("AuctionRoom", item);
            }}
            details={item}
          />
        )}
      />
      <Pluss handlePress={() => navigation.navigate("AddAuction")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  auctions: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    borderRadius: 15,
  },
  createButton: {
    backgroundColor: "#FF5500",
    borderRadius: 25,
    padding: 20,
    // width: 200,
    margin: 10,
    alignSelf: "flex-end",
  },
  createButtonText: {
    alignSelf: "center",
  },
});

export default AuctionList;
