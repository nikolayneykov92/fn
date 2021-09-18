const set = require('../helpers/set')
// adds element to the end of an array, and returns the array with the added element. (mutates the original arrray)

function addLast(array, element) {
  return set(array, array.length, element)
}

module.exports = addLast
