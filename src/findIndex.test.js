import findIndex from "./findIndex";

describe("findIndex", () => {
  test("should find index of a value in array by given predicate", () => {
    expect(findIndex([1, 2, 3], value => value === 1)).toBe(0)
    expect(findIndex([1, 2, 3], value => value === 2)).toBe(1)
    expect(findIndex([1, 2, 3], value => value === 5)).toBe(undefined)

    expect(findIndex(['kiki', 'leon', 'lea'], value => value[0] === 'l')).toBe(1)
    expect(findIndex(['kiki', 'leon', 'lea'], value => value[2] === 'k')).toBe(0)
    expect(findIndex(['kiki', 'leon', 'lea'], value => value[2] === 'a')).toBe(2)

    expect(findIndex([], value => value[1] === 'a')).toBe(undefined)

    expect(findIndex([{ name: 'kiki', age: 29 }, { name: 'leon', age: 27 }], value => value.name === 'kiki')).toBe(0)
    expect(findIndex([{ name: 'kiki', age: 29 }, { name: 'leon', age: 27 }], value => value.age === 27)).toBe(1)

    expect(findIndex([{}, {}], value => value.name === 'kiki')).toBe(undefined)
    expect(findIndex([{}, {}], value => value.id === 'kiki')).toBe(undefined)
  })
})