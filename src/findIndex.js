import get from './get'

export default function findIndex(array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (predicate(get(array, index), index)) {
      return index
    }
  }
}
