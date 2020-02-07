/// <reference types="cypress" />

// Grupos de Igualdade
it('Equality', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true
    const b = null
    let c

    expect(a).to.be.true
    expect(false).to.be.false
    expect(b).to.be.null
    expect(a).to.be.not.null
    expect(c).to.be.undefined
})

// Equalidade com Obejto, Objeto em JS
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equals(obj)
    expect(obj).equal(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.eq(obj)
    expect(obj).to.be.deep.eq({a:1,b:2}) // Quando for objeto temos que colocar o 'DEEP'
    expect(obj).eql({a:1,b:2})
    expect(obj).include({a:1}) // Se o objeto for muito grande, Verificar se neste objeto existe a propriedade 'a:1'
    expect(obj).to.have.property('b') // Ir diretamente na propriedade
    expect(obj).to.have.property('b', 2) // Verificar se a propriedade é 'B' e que o valor dela seja '2'
    expect(obj).to.not.be.empty // Posso ver se o obj não está vazio
    expect({}).to.be.empty // O valor tem que ser Vazio
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3]) // '.to.have.members' > Quer dizer 'Espero que o Array possua os seguintes membros'
    expect(arr).to.include.have.members([1,3]) // '.to.include.have.members' > Verifica os membros que estão incluidos
    expect(arr).not.be.empty // Verificar se um Array está Vazio ou não
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const stg = 'String'

    expect(num).to.be.a('number') // Verificar se a Variavel 'num' é um numero
    expect(stg).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.eq('String de teste')
    expect(str).to.have.length(15) // Diz que a variavel tem tamanho de 15
    expect(str).to.contain('de') // Verificar se tem a palavra 'de'
    expect(str).to.match(/String/) // Verifica se tem a palavra 'String'
    expect(str).to.match(/^String/) // Deve iniciar com 'String'
    expect(str).to.match(/teste$/) // Deve terminar com 'teste'
    expect(str).to.match(/.{15}/) // Verifica se o tamanha da variavel é 15
    expect(str).to.match(/|w+/) // Verifica se existe apenas letras
    expect(str).to.match(/|D+/) // Verifica se existe apenas letras
})

it.only('Numbers', () => {
    const number = 4
    const floatNumber = 5.3415

    expect(number).to.be.eq(4) // Verificar se a variavel é igual a 4
    expect(number).to.be.above(3) // Verifica se o numero é acima de 3
    expect(number).to.be.below(7) // Verifica se o numero está abaixo de 7
    expect(floatNumber).to.be.closeTo(5.3,0.1)
    expect(floatNumber).to.be.above(5) // verifica se Ele é Acima de 5
})