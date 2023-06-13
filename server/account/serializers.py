from rest_framework import serializers
from .models import User

class RegisterUserSerializer(serializers.ModelSerializer):
    # Write only means that the field will not be returned in the response
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'nickname', 'school', 'country', 'major']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user
