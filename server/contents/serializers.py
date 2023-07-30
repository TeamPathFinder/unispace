from rest_framework import serializers
from .models import Content, TodayPick, QnA, Interview
from account.serializers import UserSerializer


class ContentsInfoSerializer(serializers.ModelSerializer):
    userInfo = UserSerializer(read_only=True, source="user")

    class Meta:
        model = Content
        fields = ["id", "title", "userInfo", "image", "views", "date", "category"]


class TodayPickSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodayPick
        fields = ["content", "date"]


class QnASerializer(serializers.ModelSerializer):
    class Meta:
        model = QnA
        fields = ["question", "answer", "image"]


class BasicInterviewSerializer(serializers.ModelSerializer):
    qnas = QnASerializer(many=True, read_only=True)

    class Meta:
        model = Interview
        fields = ["id", "one_line_intro", "more_intro", "qnas"]


class InterviewSerializer(serializers.ModelSerializer):
    interview = BasicInterviewSerializer(read_only=True)
    userInfo = UserSerializer(read_only=True, source="user")

    class Meta:
        model = Content
        fields = [
            "id",
            "title",
            "image",
            "views",
            "date",
            "category",
            "userInfo",
            "interview",
        ]