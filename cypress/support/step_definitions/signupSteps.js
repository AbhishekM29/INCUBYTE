import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../pageObjects/SignupPage";

const signupPage = new SignupPage();
let generatedEmail = "";

function generateRandomEmail() {
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `testuser_${randomStr}@example.com`;
}

// TC01 – Successful Signup
Given("I visit the Magento signup page", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});

When("I fill out the signup form and submit", () => {
  generatedEmail = generateRandomEmail();
  cy.wrap(generatedEmail).as("generatedEmail");

  signupPage.fillFirstName("Test");
  signupPage.fillLastName("User");
  signupPage.fillEmail(generatedEmail);
  signupPage.fillPassword("Test@1234");
  signupPage.fillConfirmPassword("Test@1234");
  signupPage.submitForm();
});

Then("User should see the welcome message", () => {
  cy.get(".logged-in").should("contain", "Welcome");
});

// TC03 – Duplicate Registration Attempt
When("I try to register using an existing email", () => {
  const existingEmail = "existinguser@example.com"; // ← replace with your real existing email
  signupPage.fillFirstName("Test");
  signupPage.fillLastName("User");
  signupPage.fillEmail(existingEmail);
  signupPage.fillPassword("Test@1234");
  signupPage.fillConfirmPassword("Test@1234");
  signupPage.submitForm();
});

Then("An error message should be displayed about the existing email", () => {
  signupPage.getErrorAlert().should(
    "contain",
    "There is already an account with this email address"
  );
});
// -------- TC04: Invalid Email Format --------
//
When('I fill out the signup form with an invalid email and submit', () => {
  const invalidEmail = 'invalidemail@';
  const password = 'Test@1234';

  cy.get('#firstname').type('Invalid');
  cy.get('#lastname').type('Email');
  cy.get('#email_address').type(invalidEmail);
  cy.get('#password').type(password);
  cy.get('#password-confirmation').type(password);
  cy.get('button[title="Create an Account"]').click();
});

Then('An email format validation error should be displayed', () => {
  cy.get('#email_address-error')
    .should('be.visible')
    .and('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).');
});
