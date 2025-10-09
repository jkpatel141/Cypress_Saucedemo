// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "../page/LoginPageMethods";
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('sidePanel', (text) => {
    cy.get('#react-burger-menu-btn').click().then(() => {
      cy.get('.bm-menu-wrap').find('.bm-menu').contains(text).should('be.visible').click()
    })
})

Cypress.Commands.add('login', (username, password) => {
const importLogin = new LoginPage(); 
importLogin.enterUsernameAndPassword(username,password);
importLogin.submitLogin()
})

Cypress.Commands.add('generateFile',(prefix = 'file') => {
  const date = Date.now();
  const randomNumber = `${Math.randomNumber()}.txt`

  return `${prefix}_${date}_${randomNumber}`
})