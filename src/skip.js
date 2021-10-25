import get from './get'
import set from './set'

export default function skip(array, count) {
  const subArray = []

  for (let index = count; index < array.length; index++) {
    set(subArray, subArray.length, get(array, index))
  }

  return subArray
}
