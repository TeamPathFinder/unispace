from celery import shared_task
from datetime import datetime, timedelta
import boto3
import json

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


@shared_task
def check_s3_for_new_jobs():
    s3_client = boto3.client("s3")
    bucket_name = "unispace-job-scrapping"
    today = datetime.now().strftime("%Y-%m-%d")

    file_names = [
        f"jobs_usa_{today}.json",
        f"jobs_canada_{today}.json",
        f"jobs_korea_{today}.json",
    ]

    total_new_jobs = 0
    for file_name in file_names:
        try:
            print(f"Processing {file_name}...")
            obj = s3_client.get_object(Bucket=bucket_name, Key=file_name)
            file_content = obj["Body"].read().decode("utf-8")
            jobs_data = json.loads(file_content)

            for job in jobs_data:
                if Job.objects.filter(job_id=job["job_id"]).exists():
                    continue
                else:
                    Job.objects.create(
                        job_id=job["job_id"],
                        title=job["title"],
                        company=job["company"],
                        country=job["country"],
                        city=job["city"],
                        apply_link=job["apply_link"],
                        posted_date=datetime.strptime(
                            job["posted_date"], "%Y-%m-%d"
                        ).date(),
                    )
                    total_new_jobs += 1

        except s3_client.exceptions.NoSuchKey:
            print(f"No jobs found for {file_name}")
            continue
        except Exception as e:
            print(f"Error: {e}")
            continue

    print(f"{total_new_jobs} new jobs were added to the database.")

    # Delete jobs that are older than 30 days
    # Calculate the date 30 days ago from today
    thirty_days_ago = datetime.now() - timedelta(days=30)

    # Delete jobs that are older than 30 days
    print("Deleting jobs older than 30 days")
    deleted_count, _ = Job.objects.filter(posted_date__lte=thirty_days_ago).delete()
    print(f"{deleted_count} jobs were deleted.")
