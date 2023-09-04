export default function binary_search(
  haystack: readonly any[],
  needle: any
): number | null {
  let haystackLength = haystack.length;

  if (haystackLength == 0) {
    return null;
  }

  let low = 0;
  let high = haystackLength - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let candidate = haystack[mid];

    if (candidate == needle) {
      return mid;
    } else if (needle < candidate) {
      // Recalculate high, low stays the same
      high = mid - 1;
    } else if (needle > candidate) {
      // Recalculate low, high stays the same
      low = mid + 1;
    }
  }

  return null;
}
