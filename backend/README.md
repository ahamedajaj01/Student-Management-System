
# Student Dashboard System – Backend API

This backend is built using **Django + Django REST Framework**.  
It provides authentication, student dashboard, assignment submission, and progress tracking.

This document is written for **frontend developers** who want to consume the APIs.

---

## Tech Stack
- Django
- Django REST Framework (DRF)
- JWT Authentication (SimpleJWT)
- SQLite (can be replaced with PostgreSQL/MySQL)

---

## Authentication Flow (Important)

### 1. Register
Create a user with role student automatically assigned and mentor need to register from admin panel.

**Endpoint**
```
POST /api/auth/register/
```

**Payload**
```json
{
  "email": "student@test.com",
  "username": "student1",
  "first_name": "Rahul",
  "last_name": "Sharma",
  "password": "password123",
  "con_password": "password123"
}
```

**Notes**
- Role can be `STUDENT` or `MENTOR`
- Students are automatically assigned a mentor at registration:
. if only one mentor exists, all students are assigned to that mentor
. if multiple mentors exist, one mentor is assigned randomly

---

### 2. Login
Returns JWT tokens.

**Endpoint**
```
POST /api/auth/login/
```

**Payload**
```json
{
  "email": "student@test.com",
  "password": "password123"
}
```

**Response**
```json
{
  "access": "JWT_ACCESS_TOKEN",
  "refresh": "JWT_REFRESH_TOKEN"
}
```

Use the **access token** in headers for protected APIs.

**Header format**
```
Authorization: Bearer <access_token>
```

---

## Student APIs

### 3. Student Dashboard
Returns all data needed to render the student dashboard.

**Endpoint**
```
GET /api/student/dashboard/
```

**Auth Required**
Yes (STUDENT only)

**Response**
```json
{
  "student": {
    "full_name": "Rahul Sharma",
    "email": "student@test.com"
  },
  "mentor": {
    "full_name": "Ankit Verma",
    "email": "mentor@test.com"
  },
  "courses": [
    {
      "id": 1,
      "name": "Python"
    }
  ],
  "assignments": [
    {
      "id": 1,
      "title": "Web Developer Task",
      "course": "Python",
      "status": "SUBMITTED"
    }
  ],
  "progress": 100
}
```

**Notes**
- Progress is calculated dynamically
- If no courses or assignments, arrays will be empty

---

### 4. Submit Assignment
Used by students to submit assignment content.

**Endpoint**
```
POST /api/student/assignment/ submissions/
```

**Auth Required**
Yes (STUDENT only)

**Payload**
```json
{
  "assignment_id": 1,
  "content": "My solution for this assignment"
}
```

**Response**
```json
{
  "message": "Assignment submitted successfully",
  "status": "SUBMITTED"
}
```

**Notes**
- One submission per assignment per student
- Resubmission updates the existing submission

---

## Important Design Notes

- Assignments are created via **Admin Panel**
- Students cannot create assignments
- Dashboard data depends on:
  Course → Enrollment → Assignment → Submission
- Progress is not stored in DB (always calculated)

---

## Permission Rules

| API | Role |
|---|---|
| Register | Public |
| Login | Public |
| Student Dashboard | STUDENT |
| Submit Assignment | STUDENT |

Mentors cannot access student dashboard.

---

## For Frontend Developers

Suggested flow:
1. Register user
2. Login and store JWT access token
3. Use token in Authorization header
4. Fetch dashboard
5. Submit assignments
6. Refresh dashboard to see progress

---

## Status

Backend is **complete and stable** according to task requirements.
