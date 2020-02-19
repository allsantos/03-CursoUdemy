/// <reference types='cypress'/>

describe('Trabalhando com Iframes', () => {
    beforeEach(() => {
        cy.reload()
    })

    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('iframe').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('Funciona?').should('have.value', 'Funciona?')

            cy.on('window:alert', msg => {
                expect(msg).to.be.eq('Alert Simples')
            })
            //cy.wrap(body).find('otherButton').click()
        })
    })
    it('Trabalhando com Iframe', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq('Click OK!')
        })
    })
})