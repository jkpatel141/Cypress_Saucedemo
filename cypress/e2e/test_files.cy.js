/// <reference types="cypress"/>

describe("To test all window actions", () => {
  it("To select the value from the drop down", () => {
    cy.visit("https://playground.bondaracademy.com/pages/iot-dashboard");

    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    cy.get("button.select-button", {timeout : 10000}).click({ multiple: true });
    cy.get("nb-option").contains("top-right").click();
    cy.get("button.select-button").contains("top-right");
  });

  it("Change the theme of website from down  ", () => {
    cy.visit("https://playground.bondaracademy.com/pages/iot-dashboard");
    //cy.get('button.select-button.bottom').click({multiple:true});

    cy.get('nb-select[status="primary"] button.select-button')
      .click()
      .then(() => {
        cy.get("nb-option").contains("Dark").click();
      });
  });

  it("Verify the window:alert in browser", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#alertButton");

    cy.on("window:alert", (text) => {
      expect(text).to.eq("You clicked a button");
    });

    cy.get("#alertButton").click();
  });

  it("Verify the window:confirm in browser", () => {
    cy.visit("https://demoqa.com/alerts");

    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Do you confirm action?");
      return true;
    });
    cy.get("#confirmButton").click();
    //take123
    //Test@2025
  });
  it("Login to the account and intercept wait for the same", () => {

    cy.intercept('POST','**Account/v1/Login').as('login');
    cy.visit("https://demoqa.com/login");
    
    cy.get('#userName').type('take123');
    cy.get('#password').type('Test@2025');
    cy.get('#login').click();

    cy.wait('@login').then((check) => {
      expect(check.response.statusCode).to.eq(200);
      expect(check.response.body).to.have.property('username','take123');
      expect(check.response.body).to.have.property('password','Test@2025');
      expect(check.response.body).to.not.be.empty;
    });
    //take123
    //Test@2025
  });
});
