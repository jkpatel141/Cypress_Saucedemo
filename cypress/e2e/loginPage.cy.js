/// <reference types="cypress" />
import { LoginPage } from "../page/LoginPageMethods.js";

const loginPage = new LoginPage();
describe("Login Page functionalities", () => {
  beforeEach(() => {
    loginPage.loadPage();
  });

  it("Should login with valid credentials", () => {
    cy.fixture("userData.json").then((data) => {
      loginPage.enterUsernameAndPassword(
        data.validUser.userName,
        data.validUser.password
      );
      loginPage.submitLogin();
      cy.url().should("include", "/inventory.html");

      cy.sidePanel("Logout");
    });
  });

  it("Should not login with invalid credentials", () => {
    cy.fixture("userData.json").then((data) => {
      loginPage.enterUsernameAndPassword(
        data.inValidUser.userName,
        data.inValidUser.password
      );
      loginPage.submitLogin();
      loginPage.validateErrorMessage(
        "Epic sadface: Username and password do not match any user in this service"
      );
      loginPage.closeMessage();
    });
  });

  it("Should not login with invalid credentials", () => {
    cy.fixture("userData.json").then((data) => {
      loginPage.enterUsernameAndPassword(
        data.inValidUser.userName,
        data.inValidUser.password
      );
      loginPage.submitLogin();
      loginPage.validateErrorMessage(
        "Epic sadface: Username and password do not match any user in this service"
      );
      loginPage.closeMessage();
    });
  });

  it("Verify the accessing the login with the empty credentials", () => {
    loginPage.submitLogin();
    loginPage.validateErrorMessage("Epic sadface: Username is required");
    loginPage.closeMessage();
  });

  it("Validation message is displayed when login with the empty password", () => {
    cy.get('#user-name').type('checking')
    loginPage.submitLogin();
    loginPage.validateErrorMessage("Epic sadface: Password is required");
    loginPage.closeMessage();
  });
});
