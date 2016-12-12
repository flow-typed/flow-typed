import type { MomentStatic } from 'npm$namespace$moment'

declare module 'moment-timezone' {
		declare interface MomentZone {
		name: string,
		abbrs: string[],
		untils: number[],
		offsets: number[],
		abbr(timestamp: number): string,
		offset(timestamp: number): number,
		parse(timestamp: number): number
	}

	declare interface MomentTimezone {
		(): moment.Moment,
		(timezone: string): moment.Moment,
		(date: number, timezone: string): moment.Moment,
		(date: number[], timezone: string): moment.Moment,
		(date: string, timezone: string): moment.Moment,
		(date: string, format: moment.MomentFormatSpecification, timezone: string): moment.Moment,
		(date: string, format: moment.MomentFormatSpecification, strict: boolean, timezone: string): moment.Moment,
		(date: string, format: moment.MomentFormatSpecification, language: string, timezone: string): moment.Moment,
		(date: string, format: moment.MomentFormatSpecification, language: string, strict: boolean, timezone: string): moment.Moment,
		(date: Date, timezone: string): moment.Moment,
		(date: moment.Moment, timezone: string): moment.Moment,
		(date: Object, timezone: string): moment.Moment,
		zone(timezone: string): MomentZone,
		add(packedZoneString: string): void,
		add(packedZoneString: string[]): void,
		link(packedLinkString: string): void,
		link(packedLinkString: string[]): void,
		load(data: {
		version: string,
		links: string[],
		zones: string[]
	}): void,
		names(): string[],
		guess(): string,
		setDefault(timezone: string): void
	}

			declare module.exports: MomentStatic


}

declare module 'npm$namespace$moment' {
		declare interface Moment {
		tz(): string,
		tz(timezone: string): Moment,
		zoneAbbr(): Moment,
		zoneName(): Moment
	}

	declare interface MomentStatic {
		tz: MomentTimezone
	}

			
}