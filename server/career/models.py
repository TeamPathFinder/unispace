from django.db import models


class Category(models.Model):
    """Category of resource."""

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Resource(models.Model):
    """Resource to be displayed on the website."""

    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    link = models.URLField()
    image = models.ImageField(upload_to="images/resources/", null=True, blank=True)
    hashtags = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.category.name + " - " + self.title
