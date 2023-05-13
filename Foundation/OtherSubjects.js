let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(global) // object global no node

// criando uma variavel sem let/var/const
// dessa forma a variavel fica global, no Node, no objeto this/global
abc = 3 // nao recomendado criar variavel desta forma
console.log(global.abc)

// module.exports = { z: 1, x: 'test', k: false }