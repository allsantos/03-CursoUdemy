/// <reference types='cypress'/>

describe('Trabalhando com PopUps', () => {
    beforeEach(() => {
        cy.reload()
    })
    it('Deve testar PopUp diretamento', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq('Click OK!')
        })
    })
    it.only('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })
})