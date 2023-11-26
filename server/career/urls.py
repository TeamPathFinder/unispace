from django.urls import path
from .views import CategoryListView, ResourceListView

urlpatterns = [
    path(
        "resources/",
        ResourceListView.as_view(),
        name="career-resources-list",
    ),
    path("categories/", CategoryListView.as_view(), name="career-categories-list"),
]