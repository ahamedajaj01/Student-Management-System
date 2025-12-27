import { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm({loading, error, onSubmit}) {
   const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
      {/* Left Side: Branding & Welcome Message */}
      <div className="hidden lg:flex w-1/3 bg-blue-600 p-12 flex-col justify-between text-white">
        <div>
          <Link to="/" className="text-2xl font-bold tracking-tight">Student Management System</Link>
          <div className="mt-20">
            <h1 className="text-4xl font-extrabold leading-tight">
              Welcome back
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Sign in to check your grades, view your class schedule, and stay updated with campus news.
            </p>
          </div>
        </div>
        <div className="text-sm text-blue-200">
          Internal Student Network • v2.0.4
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-2xl font-bold text-blue-600">
Student Management System
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
            <p className="text-slate-500 mt-2">Enter your credentials to access your dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email:</label>
              <div className="relative">
                <input 
                name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-11"
                />
                <div className="absolute left-4 top-3.5 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-sm text-blue-600 font-medium hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <input 
                name="password"
                    value={formData.password}
                    onChange={handleChange}
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-11"
                />
                <div className="absolute left-4 top-3.5 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              <label className="ml-2 text-sm text-slate-600 font-medium">Keep me signed in</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-blue-100"
            >
              {loading ? "Logging..." : "Login in"}
            </button>
            {error && (
                <div className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">
                  {error}
                </div>
              )}
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center text-slate-600">
            Not a member yet?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">
              Create student account
            </Link>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default LoginForm
