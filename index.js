const { copy, copyMany } = require('./src/index')

const person = { name: 'John', age: 29 }
const personCopy = copy(person)

console.log(person)
console.log(personCopy)
console.log(person === personCopy)

const fruits = ['apple', 'pear', 'banana']
const fruitsCopy = copyMany(fruits)

console.log(fruits)
console.log(fruitsCopy)
console.log(fruits === fruitsCopy)
