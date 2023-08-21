export function nonConstructibleChange(coins: number[]) {
  if (coins.length === 0) return 1;
  coins.sort((a, b) => a - b);
  let totalChange = 0;
  for (const coin of coins) {
    if (totalChange + 1 < coin) return totalChange + 1;
    totalChange += coin;
  }
  return totalChange + 1;
}
