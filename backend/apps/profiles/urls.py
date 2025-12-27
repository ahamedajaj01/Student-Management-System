from django.urls import path
from . import views

urlpatterns = [
    path("dashboard/", views.StudentDashboardAPIView.as_view(), name="student-dashboard"),
]