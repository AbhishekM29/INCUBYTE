class SignupPage {
  fillFirstName(firstName) {
    cy.get("#firstname").clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#lastname").clear().type(lastName);
  }

  fillEmail(email) {
    cy.get("#email_address").clear().type(email);
  }

  fillPassword(password) {
    cy.get("#password").clear().type(password);
  }

  fillConfirmPassword(password) {
    cy.get("#password-confirmation").clear().type(password);
  }

  submitForm() {
    cy.get("button[title='Create an Account']").click();
  }

  getErrorAlert() {
    return cy.get(".message-error div");
  }
}

export default SignupPage;
