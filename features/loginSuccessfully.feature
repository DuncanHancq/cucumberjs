Feature: Login success behavior

    Scenario: Trying to log in with correct credentials
        When Access to login page
            And Insert correct username
            And Insert correct password
            And Submit form
        Then Redirected to admin page
