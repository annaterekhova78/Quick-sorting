export const partition = (arr, start, end) => {
  const pivotValue = arr[start]

  let swapIdx = start
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIdx++
      if (i !== swapIdx) {
        [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
      }
    }
  }
  if (swapIdx !== start) {
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]]
  }
  return swapIdx
}
