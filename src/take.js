import get from './get'
import set from './set'

export default function take(array, count) {
  const subArray = []

  for (let index = 0; index < count; index++) {
    set(subArray, subArray.length, get(array, index))
  }

  return subArray
}
