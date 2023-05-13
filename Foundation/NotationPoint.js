console.log(typeof console) //object

console.log(Math.ceil(6.1))

const object = {}
object.name = 'Ball'
object.size = 32
console.log(object.name)

function Obj(name) {
  this.name = name
  this.exec = function() {
    console.log('Exec...')
  }
}

const object2 = new Obj('Chair')
console.log(object2.name)


const object3 = new Obj('Table')
console.log(object3.name)
object2.exec()