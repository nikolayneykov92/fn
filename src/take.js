import loop from './loop'
import push from './push'

const take = (array, count) => {
  const subArray = []

  loop(array, (value, index) => {
    if (index < count) {
      push(subArray, value)
    }
  })

  return subArray
}

export default take
