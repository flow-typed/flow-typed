

declare module 'bytes' {
		declare interface BytesOptions {
		decimalPlaces?: number,
		thousandsSeparator?: string,
		unitSeparator?: string,
		fixedDecimals?: boolean
	}

	declare function bytes(value: number, options?: BytesOptions): string

	declare function bytes(value: string): number

	declare function format(value: number, options?: BytesOptions): string

	declare function parse(value: number): number

	declare function parse(value: string): number

		declare module.exports: undefined


}