import { expect, it, describe } from 'vitest'
import { findMissingValue } from './sort.ts'

describe('findMissingValue', () => {
  it('finds first missing value', () => {
    const values = [1, 2, 4]

    expect(findMissingValue(values)).toBe(3)
  })

  it('finds nth missing value between given min and max values', () => {
    const values = [1, 3, 5, 6, 8, 10, 15]
    const nthMissing = 3

    expect(findMissingValue(values, nthMissing)).toBe(7)
  })

  it('finds nth missing value that is greater than max given value', () => {
    const values = [1, 2, 3, 4]
    const nthMissing = 1

    expect(findMissingValue(values, nthMissing)).toBe(5)
  })
})