import get from './get'

const loopUntil = (array, callback) => {
  let condition = true
  let index = 0

  while (condition) {
    condition = callback(get(array, index), index)
    index += 1
  }
}

export default loopUntil
