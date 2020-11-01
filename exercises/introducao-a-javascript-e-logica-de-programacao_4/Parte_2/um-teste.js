let palavra1 = ['a','r'];
let palavra2 = ['a','r'];

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(palavra1)
console.log(palavra2)


function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

// if (a === b){
//     console.log("true")
// }else {
//     console.log("false")
// }

console.log(arrayEquals(a, b))