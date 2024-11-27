//será necessário referenciar o cypress na tag abaixo para trazer a documentação e o autocompletar:
//Cada arquivo é único (preciso repetir os processos de acessar, abrir a página, etc)
//usar before, beforeEach, after e afterEach
///<reference types = "cypress"/>
import user_fac from "../Factories/user_fac.js";
import HomePage from '../support/pages/homePage'

describe('Validação login', () => {
 
    let newUser = user_fac.createUser();

  //beforeEach(() =>{
  //  cy.fixture('user_fixture').then((user) =>{//faz referência ao arquivo user_fixture.json, a variável user recebe a estrutura do arquivo
  //   newUser = user;
  //  })
 // })

  //Caso de teste 01:
  it.only('Acessar a URL com SUCESSO', () => {
    //xit ou skip pula o teste ou o only executa um único teste
    // cy.visit('/')//visita o site para localizar os elementos (por segurança é preciso validar os elementos carregados na página), site padrão configurado em cypress.config.js
    // cy.get('div[class="logo pull-left"]').should('be.visible')//valida se a div referida está visivel no site
    // cy.title().should('be.eq', 'Automation Exercise') //valida se o título da página é igual ao esperado

    HomePage.acessarUrl()
    HomePage.validarLogoHome()
    HomePage.validarTituloPagina()


  })

 //Caso de teste 02:
  it('Cadastrar novo usuário', () => {
    cy.visit('/')
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq', 'Automation Exercise')
    cy.get('a').contains('Signup / Login').click() //caso elemento a tenha um signup ele realiza o click
    cy.get('input[name = "name"]').should('be.visible').type(newUser.name) //se o elemento estiver visivel, ele faz o preenchimento
    cy.get('input[data-qa="signup-email"]').should('be.visible').type(newUser.email)
    cy.get('button').should('be.visible').contains('Signup').click()
    cy.get('h2').contains('Enter Account Information').should('be.visible')
    cy.get('#id_gender1').click()
    cy.get('#email').should('have.value', newUser.email)//confirmo se no campo há o valor esperado
    cy.get('#password').type('teste123')
    cy.get('#days').select('25')
    cy.get('#months').select('October')
    cy.get('#years').select('1994')
    cy.get('#first_name').type('Teste nome')
    cy.get('#last_name').type('Teste sobrenome')
    cy.get('#address1').type('Teste endereço')
    cy.get('#country').select('United States') 
    cy.get('#state').type('Arizona') 
    cy.get('#city').type('Phoenix') 
    cy.get('#zipcode').type('85001')
    cy.get('#mobile_number').type(newUser.phone)
   // cy.get('button').contains('Create Account').click()
    //validação
   // cy.get('h2[data-qa = "account-created"]').should('be.visible')
    //cy.get('h2[data-qa = "account-created"]').should('have.text', "Account Created!")
   // cy.get('[data-qa = "continue-button"]').should('be.visible').click() 

  })

})