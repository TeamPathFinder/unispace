from celery import shared_task
from datetime import datetime, timedelta

from .scraper import scrape_google_jobs
from .models import Job
from django.db.models import F


@shared_task
def run_scraper():
    # Scrape jobs and save to database
    scrape_google_jobs()

    # Calculate the date 30 days ago from today
    thirty_days_ago = datetime.now() - timedelta(days=30)

    # Delete jobs that are older than 30 days
    print("Deleting jobs older than 30 days")
    deleted_count, _ = Job.objects.filter(posted_date__lte=thirty_days_ago).delete()
    print(f"{deleted_count} jobs were deleted.")
