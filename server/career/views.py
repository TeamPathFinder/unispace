from rest_framework.generics import ListAPIView

from django.shortcuts import render

from .models import Category, Resource
from .serializers import CategorySerializer, ResourceSerializer


# Create your views here.
class CategoryListView(ListAPIView):
    """Return list of categories with resources in each category."""

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ResourceListView(ListAPIView):
    """Return list of resources."""

    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
