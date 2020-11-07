// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function mostRepeated(array) {    

    let quantityOfNumbersFound = [];
    
    
    for (let index = 0; index < array.length; index += 1) {
        let numberToCheck =  array[index];
        let quantityOfNumbers = 0;
        for ( let index2 = 0; index2 < array.length; index2 += 1 ) {       
                if (numberToCheck == array[index2]) {
                    quantityOfNumbers = quantityOfNumbers + 1;
                }
        }
        quantityOfNumbersFound[index] = quantityOfNumbers;
    }
    //console.log(quantityOfNumbersFound)
    let bigger = quantityOfNumbersFound[0];

    for ( let i = 1; i < quantityOfNumbersFound.length; i += 1) {
            if (bigger < quantityOfNumbersFound[i] ) {
                bigger = quantityOfNumbersFound[i];
            }
    }
    //console.log(quantityOfNumbersFound.indexOf(bigger))
    let numberMostRepeated = quantityOfNumbersFound.indexOf(bigger);

    return array[numberMostRepeated]
}

//let array = [2, 3, 2, 5, 8, 2, 3]
let array = [2, 3, 2, 5, 8, 2, 3, 5, 5,5]
console.log(mostRepeated(array))