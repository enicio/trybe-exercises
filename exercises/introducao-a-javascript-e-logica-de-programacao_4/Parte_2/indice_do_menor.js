// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


function indexOfMinor(array) {

    let minor = array[0];

    for ( let i = 1; i < array.length; i += 1) {
            if (array[i] < minor) {
                minor = array[i];
            }
    }
    console.log(array.indexOf(minor))
}

let array = [2, 4, 6, 7, 10, -10, -3]

indexOfMinor(array)