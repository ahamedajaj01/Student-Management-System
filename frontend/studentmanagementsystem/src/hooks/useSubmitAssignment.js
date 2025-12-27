import { useState } from "react";
import apiClient from "../api/apiClient";

// Custom hook to submit an assignment
export default function useSubmitAssignment(onSuccess) {

  // Track loading state during submission
  const [loading, setLoading] = useState(false);

  // Store error message if submission fails
  const [error, setError] = useState(null);

  // Function to submit assignment data to API
  const submitAssignment = async ({ assignmentId, content }) => {
    setLoading(true);
    setError(null);

    try {
      // Call API to submit assignment
      await apiClient.post("/student/assignment/submissions/", {
        assignment_id: assignmentId,
        content,
      });

      // Call success callback if provided
      onSuccess?.();

    } catch (err) {
      // Set error message from API or fallback message
      setError(
        err?.response?.data?.message || "Submission failed"
      );
    } finally {
      // Stop loading after API call completes
      setLoading(false);
    }
  };

  // Expose submit function and states to component
  return { submitAssignment, loading, error };
}
