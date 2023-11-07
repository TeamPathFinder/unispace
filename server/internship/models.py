from django.db import models

# Create your models here.
REGION = {
    "Canada": ["Toronto", "Vancouver", "Québec City", "Ottawa"],
    "United States": ["New York", "San Francisco", "Boston"],
    "Korea": ["Seoul"],
    "Remote": ["Remote"],
}

COUNTRY_CHOICES = [(country, country) for country in REGION.keys()]
CITY_CHOICES = [(city, city) for cities in REGION.values() for city in cities]

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