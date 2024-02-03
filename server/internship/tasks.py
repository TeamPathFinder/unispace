from celery import shared_task

from .scraper import scrape_google_jobs
from .models import Job
from django.db.models import F


@shared_task
def run_scraper():
    # Add one date to all jobs
    Job.objects.all().update(date_posted=F("date_posted") + 1)

    # Scrape jobs and save to database
    scrape_google_jobs()

    # Remove jobs older than 30 days
    Job.objects.filter(date_posted__gte=30).delete()
