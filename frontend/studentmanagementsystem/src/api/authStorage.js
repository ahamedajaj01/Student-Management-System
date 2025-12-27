// ⚠️ INTERNAL AUTH MODULE
// Only AuthContext and apiClient should import this file.
// UI components and pages must NOT access tokens directly.
// This file handles saving, loading, and clearing auth data
// (access token, refresh token, and user info) from localStorage.
// It is used to keep the user logged in across page refreshes.

// Keys used to store auth data in localStorage
const ACCESS_KEY = "sms_access_token";
const REFRESH_KEY = "sms_refresh_token";
const USER_KEY = "sms_user";

// Save access token, refresh token, and user data to localStorage
export function saveAuthData({access, refresh,user}={}){
    if(access) localStorage.setItem(ACCESS_KEY,access);
    if(refresh) localStorage.setItem(REFRESH_KEY,refresh);
    if(user) localStorage.setItem(USER_KEY,JSON.stringify(user));
}

// Load access token, refresh token, and user data from localStorage
export function loadAuthData(){
    const access = localStorage.getItem(ACCESS_KEY);
    const refresh = localStorage.getItem(REFRESH_KEY);
    const userRaw = localStorage.getItem(USER_KEY);
    const user = userRaw? JSON.parse(userRaw):null;
    return {access,refresh,user};
}
// Clear all auth data from localStorage (used on logout or token expiry)
export function clearAuthData(){
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
}