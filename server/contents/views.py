from django.shortcuts import render
from rest_framework import generics, APIView
from .serializers import ContentSerializer
from .models import Content
# Create your views here.

class ListContentView(generics.ListCreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

class GetTodayPickView(APIView):
    queryset = Content.objects.filter(isTodayPick = True)
    

