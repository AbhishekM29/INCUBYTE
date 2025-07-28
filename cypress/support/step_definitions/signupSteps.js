import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the Magento signup page", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});

When("I fill out the signup form and submit", () => {
  const randomStr = Math.random().toString(36).substring(2, 8);
  const email = `user_${randomStr}@test.com`;
  const password = "Test@1234";

  cy.get("#firstname").type("Test");
  cy.get("#lastname").type("User");
  cy.get("#email_address").type(email);
  cy.get("#password").type(password);
  cy.get("#password-confirmation").type(password);

  // Save email and password for login
  cy.writeFile("cypress/fixtures/temp_user.json", { email, password });

  cy.get("button[title='Create an Account']").click();
});

Then("User should see the welcome message", () => {
  cy.contains("Thank you for registering").should("exist");
});
