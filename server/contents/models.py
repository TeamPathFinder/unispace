from django.db import models
from account.models import User

class Content(models.Model):
    """Content(Interview) to be displayed on the website."""

    CATEGORY_CHOICES = [
        ('Life Space', 'Life Space'),
        ('Work Space', 'Work Space'),
        ('Study Space', 'Study Space'),
        ('Team Space', 'Team Space'),
    ]
    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Actual content of the interview 
    # TODO: Update the field type to be more appropriate
    content = models.TextField(default="")
    image = models.ImageField(upload_to="images/content/", null=True, blank=True)

    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    coffeeChatRequests = models.IntegerField(default=0)
    category = models.CharField(max_length=60, choices=CATEGORY_CHOICES, null=True, blank=True)
    isTodayPick = models.BooleanField(null=False, default=False)

    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
