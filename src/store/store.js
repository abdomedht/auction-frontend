import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import storage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
export const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
});

export const persistor = persistStore(store);
