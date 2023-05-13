{{{{{ var really = 'really?' }}}}}

console.log(really)

function test() {
  var local = 123
}

test()
// console.log(local) // not visible
// var sera visivel em escopo global ou funcao

var number = 1
{
  var number = 2
  console.log(`insider = ${number}`) // insider=2
}

console.log(`out = ${number}`) // out = 2

// let,  sera visivel em escopo global, funcao ou bloco {}

let number1 = 1
{
  let number1 = 2
  console.log(`insider = ${number1}`) // insider=2
}

console.log(`out = ${number1}`) // out = 1

// usando var em loop

const funcs = []

for(var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]() // 10
funcs[8]() // 10

// usando let em loop
// pelo fato de ter closure a variavel sendo declarada como let,
// ela vai ter memoria e ira lembrar do valor no momento daquela execucao
const funcs2 = []

for(let i = 0; i < 10; i++) {
  funcs2.push(function() {
    console.log(i)
  })
}

funcs2[2]() // 2
funcs2[8]() // 8