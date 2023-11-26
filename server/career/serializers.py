from rest_framework import serializers
from .models import Category, Resource


class CategorySerializer(serializers.ModelSerializer):
    resources = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Category
        fields = ["id", "name", "resources"]

    def get_resources(self, obj):
        resources = obj.resource_set.all()
        return ResourceSerializer(resources, many=True).data


class ResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resource
        fields = ["id", "title", "description", "link", "image", "hashtags"]
