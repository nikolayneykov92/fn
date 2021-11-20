import copy from './copy'

describe('copy', () => {
  let mockArray
  let mockObject

  beforeEach(() => {
    mockArray = ['a', 'b', 'c']
    mockObject = { a: 1, b: 2, c: 3 }
  })

  test('should copy array', () => {
    const mockArrayCopy = copy(mockArray)
    expect(mockArrayCopy).toEqual(['a', 'b', 'c'])
    expect(mockArrayCopy).not.toBe(mockArray)
  })

  test('should copy object', () => {
    const mockObjectCopy = copy(mockObject)
    expect(mockObjectCopy).toEqual({ a: 1, b: 2, c: 3 })
    expect(mockObjectCopy).not.toBe(mockObject)
  })
})
