from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import Job
from .serializers import JobSerializer


class InternshipPageSetPagination(PageNumberPagination):
    """Pagination for internship page contents list view."""

    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 100


class InternshipList(ListAPIView):
    """Return list of internship ordered by date."""

    serializer_class = JobSerializer
    queryset = Job.objects.all()
    pagination_class = InternshipPageSetPagination

    filter_backends = [SearchFilter, OrderingFilter, DjangoFilterBackend]
    search_fields = ["title", "company"]
    filterset_fields = ["country", "city"]
    ordering_fields = ["date_posted"]


    @swagger_auto_schema()
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
