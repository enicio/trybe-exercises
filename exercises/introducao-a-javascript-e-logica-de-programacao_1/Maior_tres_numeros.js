// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os
// valores que serão comparados.

let a = 755;
let b = 9;
let c = 81;
let aux;

if (a > b) {
    aux = a;
} else {
    aux = b;
}

if (aux > c) {
    console.log(aux);
} else {
    console.log(c);
}
