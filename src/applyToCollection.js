import isArray from './isArray'
import isObject from './isObject'

export default function applyToCollection(applyToArray, applyToObject) {
  return function (collection, ...params) {
    if (isArray(collection)) {
      return applyToArray(collection, ...params)
    } else if (isObject(collection)) {
      return applyToObject(collection, ...params)
    }

    return collection
  }
}
