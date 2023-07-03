from rest_framework import serializers
from .models import Content, TodayPick
from account.serializers import UserSerializer


class ContentsInfoSerializer(serializers.ModelSerializer):
    userInfo = UserSerializer(read_only=True, source="user")

    class Meta:
        model = Content
        fields = ["id", "title", "userInfo", "image", "views", "date"]

class TodayPickSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodayPick
        fields = ["content", "date"]