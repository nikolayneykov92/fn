import isEmpty from './isEmpty'

const defaultTo = (value, defaultValue) => {
  if (isEmpty(value)) {
    return defaultValue
  }

  return value
}

export default defaultTo
