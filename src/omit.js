import get from './get'
import copy from './copy'
import deleteKey from './deleteKey'

export default function omit(object, ...keys) {
  const objectCopy = copy(object)

  for (let index = 0; index < keys.length; index++) {
    deleteKey(objectCopy, get(keys, index))
  }

  return objectCopy
}
