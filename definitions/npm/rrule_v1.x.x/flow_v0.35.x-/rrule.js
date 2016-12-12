import type { Options } from 'npm$namespace$RRule'

declare module 'rrule' {
				declare class RRule  {
		constructor(options: RRule.Options, noCache?: boolean): this;
		options: RRule.Options;
		origOptions: RRule.Options;
		after(dt: Date, inc?: boolean): Date;
		all(iterator?: (date: Date, index?: number) => void): Date[];
		between(
		a: Date, b: Date, inc?: boolean, iterator?: (date: Date, index: number) => void
	): Date[];
		before(dt: Date, inc?: boolean): Date;
		count(): number;
		toString(): string;
		toText(gettext?: (str: string) => string, language?: any): string;
		isFullyConvertibleToText(): boolean;
		clone(): RRule
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$RRule' {
		declare interface Options {
		freq: RRule.Frequency,
		dtstart?: Date,
		interval?: number,
		wkst?: number | Weekday,
		count?: number,
		until?: Date,
		bysetpos?: number | number[],
		bymonth?: number | number[],
		bymonthday?: number | number[],
		byyearday?: number | number[],
		byweekno?: number | number[],
		byweekday?: Weekday | Weekday[] | number | number[],
		byhour?: number | number[],
		byminute?: number | number[],
		bysecond?: number | number[]
	}

	declare function parseText(text: string, language?: any): RRule.Options

	declare function fromText(text: string, language?: any): RRule

	declare function optionsToString(options: RRule.Options): string

	declare function parseString(rfcString: string): RRule.Options

	declare function fromString(value: string): RRule

	declare class Weekday  {
		constructor(weekday: number, n: number): this;
		nth(n: number): Weekday;
		equals(other: Weekday): boolean;
		toString(): string;
		getJsWeekday(): number
	}

	declare class RRuleSet extends RRule {
		constructor(noCache?: boolean): this;
		rrule(rrule: RRule): void;
		rdate(date: Date): void;
		exrule(rrule: RRule): void;
		exdate(date: Date): void;
		valueOf(): string[];
		toString(): string;
		clone(): RRuleSet
	}

	
}