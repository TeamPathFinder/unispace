from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from .models import Content, TodayPick
from .serializers import ContentsInfoSerializer, TodayPickSerializer


class GetTodayPickView(ListAPIView):
    serializer_class = TodayPickSerializer
    queryset = TodayPick.objects.all()


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
        category = self.request.query_params.get("category", None)
        if category is not None:
            result = allContents.filter(category=category).order_by("-date")
        else:
            result = allContents.order_by("-date")
        return result
