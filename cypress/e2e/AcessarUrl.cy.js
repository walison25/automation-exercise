/*
será necessário referenciar o cypress na tag abaixo para trazer a documentação e o autocompletar:
//Cada arquivo é único (preciso repetir os processos de acessar, abrir a página, etc)
//usar before, beforeEach, after e afterEach*/

///<reference types = "cypress"/>
import user_fac from "../Factories/user_fac.js";
import homePage from '../support/pages/homePage'
import loginPage from "../support/pages/loginPage";
import cadastroPage from "../support/pages/cadastroPage";

describe('Validação login', () => {
 
    let newUser = user_fac.createUser();

  beforeEach(() =>{//antes de cada it faça:
  //  cy.fixture('user_fixture').then((user) =>{//faz referência ao arquivo user_fixture.json, a variável user recebe a estrutura do arquivo
  //   newUser = user;
  //  })

  homePage.acessarUrl()
  homePage.validarLogoHome()
 
  cy.login('walison25@gmail.com', 'teste123') //dado alimenta o commands
  
  })

  //Caso de teste 01:
  it('Acessar a URL com SUCESSO', () => {
    //xit ou skip pula o teste ou o only executa um único teste
    // cy.visit('/')//visita o site para localizar os elementos (por segurança é preciso validar os elementos carregados na página), site padrão configurado em cypress.config.js
    // cy.get('div[class="logo pull-left"]').should('be.visible')//valida se a div referida está visivel no site
    // cy.title().should('be.eq', 'Automation Exercise') //valida se o título da página é igual ao esperado
    
    homePage.validarTituloPagina()

  })
    it.only('Validar login',() => {
      cy.visit('/') //quando se utiliza o session se faz necessário usar o visit, para limpar e armazenar os dados e reutilizar a session
      cy.get('b').should('have.text', 'Walison teste')
      cy.viewport('iphone-6','portrait') //=> para simular outros tipos de tela

      cy.get("a").contains('Home').should('have.css', 'color','rgb(255, 165, 0)')
      cy.get("a").contains('Home').should('have.css', 'font-size','14px')

      cy.get("a").contains('Home').invoke('removeAttr', 'style')
      //cy.get('img').should('have.attr', 'src', "get_product_picture/1").trigger("mousemove")


    })
 //Caso de teste 02:
  it('Cadastrar novo usuário', () => {
    /*
    cy.visit('/')
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq', 'Automation Exercise')
    cy.get('a').contains('Signup / Login').click() - caso elemento a tenha um signup ele realiza o click 
    */

    homePage.clicarEmLogin()

     /*
    cy.get('input[name = "name"]').should('be.visible').type(newUser.name) - se o elemento estiver visivel, ele faz o preenchimento
    cy.get('input[data-qa="signup-email"]').should('be.visible').type(newUser.email)
    cy.get('button').should('be.visible').contains('Signup').click()
    */
   
    loginPage.PreencherNome(newUser.name)
    loginPage.PreencherEmail(newUser.email)
    loginPage.ClicarEmSignup()

    /*
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
    cy.get('button').contains('Create Account').click()
    */

    cadastroPage.validarTituloPagina('Enter Account Information')
    cadastroPage.selecionarGeneroMasculino()
    cadastroPage.validarEmailPreenchido(newUser.email)
    cadastroPage.preencherPassword('teste123')
    cadastroPage.preencherData("25","10","1994")
    cadastroPage.preencherFirstName("Walison")
    cadastroPage.preencherLastName("Teste")
    cadastroPage.preencherEndereco('Teste endereço', 'United States', 'Arizona', 'Phoenix', '85001')
    cadastroPage.preencherPhone(newUser.phone)


    /*
    validação:
    cy.get('h2[data-qa = "account-created"]').should('be.visible')
    cy.get('h2[data-qa = "account-created"]').should('have.text', "Account Created!")
    cy.get('[data-qa = "continue-button"]').should('be.visible').click() 
    */

    cadastroPage.clicarEmCreateAccount()
    cadastroPage.validarUsuarioCadastradoSucesso()
    homePage.validarBotaoLogoutVisivel()

  })

})