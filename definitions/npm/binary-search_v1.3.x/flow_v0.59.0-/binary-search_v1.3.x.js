declare module "binary-search" {
  declare export default function binarySearch<A, B>(
    haystack: A[],
    needle: B,
    comparator: (a: A, b: B, index?: number, haystack?: A[]) => number,
    low?: number,
    high?: number,
  ): number;
}
