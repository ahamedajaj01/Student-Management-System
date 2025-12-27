import { useState } from "react";
import apiClient from "../api/apiClient";

export default function useSubmitAssignment(onSuccess) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitAssignment = async ({ assignmentId, content }) => {
    setLoading(true);
    setError(null);

    try {
      await apiClient.post("/student/assignment/submissions/", {
        assignment_id: assignmentId,
        content,
      });

      onSuccess?.();
    } catch (err) {
      setError(
        err?.response?.data?.message || "Submission failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return { submitAssignment, loading, error };
}
