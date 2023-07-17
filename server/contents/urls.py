from django.urls import path
from .views import PopularContentsListView, GetTodayPickView, ContentsListView

urlpatterns = [
    path(
        "popular-contents/",
        PopularContentsListView.as_view(),
        name="popular-contents-list",
    ),
    path("today-pick/", GetTodayPickView.as_view(), name="today-pick-list"),
    path("contents-list/", ContentsListView.as_view(), name="contents-list"),
]
