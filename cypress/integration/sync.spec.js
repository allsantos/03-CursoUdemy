/// <reference types='cypress'/>

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    it('Deve fazer retrys', () => { // Verifica se algum campo que ainda não está visivel existe ou não existe
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist').type('funcitiona')
    })
    it('Verifica listagem atrasada, Uso do Find', () => {

        /*  cy.get('#formNome').type(userID_Alpha_Numeric()) ----------Gera Numero Random----------
        function userID_Alpha_Numeric() {
            var text = "";
            var possible = "0123456789";
            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } */
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')
        cy.get('#lista li span').should('contain', 'Item 2')
    })
    it('Uso do TimeOut', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout:1000}).should('exist')

        // cy.get('#buttonListDOM').click()
        // cy.get('#lista li span', {timeout:30000}).should('have', 1)

        // cy.get('#buttonListDOM').click()
        // cy.wait(5000)
        // cy.get('#lista li span', {timeout:3000}).should('contain', 'Item 2')
        
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout:30000}).should('have.length', 1)
        cy.get('#lista li span', {timeout:30000}).should('have.length', 2)
        // Com o "defaultCommandTimeout:1000" eu consigo deficar o tempo padrão de execução do cypress
    })
    it('Teste Retry', () => {
        cy.get('#buttonCount').click().click().should('have.value', '111')

    })
    it('Diferença Should ou Then', () => {
        //cy.get('#buttonListDOM').click()
        // cy.get('#buttonListDOM').should($el => { // o should ele ignora oque está dentro do RETURN
        cy.get('#buttonListDOM').then($el => { // Só quem considera o RETURN é o THEN
        //cy.get('#lista li span')/*should*/.then($el => { //O then espera achar o GET primero para que poça executar os outros comandos
            //.should('have,length', 1) // Já o should não espera, ele executa tudo de uma só vez
            // console.log($el)
        //cy.get('#lista li span').should($el => {
            expect($el).to.have.length(1)
            return 2
        })  .and('eq', 2)
            .and('not.have.id', 'buttonListDOM')//.and('have.id', 'buttonListDOM')
    })
    
    it.only('Diferença Should ou Then parte 02', () => {
        cy.get('#buttonListDOM').then($el => { // Só quem considera o RETURN é o THEN
        // cy.get('#buttonListDOM').should($el => { // Se eu colocar o SHOULD ele entra em um loop, PQ usei "($el =>" e "cy.get('#buttonList')"
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})