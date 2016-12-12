

declare module 'date.format' {
		declare interface Date {
		toString(): string,
		toDateString(): string,
		toTimeString(): string,
		toLocaleString(): string,
		toLocaleDateString(): string,
		toLocaleTimeString(): string,
		valueOf(): number,
		getTime(): number,
		getFullYear(): number,
		getUTCFullYear(): number,
		getMonth(): number,
		getUTCMonth(): number,
		getDate(): number,
		getUTCDate(): number,
		getDay(): number,
		getUTCDay(): number,
		getHours(): number,
		getUTCHours(): number,
		getMinutes(): number,
		getUTCMinutes(): number,
		getSeconds(): number,
		getUTCSeconds(): number,
		getMilliseconds(): number,
		getUTCMilliseconds(): number,
		getTimezoneOffset(): number,
		setTime(time: number): void,
		setMilliseconds(ms: number): void,
		setUTCMilliseconds(ms: number): void,
		setSeconds(sec: number, ms?: number): void,
		setUTCSeconds(sec: number, ms?: number): void,
		setMinutes(min: number, sec?: number, ms?: number): void,
		setUTCMinutes(min: number, sec?: number, ms?: number): void,
		setHours(hours: number, min?: number, sec?: number, ms?: number): void,
		setUTCHours(hours: number, min?: number, sec?: number, ms?: number): void,
		setDate(date: number): void,
		setUTCDate(date: number): void,
		setMonth(month: number, date?: number): void,
		setUTCMonth(month: number, date?: number): void,
		setFullYear(year: number, month?: number, date?: number): void,
		setUTCFullYear(year: number, month?: number, date?: number): void,
		toUTCString(): string,
		toISOString(): string,
		toJSON(key?: any): string,
		format(mask?: string, utc?: boolean): string
	}

	declare interface DateFormatMasks {
		default: string,
		shortDate: string,
		mediumDate: string,
		longDate: string,
		fullDate: string,
		shortTime: string,
		mediumTime: string,
		longTime: string,
		isoDate: string,
		isoTime: string,
		isoDateTime: string,
		isoUtcDateTime: string
	}

	declare interface DateFormatI18n {
		dayNames: string[],
		monthNames: string[]
	}

			
}