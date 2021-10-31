import get from './get'
import set from './set'

export default function pick(object, ...keys) {
  const picked = {}

  for (let index = 0; index < keys.length; index++) {
    set(picked, get(keys, index), get(object, get(keys, index)))
  }

  return picked
}
