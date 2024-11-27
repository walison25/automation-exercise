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

    clicarEmLogin(){
        cy.get(elem.signup_login).should('be.visible').click()
    }

    validarBotaoLogoutVisivel(){
        //é validado aqui para poder ser usado em outros testes
        cy.get(elem.btn_logout).should('be.visible')

    }



} 
export default new HomePage();