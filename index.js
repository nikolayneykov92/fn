import copy from './src/copy'
import filter from './src/filter'
import findIndex from './src/findIndex'
import findKey from './src/findKey'
import findValue from './src/findValue'
import forEach from './src/forEach'
import join from './src/join'
import negate from './src/negate'
import omit from './src/omit'
import pick from './src/pick'
import reject from './src/reject'
import reverse from './src/reverse'
import skip from './src/skip'
import split from './src/split'
import take from './src/take'

const numbers = [1, 2, 3, 4, 5]
const infinity = { shape: 'circle', size: 15, female: true }

const copyNumbers = copy(numbers)
console.log(numbers) // [ 1, 2, 3, 4, 5 ]
console.log(copyNumbers) // [ 1, 2, 3, 4, 5 ]
console.log(numbers === copyNumbers) // false

const copyInfinity = copy(infinity)
console.log(infinity) // { shape: 'circle', size: 15, female: true }
console.log(copyInfinity) // { shape: 'circle', size: 15, female: true }
console.log(infinity === copyInfinity) // false

console.log(filter(numbers, (number, index) => (number % 2 !== 0 && number !== 3) || number === 4 || index === 1)) // [ 1, 2, 4, 5 ]

console.log(findIndex(['kiki', 'miki', 'kimi'], value => value[0] === 'm')) // 1

console.log(findKey({ name: 'kiki', password: 'miki', inLoveWith: 'kimi' }, value => value[0] === 'm')) // password

console.log(findValue(['kiki', 'miki', 'kimi'], value => value[0] === 'm')) // miki
console.log(findValue({ name: 'kiki', password: 'miki', inLoveWith: 'kimi' }, value => value[0] === 'm')) // miki

forEach(numbers, (number, index) => {
  console.log(index, number)
  // 0 1
  // 1 2
  // 2 3
  // 3 4
  // 4 5
})

forEach(infinity, (value, key) => {
  console.log(key, value)
  // shape 'circle'
  // size 15
  // female true
})

const joinedNumbers = join(numbers, '_')
console.log(joinedNumbers) // 1_2_3_4_5

const predicate = () => false
const negatedPredicate = negate(predicate)
console.log(predicate()) // false
console.log(negatedPredicate()) // true

console.log(omit(infinity, 'shape', 'size')) // { female: true }

const obj = { id: '1', username: 'Lea', password: '12345', email: 'lea@com' }
console.log(pick(obj, 'id', 'username')) // { id: '1', username: 'Lea' }
console.log(pick(obj, 'username', 'password', 'email')) // { username: 'Lea', password: '12345', email: 'lea@com' }

console.log(reject(numbers, (number, index) => (number % 2 !== 0 && number !== 3) || number === 4 || index === 1)) // [ 3 ]

const reversedNumbers = reverse(numbers)
console.log(reversedNumbers) // [ 5, 4, 3, 2, 1 ]

console.log(skip(numbers, 3)) // [ 4, 5 ]

const splittedNumbers = split(joinedNumbers, '_')
console.log(splittedNumbers) // [ 1, 2, 3, 4, 5 ]

console.log(take(numbers, 3)) // [ 1, 2, 3 ]
