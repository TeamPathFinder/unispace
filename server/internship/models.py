from django.db import models

# Create your models here.
REGION = {
    "Canada": [
        ("Toronto", "Toronto"),
        ("Vancouver", "Vancouver"),
        ("Quebec", "Quebec City"),
        ("Ottawa", "Ottawa"),
        ("Canada Other", "Canada Other"),
    ],
    "USA": [
        ("New York", "New York"),
        ("San Francisco", "San Francisco"),
        ("Boston", "Boston"),
        ("USA Other", "USA Other"),
    ],
    "Korea": [("Seoul", "Seoul"), ("Korea Other", "Korea Other")],
    "Remote": [("Remote", "Remote")],
}

COUNTRY_CHOICES = [(country, country) for country in REGION.keys()]
CITY_CHOICES = [city for cities in REGION.values() for city in cities]

class Job(models.Model):
    id = models.AutoField(primary_key=True)
    job_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    country = models.CharField(max_length=50, choices=COUNTRY_CHOICES)
    city = models.CharField(max_length=50, choices=CITY_CHOICES)
    apply_link = models.URLField(max_length=300)
    description = models.TextField(default="")
    date_posted = models.IntegerField()
    view_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title + " - " + self.company
