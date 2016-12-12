import type { CountdownStatic } from 'npm$namespace$countdown'

declare module 'countdown' {
					declare module.exports: CountdownStatic


}

declare module 'npm$namespace$countdown' {
	declare type DateFunction = (timespan: Timespan) => void;

	declare type DateTime = number | Date | DateFunction;

	declare interface Timespan {
		start?: Date,
		end?: Date,
		units?: number,
		value?: number,
		millennia?: number,
		centuries?: number,
		decades?: number,
		years?: number,
		months?: number,
		days?: number,
		hours?: number,
		minutes?: number,
		seconds?: number,
		milliseconds?: number,
		toString(label?: string): string,
		toHTML(tagName?: string, label?: string): string
	}

	declare interface Format {
		singular?: string | Array<string>,
		plural?: string | Array<string>,
		last?: string,
		delim?: string,
		empty?: string,
		formatNumber(value: number): string,
		formatter(value: number, unit: number): string
	}

	declare interface CountdownStatic {
		(start: DateTime, end?: DateTime, units?: number, max?: number, digits?: number): Timespan | number,
		MILLENNIA: number,
		CENTURIES: number,
		DECADES: number,
		YEARS: number,
		MONTHS: number,
		WEEKS: number,
		DAYS: number,
		HOURS: number,
		MINUTES: number,
		SECONDS: number,
		MILLISECONDS: number,
		ALL: number,
		DEFAULTS: number,
		resetLabels(): void,
		setLabels(
		singular?: string, plural?: string, last?: string, delim?: string, empty?: string, formatNumber?: (value: number) => string, formatter?: (value: number, unit: number) => string
	): void,
		resetFormat(): void,
		setFormat(format: Format): void
	}

			
}