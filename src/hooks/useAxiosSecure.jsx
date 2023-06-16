import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            // Do something before request is sent
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Add a response interceptor
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await logOut();
                }
                return Promise.reject(error);
            });

    }, [logOut])

    return [axiosSecure];
}

export default useAxiosSecure;