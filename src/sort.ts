export const findMissingValue = (values: number[], nthMissingValue = 1) => {
  if (!values.length) {
    return nthMissingValue
  }

  const sorted = values.sort()
  const firstValue = sorted[0]

  if (firstValue < 1) {
    throw Error('Only positive values allowed.')
  }

  let missingValueCount = 0
  const set = new Set(sorted)

  for (let i=firstValue; i++;) {
    if (!set.has(i)) {
      missingValueCount += 1
      if (missingValueCount === nthMissingValue) {
        return i
      }
    }
  }
}