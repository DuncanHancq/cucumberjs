Feature: Login failure behavior

    Scenario: Trying to log in with wrong credentials
        When Access to login page
            And Insert an existing username
            And Insert wrong password
            And Try submitting form
        Then Not redirected to admin page
