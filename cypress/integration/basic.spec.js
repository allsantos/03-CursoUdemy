/// <reference types='cypress' />

describe('Cypress Basic', () => {
    it.only('Should visit a page and title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        const title = cy.title()
        console.log(title)

        cy.title().should('be.eq', 'Campo de Treinamento') // Verifica o Titulo da pagina
    })
})