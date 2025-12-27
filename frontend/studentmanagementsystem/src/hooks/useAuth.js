import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook to access authentication data
export function useAuth() {

  // Get auth context value (user, isAuthenticated, login, logout, etc.)
  const context = useContext(AuthContext);

  // Safety check: ensures hook is used inside AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Return auth data to the component using this hook
  return context;
}
