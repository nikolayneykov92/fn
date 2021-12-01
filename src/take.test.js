import take from './take'

describe('take', () => {
  test('should return first n values from an array', () => {
    expect(take([1, 2, 3], 0)).toEqual([])
    expect(take([1, 2, 3], 1)).toEqual([1])
    expect(take([1, 2, 3], 2)).toEqual([1, 2])
    expect(take([1, 2, 3], 3)).toEqual([1, 2, 3])
  })

  test('should return empty array from an empty array for any count', () => {
    expect(take([], 0)).toEqual([])
    expect(take([], 1)).toEqual([])
    expect(take([], 2)).toEqual([])
    expect(take([], 3)).toEqual([])
  })
})
