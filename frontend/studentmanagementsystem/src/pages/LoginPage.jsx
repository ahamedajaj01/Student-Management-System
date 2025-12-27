import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { LoginForm, Alert } from '../components/index'

function LoginPage() {
  const location = useLocation();
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [success, setSuccess] = useState(null);
  // read success message once
  useEffect(() => {
    if (location.state?.success) {
      setSuccess(location.state.success);
    }
  }, [location.state]);

  const handleLogin = async (FormData) => {
    try {
      setLoading(true)
      setError(null)
      await login(FormData)
      navigate("/student-dashboard")
    } catch (error) {
      const message =
        error?.response?.data?.detail ||
        "Login failed. Please check your credentials and try again.";
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {success && (
        <Alert
          type="success"
          title="Registration successful"
          message={success}
          onClose={() => setSuccess(null)}
        />
      )}
      <LoginForm
        onSubmit={handleLogin}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default LoginPage
