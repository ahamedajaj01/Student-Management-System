import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { RegisterForm } from '../components/index'
import { Alert } from "../components/index"

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(null);

  const handleRegister = async (FormData) => {
    try {
      setLoading(true)
      setError(null)
      await register(FormData)
      navigate("/login")


      // Then navigate to the login page
      const timer = setTimeout(() => {
        navigate("/login", {
          state: {
            success: "Account created successfully. Please log in.",
          },
        });
      }, 1000);
      return () => clearTimeout(timer);
    } catch (err) {
      const message =
        err?.response?.data?.detail ||
        err?.response?.data?.non_field_errors?.[0] ||
        "Registration failed. Please try again.";

      setAlert({
        type: "error",
        message,
      });
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          title="Registration Error"
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <RegisterForm
        onSubmit={handleRegister}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default RegisterPage
