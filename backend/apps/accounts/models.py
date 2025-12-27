from django.db import models
from django.contrib.auth.models import AbstractUser

# Models
class User(AbstractUser):
    class Roles(models.TextChoices):
        STUDENT = "STUDENT", "Student"
        MENTOR = "MENTOR", "Mentor"

    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=Roles.choices)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

    def __str__(self):
        return self.email
