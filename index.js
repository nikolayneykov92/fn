const copy = require('./src/copy')
const join = require('./src/join')
const split = require('./src/split')
const reverse = require('./src/reverse')

const numbers = [1, 2, 3, 4, 5]
const infinity = { shape: 'circle', size: 15, female: true }

const copyNumbers = copy(numbers)
console.log(numbers) // [1, 2, 3, 4, 5]
console.log(copyNumbers) // [1, 2, 3, 4, 5]
console.log(numbers === copyNumbers) // false

const copyInfinity = copy(infinity)
console.log(infinity) // { shape: 'circle', size: 15, female: true }
console.log(copyInfinity) // { shape: 'circle', size: 15, female: true }
console.log(infinity === copyInfinity) // false

const joinedNumbers = join(numbers, '_')
console.log(joinedNumbers) // 1_2_3_4_5

const splittedNumbers = split(joinedNumbers, '_')
console.log(splittedNumbers) // [1, 2, 3, 4, 5]

const reversedNumbers = reverse(numbers)
console.log(reversedNumbers) // [5, 4, 3, 2, 1]