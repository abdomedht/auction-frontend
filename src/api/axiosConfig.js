import { store } from "../store/store";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://auction-online-iw6c.onrender.com/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add interceptor (aka Middleware) to the instance to always add the autorization header with any request
axiosInstance.interceptors.request.use(
    (config) => {
        const usetToken = store.getState().user.token;
        if (usetToken) {
            config.headers.Authorization = "Bearer " + usetToken;
        } else {
            config.headers.Authorization = "Bearer " + "none";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
