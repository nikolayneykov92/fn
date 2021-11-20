import deleteKey from './deleteKey'

describe('deleteKey', () => {
  test('should delete key from object', () => {
    const mockObject = { a: 1, b: 2, c: 3 }

    deleteKey(mockObject, 'a')
    expect(mockObject).toEqual({ b: 2, c: 3 })

    deleteKey(mockObject, 'b')
    expect(mockObject).toEqual({ c: 3 })

    deleteKey(mockObject, 'c')
    expect(mockObject).toEqual({})
  })
})
