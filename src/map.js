import loop from './loop'
import set from './set'

const map = (array, transformer) => {
  const mappedArray = []
  mappedArray.length = array.length

  loop(array, (value, index) => {
    set(mappedArray, index, transformer(value, index))
  })

  return mappedArray
}

export default map
