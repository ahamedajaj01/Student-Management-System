import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ loading, error, onSubmit }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    con_password: "",
  });
const [showPassword, setShowPassword] = useState(false);

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
        {/* Left Side: Branding (Consistent with Landing Page) */}
        <div className="hidden lg:flex w-1/3 bg-blue-600 p-12 flex-col justify-between text-white">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Student Management System
            </Link>
            <div className="mt-20">
              <h1 className="text-4xl font-extrabold leading-tight">
                Join the student <br /> community.
              </h1>
              <p className="mt-6 text-lg text-blue-100">
                Create your account to access your courses, schedules, and
                academic records.
              </p>
            </div>
          </div>
          <div className="text-sm text-blue-200">
            © 2025 Student Management System. All rights reserved.
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-y-auto">
          <div className="max-w-xl w-full mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900">
                Create Account
              </h2>
              <p className="text-slate-500 mt-2">
                Enter your details to register as a student.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="first name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="last name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              {/* username */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {" "}
                  Username
                </label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {" "}
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@university.edu"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
      type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-700"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    name="con_password"
                    value={formData.con_password}
                    onChange={handleChange}
      type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <p className="text-sm text-slate-500 leading-tight">
                  I agree to the{" "}
                  <span className="text-blue-600 font-semibold cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-semibold cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                {loading ? "Creating account..." : "Create Student Account"}
              </button>
              {error && (
                <div className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">
                  {error}
                </div>
              )}
            </form>

            {/* Footer Link */}
            <div className="mt-8 text-center text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-bold hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
