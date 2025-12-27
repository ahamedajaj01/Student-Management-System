from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from apps.accounts.permissions import IsStudent
from apps.academics.models import Enrollment
from apps.submissions.models import Assignment, Submission
from apps.profiles.models import StudentProfile

# Create your views here.
class StudentDashboardAPIView(APIView):
    permission_classes = [IsAuthenticated, IsStudent]

    def get(self, request):
        user = request.user
        student = StudentProfile.objects.select_related("mentor__user").get(user=user)
        # mentor info
        mentor_data = None
        if student.mentor:
            mentor_user = student.mentor.user
            mentor_data = {
                "full_name": mentor_user.full_name,
                "email": mentor_user.email,   
            }
        
        # Enrolled course
        enrollments = Enrollment.objects.select_related("course").filter(student=student)
        courses = [
            {
                "id":e.course.id,
                "name":e.course.name,
            }
            for e in enrollments
        ]
        # assignments
        assignments = Assignment.objects.filter(course__enrollments__student=student).distinct()
        submissions = Submission.objects.filter(student=student)
        submission_map= {
            s.assignment_id: s.status for s in submissions
        }
        assignment_data = []
        for assignment in assignments:
            assignment_data.append({
                "id":assignment.id,
                "title":assignment.title,
                "course":assignment.course.name,
                "status":submission_map.get(
                    assignment.id,"PENDING"
                )
            })
        
        # progress calculation
        total = assignments.count()
        completed = submissions.count()
        progress = int((completed/total) * 100) if total > 0 else 0
        return Response({
            "student":{
                "full_name":user.full_name,
                "email":user.email,
            },
            "mentor":mentor_data,
            "courses":courses,
            "assignments":assignment_data,
            "progress":progress,
        })


