import get from './get'
import set from './set'

export default function filter(array, predicate) {
  const filteredArray = []

  for (let index = 0; index < array.length; index++) {
    if (predicate(get(array, index), index)) {
      set(filteredArray, filteredArray.length, get(array, index))
    }
  }

  return filteredArray
}
