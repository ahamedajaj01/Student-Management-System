import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

function PublicRoute() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;

    // 🔒 Already logged in → go to dashboard
    if (isAuthenticated) {
        return <Navigate to="/student-dashboard" replace />;
    }

    // Guest user → allow access
    return <Outlet />;
}

export default PublicRoute;
