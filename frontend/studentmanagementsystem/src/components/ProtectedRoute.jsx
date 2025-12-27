import { Navigate, Outlet } from 'react-router-dom'
import {useAuth} from "../hooks/useAuth"

function ProtectedRoute() {
      const { isAuthenticated, isLoading } = useAuth();
// Still checking auth ( on refresh)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
   // Logged in → allow route
  return <Outlet />;
}

export default ProtectedRoute
