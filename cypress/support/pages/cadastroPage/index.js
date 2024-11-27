const elem = require('./elements').ELEMENTS;

class Cadastro{

validarTituloPagina(){

    cy.get(elem.tittle).contains('Enter Account Information').should('be.visible')
}

selecionarGeneroFeminino(){
    cy.get(elem.radioBtn_genderF).click()
}

selecionarGeneroMasculino(){
    cy.get(elem.radioBtn_genderM).click()
}


} 
export default new Cadastro();