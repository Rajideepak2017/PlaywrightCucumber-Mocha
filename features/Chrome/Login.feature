@chromium
Feature:Login Automation Playwright
@web
Scenario: Login function with data inside the scripts

    Given the  user launch the website
    When the user provide "student" and "Password1f23"
    Then the user verifies the new page contains "https://practicetestautomation.com/logged-in-successfully/"
    Then the user Verifies new page contains expected text "Congratulations"
    Then the user verifies button Log out is displayed on the new page


Scenario: Login function with  data from json

    Given the  user hit the website
    When the user provide username and password
    Then the user verifies the new page contains logged-in-successfully URL
    Then the user Verifies new page contains expected text Congratulations
    Then the user verifies button Log out is displayed on the success page 


Scenario Outline: Login function with wrong details

    Given user opens the page
    When the user provide incorrect "<username>" and "<password>" and submit the page
    Then user verify error message is displayed

    Examples: 
    |username|password|
    |incorrectUser|Password123|