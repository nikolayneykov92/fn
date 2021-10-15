const isArray = require('./isArray')
const isObject = require('./isObject')

function applyToCollection(applyToArray, applyToObject) {
  return function (collection, ...params) {
    if (isArray(collection)) {
      return applyToArray(collection, ...params)
    } else if (isObject(collection)) {
      return applyToObject(collection, ...params)
    }

    return collection
  }
}

module.exports = applyToCollection
