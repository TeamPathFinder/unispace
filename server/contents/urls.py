from django.urls import path
from .views import PopularContentsListView

urlpatterns = [
    path(
        "popular-contents/",
        PopularContentsListView.as_view(),
        name="popular-contents-list",
    )
]
