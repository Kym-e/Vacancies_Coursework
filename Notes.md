# Web App Dev Coursework
Due: 24.04.2023 @ 12:00

---
## Goal
Develop web app to provide users with recent UK vacancies and 
contains a salary calculator. There should be 3 web pages:
* Homepage 
* Pay Calculator
* Vacancy Search

Additional Criteria:
* Wireframe at least desktop and mobile (media css)
* Descriptions and titles for all pages
* Input fields should have warnings for incorrect data
* No sample text
* Use semantic markup
* Comments for days
* Works on Chrome and Firefox
* Validate HTML and CSS and screenshot results
  * https://validator.w3.org/
  * https://jigsaw.w3.org/css-validator/

---
### 1. Homepage
*Filename: index.html*
* Main landing page for users
* Include related image
* Include general information about the application and 
its functions

### 2.  Vacancy Search
*Filename: vacancies.html*
* API request
* list of recent vacancies
* search bar to search vacancies - top 10 results
* Sort - most recent first
* Users are shown title - click to expand for more information

API endpoints and documentation
* API Documentation: http://api.lmiforall.org.uk/
* First API Endpoint (Vacancies): http://api.lmiforall.org.uk/api/v1/vacancies/search
* Second API Endpoint (Job Information): http://api.lmiforall.org.uk/api/v1/soc/search



### 3. Pay Calculator
*Filename: pay.html*
* Payment calculator based on users wages and hours worked per week
* Form
  * User input:
    * wages in GBP
    * select year/month/week/hour
    * hours worked
    * job title
  * Output:
    * Wages
      * Yearly
      * Monthly
      * Weekly
      * Hourly
    * Update separate section on site showing:
    * *This should be initially hidden until form submitted*
    * *Results should be appended - not replaced!*
      * Job title
      * Working 'x' hours per week for 'wage entered' per 'Time' 
      breaks down into:
        * wages per hour
        * wages per week
        * wages per month
        * wages per year
  * Click on job title to open new tab to the vacancies.html and
  showing vacancies that match the job title