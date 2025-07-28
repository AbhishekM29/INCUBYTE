Feature: Account Creation and Login

  Scenario: User signs up successfully
    Given I visit the Magento signup page
    When I fill out the signup form and submit
    Then User should see the welcome message

  Scenario: User logs in with newly created account
    Given I visit the Magento login page
    When I enter valid login credentials
    Then User should be logged in successfully

  Scenario: Duplicate registration with same email
    Given I visit the Magento signup page
    When I fill the signup form with an already registered email
    Then An error message should appear for duplicate email

  Scenario: Signup with invalid email format
    Given I visit the Magento signup page
    When I fill the signup form with invalid email format
    Then A validation error should be shown for email field

  Scenario: Submit signup form with all fields blank
    Given I visit the Magento signup page
    When I submit the signup form without entering details
    Then Validation messages should be displayed for required fields
