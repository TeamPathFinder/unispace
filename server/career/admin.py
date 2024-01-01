from django.contrib import admin
from .models import Category, Resource


# Allow admin to add resources in Category
class ResourceInline(admin.StackedInline):
    model = Resource
    extra = 1


class CategoryAdmin(admin.ModelAdmin):
    inlines = [
        ResourceInline,
    ]
    list_display = (
        "name",
        "display_order",
    )
    list_editable = ("display_order",)


class ResourceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
    )


# Register your models here.
admin.site.register(Category, CategoryAdmin)
admin.site.register(Resource, ResourceAdmin)
