import time
import random
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException
from urllib.parse import urlparse, parse_qs

from .models import Job

KEYWORD = "Intern"
REGION = {
    "Canada": ["Toronto", "Vancouver", "Québec City", "Ottawa"],
    "USA": [
        "New York",
        "San Francisco",
        "Boston",
    ],
    "Korea": ["Seoul"],
    "Remote": ["Remote"],
}
OTHER_REGION = {"Canada": "Canada Other", "USA": "USA Other", "Korea": "Korea Other"}


def scrape_google_jobs():
    # INITIALIZE DRIVER
    options = Options()
    options.headless = True
    options.add_argument(
        "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    )
    # options.add_argument("--no-sandbox")
    # options.add_argument("--disable-dev-shm-usage")
    driver = webdriver.Chrome(options=options)
    # Set wait time to 30 seconds
    wait = WebDriverWait(driver, 30)

    # OPEN GOOGLE JOB SEARCH
    for country in REGION:
        print(f"Starting {country}...")
        for city in REGION[country]:
            print(f"Searching {city}...")
            url = f"https://www.google.ca/search?q={KEYWORD}+{city}&ibp=htl;jobs&hl=en"
            driver.get(url=url)

            # WAIT FOR THE RESULTS TO LOAD
            print("WAITING FOR PAGE TO LOAD")
            wait.until(
                lambda d: d.find_element(
                    By.CLASS_NAME, "zxU94d.gws-plugins-horizon-jobs__tl-lvc"
                )
            )
            print("DONE LOADING")
            time.sleep(random.uniform(3, 10))

            # SCROLL TO THE END OF THE PAGE TO LOAD ALL RESULTS
            listing_section = driver.find_element(
                by=By.CLASS_NAME, value="zxU94d.gws-plugins-horizon-jobs__tl-lvc"
            )
            last_height = driver.execute_script(
                "return arguments[0].scrollHeight", listing_section
            )
            while True:
                # Scroll down to bottom
                driver.execute_script(
                    f"arguments[0].scrollTo(0, {last_height});", listing_section
                )
                time.sleep(random.uniform(2, 4))

                new_height = driver.execute_script(
                    " return arguments[0].scrollHeight", listing_section
                )
                if new_height == last_height:
                    break
                last_height = new_height

            print("DONE SCROLLING")
            wait.until(lambda d: d.find_element(By.CLASS_NAME, "whazf.bD1FPe"))

            # EXTRACT JOB LISTINGS
            jobs = driver.find_elements(by=By.CLASS_NAME, value="PwjeAc")
            print(f"Total job listing: {len(jobs)}")

            # EXTRACT JOB DETAILS
            for job in jobs:
                title = job.find_element(by=By.CLASS_NAME, value="BjJfJf.PUpOsf").text
                company = job.find_element(by=By.CLASS_NAME, value="vNEEBe").text

                location = job.find_element(by=By.CLASS_NAME, value="Qk80Jf").text
                location = location.split(",")

                # SET CITY TO "OTHER" IF NOT IN THE LIST
                this_city = city
                if city != "Remote" and location[0] not in REGION[country]:
                    this_city = OTHER_REGION[country]

                try:
                    posted_date_div = job.find_element(by=By.CLASS_NAME, value="LL4CDc")
                    posted_date = posted_date_div.find_element(
                        by=By.TAG_NAME, value="span"
                    ).get_attribute("textContent")
                except NoSuchElementException:
                    posted_date = ""

                # SET POSTED DATE TO INTEGER
                # 0 means "today"
                # 5 means "5 days ago"
                # For "unknown", set to 2 days ago
                if "days" in posted_date or "day" in posted_date:
                    posted_date = int(posted_date.split(" ")[0])
                elif "hours" in posted_date:
                    posted_date = 0
                else:
                    # If the date is unknown, set to 2 days ago
                    # So it does not appear as "today"
                    posted_date = 2

                # SCROLL TO THE JOB
                driver.execute_script("arguments[0].scrollIntoView(true);", job)

                # GET JOB ID TO AVOID DUPLICATES
                job.click()
                time.sleep(1)

                parsed_url = urlparse(driver.current_url)
                job_id = parse_qs(parsed_url.fragment)["htidocid"][0]

                # GET APPLY LINK
                job_details = driver.find_element(
                    by=By.CLASS_NAME, value="whazf.bD1FPe"
                )
                apply_section = job_details.find_element(
                    by=By.CLASS_NAME, value="EDblX.kjqWgb"
                )
                apply_link = apply_section.find_element(
                    by=By.TAG_NAME, value="a"
                ).get_attribute("href")

                # GET JOB DESCRIPTION
                # Expand the description if the button exists
                # try:
                #     expand_description_button = job_details.find_element(
                #         by=By.CLASS_NAME,
                #         value="mjkhcd.OSrXXb",
                #     )
                #     driver.execute_script(
                #         "arguments[0].scrollIntoView(true);", expand_description_button
                #     )
                #     expand_description_button.click()
                # except NoSuchElementException:
                #     pass
                # description = job_details.find_element(
                #     by=By.CLASS_NAME,
                #     value="HBvzbc",
                # ).text

                print(f"{title} - {company}")

                # CHECK IF JOB IS VALID
                if (title == "") or (company == "") or (apply_link == ""):
                    print("Missing details")
                    continue

                # SAVE JOB TO DATABASE
                if Job.objects.filter(job_id=job_id).exists():
                    print("Job already exists")
                    continue

                Job.objects.create(
                    job_id=job_id,
                    title=title,
                    company=company,
                    country=country,
                    city=this_city,
                    apply_link=apply_link,
                    # description=description,
                    date_posted=posted_date,
                )

            print(f"Finished searching {city} {country}!")
            print("=====================================")

    # CLOSE THE DRIVER
    driver.quit()
