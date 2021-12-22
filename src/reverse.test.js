import reverse from './reverse'

describe('reverse', () => {
  test('should reverse array', () => {
    expect(reverse([])).toEqual([])
    expect(reverse([1])).toEqual([1])
    expect(reverse([1, 2])).toEqual([2, 1])
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
    expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })
})
