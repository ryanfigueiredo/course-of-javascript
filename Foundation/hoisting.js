// para o hoisting com var ele faz o 'levantamento' dessa variavel
// para o topo do escopo de definicao

// com var

console.log(a) // undefined
var a = 2
console.log(a) // 2

// com let

console.log(b) // error
let b = 2
console.log(b)