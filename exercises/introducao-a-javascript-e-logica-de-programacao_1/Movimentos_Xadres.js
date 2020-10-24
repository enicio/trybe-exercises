// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pc = "rainho";



switch(pc.toLowerCase()){

    case "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("EM L");
        break;
    case "peão":
        console.log("Fente")
        break;
    case "rainha":
        console.log("Todas as direçôes, quantas casas quiser");
        break;
    case "rei":
        console.log("Todas as direçôes, uma casa por vez");
        break;
    default:
        console.log("Peça inválida");

}
