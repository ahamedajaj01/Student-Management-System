from rest_framework import serializers
from apps.submissions.models import Submission, Assignment

class SubmissionCreateSerializer(serializers.ModelSerializer):
    assignment_id = serializers.IntegerField(write_only=  True)

    class Meta:
        model = Submission
        fields = ("assignment_id","content")
    
    def validate_assignment_id(self,value):
        if not Assignment.objects.filter(id=value).exists():
            raise serializers.ValidationError("Invalid assignment")
        return value