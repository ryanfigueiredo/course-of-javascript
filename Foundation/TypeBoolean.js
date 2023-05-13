let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) // usando duas negacoes !! eu descubro se o valor is true/false

console.log('the true values...')
console.log(!!3) // true
console.log(!!-3) // true
console.log(!!' ') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isActive = true)) // true

console.log('the false values...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false)) // o que tiver ao lado direito no caso false, sera dado como false

let name = ''
console.log(name || 'unknow') // forma de deixar um valor default