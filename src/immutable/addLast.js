const copy = require('../helpers/copy')
const set = require('../helpers/set')
// adds element to the end of an array, and returns the array with the added element. (does not mutate the original array)

function addLast(array, element) {
  return set(copy(array), array.length, element)
}

module.exports = addLast
