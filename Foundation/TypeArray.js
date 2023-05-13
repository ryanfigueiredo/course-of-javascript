const values = [7.7, 8.9, 6,3, 9.2]
console.log(values[0], values[3])
console.log(values[4]) // return empty

values[4] = 10
console.log(values)

values[10] = 15
console.log(values) // [ 7.7, 8.9, 6, 3, 10, <5 empty items>, 15 ]

console.log(values.length)

values.push({id: 3}, false, null, 'test') // aceita varios tipos de dados
console.log(values)

values.pop() // remove ultimo elemento do array
delete values[0] // deleta valor baseado no index

console.log(typeof values) // object