const set = require('./set')
const get = require('./get')

function reverse(array) {
  const reversedArray = []
  let leftIndex = -1
  let rightIndex = array.length

  while (++leftIndex <= --rightIndex) {
    set(reversedArray, leftIndex, get(array, rightIndex))
    set(reversedArray, rightIndex, get(array, leftIndex))
  }

  return reversedArray
}

module.exports = reverse

// const numbers = [1, 2, 3, 4, 5]
// const reversedNumbers = reverse(numbers)
// console.log(reversedNumbers) // [5, 4, 3, 2, 1]
// console.log(numbers) //[1, 2, 3, 4, 5]
// console.log(reversedNumbers !== numbers) // true

/**
  
[_, _, _, _, _]
[5, _, _, _, _]
[5, _, _, _, 1]
[5, 4, _, _, 1]
[5, 4, _, 2, 1]
[5, 4, 3, 2, 1]
[5, 4, 3, 2, 1]
 */
