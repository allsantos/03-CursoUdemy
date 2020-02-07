/// <reference types="cypress" />

it('A external teste...', () => {

})

// describe = O DESCRIBE serve para Acrupar testes
describe('Shold group tests...', () => {
    describe('Shold group more specific tests...', () => {
        it.skip('A specific   teste...', () => {  // SKIP faz com que o teste não seja executado

        })  
    })


    describe('Shold group more specific tests 2 ...', () => {
        it('A specific   teste 2 ...', () => {
                
        })  
    })

    it('A internal teste...', () => {

    }) 
})