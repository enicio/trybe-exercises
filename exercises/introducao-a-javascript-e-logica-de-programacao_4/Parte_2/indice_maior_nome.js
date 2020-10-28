// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function searchBiggerName(names) {

    let bigger = names[0].length;
    let biggerName = '';

    for ( let i = 1; i < names.length; i += 1 ) {
       
        if (bigger < names[i].length) {
            bigger = names[i].length
            biggerName = names[i]
        }
    }
    console.log(biggerName)
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Jessandro','Cairo', 'Joana'];

searchBiggerName(names)