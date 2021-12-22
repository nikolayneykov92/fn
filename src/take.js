import loop from './loop'
import set from './set'
import get from './get'

const take = (array, count) => {
  const subArray = []

  if (count > array.length) {
    subArray.length = array.length
  } else if (count > 0) {
    subArray.length = count
  }

  loop(subArray, (_, index) => {
    set(subArray, index, get(array, index))
  })

  return subArray
}

export default take
