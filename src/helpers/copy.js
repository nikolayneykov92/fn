const set = require('./set')

function copy(collection) {
  let collectionCopy = []

  for (let index = 0; index < collection.length; index++) {
    collectionCopy = set(collectionCopy, collectionCopy.length, collection[index])
  }

  return collectionCopy
}

module.exports = copy
