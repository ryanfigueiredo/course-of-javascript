// quando se trata de tipos primitivos a passagem is feita por valor
// e nos demais casos is referencia

let value
console.log(value) // undefined
console.log(value2) // not defined

value = null // ausencia de valor / nao aponta para nenhum objeto/local da memoria
console.log(value)

// quando quiser zerar algo voce usa null. Undefined geralmente deve 
// ser deixado para a propria linguagem usar

const product = {}
console.log(product.price) // undefined
