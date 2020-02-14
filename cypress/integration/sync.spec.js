/// <reference types='cypress'/>

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    it('Deve fazer retrys', () => { // Verifica se algum campo que ainda não está visivel existe ou não existe
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist').type('funcitiona')
    })
    it('Verifica listagem atrasada, Uso do Find', () => {

        /*  cy.get('#formNome').type(userID_Alpha_Numeric()) ----------Gera Numero Random----------
        function userID_Alpha_Numeric() {
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } */

        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')
        cy.get('#lista li span').should('contain', 'Item 2')
        
    })
    it.only('Uso do TimeOut', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })
})