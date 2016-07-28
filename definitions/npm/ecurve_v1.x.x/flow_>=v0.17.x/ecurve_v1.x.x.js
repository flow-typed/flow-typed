// TODO import BigInteger from 'bigi'
// For now, I just copy-paste the definition from there

// ---------- copypasta start ---- 
declare class $npm$bigi$BigInteger {
  constructor(input: string|Array<number>, base?: number): void;
  static (input: string|Array<number>, base?: number): $npm$bigi$BigInteger;

  toString(base?: number): string;
  toByteArray(): Array<number>;
  bitLength(): number;
  byteLength(): number;
  add(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  subtract(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  multiply(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  divide(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  mod(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  modInverse(o: $npm$bigi$BigInteger): $npm$bigi$BigInteger;
  shiftLeft(o: number): $npm$bigi$BigInteger;
  shiftRight(o: number): $npm$bigi$BigInteger;
  isProbablePrime(): boolean;

  static fromByteArrayUnsigned(array: Array<number>): $npm$bigi$BigInteger;
  static fromBuffer(buffer: Buffer): $npm$bigi$BigInteger;
  static fromDERInteger(buffer: Buffer): $npm$bigi$BigInteger;
  static fromHex(hex: string): $npm$bigi$BigInteger;

  toByteArrayUnsigned(): Array<number>;
  toBuffer(): Buffer;
  toDERInteger(): Buffer;
  toHex(): string;
}

declare module 'bigi' {
  declare var exports: typeof $npm$bigi$BigInteger;
}
// ---------- copypasta end ---- 

declare module 'ecurve' {

  declare class Curve {
    p: $npm$bigi$BigInteger;
    a: $npm$bigi$BigInteger;
    b: $npm$bigi$BigInteger;
    G: Point;
    n: $npm$bigi$BigInteger;
    h: $npm$bigi$BigInteger;

    constructor(
      p: $npm$bigi$BigInteger,
      a: $npm$bigi$BigInteger,
      b: $npm$bigi$BigInteger,
      Gx: $npm$bigi$BigInteger,
      Gy: $npm$bigi$BigInteger,
      n: $npm$bigi$BigInteger,
      h: $npm$bigi$BigInteger
    ): void;

    infinity: Point;
    isInfinity(point: Point): boolean;
    validate(a: Point): boolean;
    isOnCurve(a: Point): boolean;
    pointFromX(odd: boolean, x: Point): Point;
  }

  declare class Point {
    constructor(
      curve: Curve,
      x: $npm$bigi$BigInteger,
      y: $npm$bigi$BigInteger,
      z: $npm$bigi$BigInteger
    ): void;
    
    x: $npm$bigi$BigInteger;
    y: $npm$bigi$BigInteger;
    z: $npm$bigi$BigInteger;

    zInv: $npm$bigi$BigInteger;
    affineX: $npm$bigi$BigInteger;
    affineY: $npm$bigi$BigInteger;
  
    static fromAffine(curve: Curve, x: $npm$bigi$BigInteger, y: $npm$bigi$BigInteger): Point;
    equals(other: Point): boolean;
    negate(): Point;
    add(other: Point): Point;
    twice(): Point;
    multiply(k: $npm$bigi$BigInteger): Point;
    multiplyTwo(j: $npm$bigi$BigInteger, x: Point, k: $npm$bigi$BigInteger): Point;

    static decodeFrom(curve: Curve, buffer: Buffer): Point;
    getEncoded(compressed: boolean): Buffer;
   
    toString(): string;
  }

  declare function getCurveByName(name: string): ?Curve;
}
