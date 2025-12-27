# Student Dashboard – Frontend

This is the frontend for the **Student Dashboard System**, built using **React**, **Vite**, and **Tailwind CSS**.  
It provides the student-facing UI for authentication, dashboard viewing, assignment submission, and progress tracking.

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router v6
- Axios
- JWT-based authentication

---

## Features

- Student login and logout
- Protected routes for authenticated users
- Student dashboard with:
  - Profile details
  - Assigned mentor information
  - Enrolled courses
  - Assigned assignments
  - Assignment submission via modal
  - Progress tracking
- Clean UI with reusable components
- Proper error handling and loading states

---

## Project Structure

src/
├── api/            # Axios client and token storage
├── components/     # Reusable UI components
├── context/        # AuthContext (authentication state)
├── hooks/          # Custom hooks (dashboard, submission)         
├── pages/          # Page-level components
└── main.jsx

---

## Authentication Flow

- JWT tokens are stored in localStorage
- Auth state is managed via AuthContext
- ProtectedRoute blocks unauthenticated users
- PublicRoute prevents logged-in users from accessing login/register pages
- Tokens are attached to API requests via Axios interceptors

---

## Dashboard Data Flow

- Dashboard data is fetched using a custom hook (useStudentDashboard)
- Assignment submission is handled via a separate mutation hook
- After submitting an assignment, dashboard data is refetched to update progress and status
- Progress is calculated on the backend and displayed in the UI

---

## Setup Instructions

### Install dependencies

npm install

### Configure environment variables

Create a .env file in the frontend root:

VITE_META_BASE_URL=http://127.0.0.1:8000/api

### Run the development server

npm run dev

The app will run on http://localhost:5173.

---

## Notes

- This frontend depends on the backend API being available
- Only students can register via the UI
- Mentor accounts are created via backend/admin flows
- Role enforcement and security are handled server-side
