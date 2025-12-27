import { useEffect, useState, useCallback } from "react";
import apiClient from "../api/apiClient";

// Custom hook to manage student dashboard data
function useStudentDashboard() {

  // Store dashboard API response
  const [data, setData] = useState(null);

  // Track loading state while API is calling
  const [loading, setLoading] = useState(true);

  // Store error message if API fails
  const [error, setError] = useState(null);

  // Function to fetch dashboard data from API
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("/student/dashboard/");
      setData(res.data);
      setError(null);
    } catch {
      setError("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }, []);

  // Call dashboard API when component using this hook mounts
  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  // Return data and helpers to the component
  return {
    data,
    loading,
    error,
    refetch: fetchDashboard
  };
}

export default useStudentDashboard;
