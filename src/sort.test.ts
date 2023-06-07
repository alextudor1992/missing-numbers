import { expect, it, describe } from 'vitest'
import { findMissingValue } from './sort.ts'

describe('findMissingValue', () => {
  it('finds first missing value', () => {
    const values = [1, 2, 4]

    expect(findMissingValue(values)).toBe(3)
  })

  it('finds nth missing value between given min and max values', () => {
    const values = [1, 8, 3, 5, 6, 10, 15]
    const nthMissing = 3

    expect(findMissingValue(values, nthMissing)).toBe(7)
  })

  it('finds nth missing value that is greater than max given value', () => {
    const values = [1, 2, 3, 4]
    const nthMissing = 1

    expect(findMissingValue(values, nthMissing)).toBe(5)
  })

  it('throws error if negative values are passed', () => {
    const values = [-1, 2, 3, 4]
    expect(() => findMissingValue(values)).toThrow(Error)
  })

  it('returns nth missing value even if array is empty', () => {
    const data: number[] = []
    expect(findMissingValue(data)).toBe(1)

    Array.from([2, 3, 5, 10, 100]).forEach(value => {
      expect(findMissingValue(data, value)).toBe(value)
      expect(findMissingValue(data, value)).toBe(value)
      expect(findMissingValue(data, value)).toBe(value)
      expect(findMissingValue(data, value)).toBe(value)
    })
  })
})