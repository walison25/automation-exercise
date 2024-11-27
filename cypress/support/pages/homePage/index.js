const elem = require('./elements').ELEMENTS;

class HomePage{


    acessarUrl(){

        cy.visit('/')
    }

    validarLogoHome(){

        cy.get(elem.logoApp).should('be.visible')
        
    }

    validarTituloPagina(){
        cy.title().should('be.eq', 'Automation Exercise')

    }



} 
export default new HomePage();