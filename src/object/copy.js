const get = require('../_helpers/get')
const set = require('../_helpers/set')

function copy(object) {
  const objectCopy = {}

  for (const key in object) {
    set(objectCopy, key, get(object, key))
  }

  return objectCopy
}

module.exports = copy
