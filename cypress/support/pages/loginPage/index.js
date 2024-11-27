const elem = require('./elements').ELEMENTS;

class LoginPage{

    PreencherNome(name){
        cy.get(elem.signup_name).should('be.visible').type(name)

    }

    PreencherEmail(email){

        cy.get(elem.signup_email).should('be.visible').type(email)
    }

    ClicarEmSignup(){
        cy.get(elem.button_signup).should('be.visible').contains('Signup').click()

    }
  

}  export default new LoginPage();