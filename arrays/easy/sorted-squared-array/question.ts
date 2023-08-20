export function sortedSquaredArray(array: number[]) {}

console.assert(
  JSON.stringify(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) ===
    JSON.stringify([1, 4, 9, 25, 36, 64, 81]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([1])) === JSON.stringify([1]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([1, 2])) === JSON.stringify([1, 4]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([1, 2, 3, 4, 5])) ===
    JSON.stringify([1, 4, 9, 16, 25]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([0])) === JSON.stringify([0]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([10])) === JSON.stringify([100]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-1])) === JSON.stringify([1]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-2, -1])) === JSON.stringify([1, 4]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-5, -4, -3, -2, -1])) ===
    JSON.stringify([1, 4, 9, 16, 25]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-10])) === JSON.stringify([100]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-10, -5, 0, 5, 10])) ===
    JSON.stringify([0, 25, 25, 100, 100]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-7, -3, 1, 9, 22, 30])) ===
    JSON.stringify([1, 9, 49, 81, 484, 900]),
  '❌'
);

console.assert(
  JSON.stringify(
    sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20])
  ) === JSON.stringify([0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) ===
    JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-1, -1, 2, 3, 3, 3, 4])) ===
    JSON.stringify([1, 1, 4, 9, 9, 9, 16]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-3, -2, -1])) ===
    JSON.stringify([1, 4, 9]),
  '❌'
);

console.assert(
  JSON.stringify(sortedSquaredArray([-3, -2, -1])) ===
    JSON.stringify([1, 4, 9]),
  '❌'
);
