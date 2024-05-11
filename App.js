import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNav from "./src/navigation/MainStackNav";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import persistor from "./src/store/store";
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <MainStackNav />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
