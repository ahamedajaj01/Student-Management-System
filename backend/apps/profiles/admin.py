from django.contrib import admin
from .models import MentorProfile, StudentProfile

# Register your models here.
admin.site.register(MentorProfile)
admin.site.register(StudentProfile)
