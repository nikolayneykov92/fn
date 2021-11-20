import set from './set'

describe('set', () => {
  test('should set value in an array at given index', () => {
    const mockedArray = []

    set(mockedArray, 0, 1)
    set(mockedArray, 1, 2)
    set(mockedArray, 2, 3)

    expect(mockedArray).toEqual([1, 2, 3])
  })

  test('should set value in an object at given key', () => {
    const mockedObject = {}

    set(mockedObject, 'keyA', 'a')
    set(mockedObject, 'keyB', 'b')
    set(mockedObject, 'keyC', 'c')

    expect(mockedObject).toEqual({ keyA: 'a', keyB: 'b', keyC: 'c' })
  })
})
