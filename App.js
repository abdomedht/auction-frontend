import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNav from "./src/navigation/RootStack";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackNav />
            </NavigationContainer>
        </Provider>
    );
}
