/// <reference types="cypress"/>

export class LoginPage {
    username = '#username';
    password = '#password';
    submitButton = '#submit';

    visitPage(){
       cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    enterCredentails(username, password){
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.submitButton).click();
    }    

    verifyTheLogin(){
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
    }
}
export default LoginPage;