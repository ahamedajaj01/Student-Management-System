from django.db import models
from apps.academics.models import Course
from apps.profiles.models import StudentProfile

# Create your models here.
class Assignment(models.Model):
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="assignments"
    )
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    due_date=models.DateTimeField(null=True,blank=True)

    def __str__(self):
        return f"{self.course.name} - {self.title}"

class Submission(models.Model):
    class Status(models.TextChoices):
        SUBMITTED = "SUBMITTED","Submitted"
        REVIEWED = "REVIEWED", "Reviewed"
    
    student = models.ForeignKey(
        StudentProfile,
        on_delete=models.CASCADE,
        related_name="submissions"
    )
    assignment = models.ForeignKey(
        Assignment,
        on_delete=models.CASCADE,
        related_name="submissions"
    )
    content = models.TextField()
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.SUBMITTED,
    )
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("student","assignment")
    
    def __str__(self):
        return f"{self.student.user.email} -> {self.assignment.title}"


