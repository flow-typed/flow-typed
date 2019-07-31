declare module 'node-int64' {
 declare class Int64 {
 	constructor(a1: Buffer|Uint8Array|number, a2?: number): Int64;
 	constructor(a1: string): Int64;
 	static MAX_INT: number;
 	static MIN_INT: number;
 	setValue(hi: string): void;
 	setValue(hi: number, lo?: number): void;
 	toNumber(allowImprecise?: bool): number;
 	valueOf(): number;
 	toString(radix?: number): string;
 	toOctetString(sep?: string): string;
 	toBuffer(rawBuffer?: bool): Buffer;
 	copy(targetBuffer: Buffer, targetOffset?: number): void;
 	compare(other: Int64): number;
 	equals(other: Int64): bool;
 	inspect(): string;
  }
  declare module.exports: typeof Int64;
}