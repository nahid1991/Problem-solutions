export function isValidSubsequence(
  array: number[],
  sequence: number[]
): boolean {
  return false;
}

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]) === true,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10]
  ) === true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]) ===
    true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]) === true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]) === true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]) === true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10]) === true,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]) === true,
  '❌'
);

console.assert(isValidSubsequence([5, -1, 8, 10], [1, 1, 1]) === true, '❌');

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10, 12]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [4, 5, 1, 22, 25, 6, -1, 8, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 23, 6, -1, 8, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 22, 25, 6, -1, 8, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 22, 6, -1, 8, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]) === false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10]) ===
    false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2]) === false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26]) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 25, 22, 6, -1, 8, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8]) === false,
  '❌'
);

console.assert(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]) === false, '❌');

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [1, 6, -1, 10, 11, 11, 11, 11]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10, 10]
  ) === false,
  '❌'
);

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 5]) === false,
  '❌'
);
