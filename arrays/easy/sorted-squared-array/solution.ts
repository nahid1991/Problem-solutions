export function sortedSquaredArray(array: number[]) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  let result: number[] = new Array(array.length).fill(0);
  for (let idx = array.length - 1; idx >= 0; idx--) {
    if (Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
      result[idx] = array[leftIdx] * array[leftIdx];
      leftIdx++;
    } else {
      result[idx] = array[rightIdx] * array[rightIdx];
      rightIdx--;
    }
  }

  return result;
}
