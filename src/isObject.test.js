import isObject from './isObject'

describe('isObject', () => {
  test('should return true when called with object', () => {
    expect(isObject({})).toBe(true)
  })

  test('should return false when called with non-object', () => {
    expect(isObject()).toBe(false)
    expect(isObject('test')).toBe(false)
    expect(isObject(42)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(null)).toBe(false)
  })
})
