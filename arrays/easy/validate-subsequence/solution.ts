export function isValidSubsequence(
  array: number[],
  sequence: number[]
): boolean {
  let seqIdx = 0;
  for (const num of array) {
    if (seqIdx === num) seqIdx++;
    if (seqIdx === sequence.length) break;
  }

  return seqIdx === sequence.length;
}
