//aritimetics
const [a, b, c, d] = [3, 1, 5, 15]

const sum = a + b + c + d //operation binary
const sub = d - b
const mult = a * b
const div = d / a
const module = a % 2

++d // operator prefix
d++ // operator sufix

console.log(sum, sub, div, mult, module)

//compartives
console.log('01)', '1' == 1) // true
console.log('02)', '2' === 2) // false
console.log('03)', '3' != 3) // false
console.log('04)', '4' !== 4) // true


console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
// nesse caso sera false, pois esta comparando enderecos de memoria
// e nao o valor em si
console.log('09)', d1 === d2) // false
console.log('10', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // true

console.log('12)', undefined == null) // true
console.log('12)', undefined === null) // false

// logicals
function purchase(work1, work2) {
  const buyIceCream = work1 || work2
  const buyTv50Inches = work1 && work2
  // const buyTv32Inches = !!(work1 ^ work2) // bitwise xor
  const buyTv32Inches = work1 != work2
  const saveHealth = !buyIceCream // unary operator

  // desta forma, voce esta dizendo que a chave(key) seria o nome da propria variavel
  return {
    buyIceCream,
    buyTv50Inches,
    buyTv32Inches,
    saveHealth,
  }
}

console.log(purchase(true, true))
console.log(purchase(true, false))
console.log(purchase(false, true))
console.log(purchase(false, false))

// unary operator
let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

// evite fazer esse tipo de coisa abaixo
console.log(++num1 === num2--) // true
console.log(++num1 === num2--) // false

// ternary operator
const result = note => note >= 7 ? 'Approved' : 'Failed'
console.log(result(6))
console.log(result(7))
console.log(result(8))