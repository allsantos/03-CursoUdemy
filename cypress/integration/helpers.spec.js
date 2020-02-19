/// <reference types='cypress'/> 
/* -- Referente a PROMISE usamos da Seguinte forma => "promise.then()" 
Como ela não é uma linguagem do CYPRESS precisamos usar o "WRAP" => "cy.wrap(promise).then(ret => console.log(ret))"*/ 
describe('Helpers', () => {
    // beforeEach(() => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')
    // })
    it.only('Wrap', () => { // O "WRAP" é usando para encapsular um OBJEDO comum para ser usado no Cypress "cy.wrap().then()"
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome') // Utilizando no cypress "cy.wrap"

        
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
    it('Its...', () => { // Retorna uma propriedade do objeto que esta na cadeia do CYPRESS "cy.wrap(obj2).its('').its('').should('contain', '')"
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
    it('Invoke...', () => { // Trabalha com as Funções do CYPRESS, 
        
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        //Colocamos a função dentro de um OBJETO nome dado ao OBJETO "fn" {fn:getValue}, nome da função: cy.wrap({fn:getValue}).invoke('fn').should('be.eq', 1) 
        //No INVOKE chamado a função que criamos "FN"
        cy.wrap({fn:getValue}).invoke('fn').should('be.eq', 1) //Chamar uma uma função com o CYPRESS
        cy.wrap({fn:soma}).invoke('fn', 2, 5).should('be.eq', 7) 

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via INVOKE')
        cy.window().invoke('alert', 'Da pra ver?') // Ele retorna um objeto WINDOW
        cy.get('#resultado').invoke('html', '<input type="button", value="hacked!"/>') // Permite imbuti um codigo HTML dentro da DIV
        // Método do JQUERY: "html" / Me permite colocar um codigo dentro da div, conforme acima
    })
})