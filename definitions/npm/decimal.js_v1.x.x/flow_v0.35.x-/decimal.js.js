import type { IDecimalStatic } from 'npm$namespace$decimal'

declare module 'decimal.js' {
					declare module.exports: IDecimalStatic


}

declare module 'npm$namespace$decimal' {
		declare interface IFormatConfig {
		decimalSeparator?: string,
		groupSeparator?: string,
		groupSize?: number,
		secondaryGroupSize?: number,
		fractionGroupSeparator?: string,
		fractionGroupSize?: number
	}

	declare interface IDecimalConfig {
		precision?: number,
		rounding?: RoundingMode,
		toExpNeg?: number,
		toExpPos?: number,
		minE?: number,
		maxE?: number,
		errors?: boolean | number,
		crypto?: boolean | number,
		modulo?: RoundingMode,
		format?: IFormatConfig
	}

	declare interface IDecimalStatic {
		(value: number | string | Decimal, base?: number): Decimal,
		new (value: number | string | Decimal, base?: number): Decimal,
		config(object: IDecimalConfig): IDecimalStatic,
		constructor(object: IDecimalConfig): IDecimalStatic,
		exp(n: number | string | Decimal): Decimal,
		ln(n: number | string | Decimal): Decimal,
		log(n: number | string | Decimal, base?: number): Decimal,
		max(...args: any[]): Decimal,
		min(...args: any[]): Decimal,
		noConflict(): IDecimalStatic,
		pow(base: number | string | Decimal, exponent: number | string | Decimal): Decimal,
		random(dp?: number): Decimal,
		sqrt(arg: number | string | Decimal): Decimal,
		ONE: number,
		ROUND_UP: number,
		ROUND_DOWN: number,
		ROUND_CEIL: number,
		ROUND_FLOOR: number,
		ROUND_HALF_UP: number,
		ROUND_HALF_DOWN: number,
		ROUND_HALF_EVEN: number,
		ROUND_HALF_CEIL: number,
		ROUND_HALF_FLOOR: number,
		EUCLID: number
	}

	declare interface Decimal {
		absoluteValue(): Decimal,
		abs(): Decimal,
		ceil(): Decimal,
		comparedTo(n: number | string | Decimal, base?: number): number,
		cmp(n: number | string | Decimal, base?: number): number,
		decimalPlaces(): number,
		dp(): number,
		dividedBy(n: number | string | Decimal, base?: number): Decimal,
		div(n: number | string | Decimal, base?: number): Decimal,
		dividedToIntegerBy(n: number | string | Decimal, base?: number): Decimal,
		divToInt(n: number | string | Decimal, base?: number): Decimal,
		equals(n: number | string | Decimal, base?: number): boolean,
		eq(n: number | string | Decimal, base?: number): boolean,
		exponential(): Decimal,
		exp(): Decimal,
		floor(): Decimal,
		greaterThan(n: number | string | Decimal, base?: number): boolean,
		gt(n: number | string | Decimal, base?: number): boolean,
		greaterThanOrEqualTo(n: number | string | Decimal, base?: number): boolean,
		gte(n: number | string | Decimal, base?: number): boolean,
		isFinite(): boolean,
		isInteger(): boolean,
		isInt(): boolean,
		isNaN(): boolean,
		isNegative(): boolean,
		isNeg(): boolean,
		isZero(): boolean,
		lessThan(n: number | string | Decimal, base?: number): boolean,
		lt(n: number | string | Decimal, base?: number): boolean,
		lessThanOrEqualTo(n: number | string | Decimal, base?: number): boolean,
		lte(n: number | string | Decimal, base?: number): boolean,
		logarithm(n?: number | string | Decimal, base?: number): Decimal,
		log(n?: number | string | Decimal, base?: number): Decimal,
		minus(n: number | string | Decimal, base?: number): Decimal,
		modulo(n: number | string | Decimal, base?: number): Decimal,
		mod(n: number | string | Decimal, base?: number): Decimal,
		naturalLogarithm(): Decimal,
		ln(): Decimal,
		negated(): Decimal,
		neg(): Decimal,
		plus(n: number | string | Decimal, base?: number): Decimal,
		precision(include_leading_zeros?: boolean | number): number,
		sd(include_leading_zeros?: boolean | number): number,
		round(): Decimal,
		squareRoot(): Decimal,
		sqrt(): Decimal,
		times(n: number | string | Decimal, base?: number): Decimal,
		toDecimalPlaces(dp?: number, rm?: RoundingMode): Decimal,
		toDP(dp?: number, rm?: RoundingMode): Decimal,
		toExponential(dp?: number, rm?: RoundingMode): string,
		toFixed(dp?: number, rm?: RoundingMode): string,
		toFormat(dp?: number, rm?: RoundingMode): string,
		toFraction(max_denominator?: number | string | Decimal): string[],
		toJSON(): string,
		toNearest(n: number | string | Decimal, rm?: RoundingMode): Decimal,
		toNumber(): number,
		toPower(n: number | string | Decimal, base?: number): Decimal,
		pow(n: number | string | Decimal, base?: number): Decimal,
		toPrecision(sd?: number, rm?: RoundingMode): string,
		toSignificantDigits(sd?: number, rm?: RoundingMode): Decimal,
		toSD(sd?: number, rm?: RoundingMode): Decimal,
		toString(base?: number): string,
		truncated(): Decimal,
		trunc(): Decimal,
		valueOf(): string,
		c: number[],
		e: number,
		s: number
	}

			
}