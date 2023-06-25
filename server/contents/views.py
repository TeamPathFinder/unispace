from rest_framework.generics import ListAPIView

from .models import Content
from .serializers import ContentsInfoSerializer


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
