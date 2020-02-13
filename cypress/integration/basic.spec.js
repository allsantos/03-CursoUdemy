/// <reference types='cypress' />

describe('Cypress Basic', () => {
    it.only('Should visit a page and title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.pause() // Pausa o processo de teste

        cy.title().should('be.eq', 'Campo de Treinamento') // Verifica o Titulo da pagina
        cy.title().should('contain', 'Campo').debug() // Verifica o Titulo da pagina
        // o DEBUG é para pegar mais informações
        
        cy.title().should('be.eq', 'Campo de Treinamento').should('contain', 'Campo') // Verifica o Titulo da pagina
    })
    it('Acertivas do Botão', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // Acertiva
        cy.get('#buttonSimple').click() // Acertiva é oque garente que aquela ação ocorreu conforme o esperado

        // Fazendo Acertiva
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!') // Acertiva é oque garente que aquela ação ocorreu conforme o esperado

    })
})