// @flow
/**
 * Flowtype definitions for jsbn
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface jsbn$RandomGenerator {
    nextBytes(bytes: number[]): void
}

declare export class BigInteger {
    constructor(a: number, c: jsbn$RandomGenerator): this;
    constructor(a: number, b: number, c: jsbn$RandomGenerator): this;
    constructor(a: string, b?: number): this;
    constructor(a: number[], b?: number): this;
    constructor(a: jsbn$BigInteger): this;
    s: number;
    t: number;
    data: number[];
    DB: number;
    DM: number;
    DV: number;
    FV: number;
    F1: number;
    F2: number;
    am(
        i: number,
        x: number,
        w: jsbn$BigInteger,
        j: number,
        c: number,
        n: number): number;
    copyTo(r: jsbn$BigInteger): void;
    fromInt(x: number): void;
    fromString(x: string, b: number): void;
    clamp(): void;
    toString(b?: number): string;
    negate(): jsbn$BigInteger;
    abs(): jsbn$BigInteger;
    compareTo(a: jsbn$BigInteger): number;
    bitLength(): number;
    dlShiftTo(n: number, r: jsbn$BigInteger): void;
    drShiftTo(n: number, r: jsbn$BigInteger): void;
    lShiftTo(n: number, r: jsbn$BigInteger): void;
    rShiftTo(n: number, r: jsbn$BigInteger): void;
    subTo(a: jsbn$BigInteger, r: jsbn$BigInteger): void;
    multiplyTo(a: jsbn$BigInteger, r: jsbn$BigInteger): void;
    squareTo(r: jsbn$BigInteger): void;
    divRemTo(m: jsbn$BigInteger, q: jsbn$BigInteger, r: jsbn$BigInteger): void;
    mod(a: jsbn$BigInteger): jsbn$BigInteger;
    invDigit(): number;
    isEven(): boolean;
    exp(e: number, z: jsbn$Reduction): jsbn$BigInteger;
    modPowInt(e: number, m: jsbn$BigInteger): jsbn$BigInteger;
    clone(): jsbn$BigInteger;
    intValue(): number;
    byteValue(): number;
    shortValue(): number;
    chunkSize(r: number): number;
    signum(): number;
    toRadix(b: number): string;
    fromRadix(s: string, b: number): void;
    fromNumber(a: number, b?: number, c?: number): void;
    toByteArray(): number[];
    equals(a: jsbn$BigInteger): boolean;
    min(a: jsbn$BigInteger): jsbn$BigInteger;
    max(a: jsbn$BigInteger): jsbn$BigInteger;
    bitwiseTo(
        a: jsbn$BigInteger,
        op: (x: number, y: number) => number,
        r: jsbn$BigInteger): void;
    and(a: jsbn$BigInteger): jsbn$BigInteger;
    or(a: jsbn$BigInteger): jsbn$BigInteger;
    xor(a: jsbn$BigInteger): jsbn$BigInteger;
    andNot(a: jsbn$BigInteger): jsbn$BigInteger;
    not(): jsbn$BigInteger;
    shiftLeft(n: number): jsbn$BigInteger;
    shiftRight(n: number): jsbn$BigInteger;
    getLowestSetBit(): number;
    bitCount(): number;
    testBit(n: number): boolean;
    changeBit(n: number, op: (x: number, y: number) => number): jsbn$BigInteger;
    setBit(n: number): jsbn$BigInteger;
    clearBit(n: number): jsbn$BigInteger;
    flipBit(n: number): jsbn$BigInteger;
    addTo(a: jsbn$BigInteger, r: jsbn$BigInteger): void;
    add(a: jsbn$BigInteger): jsbn$BigInteger;
    subtract(a: jsbn$BigInteger): jsbn$BigInteger;
    multiply(a: jsbn$BigInteger): jsbn$BigInteger;
    square(): jsbn$BigInteger;
    divide(a: jsbn$BigInteger): jsbn$BigInteger;
    remainder(a: jsbn$BigInteger): jsbn$BigInteger;
    divideAndRemainder(a: jsbn$BigInteger): jsbn$BigInteger[];
    dMultiply(n: number): void;
    dAddOffset(n: number, w: number): void;
    pow(e: number): jsbn$BigInteger;
    multiplyLowerTo(a: jsbn$BigInteger, n: number, r: jsbn$BigInteger): void;
    multiplyUpperTo(a: jsbn$BigInteger, n: number, r: jsbn$BigInteger): void;
    modPow(e: jsbn$BigInteger, m: jsbn$BigInteger): jsbn$BigInteger;
    gcd(a: jsbn$BigInteger): jsbn$BigInteger;
    modInt(n: number): number;
    modInverse(m: jsbn$BigInteger): jsbn$BigInteger;
    isProbablePrime(t: number): boolean;
    millerRabin(t: number): boolean;
    ZERO: jsbn$BigInteger;
    ONE: jsbn$BigInteger
}

declare interface jsbn$Reduction {
    convert(x: jsbn$BigInteger): jsbn$BigInteger,
        revert(x: jsbn$BigInteger): jsbn$BigInteger,
        reduce(x: jsbn$BigInteger): void,
        mulTo(x: jsbn$BigInteger, y: jsbn$BigInteger, r: jsbn$BigInteger): void,
        sqrTo(x: jsbn$BigInteger, r: jsbn$BigInteger): void
}