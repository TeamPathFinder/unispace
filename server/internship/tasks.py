from celery import shared_task

from .scraper import scrape_google_jobs
from .models import Job

@shared_task
def run_scraper():
    # Remove all jobs
    Job.objects.all().delete()

    # # Scrape jobs and save to database
    scrape_google_jobs()
