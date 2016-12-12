import type { BigJS } from 'npm$namespace$BigJsLibrary'

declare module 'big.js' {
					declare module.exports: BigJS


}

declare module 'npm$namespace$BigJsLibrary' {
	declare type BigNumberInputType = number | string | BigJS;

	declare interface BigJS {
		DP: number,
		RM: RoundingMode
	}

	declare interface BigJS_Constructors {
		new (value: BigNumberInputType): BigJS,
		(value: BigNumberInputType): BigJS,
		(): BigJS
	}

	declare interface BigJS {
		abs(): BigJS,
		cmp(n: BigNumberInputType): number,
		div(n: BigNumberInputType): BigJS,
		eq(n: BigNumberInputType): boolean,
		gt(n: BigNumberInputType): boolean,
		gte(n: BigNumberInputType): boolean,
		lt(n: BigNumberInputType): boolean,
		lte(n: BigNumberInputType): boolean,
		minus(n: BigNumberInputType): BigJS,
		mod(n: BigNumberInputType): BigJS,
		plus(n: BigNumberInputType): BigJS,
		pow(exp: number): BigJS,
		round(): BigJS,
		round(dp: number): BigJS,
		round(dp: number, rm: RoundingMode): BigJS,
		sqrt(): BigJS,
		times(n: BigNumberInputType): BigJS,
		toExponential(): string,
		toExponential(dp: number): string,
		toFixed(): string,
		toFixed(dp: number): string,
		toPrecision(): string,
		toPrecision(sd: number): string,
		toString(): string,
		valueOf(): string,
		toJSON(): string,
		c: number[],
		e: number,
		s: number
	}

			
}