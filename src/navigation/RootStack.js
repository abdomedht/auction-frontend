import { createStackNavigator } from "@react-navigation/stack";
import MainStackNav from "./MainStackNav";
import Search from "../screens/Search.Modal";

export default (RootStackNav) => {
    const RootStack = createStackNavigator();
    return (
        <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen
                name="Main"
                component={MainStackNav}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="search"
                component={Search}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};
