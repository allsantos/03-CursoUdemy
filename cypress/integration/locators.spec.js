/// <reference types='cypress'/>

describe('Testando Locators', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
// Nos teste a seguir vamos verificar as Prioridade padrão do seletor dos elementos
/* Ordem de prioridade de Baixo para Cima
data-cy
data-test
data-testid
id
class
tag
attributes
nth-child
*/

// Redefine a PRIORIDADE de seletores 
/*
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes']
  })

Está no Suporte/index.js
*/
    it('Teste Locators', () => {
        
    })
})