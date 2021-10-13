const get = require('../_helpers/get')

function join(array, separator) {
  let string = array.length === 0 ? '' : get(array, 0)

  for (let i = 1; i < array.length; i++) {
    string += separator + get(array, i)
  }

  return string
}

const array = ['Mnogo', 'haresvam', 'Niki', 'N', '.']
console.log(join(array, '_')) // Mnogo_haresvam_Niki_N_.

const numbers = [1, 2, 3, 4, 5]
console.log(join(numbers, '#')) // 1#2#3#4#5
console.log(join([], '~'))
