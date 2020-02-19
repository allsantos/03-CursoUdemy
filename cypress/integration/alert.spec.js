/// <reference types='cypress' />

describe('Trabalhando com Alerts', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {  // o método "ON" pega eventos que ocorre na tela
            console.log(msg)
            expect(msg).to.be.eq('Alert Simples')
        })
    })
    
    it('Alert com Mock', () => { // com o "AS" eu consigo dar nome a um elemento
        const stub = cy.stub().as('Alerta') // STUP subistitui a função e permite que controle o comportamento
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            // Estou chamando o STUB com a CHAMADA "GETCALL" que o STUB está fazendo.
        })
    })

    it('Confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eq('Confirm Simples')
        }) 
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq('Confirmado')
        })
        cy.get('#confirm').click()
    })

    it('Deny > Negar', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eq('Confirm Simples')
            return false // Colocamos um "Return false" para fazer a negação
        }) 
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq('Negado')
        })
        cy.get('#confirm').click()
    
    })

    it('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eq('Era 42?')
            // Colocamos um "Return false" para fazer a negação
        }) 
        cy.on('window:alert', msg => {
            expect(msg).to.be.eq(':D')
        })
        cy.get('#prompt').click()
    })
    it.only('Validando Mensagens', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Allan')
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Santos')
        cy.get('#formCadastrar').click().then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado')
    })
})