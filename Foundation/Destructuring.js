//objects
const { size, name } = { size: 12, name: 'Jhon'}
console.log(size)
console.log(name)

const person = {
  name: 'Erick',
  age: 34,
  address: {
    street: 'street 1',
    number: 123
  }
}

const { address: { street } } = person // destructuring with nested objects
console.log(street)

const { account: { number, digit } } = person
console.log(number, digit) // error

const { name: n, age: a } = person // destructuring attributes replaced name
console.log(n, a)

const { suername, is_married = true } = person
console.log(suername, is_married) //undefined, true

//arrays
const [z] = [4]
console.log(z)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, note]] = [[, 8, 8], [9, 6, 8]]
console.log(note)

//functions with objects
function rand({min = 0, max= 1000}) {
  const value = Math.random() * (max - min) * min
  return Math.floor(value)
}

const object = { mag: 50, min: 40 }
console.log(rand(object))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand()) // error

//functions with arrays
function rand2([min = 0, max = 1000]) {
  if(min > max) [min, max] = [max, min] //change values

  const value = Math.random() * (max - min) * min
  return Math.floor(value)
}

const array = [50, 40]
const [max, min] = array
console.log(rand2(array))
console.log(rand2([, 10]))
console.log(rand2([]))
console.log(rand2()) // error