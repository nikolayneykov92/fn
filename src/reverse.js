import loop from './loop'
import set from './set'

const reverse = array => {
  const reversedArray = []
  reversedArray.length = array.length

  loop(array, (value, index) => {
    set(reversedArray, array.length - 1 - index, value)
  })

  return reversedArray
}

export default reverse
