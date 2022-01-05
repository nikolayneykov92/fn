import loop from './loop'
import set from './set'

const filter = (array, predicate) => {
  let lastIndex = 0
  const filteredArray = []
  filteredArray.length = array.length

  loop(array, (value, index) => {
    if (predicate(value, index)) {
      set(filteredArray, lastIndex++, value)
    }
  })

  filteredArray.length = lastIndex

  return filteredArray
}

export default filter
