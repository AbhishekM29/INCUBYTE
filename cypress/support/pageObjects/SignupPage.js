import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the Magento signup page", () => {
  cy.visit("/customer/account/create/");
});

When("I enter valid registration details", function () {
  const email = `user_${Date.now()}@mailinator.com`;
  cy.wrap(email).as("generatedEmail");

  cy.get("#firstname").type("Abhi");
  cy.get("#lastname").type("Tester");
  cy.get("#email_address").type(email);
  cy.get("#password").type("Test@1234");
  cy.get("#password-confirmation").type("Test@1234");
});

When("I click on the Create Account button", () => {
  cy.get('button[title="Create an Account"]').click();
});

Then("I should see the account dashboard", () => {
  cy.contains("My Account").should("exist");
});

Given("I visit the Magento login page", () => {
  cy.visit("/customer/account/login/");
});

When("I enter valid login credentials", function () {
  cy.get("@generatedEmail").then((email) => {
    cy.get("#email").type(email);
    cy.get("#pass").type("Test@1234");
  });
});

When("I click on the Login button", () => {
  cy.get("#send2").click();
});

Then("I should see the account dashboard", () => {
  cy.contains("My Account").should("exist");
});
Given("I visit the Magento signup page", () => {
  cy.visit("/customer/account/create/");
});

Given("I visit the Magento login page", () => {
  cy.visit("/customer/account/login/");
});

When("I click on the Create Account button", () => {
  cy.get('button[title="Create an Account"]').click();
});

When("I click on the Login button", () => {
  cy.get("#send2").click();
});

Then("I should see the account dashboard", () => {
  cy.contains("My Account").should("exist");
});
