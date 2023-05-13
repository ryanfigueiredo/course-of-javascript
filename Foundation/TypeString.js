const name = 'Lebron'
const lastName = "James"

console.log(lastName.charAt(4)) // s
console.log(lastName.charAt(5)) // return empty value
console.log(lastName.charCodeAt(3)) // 101

console.log(lastName.indexOf('3')) // not existi 3, -1
console.log(lastName.indexOf('s')) // 4

console.log(lastName.substring(2)) // apartir do index 2, pegar o resto da string  mes
console.log(lastName.substring(0, 3)) // 0 ao 3, Jam

console.log('Lebron '.concat(lastName)) // Lebron James
console.log(lastName.replace('e', '3')) // Jam3s

console.log(('Ana,Pedro,Maria').split(',')) // ['Ana', 'Pedro', 'Maria']