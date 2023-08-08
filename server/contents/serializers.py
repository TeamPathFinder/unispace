from rest_framework import serializers
from .models import Content, TodayPick, QnA, Interview, ContentCategory
from account.serializers import UserSerializer


class ContentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentCategory
        fields = ["id", "name"]


class ContentsInfoSerializer(serializers.ModelSerializer):
    userInfo = UserSerializer(read_only=True, source="user")
    category = ContentCategorySerializer(read_only=True)

    class Meta:
        model = Content
        fields = ["id", "title", "userInfo", "image", "views", "date", "category"]


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
    category = ContentCategorySerializer(read_only=True)

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


# Legacy Main Page (deprecated)
class TodayPickContentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ["id", "title", "image"]


class TodayPickSerializer(serializers.ModelSerializer):
    content = TodayPickContentsSerializer(read_only=True)

    class Meta:
        model = TodayPick
        fields = ["content"]
