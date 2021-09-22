const get = require('./helpers/get')
const set = require('./helpers/set')

function copy(object) {
  const objectCopy = {}

  for (const key in object) {
    set(objectCopy, key, get(object, key))
  }

  return objectCopy
}

module.exports = copy
