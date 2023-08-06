from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, exceptions

from .models import Content, TodayPick, ContentCategory
from .serializers import (
    ContentsInfoSerializer,
    TodayPickSerializer,
    InterviewSerializer,
)


class GetTodayPickView(APIView):
    def get(self, request):
        """Return today's pick content: the newest instance."""
        try:
            newest_instance = TodayPick.objects.latest("date")
            serializer = TodayPickSerializer(newest_instance)
            return Response(serializer.data)
        except TodayPick.DoesNotExist:
            return Response(
                {"message": "No records found."}, status=status.HTTP_404_NOT_FOUND
            )


class PopularContentsListView(ListAPIView):
    serializer_class = ContentsInfoSerializer

    def get_queryset(self):
        """Return list of requested number of contents ordered by view and date."""
        allContents = Content.objects.all()
        # default number of contents to return is 12
        num_contents = self.request.query_params.get("num", 12)

        # If num_contents is "all", return all contents
        if num_contents == "all":
            result = allContents.order_by("-views", "-date")
        # If num_contents is not a number, return empty list
        elif not num_contents.isnumeric() or int(num_contents) <= 0:
            result = []
        else:
            result = (allContents.order_by("-views", "-date"))[: int(num_contents)]
        return result


class MainPageResultsSetPagination(PageNumberPagination):
    """Pagination for main page contents list view."""

    page_size = 6
    page_size_query_param = "page_size"
    max_page_size = 100


class ContentsListView(ListAPIView):
    serializer_class = ContentsInfoSerializer
    pagination_class = MainPageResultsSetPagination

    def get_queryset(self):
        """Return list of contents with corresponding category ordered by date."""
        allContents = Content.objects.all()
        category = self.request.query_params.get("legacy_category", None)
        if category is not None:
            result = allContents.filter(category=category).order_by("-date")
        else:
            result = allContents.order_by("-date")
        return result


class InterviewDetailView(RetrieveAPIView):
    serializer_class = InterviewSerializer
    queryset = Content.objects.all()
    lookup_field = "id"

    def get_object(self):
        content = super().get_object()
        # Prefetch the related interview and its qnas
        content.interview = content.interview_set.first()

        # Increment the view count
        # TODO: Use Cookie to prevent multiple view count increment
        content.views += 1
        content.save()

        return content


class BlogContentsListView(ListAPIView):
    serializer_class = ContentsInfoSerializer
    # TODO: Activate pagination when the number of blog contents increases
    # pagination_class = MainPageResultsSetPagination

    def get_queryset(self):
        """Return list of contents with corresponding category ordered by date."""
        allContents = Content.objects.all()
        category = self.request.query_params.get("category", None)

        if category is None:
            raise exceptions.ParseError("category is required")
        elif category == "all":
            result = allContents.order_by("-date")
        else:
            try:
                categoryInstance = ContentCategory.objects.get(name=category)
            except ContentCategory.DoesNotExist:
                raise exceptions.NotFound("Category does not exist")

            result = allContents.filter(category=categoryInstance).order_by("-date")

        return result
