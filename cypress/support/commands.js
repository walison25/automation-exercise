// ***********************************************
//commands: Definimos uma função e ela consegue ser localizada em qualquer parte do projeto (reuso de funções)
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

Cypress.Commands.add('login', (email, password) => {

    cy.session([email, password], () => { //cria e armazena os dados da session
        cy.visit('/login')
        cy.get('[data-qa="login-email"]').should('be.visible').type(email)
        cy.get('[data-qa="login-password"]').should('be.visible').type(password)
        cy.get('[data-qa="login-button"]').should('be.visible').contains('Login').click()

    })
    

})