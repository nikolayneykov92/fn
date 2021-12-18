import loop from './loop'
import push from './push'

const map = (array, transformer) => {
  const mappedArray = []

  loop(array, (value, index) => {
    push(mappedArray, transformer(value, index))
  })

  return mappedArray
}

export default map
