import applyToCollection from './applyToCollection'
import get from './get'

function forEachValueIndex(array, cb) {
  for (let index = 0; index < array.length; index++) {
    cb(get(array, index), index)
  }
}

function forEachValueKey(object, cb) {
  for (const key in object) {
    cb(get(object, key), key)
  }
}

export default applyToCollection(forEachValueIndex, forEachValueKey)
