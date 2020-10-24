// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let a = 60;
let b = 60;
let c = 60;

let d = a + b + c;

if( typeof(d) === "number" ){

( a + b + c == 180) ? console.log(true) : console.log(false)

} else { console.log("SOmente numeros")}