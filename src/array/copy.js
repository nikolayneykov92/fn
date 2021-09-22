const set = require('../_helpers/set')
const get = require('../_helpers/get')

function copy(array) {
  const arrayCopy = []
  let leftIndex = -1
  let rightIndex = array.length

  while (++leftIndex <= --rightIndex) {
    set(arrayCopy, leftIndex, get(array, leftIndex))
    set(arrayCopy, rightIndex, get(array, rightIndex))
  }

  return arrayCopy
}

module.exports = copy
