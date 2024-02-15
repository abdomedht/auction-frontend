import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import AddAuction from "./screens/AddAuction";
import Chat from "./screens/Chat";
import ChatList from "./screens/ChatList";
import Profile from "./screens/Profile";
import AuctionRoom from "./screens/AuctionRoom";
import AuctionList from "./screens/AuctionList";
import HomeLogin from "./screens/HomeLogin";
import LoginForm from "./screens/LoginForm";
import SignUpForm from "./screens/SignUpForm";
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor="#FF5500"
      inactiveColor="#cfcfcf"
      barStyle={{ backgroundColor: "#FFFFFF", height: "8%" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/*tabs after login */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AuctionList"
        component={AuctionList}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gavel" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="HomeLogin"
          component={HomeLogin}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginForm"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="SignUpForm"
          component={SignUpForm}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="AuctionRoom"
          component={AuctionRoom}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="AddAuction"
          component={AddAuction}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
