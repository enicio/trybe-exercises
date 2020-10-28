let ast = "";
let bcs = "";
let res = "";
let n = 0;
let m = 5;

for (let i = 0; i < 5 ; i += 1) {
    m--;
    n++;   
    bcs = ""; 
    ast = "";

    for (let spc = 0; spc < m ; spc += 1 ){
        bcs = bcs + " ";
    }  
    
    for (let j = 0; j < n ; j += 1  ){  
        ast = ast + "*"; 
    }

res = res + bcs + ast + '\n';

} 


console.log(res)