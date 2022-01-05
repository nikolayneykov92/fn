import get from './get'
import loopUntil from './loopUntil'

function _findIndex(array, predicate) {
  for (let index = 0; index < array.length; index++) {
    if (predicate(get(array, index), index)) {
      return index
    }
  }
}

const findIndex = (array, predicate) => {
  let index = -1

  while (index++ < array.length) {
    if (predicate(get(array, index), index)) {
      return index
    }
  }

  return -1
}

export default findIndex

const arr = Array.from({ length: 10000000 })
arr.push('pesho')

console.time('findIndex')

let peshoIndex = findIndex(arr, value => value === 'pesho')
console.log(peshoIndex)

console.timeEnd('findIndex')
