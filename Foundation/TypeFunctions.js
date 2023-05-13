console.log(typeof Object)

class Product {}
console.log(typeof Product)

function printSum(a, b) {
  console.log(a + b)
}

printSum(2, 3)
printSum(2) // NaN, por que se voce nao passar o outro valor, sera undefined
printSum(2,3,4,5,6,7) // 5, pois ele ignora os outros parametros after second

function sum(a, b = 0) {
  return a + b
}

console.log(sum(1))
console.log(sum(1, 4))

const printSum2 = function(a, b) {
  console.log(a + b)
}

printSum(2, 3)

const sum2 = (a, b) => {
  return a + b
}

console.log(sum2(1, 2))

const sub = (a, b) => a - b

console.log(sub(10, 5))