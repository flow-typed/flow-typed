declare module 'bn.js' {
  declare type Endianness = 'le' | 'be';
  declare type Primes = 'k256' | 'p224' | 'p192' | 'p25519';
  declare type ReductionContext = BN | Primes;
  declare type Extended = {|
    words: Array<number>,
    length: number,
  |};

  declare class MPrime {
    p: BN;

    constructor(name: string, p: string): MPrime;

    ireduce(b: BN): BN;
    split(input: BN, out: BN): void;
    imulK(b: BN): BN;
  }

  declare class Red {
    prime: MPrime;

    constructor(m: ReductionContext): Red;
  }

  declare class BN {
    constructor(
      number?: number | string,
      base?: number | 'hex' | null,
      endian?: Endianness
    ): BN;
    constructor(
      number?: Array<number> | Uint8Array | Buffer | BN,
      endian?: Endianness
    ): BN;

    negative: boolean;
    words: Array<number> | null;
    length: number;

    static min(a: BN, b: BN): BN;
    static max(a: BN, b: BN): BN;
    static _prime(prime: Primes): MPrime;
    static red(b: ReductionContext): Red;
    static mont(b: BN): Red;

    // Arithmetics
    neg(): BN;
    ineg(): BN;
    abs(): BN;
    iabs(): BN;
    add(b: BN): BN;
    iadd(b: BN): BN;
    addn(b: number): BN;
    iaddn(b: number): BN;
    sub(b: BN): BN;
    isub(b: BN): BN;
    subn(b: number): BN;
    isubn(b: number): BN;
    mul(b: BN): BN;
    imul(b: BN): BN;
    muln(b: number): BN;
    imuln(b: number): BN;
    sqr(): BN;
    isqr(): BN;
    pow(b: BN): BN;
    div(b: BN): BN;
    divn(b: number): BN;
    idivn(b: number): BN;
    mod(b: BN): BN;
    umod(b: BN): BN;
    modn(b: number): BN;
    divRound(b: BN): BN;

    // Bit operations
    or(b: BN): BN;
    ior(b: BN): BN;
    uor(b: BN): BN;
    iuor(b: BN): BN;
    and(b: BN): BN;
    iand(b: BN): BN;
    uand(b: BN): BN;
    iuand(b: BN): BN;
    andln(b: number): number;
    xor(b: BN): BN;
    ixor(b: BN): BN;
    uxor(b: BN): BN;
    iuxor(b: BN): BN;
    setn(bit: number, val: boolean): BN;
    shln(bits: number): BN;
    ishln(bits: number): BN;
    ushln(bits: number): BN;
    iushln(bits: number): BN;
    shrn(bits: number): BN;
    ishrn(bits: number, hint?: number, extended?: Extended): BN;
    ushrn(bits: number): BN;
    iushrn(bits: number, hint?: number, extended?: Extended): BN;
    testn(bit: number): boolean;
    maskn(bits: number): BN;
    imaskn(bits: number): BN;
    bincn(bit: number): BN;

    // Reduction
    gcd(b: BN): BN;
    egcd(b: BN): BN;
    invm(b: BN): BN;

    // Red instructions
    redAdd(b: BN): BN;
    redIAdd(b: BN): BN;
    redSub(b: BN): BN;
    redISub(b: BN): BN;
    redShl(b: number): BN;
    redMul(b: BN): BN;
    redIMul(b: BN): BN;
    redSqr(): BN;
    redISqr(): BN;
    redSqrt(): BN;
    redInvm(): BN;
    redNeg(): BN;
    redPow(b: BN): BN;

    // Utilities
    clone(): BN;
    toArray(endian?: Endianness, length?: number): Array<number>;
    toString(base?: number | 'hex', padding?: number): string;
    bitLength(): number;
    zeroBits(): number;
    byteLength(): number;
    isEven(): boolean;
    isOdd(): boolean;
    cmp(b: BN): number;
    ucmp(b: BN): number;
    cmpn(b: number): number;
    toRed(red: Red): BN;
    fromRed(): BN;
  }

  declare module.exports: typeof BN;
}
