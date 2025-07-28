import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the Magento login page", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
});

When("I enter valid login credentials", () => {
  // Read email and password from file
  cy.readFile("cypress/fixtures/temp_user.json").then(({ email, password }) => {
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#send2").click();
  });
});

Then("User should be logged in successfully", () => {
  cy.contains("Welcome").should("exist");
});
