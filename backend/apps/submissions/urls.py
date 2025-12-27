from django.urls import path
from . import views

urlpatterns = [
    path("submissions/", views.StudentSubmissionAPIView.as_view(), name="student-submit"),
]
