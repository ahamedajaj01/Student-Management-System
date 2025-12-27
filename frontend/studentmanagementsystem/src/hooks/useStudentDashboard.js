import { useEffect, useState, useCallback } from "react"
import apiClient from "../api/apiClient"


function useStudentDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchDashboard()
  }, [fetchDashboard])

  return { data, loading, error, refetch: fetchDashboard };
}

export default useStudentDashboard
