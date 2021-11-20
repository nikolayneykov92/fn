import isArray from './isArray'

describe('isArray', () => {
  test('should return true when called with array', () => {
    expect(isArray([])).toBe(true)
  })

  test('should return false when called with non array', () => {
    expect(isArray()).toBe(false)
    expect(isArray('test')).toBe(false)
    expect(isArray(42)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(null)).toBe(false)
  })
})
