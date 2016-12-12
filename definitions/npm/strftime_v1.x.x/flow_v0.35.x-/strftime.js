

declare module 'strftime' {
	declare type strftimeFunction = (format: string, date?: Date) => string;

	declare export interface LocaleFormats {
		D?: string,
		F?: string,
		R?: string,
		T?: string,
		X?: string,
		c?: string,
		r?: string,
		v?: string,
		x?: string
	}

	declare export interface Locale {
		days?: Array<string>,
		shortDays?: Array<string>,
		months?: Array<string>,
		shortMonths?: Array<string>,
		AM?: string,
		PM?: string,
		am?: string,
		pm?: string,
		formats: LocaleFormats
	}

	declare export function localize(locale: Locale): strftimeFunction

	declare export function timezone(offset: number | string): strftimeFunction

	declare function strftime(format: string): string

	declare function strftime(format: string, date: Date): string

		declare module.exports: undefined


}