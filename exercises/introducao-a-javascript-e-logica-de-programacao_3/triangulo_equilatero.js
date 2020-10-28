let ast = "";
let bcs = "";
let res = "";
let n = 1;
let m = 3;

for (let i = 0; i < 3 ; i += 1) {
    m--;
    
    bcs = ""; 
    ast = "";

    for (let spc = 0; spc < m ; spc += 1 ){
        bcs = bcs + " ";
    }  
    
    for (let j = 0; j < n ; j += 1  ){  
        ast = ast + "*"; 
    }
    n+=2;  
res = res + bcs + ast + '\n';

} 


console.log(res)