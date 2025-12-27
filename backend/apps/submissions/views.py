from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from apps.profiles.models import StudentProfile
from apps.submissions.models import Submission
from apps.accounts.permissions import IsStudent
from .serializers import SubmissionCreateSerializer


# Create your views here.
class StudentSubmissionAPIView(APIView):
    permission_classes = [IsAuthenticated, IsStudent]

    def post(self, request):
        serializer = SubmissionCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        student = StudentProfile.objects.get(user=request.user)
        assignment_id = serializer.validated_data["assignment_id"]
        content = serializer.validated_data["content"]

        submission, created = Submission.objects.update_or_create(
            student=student, 
            assignment_id=assignment_id,
            defaults={"content": content},
        )

        return Response(
            {
                "message":"Assignment submitetd successfully",
                "status":submission.status
            },
            status = status.HTTP_201_CREATED
        )
