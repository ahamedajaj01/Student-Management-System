import { Link } from "react-router-dom";

import React from 'react'

function LandingPage() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
      {/* Left Side: Branding & Info (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 p-12 flex-col justify-between text-white">
        <div>
          <div className="text-2xl font-bold tracking-tight">Student Management System</div>
          <div className="mt-20">
            <h1 className="text-5xl font-extrabold leading-tight">
              Manage your academic <br /> journey in one place.
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-md">
              The central hub for students to track grades, manage course enrollments, and communicate with faculty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
  
          <div className="p-4 rounded-xl bg-blue-500/30 backdrop-blur-md">
            <p className="font-bold">Secure Portal</p>
            <p className="text-blue-100">Encrypted data protection for all students.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Action Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-2xl font-bold text-blue-600">
            Student Management System
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Welcome to the Portal</h2>
            <p className="text-slate-500 mt-2">Please select an option to access your dashboard.</p>
          </div>

          <div className="space-y-4">
            {/* Primary Action: Login */}
            <Link
              to="/login"
              className="group relative flex items-center justify-between w-full p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-slate-900">Sign In</p>
                  <p className="text-sm text-slate-500">Access your existing profile</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Secondary Action: Register */}
            <Link
              to="/register"
              className="group relative flex items-center justify-between w-full p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-slate-900">Create Account</p>
                  <p className="text-sm text-slate-500">Register as a new student</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              Technical Support: <span className="text-blue-600 cursor-pointer hover:underline">support@studentmanage.system</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage
