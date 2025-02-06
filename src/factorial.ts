// Utility function that computes the factorial of a non-negative integer.
// Returns -1 for invalid (negative) inputs.

export default function factorial(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
