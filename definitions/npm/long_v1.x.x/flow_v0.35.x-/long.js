

declare module 'long' {
				declare class Long  {
		constructor(low: number, high?: number, unsigned?: boolean): this;
		MAX_UNSIGNED_VALUE: Long;
		MAX_VALUE: Long;
		MIN_VALUE: Long;
		NEG_ONE: Long;
		ONE: Long;
		UONE: Long;
		UZERO: Long;
		ZERO: Long;
		high: number;
		low: number;
		unsigned: boolean;
		fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;
		fromInt(value: number, unsigned?: boolean): Long;
		fromNumber(value: number, unsigned?: boolean): Long;
		fromString(str: string, unsigned?: boolean | number, radix?: number): Long;
		isLong(obj: any): boolean;
		fromValue(
		val: Long | number | string | {
		low: number,
		high: number,
		unsigned: boolean
	}
	): Long;
		add(addend: number | Long | string): Long;
		and(other: Long | number | string): Long;
		compare(other: Long | number | string): number;
		comp(other: Long | number | string): number;
		divide(divisor: Long | number | string): Long;
		div(divisor: Long | number | string): Long;
		equals(other: Long | number | string): boolean;
		eq(other: Long | number | string): boolean;
		getHighBits(): number;
		getHighBitsUnsigned(): number;
		getLowBits(): number;
		getLowBitsUnsigned(): number;
		getNumBitsAbs(): number;
		greaterThan(other: Long | number | string): boolean;
		gt(other: Long | number | string): boolean;
		greaterThanOrEqual(other: Long | number | string): boolean;
		gte(other: Long | number | string): boolean;
		isEven(): boolean;
		isNegative(): boolean;
		isOdd(): boolean;
		isPositive(): boolean;
		isZero(): boolean;
		lessThan(other: Long | number | string): boolean;
		lt(other: Long | number | string): boolean;
		lessThanOrEqual(other: Long | number | string): boolean;
		lte(other: Long | number | string): boolean;
		modulo(other: Long | number | string): Long;
		mod(other: Long | number | string): Long;
		multiply(multiplier: Long | number | string): Long;
		mul(multiplier: Long | number | string): Long;
		negate(): Long;
		neg(): Long;
		not(): Long;
		notEquals(other: Long | number | string): boolean;
		neq(other: Long | number | string): boolean;
		or(other: Long | number | string): Long;
		shiftLeft(numBits: number | Long): Long;
		shl(numBits: number | Long): Long;
		shiftRight(numBits: number | Long): Long;
		shr(numBits: number | Long): Long;
		shiftRightUnsigned(numBits: number | Long): Long;
		shru(numBits: number | Long): Long;
		subtract(subtrahend: number | Long | string): Long;
		sub(subtrahend: number | Long | string): Long;
		toInt(): number;
		toNumber(): number;
		toSigned(): Long;
		toString(radix?: number): string;
		toUnsigned(): Long;
		xor(other: Long | number | string): Long
	}

	declare module.exports: undefined


}