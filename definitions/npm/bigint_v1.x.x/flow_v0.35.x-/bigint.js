

declare module 'bigint' {
					
}

declare module 'npm$namespace$BigInt' {
		declare export interface BigInt {
		
	}

	declare export interface IRandom {
		(): number
	}

	declare export function setRandom(random: IRandom): void

	declare export function add(x: BigInt, y: BigInt): BigInt

	declare export function addInt(x: BigInt, n: number): BigInt

	declare export function bigInt2str(x: BigInt, base: number): string

	declare export function bigInt2str(x: BigInt, base: string): string

	declare export function bitSize(x: BigInt): number

	declare export function dup(x: BigInt): BigInt

	declare export function equals(x: BigInt, y: BigInt): boolean

	declare export function equalsInt(x: BigInt, y: number): boolean

	declare export function expand(value: BigInt, n: number): BigInt

	declare export function findPrimes(n: number): number[]

	declare export function GCD(x: BigInt, y: BigInt): BigInt

	declare export function greater(x: BigInt, y: BigInt): boolean

	declare export function greaterShift(x: BigInt, y: BigInt, shift: number): boolean

	declare export function int2bigInt(t: number, n?: number, m?: number): BigInt

	declare export function inverseMod(x: BigInt, n: BigInt): BigInt

	declare export function inverseModInt(x: number, n: number): BigInt

	declare export function isZero(x: BigInt): boolean

	declare export function millerRabin(x: BigInt, b: BigInt): boolean

	declare export function millerRabinInt(x: number, b: number): boolean

	declare export function mod(x: BigInt, n: BigInt): BigInt

	declare export function modInt(x: BigInt, n: number): number

	declare export function mult(x: BigInt, y: BigInt): BigInt

	declare export function multMod(x: BigInt, y: BigInt, n: BigInt): BigInt

	declare export function negative(x: BigInt): boolean

	declare export function powMod(x: BigInt, y: BigInt, n: BigInt): BigInt

	declare export function randBigInt(n: number, s: number): BigInt

	declare export function randTruePrime(k: number): BigInt

	declare export function randProbPrime(k: number): BigInt

	declare export function str2bigInt(s: string, b: number, n?: number, m?: number): BigInt

	declare export function str2bigInt(s: string, b: string, n?: number, m?: number): BigInt

	declare export function sub(x: BigInt, y: BigInt): BigInt

	declare export function trim(x: BigInt, k: number): BigInt

	declare export function addInt_(x: BigInt, n: number): void

	declare export function add_(x: BigInt, y: BigInt): void

	declare export function copy_(x: BigInt, y: BigInt): void

	declare export function copyInt_(x: BigInt, n: number): void

	declare export function GCD_(x: BigInt, y: BigInt): void

	declare export function inverseMod_(x: BigInt, n: BigInt): boolean

	declare export function mod_(x: BigInt, n: BigInt): void

	declare export function mult_(x: BigInt, y: BigInt): void

	declare export function multMod_(x: BigInt, y: BigInt, n: BigInt): void

	declare export function powMod_(x: BigInt, y: BigInt, n: BigInt): void

	declare export function randBigInt_(b: BigInt, n: number, s: number): void

	declare export function randTruePrime_(ans: BigInt, k: number): void

	declare export function sub_(x: BigInt, y: BigInt): void

	declare export function addShift_(x: BigInt, y: BigInt, ys: number): void

	declare export function carry_(x: BigInt): void

	declare export function divide_(x: BigInt, y: BigInt, q: BigInt, r: BigInt): void

	declare export function divInt_(x: BigInt, n: number): number

	declare export function eGCD_(x: BigInt, y: BigInt, d: BigInt, a: BigInt, b: BigInt): void

	declare export function halve_(x: BigInt): void

	declare export function leftShift_(x: BigInt, n: number): void

	declare export function linComb_(x: BigInt, y: BigInt, a: number, b: number): void

	declare export function linCombShift_(x: BigInt, y: BigInt, b: number, ys: number): void

	declare export function mont_(x: BigInt, y: BigInt, n: BigInt, np: number): void

	declare export function multInt_(x: BigInt, n: number): void

	declare export function rightShift_(x: BigInt, n: number): void

	declare export function squareMod_(x: BigInt, n: BigInt): void

	declare export function subShift_(x: BigInt, y: BigInt, ys: number): void

		
}