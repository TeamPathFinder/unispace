from django.db import models
from account.models import User


class Content(models.Model):
    """Content(Interview) to be displayed on the website."""

    # Choices for legacy_category (deprecated)
    CATEGORY_CHOICES = [
        ("Life Space", "Life Space"),
        ("Work Space", "Work Space"),
        ("Study Space", "Study Space"),
        ("Team Space", "Team Space"),
    ]

    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    image = models.ImageField(upload_to="images/content/", null=True, blank=True)

    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    coffeeChatRequests = models.IntegerField(default=0)

    # (deprecated)
    legacy_category = models.CharField(
        max_length=60, choices=CATEGORY_CHOICES, null=True, blank=True
    )

    category = models.ForeignKey(
        "ContentCategory", on_delete=models.SET_NULL, null=True, blank=True
    )

    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class ContentCategory(models.Model):
    """Category of content."""

    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Content Category"
        verbose_name_plural = "Content Categories"

    def __str__(self):
        return self.name


class TodayPick(models.Model):
    """Today's pick for the website."""

    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.content.title


class Interview(models.Model):
    """Interview to be displayed on the website."""

    content = models.OneToOneField(Content, on_delete=models.CASCADE, related_name="interview")
    one_line_intro = models.CharField(max_length=200)
    more_intro = models.TextField(default="")

    def __str__(self):
        return f"Interview: {self.content.title}"


class QnA(models.Model):
    """Model to store individual QnA pairs."""

    interview = models.ForeignKey(
        Interview, on_delete=models.CASCADE, related_name="qnas"
    )
    question = models.CharField(max_length=200)
    answer = models.TextField(default="")
    image = models.ImageField(upload_to="images/qna/", null=True, blank=True)

    def __str__(self):
        return self.question
