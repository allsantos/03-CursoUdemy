/// <reference types='cypress'/> 

describe('Helpers', () => {
    // beforeEach(() => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')
    // })
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        /*cy.get('#formNome').then($el => {
            //$el.val('Funciona via JQUERY') // Via JQUERY
            //$el.type('funciona?') // Não funciona pq o type é uma função do CYPRESS
            cy.wrap($el).type('funciona via CYPRESS com WRAY')
        }) */
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500) // TimeOut vai levar 500 ml
        })
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro Botão'))
        // promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret)) 
        cy.get('#buttonList').then(() => console.log('Encntrei o segundo Botão'))

        cy.wrap(1).then(num => { // Se for "SHOULD"  retorna erro, pq ele ignora o RETURN
            return 2
        }).should('be.eq', 2 )
    })
    it.only('Its...', () => {
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.eq', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.eq', 20)
    })
    it.only('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({fn:getValue}).invoke('fn').should('be.eq', 1) //Chamar uma uma função com o CYPRESS
        cy.wrap({fn:soma}).invoke('fn', 2, 5).should('be.eq', 7) 

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via INVOKE')
        cy.window().invoke('alert', 'Da pra ver?') // Ele retorna um objeto WINDOW
        cy.get('#resultado').invoke('html', '<input type="button", value="hacked!"/>') // Permite imbuti um codigo HTML dentro da DIV
    })
})