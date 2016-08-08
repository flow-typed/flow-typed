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

import {Point as ECPoint} from 'ecurve';

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
        toOutputScipt(network?: Network): Buffer;
    };

    declare var script: {
        fromAddress(address: string, network?: Network): Buffer;
        scriptHashOutput(sho: Buffer): Buffer;

        compile(chunks: Buffer | Array<Buffer | number>): Buffer;
        decompile(buffer: Buffer | Array<Buffer | number>): Array<Buffer | number>;
        fromASM(asm: string): Buffer;
        toASM(string: Buffer): string;
        number: {
          decode: (buf: Buffer, maxLength: number, minimal: boolean) => number;
          encode: (n: number) => Buffer;
        };
        isCanonicalPubKey(buffer: Buffer): boolean;
        isCanonicalSignature(buffer: Buffer): boolean;
        isDefinedHashType(type: number): boolean;
        isPubKeyHashInput(script: Array<Buffer | number> | Buffer): boolean;
        isPubKeyHashOutput(script: Array<Buffer | number> | Buffer): boolean;
        isPubKeyInput(script: Array<Buffer | number> | Buffer): boolean;
        isPubKeyOutput(script: Array<Buffer | number> | Buffer): boolean;
        isScriptHashInput(script: Array<Buffer | number> | Buffer, allowIncomplete?: boolean): boolean;
        isScriptHashOutput(script: Array<Buffer | number> | Buffer): boolean;
        isWitnessPubKeyHashOutput(script: Array<Buffer | number> | Buffer): boolean;
        isWitnessScriptHashOutput(script: Array<Buffer | number> | Buffer): boolean;
        isMultisigInput(script: Array<Buffer | number> | Buffer, allowIncomplete?: boolean): boolean;
        isMultisigOutput(script: Array<Buffer | number> | Buffer): boolean;
        isNullDataOutput(script: Array<Buffer | number> | Buffer): boolean;

        classifyOutput(script: Array<Buffer | number> | Buffer): string;
        classifyInput(script: Array<Buffer | number> | Buffer): string;
        pubKeyOutput(pubKey: Buffer): Buffer;
        pubKeyHashOutput(pubKeyHash: Buffer): Buffer;
        scriptHashOutput(scriptHash: Buffer): Buffer;
        witnessPubKeyHashOutput(pubKeyHash: Buffer): Buffer;
        witnessScriptHashInput(scriptSig: Array<Buffer | number> | Buffer, scriptPubKey: Array<Buffer | number> | Buffer): Buffer;
        witnessScriptHashOutput(scriptHash: Buffer): Buffer;

        multisigOutput(m: number, pubKeys: Array<Buffer>): Buffer;
        pubKeyInput(signature: Buffer): Buffer;
        pubKeyHashInput(signature: Buffer, pubKey: Buffer): Buffer;
        scriptHashInput(scriptSig: Array<Buffer | number> | Buffer, scriptPubKey: Array<Buffer | number> | Buffer):Buffer;
        multisigInput(signatures: Array<Buffer>, scriptPubKey?: Array<Buffer | number> | Buffer): Buffer;
        nullDataOutput(data: Buffer): Buffer;
    };

    declare var crypto: {
        sha1(buffer: Buffer): Buffer;
        sha256(buffer: Buffer): Buffer;
        hash256(buffer: Buffer): Buffer;
        hash160(buffer: Buffer): Buffer;
        ripemd160(buffer: Buffer): Buffer;
    }
    
    declare class ECPair {
        d: ?$npm$bigi$BigInteger;
        Q: ECPoint;
        compressed: boolean;
        network: Network;
        getNetwork(): Network;

        constructor(d: ?$npm$bigi$BigInteger, Q: ?ECPoint): void;
        getAddress(): string;
        getPublicKeyBuffer(): Buffer;
        static fromPublicKeyBuffer(buffer: Buffer): ECPair;
        verify: (hash: Buffer, signature: ECSignature) => boolean;
        sign(hash: Buffer): Buffer;
        toWIF(): string;
        static fromWIF(string: string, network: Network): ECPair;
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

        static fromBase58(base: string, network?: ?(Network | Array<Network>)): HDNode;
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
        toHex(): string;
        getId(): string;

        static isCoinbaseHash(buffer: Buffer): boolean;
        isCoinbase(): boolean;
        byteLength(): number;
        clone(): Transaction;
        hashForSignature(inIndex: number, prevOutScript: Buffer, hashType: number): Buffer;
        setInputScript(index: number, scriptSig: Buffer): void;
    }

    declare class TransactionBuilder {
        network: Network;
        inputs: Array<Input>;
        tx: Transaction;

        setLockTime(locktime: number): void;
        setVersion(version: number): void;
        addInput(txhash: string | Transaction | Buffer, vout: number, sequence?: number, prevOutScript?: Buffer): void;
        addOutput(scriptPubKey: string | Buffer, value: number): void;
        build(): Transaction;
        buildIncomplete(): Transaction;
        sign(index: number, keyPair: ECPair, redeemScript: Buffer, hashType: number): void;
        
        static fromTransaction(transaction: Transaction, network: ?Network): TransactionBuilder;

    }

    declare var networks: {[key: string]: Network}
    declare var opcodes: {[key: string]: number}

    declare class ECSignature {
      r: $npm$bigi$BigInteger;
      s: $npm$bigi$BigInteger;
      constructor(r: $npm$bigi$BigInteger, s: $npm$bigi$BigInteger): void;

      static parseCompact(buffer: Buffer): {
          compressed: boolean,
          i: number,
          signature: Buffer
      };

      static fromDER(buffer: Buffer): ECSignature;
      static parseScriptSignature(buffer: Buffer): {
          signature: ECSignature,
          hashType: number
      };

      toCompact(i: number, compressed: boolean): Buffer;
      toDER(): Buffer;
      toScriptSignature(hashType: number): Buffer;
    }

    declare class Block {
      version: number;
      prevHash: Buffer;
      merkleRoot: Buffer;
      timestamp: number;
      bits: number;
      nonce: number;

      getHash(): Buffer;
      getId(): string;
      getUTCDate(): Date;
      toBuffer(headersOnly?: boolean): Buffer;
      toHex(headersOnly?: boolean): string;
      calculateTarget(bits: number): Buffer;
      checkProofOfWork(): boolean;
      
      static fromBuffer(buffer: Buffer): Block;
      static fromHex(hex: string): Block;
    }

    declare var bufferutils: {
      equal(a: Buffer, b: Buffer): boolean;
      pushDataSize(i: number): number;
      readPushDataInt(buffer: Buffer, offset: number): {
          opcode: number,
          number: number,
          size: number
      };
      readUInt64LE(buffer: Buffer, offset: number): number;
      readVarInt(buffer: Buffer, offset: number): {
          number: number,
          size: number
      };
      varIntBuffer(i: number): Buffer;
      varIntSize(i: number): number;
      writePushDataInt(buffer: Buffer, number: number, offset: number): number;
      writeUInt64LE(buffer: Buffer, value: number, offset: number): void;
      writeVarInt(buffer: Buffer, number: number, offset: number): number;
    }

    declare var message: {
      magicHash(message: Buffer|string, network: Network): Buffer;
      sign(pair: ECPair, message: Buffer|string, network: Network): Buffer;
      verify(address: string, signature: Buffer, message: Buffer|string, network: Network): boolean;
    }
}
