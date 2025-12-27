import { useState, useEffect, createContext, useMemo, useCallback } from "react";
import apiClient from "../api/apiClient";
import { loadAuthData, saveAuthData, clearAuthData } from "../api/authStorage";

// Create a context to share auth data across the app
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Store logged-in user data
  const [user, setUser] = useState(null);

  // Track whether user is logged in or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Used to know if auth check is still running (important for page loading)
  const [isLoading, setIsLoading] = useState(true);

  // Run once when app starts to restore login state from storage
  useEffect(() => {
    const initAuth = () => {
      try {
        // Load saved token and user from local storage
        const { access, user: storedUser } = loadAuthData();

        // If token exists, user is considered logged in
        if (access) {
          setIsAuthenticated(true);
          if (storedUser) setUser(storedUser);
        }
      } catch (err) {
        console.error("Auth initialization failed:", err);
        // Clear invalid auth data if something goes wrong
        clearAuthData();
      } finally {
        // Auth check is done
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Login function: calls API and saves auth data
  const login = useCallback(async (Credential) => {
    const response = await apiClient.post("/auth/login/", Credential);

    const { access, refresh, user: userData } = response.data;

    // Save token and user in storage
    saveAuthData({ access, refresh, user: userData });

    // Update app state
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  // Register function: just calls API (no login here)
  const register = useCallback(async (payload) => {
    await apiClient.post("/auth/register/", payload);
  }, []);

  // Logout function: clear storage and reset state
  const logout = useCallback(() => {
    clearAuthData();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  // Memoize context value to avoid unnecessary re-renders
  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }), [user, isAuthenticated, isLoading, login, register, logout]);

  // Provide auth data to entire app
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
