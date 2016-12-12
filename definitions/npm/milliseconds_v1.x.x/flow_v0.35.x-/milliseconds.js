

declare module 'milliseconds' {
		declare interface Milliseconds {
		seconds(seconds: number): number,
		minutes(minutes: number): number,
		hours(hours: number): number,
		days(days: number): number,
		weeks(weeks: number): number,
		month(month: number): number,
		years(years: number): number
	}

			declare module.exports: Milliseconds


}