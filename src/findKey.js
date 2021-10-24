import get from './get'

export default function findKey(object, predicate) {
  for (const key in object) {
    if (predicate(get(object, key), key)) {
      return key
    }
  }
}
