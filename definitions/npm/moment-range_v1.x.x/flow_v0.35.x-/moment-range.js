

declare module 'moment-range' {
					
}

declare module 'npm$namespace$moment' {
		declare interface Moment {
		within(x: Range): boolean
	}

	declare interface MomentStatic {
		range(range: string): Range,
		range(range: Date[]): Range,
		range(range: Moment[]): Range,
		range(start: Date, end: Date): Range,
		range(start: Moment, end: Moment): Range
	}

	declare interface Range {
		start: Moment,
		end: Moment,
		contains(other: Date, exclusive?: boolean): boolean,
		contains(other: Moment, exclusive?: boolean): boolean,
		overlaps(range: Range): boolean,
		intersect(other: Range): Range,
		add(other: Range): Range,
		subtract(other: Range): Range[],
		by(range: string, hollaback: (current: Moment) => void, exclusive?: boolean): void,
		by(range: Range, hollaback: (current: Moment) => void, exclusive?: boolean): void,
		isSame(other: Range): boolean,
		diff(unit?: string): number,
		toDate(): Date,
		toString(): string,
		valueOf(): number,
		center(): number,
		clone(): Range
	}

			
}