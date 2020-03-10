/// <reference types='cypress'/>

describe('Trabalhando com PopUps', () => {
    beforeEach(() => {
        cy.reload()
    })
    it.only('Deve testar PopUp diretamento', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq('Click OK!')
        })
    })
    it('Deve verificar se o popup foi enviado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })
    describe('PopUp com Links', () => {
            beforeEach(() => {
                cy.visit('https://wcaquino.me/cypress/componentes.html')
            })
    
    it('Check popup URL', () => {
        cy.contains('Popup2').should('have.prop', 'href').and('eq', 'https://wcaquino.me/cypress/frame.html') // .should('have.prop' = ele retorna a propria propiedade
        })
    it('Should access popup dinamically', () => {
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('Funciona?')
            })
        })
    it("Forçar um link para abrir na mesma pagina", () => {
            cy.contains('Popup2').invoke('removeAttr', 'target').click()
            cy.get('#tfield').type('funciona')
        })
    })
})