from django.db import models

# Create your models here.
class Job(models.Model):
    id = models.AutoField(primary_key=True)
    job_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    apply_link = models.URLField()
    date_posted = models.IntegerField()