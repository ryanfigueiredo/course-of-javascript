// pair key/value
const saudation = 'Hello' // lex context 1

function exec() {
  const saudation = 'Hi' // lex context 2
  return saudation
}

// objects are groups nested of pairs key/values
const client = {
  name: 'Jhon',
  age: 32,
  weigth: 88,
  address: {
    number: 123,
    street: 'street miss number'
  }
}

console.log(saudation)
console.log(exec())