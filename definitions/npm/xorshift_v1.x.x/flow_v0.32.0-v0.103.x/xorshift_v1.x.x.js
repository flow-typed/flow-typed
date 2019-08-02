declare module 'xorshift' {
  declare class XorShift {
    /**
     * Create a new random generator, with a specific seed.
     */
    constructor(seed: [number, number, number, number]): XorShift;
    /**
     * Returns a pseudo-random number in the range [0, 1), from 0 (inclusive) up to but not including 1 (exclusive).
     * This is equivalent to `Math.random()`.
     */
    random(): number;
    /**
     * Returns a random 64-bit integer represented as an array with two elements in big-endian order.
     */
    randomint(): [number, number];
  }
  declare module.exports: XorShift;
}
