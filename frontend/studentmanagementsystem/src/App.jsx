import { useState } from "react";
import {
  LandingPage,
  RegisterPage,
  LoginPage,
  StudentDashboard,
} from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./components/index";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LandingPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* 🔒 Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
