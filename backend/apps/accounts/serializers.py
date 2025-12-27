import random
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.db import transaction
from rest_framework_simplejwt.tokens import RefreshToken


from apps.profiles.models import StudentProfile, MentorProfile

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    con_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "username",
            "first_name",
            "last_name",
            "password",
            "con_password",
            # "role",
        )

    # def validate_role(self, value):
    #     if value not in [User.Roles.STUDENT, User.Roles.MENTOR]:
    #         raise serializers.ValidationError("Invalid role")
    #     return value

    # validate password
    def validate(self, attrs):
        if attrs["password"] != attrs["con_password"]:
            raise serializers.ValidationError("Passwords do not match")
        return attrs

    # atomic transaction prevent partial data creation
    @transaction.atomic
    def create(self, validated_data):
        validated_data.pop("con_password")
        password = validated_data.pop("password")
        # role = validated_data.get("role")
        # 🔒 FORCE ROLE SERVER-SIDE
        user = User.objects.create_user(
            **validated_data,
            role=User.Roles.STUDENT,
        )
        # user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        # Create StudentProfile
        student_profile = StudentProfile.objects.create(user=user)

        # Create profile based on role
        # if role == User.Roles.STUDENT:
        #     student_profile = StudentProfile.objects.create(user=user)

        # mentor auto-assignment
        mentors = MentorProfile.objects.all()
        if mentors.exists():
            mentor = random.choice(mentors)
            student_profile.mentor = mentor
            student_profile.save()
        # elif role == User.Roles.MENTOR:
        #     MentorProfile.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        user = authenticate(
            request=self.context.get("request"), email=email, password=password
        )
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        refresh = RefreshToken.for_user(user)
        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }
        
      
