const weigh1 = 1.0 // type number
const weigh2 = Number('2.0')
const weigh3 = Number('2.1')

console.log(weigh1, weigh2)
console.log(Number.isInteger(weigh1))
console.log(Number.isInteger(weigh2))
console.log(Number.isInteger(weigh3)) // false

const available1 = 9.099
const available2 = 5.2393

const total = available1 * weigh1 + available2 * weigh2
const media = total / (weigh1 + weigh2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // change to binary
console.log(typeof media)
console.log(typeof Number) // is function

// warnings...

console.log( 7 / 0 ) // inifinty
console.log("10" / 2) // 5 
console.log('show!' * 2) // NaN
console.log(0.1 + 0.7) // 0.7999999....
// console.log(10.toString()) // not possible

// lib Math

const radius = 5.6
const area = Math.PI * Math.pow(radius, 2)
console.log(area)
console.log(typeof Math) // object