import loop from './loop'
import push from './push'

const filter = (array, predicate) => {
  const filteredArray = []

  loop(array, (value, index) => {
    if (predicate(value, index)) {
      push(filteredArray, value)
    }
  })

  return filteredArray
}

export default filter
