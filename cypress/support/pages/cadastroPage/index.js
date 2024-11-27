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

validarEmailPreenchido(email){
    cy.get(elem.input_email).should('have.value', email)
}

preencherPassword(password){
    cy.get(elem.input_password).type(password)
}

preencherData(day, month, year){
    cy.get(elem.select_days).select(day)
    cy.get(elem.select_months).select(month)
    cy.get(elem.select_years).select(year)
}

preencherFirstName(firstName){
    cy.get(elem.input_firstName).type(firstName)
}

preencherLastName(lastName){
    cy.get(elem.input_lastName).type(lastName)
}

preencherEndereco(address, country, state, city, zipcode){
    cy.get(elem.input_address1).type(address)
    cy.get(elem.select_countries).select(country) 
    cy.get(elem.input_state).type(state) 
    cy.get(elem.input_city).type(city) 
    cy.get(elem.input_zipcode).type(zipcode)

}
preencherPhone(phone){
    cy.get(elem.input_mobileNumber).clear()
    cy.get(elem.input_mobileNumber).type(phone)

}

clicarEmCreateAccount(){
    //método genérico para identificar na lista de botões o create account, assim não preciso mapear todos os botões
    //passo apenas o nome do botão como parâmetro
    cy.get(elem.btn).contains("Create Account").click()
}

validarUsuarioCadastradoSucesso(){

    cy.get(elem.msg_accountCreate).should('be.visible')
    cy.get(elem.msg_accountCreate).should('have.text', "Account Created!")
    cy.get(elem.btn_continue).should('be.visible').click() 
}
   


} 
export default new Cadastro();