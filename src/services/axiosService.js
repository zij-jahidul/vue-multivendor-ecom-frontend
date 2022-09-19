import axios from "axios";
import { useAuth } from "@/stores";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const authInfo = useAuth();

        // Alter defaults after axiosInstance has been created
        const auth = authInfo.user.data ? `Bearer ${authInfo.user.meta.token}` : "";
        config.headers.common['Authorization'] = auth;

    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosInstance;