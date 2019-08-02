declare module 'mersenne-twister' {
  declare class $npm$MersenneTwister {
    constructor(seed?: number|Array<number>): $npm$MersenneTwister;
    init_seed(seed: number): void;
    init_by_array(init_key: Array<number>, key_length: number): void;

    random(): number;
    random_int(): number;
    random_excl(): number;
    random_long(): number;
    random_int31(): number;

    mt: Array<number>;
    mti: number;
  }

  declare module.exports: typeof $npm$MersenneTwister;
}
