// TODO import BigInteger from 'bigi'
// TODO import Point from 'ecurve'
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
// ---------- copypasta end ---- 

declare module 'bitcoinjs-lib' {

    declare type Network = {
        messagePrefix: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
        dustThreshold: number;
    }

    declare type Output = {
        script: Buffer;
        value: number;
    };

    declare type Input = {
        script: Buffer;
        hash: Buffer;
        index: number;
        sequence: number;
    };

    declare var address: {
        fromBase58Check(address: string): {hash: Buffer, version: number};
        fromOutputScript(script: Buffer, network?: Network): string;
        toBase58Check(hash: Buffer, version: number): string;
    };

    declare var script: {
        fromAddress(address: string, network?: Network): Buffer;
        pubKeyHashOutput(pkh: Buffer): Buffer;
        scriptHashOutput(sho: Buffer): Buffer;
    };

    declare var crypto: {
        sha256(buffer: Buffer): Buffer;
        hash256(buffer: Buffer): Buffer;
        hash160(buffer: Buffer): Buffer;
    }
    
    declare class ECPair {
        d: ?Buffer;
        Q: ?Buffer;
        compressed: boolean;
        network: Network;
        constructor(d: ?Buffer, Q: ?Buffer): void;
        getPublicKeyBuffer(): Buffer;
        static fromPublicKeyBuffer(buffer: Buffer): ECPair;
        verify: (hash: Buffer, signature: ECSignature) => boolean;
        toWIF(): string;
        static makeRandom(): ECPair;
    }

    declare class HDNode {
        depth: number;
        parentFingerprint: number;
        index: number;
        keyPair: ECPair;
        chainCode: Buffer;
        static fromBase58(
            str: string,
            networks: ?(Array<Network> | Network)
        ): HDNode;
        derive(index: number): HDNode;
        deriveHardened(index: number): HDNode;
        derivePath(path: string): HDNode;
        toBase58(): string;
        getAddress(): string;
        getFingerprint(): Buffer;
        getIdentifier(): Buffer;
        getNetwork(): Network;
        constructor(keyPair: ECPair, chainCode: Buffer): void;

        static fromSeedHex(seed: string, network?: ?Network): HDNode;
        static fromSeedBuffer(seed: Buffer, network?: ?Network): HDNode;
        getPublicKeyBuffer(): Buffer;

        sign(): ECSignature;
        verify(hash: Buffer, signature: ECSignature): Buffer;
        neutered(): HDNode;
        isNeutered(): boolean;
        constructor(keyPair: ECPair, chainCode: Buffer): void;
        static HIGHEST_BIT: number;
    }

    declare class Transaction {
        version: number;
        locktime: number;
        ins: Array<Input>;
        outs: Array<Output>;

        constructor(): void;
        static fromHex(hex: string): Transaction;
        static fromBuffer(buffer: Buffer): Transaction;
        toHex(): string;
        addInput(hash: Buffer, index: number, sequence?: ?number, scriptSig?: Buffer): void;
        addOutput(scriptPubKey: Buffer, value: number): void;
        getHash(): Buffer;
        toBuffer(): Buffer;
        getId(): string;

        static isCoinbaseHash(buffer: Buffer): boolean;
    }

    declare var networks: {[key: string]: Network}

    declare class ECSignature {
      r: $npm$bigi$BigInteger;
      s: $npm$bigi$BigInteger;
      constructor(r: $npm$bigi$BigInteger, s: $npm$bigi$BigInteger): void;
    }
}
