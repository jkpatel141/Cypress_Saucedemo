// This file is setup used for the global intercept command for the network call

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

beforeEach(() => {
    cy.intercept('https://submit.backtrace.io/**', {statusCode : 204});
});