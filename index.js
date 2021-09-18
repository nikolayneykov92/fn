const fnImmutable = require('./src/immutable')
const fnMuttable = require('./src/mutable')

const arrayA = [1, 2, 3]
const resultA = fnImmutable.addLast(arrayA, 42)
console.log('\nIMMUTABLE')
console.log(arrayA) // [1, 2, 3]
console.log(resultA) // [1, 2, 3, 42]
console.log(arrayA === resultA) // false

const arrayB = [1, 2, 3]
const resultB = fnMuttable.addLast(arrayB, 42)
console.log('\nMUTABLE')
console.log(arrayB) // [1, 2, 3, 42]
console.log(resultB) // [1, 2, 3, 42]
console.log(arrayB === resultB) // true
