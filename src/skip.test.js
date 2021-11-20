import skip from './skip'

describe('skip', () => {
  test('should skip first n values from an array and return the rest of the values', () => {
    expect(skip([1, 2, 3], 0)).toEqual([1, 2, 3])
    expect(skip([1, 2, 3], 1)).toEqual([2, 3])
    expect(skip([1, 2, 3], 2)).toEqual([3])
    expect(skip([1, 2, 3], 3)).toEqual([])
  })

  test('should skip first n values from an empty array and return an empty array', () => {
    expect(skip([], 0)).toEqual([])
    expect(skip([], 1)).toEqual([])
    expect(skip([], 2)).toEqual([])
    expect(skip([], 3)).toEqual([])
  })
})
