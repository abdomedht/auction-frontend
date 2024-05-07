import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
<<<<<<< HEAD:App.js
import Home from "./src/screens/Home";
import AddAuction from "./src/screens/AddAuction";
import Chat from "./src/screens/Chat";
import ChatList from "./src/screens/ChatList";
import Profile from "./src/screens/Profile";
import AuctionRoom from "./src/screens/AuctionRoom";
import AuctionList from "./src/screens/AuctionList";
import HomeLogin from "./src/screens/HomeLogin";
import LoginForm from "./src/screens/LoginForm";
import SignUpForm from "./src/screens/SignUpForm";
const Tab = createMaterialBottomTabNavigator();
=======
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
import Search from "./screens/Search.Modal";
>>>>>>> c79958e235edd9aed3176c79fd138325e6dca064:src/App.js

const Tab = createMaterialBottomTabNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
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
            }}>
            {/*tabs after login */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
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
                        <MaterialCommunityIcons
                            name="chat"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AuctionList"
                component={AuctionList}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="gavel"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function MainStackScreen() {
    return (
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
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="search"
                    component={Search}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
