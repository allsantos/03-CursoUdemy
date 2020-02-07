import { some } from "async";

it('sem testes, ainda', () => { })

/*const getSomething = () => 10;

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end') 
}
system(); */

/* const getSomething = callback => {
    setTimeout(() => {
        callback(12);
        }, 1000)
} */

/* // Froma Sincrona 
const system = () => {
    console.log('init');
    getSomething(some => {
        console.log(`Something is ${some}`);
    console.log('end'); 
    })
} */

/* //Forma Desordenada
const system = () => {
    console.log('init');
    getSomething(some => console.log(`Something is ${some}`));
    console.log('end') 
} */


//Recebendo uma promise, Essa é a estrutura de uma promise

/*
const getSomething = () => {
    return new Promise((resolve, reject) => { // Resolve é uma função quando a promise finalizar, Reject é invocado de haver algum problema
        setTimeout(() => {
            resolve(13);
            }, 1000)
    })
}
    const system = () => {
        console.log('init');
        getSomething().then(some => {
            console.log(`Something is ${some}`)
        });

        console.log('end') 
}
*/
// Conceito do ASYNC -- Não pode utilizar esse método -- Deixa as coisas bem mais Simples, porem não pode ser utilizado
const getSomething = () => {
    return new Promise((resolve, reject) => { // Resolve é uma função quando a promise finalizar, Reject é invocado de haver algum problema
        setTimeout(() => {
            resolve(13);
            }, 1000)
    })
}
    const system = async ()=> {
        console.log('init');
        const some = await getSomething() 
            console.log(`Something is ${some}`)
            console.log('end') 
}

system();
