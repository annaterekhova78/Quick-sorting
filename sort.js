import { partition } from './partition.js';

export const sort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return
  let pivotIndex = partition(arr, start, end)
  sort(arr, start, pivotIndex - 1)
  sort(arr, pivotIndex + 1, end)
  return arr
}
