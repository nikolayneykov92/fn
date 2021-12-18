import map from './map'

describe('map', () => {
  test('should transform each value in an array', () => {
    expect(map([1, 2, 3], number => number * 2)).toEqual([2, 4, 6])
    expect(map(['a', 'b', 'c'], letter => letter.toUpperCase())).toEqual(['A', 'B', 'C'])
    expect(map([true, false, false], boolean => !boolean)).toEqual([false, true, true])
    expect(map([{ username: 'kiki' }, { username: 'alex' }], object => object.username)).toEqual(['kiki', 'alex'])
  })
})
