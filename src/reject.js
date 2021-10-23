import filter from './filter'
import negate from './negate'

export default function reject(array, predicate) {
  return filter(array, negate(predicate))
}
