

declare module 'big-integer' {
		declare interface BigInteger {
		abs(): BigInteger,
		add(number: number): BigInteger,
		add(number: BigInteger): BigInteger,
		add(number: string): BigInteger,
		plus(number: number): BigInteger,
		plus(number: BigInteger): BigInteger,
		plus(number: string): BigInteger,
		minus(number: number): BigInteger,
		minus(number: BigInteger): BigInteger,
		minus(number: string): BigInteger,
		subtract(number: number): BigInteger,
		subtract(number: BigInteger): BigInteger,
		subtract(number: string): BigInteger,
		multiply(number: number): BigInteger,
		multiply(number: BigInteger): BigInteger,
		multiply(number: string): BigInteger,
		times(number: number): BigInteger,
		times(number: BigInteger): BigInteger,
		times(number: string): BigInteger,
		divide(number: number): BigInteger,
		divide(number: BigInteger): BigInteger,
		divide(number: string): BigInteger,
		over(number: number): BigInteger,
		over(number: BigInteger): BigInteger,
		over(number: string): BigInteger,
		pow(number: number): BigInteger,
		pow(number: BigInteger): BigInteger,
		pow(number: string): BigInteger,
		next(): BigInteger,
		prev(): BigInteger,
		mod(number: number): BigInteger,
		mod(number: BigInteger): BigInteger,
		mod(number: string): BigInteger,
		divmod(number: number): {
		quotient: BigInteger,
		remainder: BigInteger
	},
		divmod(number: BigInteger): {
		quotient: BigInteger,
		remainder: BigInteger
	},
		divmod(number: string): {
		quotient: BigInteger,
		remainder: BigInteger
	},
		greater(number: number): boolean,
		greater(number: BigInteger): boolean,
		greater(number: string): boolean,
		greaterOrEquals(number: number): boolean,
		greaterOrEquals(number: BigInteger): boolean,
		greaterOrEquals(number: string): boolean,
		lesser(number: number): boolean,
		lesser(number: BigInteger): boolean,
		lesser(number: string): boolean,
		lesserOrEquals(number: number): boolean,
		lesserOrEquals(number: BigInteger): boolean,
		lesserOrEquals(number: string): boolean,
		isEven(): boolean,
		isOdd(): boolean,
		isPositive(): boolean,
		isNegative(): boolean,
		compare(number: number): number,
		compare(number: BigInteger): number,
		compare(number: string): number,
		compareAbs(number: number): number,
		compareAbs(number: BigInteger): number,
		compareAbs(number: string): number,
		equals(number: number): boolean,
		equals(number: BigInteger): boolean,
		equals(number: string): boolean,
		notEquals(number: number): boolean,
		notEquals(number: BigInteger): boolean,
		notEquals(number: string): boolean,
		and(number: number): BigInteger,
		and(number: BigInteger): BigInteger,
		and(number: string): BigInteger,
		not(): BigInteger,
		or(number: number): BigInteger,
		or(number: BigInteger): BigInteger,
		or(number: string): BigInteger,
		xor(number: number): BigInteger,
		xor(number: BigInteger): BigInteger,
		xor(number: string): BigInteger,
		toJSNumber(): number,
		toString(): string,
		valueOf(): number
	}

	declare interface BigIntegerStatic {
		one: BigInteger,
		zero: BigInteger,
		minusOne: BigInteger,
		(): BigInteger,
		(number: number): BigInteger,
		(string: string, base?: string | number | BigInteger): BigInteger,
		(bigInt: BigInteger): BigInteger
	}

			declare module.exports: BigIntegerStatic


}