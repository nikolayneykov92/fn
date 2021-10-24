import applyToCollection from './applyToCollection'
import get from './get'

function findValueInArray(array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (predicate(get(array, index), index)) {
      return get(array, index)
    }
  }
}

function findValueInObject(object, predicate) {
  for (const key in object) {
    if (predicate(get(object, key), key)) {
      return get(object, key)
    }
  }
}

export default applyToCollection(findValueInArray, findValueInObject)
