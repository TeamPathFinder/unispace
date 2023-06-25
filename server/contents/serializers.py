from rest_framework import serializers
from .models import Content
from account.serializers import UserSerializer


class ContentsInfoSerializer(serializers.ModelSerializer):
    userInfo = UserSerializer(read_only=True, source="user")

    class Meta:
        model = Content
        fields = ["id", "title", "userInfo", "image", "views", "date"]
