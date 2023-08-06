from django.urls import path
from .views import (
    PopularContentsListView,
    GetTodayPickView,
    ContentsListView,
    InterviewDetailView,
    BlogContentsListView,
    ContentsCategoryListView,
)

urlpatterns = [
    # Previous Main Page (deprecated)
    path(
        "popular-contents/",
        PopularContentsListView.as_view(),
        name="popular-contents-list",
    ),
    path("today-pick/", GetTodayPickView.as_view(), name="today-pick-list"),
    path("contents-list/", ContentsListView.as_view(), name="contents-list"),
    # Blog Page
    path("blogs/", BlogContentsListView.as_view(), name="blogs-list"),
    path(
        "categories/",
        ContentsCategoryListView.as_view(),
        name="content-categories-list",
    ),
    # Interview Page
    path(
        "interviews/<int:id>/", InterviewDetailView.as_view(), name="interview-detail"
    ),
]
