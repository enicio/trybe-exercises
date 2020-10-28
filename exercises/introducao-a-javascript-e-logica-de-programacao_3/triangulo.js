let ast = "";
let n = 0;

for (let i = 0; i < 5 ; i += 1) {
    n++;
  for (let j = 0; j < n ; j += 1  ){
    ast = ast + "*"; 
  }
ast = ast +'\n';
} 


console.log(ast)