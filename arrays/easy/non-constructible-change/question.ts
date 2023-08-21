export function nonConstructibleChange(coins: number[]): number {
  return 0;
}

console.assert(nonConstructibleChange([1, 1, 2, 3, 5, 7, 22]) === 20, '❌');

console.assert(nonConstructibleChange([1, 1, 1, 1, 1]) === 6, '❌');

console.assert(
  nonConstructibleChange([1, 1, 1, 1, 5, 10, 15, 20, 100]) === 55,
  '❌'
);

console.assert(nonConstructibleChange([1, 1, 4, 5, 6, 8, 9]) === 3, '❌');

console.assert(nonConstructibleChange([]) === 1, '❌');

console.assert(nonConstructibleChange([87]) === 1, '❌');

console.assert(nonConstructibleChange([1, 1, 2, 3, 4, 5, 6, 9]) === 32, '❌');

console.assert(nonConstructibleChange([1, 1, 2, 3, 5, 6, 43]) === 19, '❌');

console.assert(nonConstructibleChange([1, 1]) === 3, '❌');

console.assert(nonConstructibleChange([2]) === 1, '❌');

console.assert(nonConstructibleChange([1]) === 2, '❌');

console.assert(
  nonConstructibleChange([1, 1, 2, 4, 8, 16, 17, 18, 19, 109, 2000, 8765]) ===
    87,
  '❌'
);

console.assert(nonConstructibleChange([1, 2, 3, 4, 5, 6, 7]) === 29, '❌');
