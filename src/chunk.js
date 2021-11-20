import set from './set'
import take from './take'
import skip from './skip'

export default function chunk(array, size) {
  const chunks = []

  for (let index = 0; index < array.length; index += size) {
    set(chunks, chunks.length, take(skip(array, index), size))
  }

  const lastChunk = skip(array, (chunks.length - 1) * size)
  set(chunks, chunks.length - 1, lastChunk)

  return chunks
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(chunk(arr, 2)) // [[ 1, 2 ] , [ 3, 4 ] ,  [ 5, 6 ] , [ 7 ]]
