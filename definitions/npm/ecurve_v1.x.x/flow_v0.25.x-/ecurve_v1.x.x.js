// TODO import BigInteger from 'bigi'
// For now, I just copy-paste the definition from there

// ---------- copypasta start ----
declare class $npm$bigi$BigInteger {
  constructor(input: string | Array<number>, base?: number): void;
  static (input: string | Array<number>, base?: number): $npm$bigi$BigInteger;

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

declare module "bigi" {
  declare module.exports: typeof $npm$bigi$BigInteger;
}
// ---------- copypasta end ----

declare class $npm$ecurve$Curve {
  p: $npm$bigi$BigInteger;
  a: $npm$bigi$BigInteger;
  b: $npm$bigi$BigInteger;
  G: $npm$ecurve$Point;
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

  infinity: $npm$ecurve$Point;
  isInfinity(point: $npm$ecurve$Point): boolean;
  validate(a: $npm$ecurve$Point): boolean;
  isOnCurve(a: $npm$ecurve$Point): boolean;
  pointFromX(odd: boolean, x: $npm$ecurve$Point): $npm$ecurve$Point;
}

declare class $npm$ecurve$Point {
  constructor(
    curve: $npm$ecurve$Curve,
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

  static fromAffine(
    curve: $npm$ecurve$Curve,
    x: $npm$bigi$BigInteger,
    y: $npm$bigi$BigInteger
  ): $npm$ecurve$Point;
  equals(other: $npm$ecurve$Point): boolean;
  negate(): $npm$ecurve$Point;
  add(other: $npm$ecurve$Point): $npm$ecurve$Point;
  twice(): $npm$ecurve$Point;
  multiply(k: $npm$bigi$BigInteger): $npm$ecurve$Point;
  multiplyTwo(
    j: $npm$bigi$BigInteger,
    x: $npm$ecurve$Point,
    k: $npm$bigi$BigInteger
  ): $npm$ecurve$Point;

  static decodeFrom(
    curve: $npm$ecurve$Curve,
    buffer: Buffer
  ): $npm$ecurve$Point;
  getEncoded(compressed: boolean): Buffer;

  toString(): string;
}

declare module "ecurve" {
  declare var Point: typeof $npm$ecurve$Point;

  declare var Curve: typeof $npm$ecurve$Curve;

  declare function getCurveByName(name: string): ?Curve;
}
