//será necessário referenciar o cypress na tag abaixo para trazer a documentação e o autocompletar:
//Cada arquivo é único (preciso repetir os processos de acessar, abrir a página, etc)
///<reference types = "Cypress"/>

describe('Validação login', () => {
  const nome = "Teste"
  const email = "66262@gmail.com"

  //Caso de teste 01:
  xit('Acessar a URL com SUCESSO', () => {//xit ou skip pula o teste ou o only executa um único teste
    cy.visit('https://automationexercise.com')//visita o site para localizar os elementos (por segurança é preciso validar os elementos carregados na página)
    cy.get('div[class="logo pull-left"]').should('be.visible')//valida se a div referida está visivel no site
    cy.title().should('be.eq', 'Automation Exercise') //valida se o título da página é igual ao esperado
  })

 //Caso de teste 02:
  xit('Cadastrar novo usuário', () => {
    cy.visit('https://automationexercise.com')
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq', 'Automation Exercise')
    cy.get('a').contains('Signup / Login').click() //caso elemento a tenha um signup ele realiza o click
    cy.get('input[name = "name"]').should('be.visible').type(nome) //se o elemento estiver visivel, ele faz o preenchimento
    cy.get('input[data-qa="signup-email"]').should('be.visible').type(email)
    cy.get('button').should('be.visible').contains('Signup').click()
    cy.get('h2').contains('Enter Account Information').should('be.visible')
    cy.get('#id_gender1').click()
    cy.get('#email').should('have.value', email)//confirmo se no campo há o valor esperado
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
    cy.get('#mobile_number').type('885533221')
    cy.get('button').contains('Create Account').click()
    //validação
    cy.get('h2[data-qa = "account-created"]').should('be.visible')
    cy.get('h2[data-qa = "account-created"]').should('have.text', "Account Created!")
    cy.get('[data-qa = "continue-button"]').should('be.visible').click()

  })

})