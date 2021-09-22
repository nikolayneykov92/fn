const isArray = require('./_helpers/isArray')
const isObject = require('./_helpers/isArray')

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
