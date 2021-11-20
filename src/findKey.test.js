import findKey from "./findKey";

describe("findKey", () => {
  test("should find key  of a value in object by given predicate", () => {
    expect(findKey({ name: 'leon', age: 27 }, value => value === 'leon')).toBe('name')
    expect(findKey({ name: 'leon', age: 27 }, value => value === 27)).toBe('age')

    expect(findKey({}, value => value === 'kiki')).toBe(undefined)
    expect(findKey({}, value => value === 5)).toBe(undefined)
  })
})
