

declare module 'bignum' {
				declare class BigNum  {
		constructor(n: number | BigNum): this;
		constructor(n: string, base?: number): this;
		fromBuffer(buffer: Buffer, options?: BigNum.BufferOptions): BigNum;
		prime(bits: number, safe?: boolean): BigNum;
		isBigNum(num: any): boolean;
		toString(base?: number): string;
		toNumber(): number;
		toBuffer(options?: BigNum.BufferOptions): Buffer;
		add(n: BigNum.BigNumCompatible): BigNum;
		sub(n: BigNum.BigNumCompatible): BigNum;
		mul(n: BigNum.BigNumCompatible): BigNum;
		div(n: BigNum.BigNumCompatible): BigNum;
		abs(): BigNum;
		neg(): BigNum;
		cmp(n: BigNum.BigNumCompatible): number;
		gt(n: BigNum.BigNumCompatible): boolean;
		ge(n: BigNum.BigNumCompatible): boolean;
		eq(n: BigNum.BigNumCompatible): boolean;
		lt(n: BigNum.BigNumCompatible): boolean;
		le(n: BigNum.BigNumCompatible): boolean;
		and(n: BigNum.BigNumCompatible): BigNum;
		or(n: BigNum.BigNumCompatible): BigNum;
		xor(n: BigNum.BigNumCompatible): BigNum;
		mod(n: BigNum.BigNumCompatible): BigNum;
		pow(n: BigNum.BigNumCompatible): BigNum;
		powm(n: BigNum.BigNumCompatible, m: BigNum.BigNumCompatible): BigNum;
		invertm(m: BigNum.BigNumCompatible): BigNum;
		rand(upperBound?: BigNum.BigNumCompatible): BigNum;
		probPrime(): boolean | string;
		shiftLeft(n: BigNum.BigNumCompatible): BigNum;
		shiftRight(n: BigNum.BigNumCompatible): BigNum;
		gcd(n: BigNum): BigNum;
		jacobi(n: BigNum): number;
		bitLength(): number
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$BigNum' {
	declare type BigNumCompatible = BigNum | number | string;

	declare export interface BufferOptions {
		endian: string | number,
		size: number | string
	}

	declare export function toNumber(n: BigNumCompatible): number

	declare export function toBuffer(n: BigNumCompatible, options?: BufferOptions): Buffer

	declare export function add(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function sub(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function mul(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function div(dividend: BigNumCompatible, divisor: BigNumCompatible): BigNum

	declare export function abs(n: BigNumCompatible): BigNum

	declare export function neg(n: BigNumCompatible): BigNum

	declare export function cmp(left: BigNumCompatible, right: BigNumCompatible): number

	declare export function gt(left: BigNumCompatible, right: BigNumCompatible): boolean

	declare export function ge(left: BigNumCompatible, right: BigNumCompatible): boolean

	declare export function eq(left: BigNumCompatible, right: BigNumCompatible): boolean

	declare export function lt(left: BigNumCompatible, right: BigNumCompatible): boolean

	declare export function le(left: BigNumCompatible, right: BigNumCompatible): boolean

	declare export function and(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function or(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function xor(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function mod(left: BigNumCompatible, right: BigNumCompatible): BigNum

	declare export function pow(base: BigNumCompatible, exponent: BigNumCompatible): BigNum

	declare export function powm(
		base: BigNumCompatible, exponent: BigNumCompatible, m: BigNumCompatible
	): BigNum

	declare export function invertm(n: BigNumCompatible, m: BigNumCompatible): BigNum

	declare export function rand(n: BigNumCompatible, upperBound?: BigNumCompatible): BigNum

	declare export function probPrime(n: BigNumCompatible): boolean | string

	declare export function shiftLeft(n: BigNumCompatible, bits: BigNumCompatible): BigNum

	declare export function shiftRight(n: BigNumCompatible, bits: BigNumCompatible): BigNum

	declare export function gcd(left: BigNumCompatible, right: BigNum): BigNum

	declare export function jacobi(a: BigNumCompatible, n: BigNum): number

	declare export function bitLength(n: BigNumCompatible): number

		
}