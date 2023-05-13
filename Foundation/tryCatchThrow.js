function throwError(exception) {
  // throw new Error('... some message here')
  // throw 10
  // throw true
  // throw 'some message'
  throw {
    name: exception.name,
    message: exception.message,
    date: new Date
  }
}

function printName(object) {
  try {
    console.log(object.name.toUpperCase() + `!!!!`)
  } catch (exception) {
    // console.log(exception)
    throwError(exception)
  } finally {
    console.log('always excute same cause error.')
  }
}

const obj = { nome: 'Robert' }
printName(obj)