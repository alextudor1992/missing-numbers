export const findMissingValue = (values: number[], nthMissingValue = 1) => {
  if (!values.length) {
    return nthMissingValue
  }

  const sorted = values.sort()
  const firstValue = sorted[0]

  if (firstValue < 1) {
    throw new Error('Only positive values allowed.')
  }

  const set = new Set(sorted)

  for (let i=firstValue, missingValueCount=0; i++;) {
    if (!set.has(i)) {
      missingValueCount += 1
      if (missingValueCount === nthMissingValue) {
        return i
      }
    }
  }
}