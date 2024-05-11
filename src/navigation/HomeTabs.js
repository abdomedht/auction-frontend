import Home from "../screens/Home";
import ChatList from "../screens/ChatList";
import AuctionList from "../screens/AuctionList";
import Profile from "../screens/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialBottomTabNavigator();
export default function HomeTabs() {
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
