# 🎓 Student Dashboard & Management System

A modern, full-stack academic management portal built to streamline the connection between students and mentors. This system provides a centralized hub for tracking academic progress, managing assignments, and maintaining student-mentor relationships.

---

LIVE DEMO - https://student-management-system-demo.vercel.app

## 🌟 Key Highlights

*   **Smart Onboarding:** Automatic mentor assignment upon registration.
*   **Real-time Progress:** Dynamic progress tracking based on assignment submissions.
*   **Secure & Persistent:** JWT-based authentication that keeps you logged in across sessions.
*   **Responsive Design:** A premium, mobile-friendly UI built with Tailwind CSS.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Lucide Icons, Axios |
| **Backend** | Django, Django REST Framework (DRF) |
| **Auth** | JWT (JSON Web Tokens) with secure local storage |
| **Database** | SQLite (Development) / PostgreSQL (Production ready) |

---

## � Getting Started

### Prerequisites
*   Python 3.8+
*   Node.js 16+
*   npm or yarn

### 1. Backend Installation (Django)
```bash
cd backend
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup Database
python manage.py makemigrations
python manage.py migrate

# Start Server
python manage.py runserver
```

### 2. Frontend Installation (React)
```bash
cd frontend/studentmanagementsystem
npm install
npm run dev
```

---

## 📂 Project Architecture

```text
Student Dashboard System/
├── backend/                # Django Project Root
│   ├── apps/               # Django Applications
│   │   ├── accounts/       # User Authentication & Registration
│   │   ├── profiles/       # Student & Mentor Profile management
│   │   ├── academics/      # Courses & Assignments logic
│   │   └── submissions/    # Assignment submission & tracking
│   ├── config/             # Project Settings & URL configuration
│   └── manage.py           # Django management script
├── frontend/               # React Application Root
│   └── studentmanagementsystem/
│       ├── src/
│       │   ├── api/        # Axios configuration & Interceptors
│       │   ├── components/ # Reusable UI elements
│       │   ├── context/    # Auth state management
│       │   ├── hooks/      # Custom React hooks
│       │   └── pages/      # Main application views
└── README.md
```

---

## 📋 Task Checklist (Current Progress)

- [x] **Authentication:** Login/Logout with Protected & Public routing.
- [x] **Dashboard:** Integrated view for Profile, Mentor, and Courses.
- [x] **Assignments:** Full submission workflow with status tracking.
- [x] **Progress Bar:** Real-time calculation of student completion rates.
- [x] **API Interceptors:** Automatic token refreshing and header injection.

---

## 🤝 Contributing
This is a private project. For any major changes, please open an issue first to discuss what you would like to change.

---

