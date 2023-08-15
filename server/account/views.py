from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegisterUserSerializer
from drf_yasg.utils import swagger_auto_schema


class RegisterView(APIView):
    @swagger_auto_schema(
        request_body=RegisterUserSerializer,
    )
    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {
                    "user": serializer.data,
                    "message": f"User {user.name} was created successfully",
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
