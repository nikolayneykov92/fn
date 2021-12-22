import isUndefined from './isUndefined'
import isNull from './isNull'

const isEmpty = value => {
  return isUndefined(value) || isNull(value)
}

export default isEmpty
