// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(name) {

    let nameInvertedTemp = [];
    let nameInverted= "";
    let a = 0;

    for ( let i = name.length; i >= 1; i -= 1 ) {
            nameInvertedTemp[i] = name[a++]
            
    }

    for (let i = 1; i < nameInvertedTemp.length ; i += 1) {
            nameInverted += nameInvertedTemp[i]
    }

    console.log(name, nameInverted)

    if (name === nameInverted) {
        console.log("true")
    }   else{
        console.log("false")
    }

   
    
}

verificaPalindromo("kombi")