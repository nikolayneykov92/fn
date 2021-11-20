import applyToCollection from './applyToCollection'

describe('applyToCollection', () => {
  let mockApplyToArray
  let mockApplyToObject

  beforeEach(() => {
    mockApplyToArray = jest.fn()
    mockApplyToObject = jest.fn()
  })

  test('should apply to array when provided collection is array', () => {
    applyToCollection(mockApplyToArray, mockApplyToObject)([], 'test')
    expect(mockApplyToObject).not.toHaveBeenCalled()
    expect(mockApplyToArray).toHaveBeenCalledTimes(1)
    expect(mockApplyToArray).toHaveBeenCalledWith([], 'test')
  })

  test('should apply to object when provided collection is object', () => {
    applyToCollection(mockApplyToArray, mockApplyToObject)({}, 'test')
    expect(mockApplyToArray).not.toHaveBeenCalled()
    expect(mockApplyToObject).toHaveBeenCalledTimes(1)
    expect(mockApplyToObject).toHaveBeenCalledWith({}, 'test')
  })
})
