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
    image = models.ImageField(
        upload_to="images/resources/",
        default="images/resources/default.jpeg",
        null=True,
        blank=True,
    )
    hashtags = models.CharField(max_length=100, null=True, blank=True)
    display_order = models.IntegerField(
        default=0, help_text="Set the display order of the resources"
    )

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self):
        return f"{self.category.name} - {self.title}"
