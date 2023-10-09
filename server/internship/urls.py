from django.urls import path
from .views import InternshipList

urlpatterns = [
    # Previous Main Page (deprecated)
    path(
        "jobs-list/",
        InternshipList.as_view(),
        name="popular-contents-list",
    )
]
