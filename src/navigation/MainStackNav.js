import { createStackNavigator } from "@react-navigation/stack";
import AddAuction from "../screens/AddAuction";
import Chat from "../screens/Chat";
import AuctionRoom from "../screens/AuctionRoom";
import HomeLogin from "../screens/HomeLogin";
import LoginForm from "../screens/LoginForm";
import SignUpForm from "../screens/SignUpForm";
import HomeTabs from "./HomeTabs";

const MainStack = createStackNavigator();
export default function MainStackNav() {
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
