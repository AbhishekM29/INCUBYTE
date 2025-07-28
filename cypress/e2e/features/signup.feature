Feature: Account Creation and Login

  Scenario: User signs up successfully
    Given I visit the Magento signup page
    When I fill out the signup form and submit
    Then User should see the welcome message

  Scenario: User logs in with newly created account
    Given I visit the Magento login page
    When I enter valid login credentials
    Then User should be logged in successfully

Scenario: User attempts to register with an existing email
  Given I visit the Magento signup page
  When I try to register using an existing email
  Then An error message should be displayed about the existing email
 
Scenario: User attempts signup with invalid email format
    Given I visit the Magento signup page
    When I fill out the signup form with an invalid email and submit
    Then An email format validation error should be displayed


