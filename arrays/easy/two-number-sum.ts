export function twoNumberSum(array: number[], targetSum: number): number[] {
  const nums: { [key: number]: boolean } = {};
  for (const num of array) {
    const potentialMatch: number = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

console.assert(
  JSON.stringify(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) ===
    JSON.stringify([11, -1]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([4, 6], 10)) === JSON.stringify([4, 6]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([4, 6, 1], 5)) === JSON.stringify([4, 1]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([4, 6, 1, -3], 3)) === JSON.stringify([6, -3]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)) ===
    JSON.stringify([8, 9]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)) ===
    JSON.stringify([3, 15]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)) ===
    JSON.stringify([-5, 0]),
  '❌'
);

console.assert(
  JSON.stringify(
    twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)
  ) === JSON.stringify([210, -47]),
  '❌'
);

console.assert(
  JSON.stringify(
    twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)
  ) === JSON.stringify([]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)) ===
    JSON.stringify([]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([14], 15)) === JSON.stringify([]),
  '❌'
);

console.assert(
  JSON.stringify(twoNumberSum([15], 15)) === JSON.stringify([]),
  '❌'
);
