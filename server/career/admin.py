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


# Register your models here.
admin.site.register(Category, CategoryAdmin)
admin.site.register(Resource)