let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
}
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim",
}

for (dados in  info ) {
    console.log(info[dados],"e",info2[dados])
    
    
}

if (info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes")
}
