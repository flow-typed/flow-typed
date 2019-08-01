declare module 'imurmurhash' {
  declare class MurmurHash3 {
    /**
     * Get a hash state object, optionally initialized with the given string and seed.
     * Seed must be a positive integer if provided.
     * Calling this function without the `new` keyword will return a cached state object that has been reset.
     */
    static (string: ?string, seed: ?number): MurmurHash3;
    /**
     * Create a new hash state object, optionally initialized with the given string and seed.
     * Seed must be a positive integer if provided.
     */
    constructor(string: ?string, seed: ?number): MurmurHash3;
    /**
     * Incrementally add `string` to the hash.
     * This can be called as many times as you want for the hash state object, including after a call to `result()`.
     * Returns `this` so calls can be chained.
     */
    hash(string: string): this;
    /**
     * Get the result of the hash as a 32-bit positive integer.
     * This performs the tail and finalizer portions of the algorithm, but does not store the result in the state object.
     * This means that it is perfectly safe to get results and then continue adding strings via `hash()`.
     */
    result(): number;
    /**
     * Reset the state object for reuse, optionally using the given seed (defaults to 0 like the constructor).
     * Returns `this` so calls can be chained.
     */
    reset(seed?: number): this;
  }
  declare module.exports: Class<MurmurHash3>;
}
