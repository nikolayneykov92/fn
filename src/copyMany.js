const set = require('./helpers/set')
const get = require('./helpers/get')

function copyMany(array) {
  const arrayCopy = []
  let leftIndex = -1
  let rightIndex = array.length

  while (++leftIndex <= --rightIndex) {
    set(arrayCopy, leftIndex, get(array, leftIndex))
    set(arrayCopy, rightIndex, get(array, rightIndex))
  }

  return arrayCopy
}

module.exports = copyMany
