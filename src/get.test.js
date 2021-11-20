import get from './get'

describe('get', () => {
  test('should return value from an array for given index', () => {
    expect(get([1, 2, 3], 0)).toEqual(1)
    expect(get([1, 2, 3], 1)).toEqual(2)
    expect(get([1, 2, 3], 2)).toEqual(3)
  })

  test('should return undefined from an array when the given index is not in the range of the array', () => {
    expect(get([], -1)).toEqual(undefined)
    expect(get([], 0)).toEqual(undefined)
    expect(get([], 1)).toEqual(undefined)
  })

  test('should return value from an object for given key', () => {
    expect(get({ keyA: 'a', keyB: 'b', keyC: 'c' }, 'keyA')).toEqual('a')
    expect(get({ keyA: 'a', keyB: 'b', keyC: 'c' }, 'keyB')).toEqual('b')
    expect(get({ keyA: 'a', keyB: 'b', keyC: 'c' }, 'keyC')).toEqual('c')
  })

  test('should return undefined from an object when the given key is not defined in the object', () => {
    expect(get({}, 'keyA')).toEqual(undefined)
    expect(get({}, 'keyB')).toEqual(undefined)
    expect(get({}, 'keyC')).toEqual(undefined)
  })
})
