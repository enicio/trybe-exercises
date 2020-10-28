// rie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


function indexOfBigger(array) {

    let bigger = array[0];

    for ( let i = 1; i < array.length; i += 1) {
            if (bigger < array[i] ) {
                bigger = array[i];
            }
    }

    console.log(array.indexOf(bigger))

}

let array = [2, 3, 6, 7, 10, 1,89];

indexOfBigger(array)