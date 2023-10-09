from django.urls import path
from .views import InternshipList, IncreaseViewCount

urlpatterns = [
    path(
        "jobs-list/",
        InternshipList.as_view(),
        name="popular-contents-list",
    ),
    path(
        "increase-view-count/", IncreaseViewCount.as_view(), name="increase-view-count"
    ),
]
