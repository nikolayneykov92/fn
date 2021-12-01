import get from './get'

const loop = (array, callback) => {
  let length = array.length
  let index = 0

  while (length > index) {
    callback(get(array, index), index)
    index += 1
  }
}

export default loop
