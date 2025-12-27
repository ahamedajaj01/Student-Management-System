// This file creates a SINGLE axios instance.
// All API services will use this client.
// Benefits of using a centralized apiClient:
// - Automatically attaches base URL
// - Automatically attaches access token to requests
// - Handles 401 responses and token refresh automatically
// - Centralized error handling (can be added later)
// - Easier to maintain and update API interaction logic
// - Easy to switch backend URLs or add features

import axios from "axios";
import config from "../config/config.js"; // contains base URL
import { saveAuthData, loadAuthData, clearAuthData } from "./authStorage.js";

// Create axios instance with BASE URL from .env
const apiClient = axios.create({
  baseURL: config.baseUrl,
  withCredentials: false, // not using cookies (JWT setup)
});

//  REQUEST INTERCEPTOR
//  Attach access token if exist

apiClient.interceptors.request.use(
    (request) =>{
        const { access } = loadAuthData();

        if (access){
            request.headers.Authorization = `Bearer ${access}`
        }
        return request

    },
    (error) => Promise.reject(error)
)

// RESPONSE INTERCEPTOR
// Refresh on 401 once
apiClient.interceptors.response.use(
    (response) =>response,
    async (error) =>{
        const originalRequest = error.config

        // Reject if no response or not 401
        if (!error.response || error.response.status !== 401){
            return Promise.reject(error)
        }
        // Prevent infinite loop
        if (originalRequest._retry){
            clearAuthData()
            return Promise.reject(error)
        }
        originalRequest._retry = true

        const {refresh} = loadAuthData();

        if(!refresh){
            clearAuthData()
            return Promise.reject(error)
        }

        try {
            // Use raw axios to avoid interceptor recursion
            const refreshResponse = await axios.post(
                `${config.baseUrl.replace(/\/$/, "")}/token/refresh/`,
                {refresh}
            );
            const newAccess = refreshResponse.data.access
            if(!newAccess){
                throw new Error("No access token returned")
            }

            // Persist new access token
            saveAuthData({access:newAccess})

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`
        return apiClient(originalRequest)

        } catch (refreshError) {
            clearAuthData();
            return Promise.reject(refreshError)
        }
    }
)

export default apiClient
