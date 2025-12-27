from django.db import models
from apps.profiles.models import StudentProfile

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name}"
    
class Enrollment(models.Model):
    student= models.ForeignKey(
        StudentProfile,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )
    
    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("student","course")
    
    def __str__(self):
        return f"{self.student.user.email} -> {self.course.name}"