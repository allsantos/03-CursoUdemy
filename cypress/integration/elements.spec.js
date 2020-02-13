/// <reference types='cypress'/>

describe('Testando Elementos', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
    it('Text', () => {
        //Usando o "CONTAIN" ele 
        // verifica se existe o trecho de texto no body
        cy.get('body').should('contain', 'Cuidado') // Buscar elemento,JQuery Selector
        cy.get('span').should('contain', 'Cuidado') // Procura em um Span

        cy.get('.facilAchar').should('contain', 'Cuidado') // Localiza a palavra cuidado no elemento do Get , por CONTAIN
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //  Localiza texto completo, por HAVE.TEXT(Texto completo)
    })
    it('Links', () => {
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
    it('TextFilds', () => {
        cy.get('#formNome').type('Cypress Teste') 
        cy.get('#formNome').should('have.value', 'Cypress Teste') // Se queremos buscar um texto que esteja dentro no input devemos usar o 'VALUE'

        // cy.get("#elementosForm\:sugestoes").type('Cypress Teste').should('have.value', 'Cypress Teste') Não reconhece o Get dessa forma ("#elementosForm\:sugestoes")
        cy.get("#elementosForm\\:sugestoes").type('Cypress Teste').should('have.value', 'Cypress Teste') // Quando for um ID colocar duas barras ("#elementosForm\\:sugestoes")

        cy.get('#tabelaUsuarios > tbody > tr:nth-child(1) > td:nth-child(6) > input[type=text]').type('???')

        cy.get("[data-cy=dataSobrenome]").type('Teste12345{backspace}{backspace}').should('have.value', 'Teste123')

        cy.get("#elementosForm\\:sugestoes").clear().type('Erro{selectall}acerto', {delay:200}).should('have.value', 'acerto') // "{}" é um objeto
    })
    it('RadioButton', () => {
        cy.get("#formSexoFem").click().should('be.checked')
        cy.get("#formSexoMasc").should('be.not.checked')
        
        cy.get("[name='formSexo']").should('have.length', 2)
    })
    it('CheckBox', () => {
        cy.get('#formComidaPizza').click().should('be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple:true}).should('be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })
    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]').select('2o grau completo').should('have.value', '2graucomp')
        cy.get('[data-test=dataEscolaridade]').select('1o grau completo').should('have.value', '1graucomp')
    })
    it.only('ComboMultiplo', () => {
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida', 'nada'])
    })
})