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
