// Redefine a PRIORIDADE de seletores, sera os prossedimentos feitos aqui.
/// <reference types='cypress'/>

describe('Testando Locators', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

// Como encontrar elementos na Tela
// Nos teste a seguir vamos verificar as Prioridade padrão do seletor dos elementos
/* Ordem de prioridade de Baixo para Cima
data-cy, data-text, data-testid, id, class, tag, attributes,nth-child
*/
/* Como usar em qualquer Projeto
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-wc','id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid','tag','nth-child']
  })
  */
//Está no Suporte/index.js

    it('Usando JQuery Selector', () => { // Chegando até o ELEMENTO
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        cy.get("[onclick*='Francisco']")
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) input")
    })

// Ao inpecionar elemento procure por [onclick*='Francisco']
})