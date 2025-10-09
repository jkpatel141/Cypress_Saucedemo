export class LoginPage {
  usernameInput = "#user-name";
  passwordInput = "#password";
  loginButton = "#login-button";
  errorMessage = '[data-test="error"]';

  // To load the login page
  loadPage() {
    cy.visit("/");
  }

  /**
   * This method will enter username and password
   * @param {*} username
   * @param {*} password
   */
  enterUsernameAndPassword(username, password) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
  }

  submitLogin() {
    cy.get(this.loginButton).click();
  }

  validateErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should("have.text", expectedMessage);
  }

  closeMessage(expectedMessage) {
    cy.get('[data-test="error-button"]').click();
    cy.get('[data-test="error"]').should('not.exist');
  }
}
export default new LoginPage();
