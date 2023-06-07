export const findMissingValue = (values: number[], nthMissingValue = 1) => {
  if (!values.length) {
    return 1
  }

  const sorted = values.sort()
  const set = new Set(sorted)
  const firstValue = sorted[0]
  let missingValueCount = 0

  for (let i=firstValue; i++;) {
    if (!set.has(i)) {
      missingValueCount += 1
      if (missingValueCount === nthMissingValue) {
        return i
      }
    }
  }
}