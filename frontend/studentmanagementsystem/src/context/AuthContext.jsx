import { useState, useEffect, useContext, createContext, useMemo, useCallback } from "react";
import apiClient from "../api/apiClient";
import { loadAuthData, saveAuthData, clearAuthData } from "../api/authStorage";

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initAuth = () => {
      try {
        const { access, user: storedUser } = loadAuthData()
        if (access) {
          setIsAuthenticated(true)
          if (storedUser) setUser(storedUser)
        }
      } catch (err) {
        console.error("Auth initialization failed:", err)
        clearAuthData()
      } finally {
        setIsLoading(false)
      }
    }
    initAuth()
  }, [])

  const login = useCallback(async (Credential) => {
    const response = await apiClient.post("/auth/login/", Credential)
    const { access, refresh, user: userData } = response.data;
    saveAuthData({ access, refresh, user: userData });
    setUser(userData);
    setIsAuthenticated(true);
  }, [])

  const register = useCallback(async (payload) => {
    await apiClient.post("/auth/register/", payload);
  }, [])

  const logout = useCallback(() => {
    clearAuthData();
    setUser(null);
    setIsAuthenticated(false);
  }, [])

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }), [user, isAuthenticated, isLoading, login, register, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}