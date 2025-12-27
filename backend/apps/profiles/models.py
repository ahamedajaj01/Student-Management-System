from django.db import models
from django.conf import settings

# Create your models here.
class MentorProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="mentor_profile"
                                )
    def __str__(self):
        return f"Mentor: {self.user.email}"
    
class StudentProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="student_profile"
    )
    mentor = models.ForeignKey(
        MentorProfile,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="students"
    )
    def __str__(self):
        return f"Student: {self.user.email}"