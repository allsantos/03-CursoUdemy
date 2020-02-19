/// <reference types='cypress' />

describe('Cypress Basic', () => {
    it('Should visit a page and title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        //cy.pause() // Pausa o processo de teste

        cy.title().should('be.eq', 'Campo de Treinamento') // Verifica o Titulo da pagina
        cy.title().should('contain', 'Campo') //.debug() // Verifica o Titulo da pagina
        // o DEBUG é para pegar mais informações

        //cy.title().should('be.eq', 'Campo de Treinamento').should('contain', 'Campo') // Verifica o Titulo da pagina
//----------------------------------------------------------------------------------------------------------------------------------------
        // cy.title().then(title => { // Verifica o titulo da pagina pelo console
        //     console.log(title)
        // })
        // OU
        cy.title().should(title => {
            console.log(title)
        })

    })
    it('Acertivas do Botão', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // Acertiva
        cy.get('#buttonSimple').click() // Acertiva é oque garente que aquela ação ocorreu conforme o esperado

        // Fazendo Acertiva
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!') // Acertiva é oque garente que aquela ação ocorreu conforme o esperado

    })
    it.only('Reutilizando o Titulo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // Escrever o titulo em outro bloco
        let syncTitle

        cy.title().then(title => { 
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })
        // Quando tem 2 pontos "\:" temos que colocar duas BARRAS antes dos 2 pontos "\\:"
        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })
})