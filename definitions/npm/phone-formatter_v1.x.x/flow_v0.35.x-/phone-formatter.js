

declare module 'phone-formatter' {
		declare export interface FormatOptions {
		normalize: boolean
	}

	declare export function normalize(digits: string): string

	declare export function format(digits: string, format: string, options?: FormatOptions): string

		
}