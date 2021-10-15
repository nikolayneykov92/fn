import get from './get'
import set from './set'

export default function split(string, separator) {
  let array = []
  let subString = ''

  for (let i = 0; i < string.length; i++) {
    const char = get(string, i)

    if (char === separator) {
      set(array, array.length, subString)
      subString = ''
    } else {
      subString += char
    }
  }

  if (subString) {
    set(array, array.length, subString)
  }

  return array
}

// const text = 'Mnogo_haresvam_Niki_N_.'
// const result = split(text, '_')
// console.log(result) // [ 'Mnogo', 'haresvam', 'Niki', 'N', '.' ]

// let subString = ''
// subString += 'm'
// subString += 'n'
// subString += 'o'
// subString += 'g'
// subString += 'o'
// console.log(subString)

// subString = 'portokala'
// console.log(subString)

// subString += 'o'
// subString += 'b'
// subString += 'i'
// subString += '4'
// subString += 'a'
// subString += 'm'
// console.log(subString)
