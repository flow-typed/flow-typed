

declare module 'fast-stats' {
		declare export interface StatsOpts {
		bucket_precision?: number,
		buckets?: number[],
		bucket_extension_interval?: number,
		store_data?: boolean,
		sampling?: boolean
	}

	declare export interface Bucket {
		bucket: number,
		range: number[],
		count: number
	}

		declare export class Stats  {
		constructor(opts?: StatsOpts): this;
		push(...args: number[]): void;
		push(args: number[]): void;
		pop(): number;
		shift(): number;
		unshift(...args: number[]): void;
		length: number;
		reset(): void;
		copy(): Stats;
		amean(): number;
		gmean(): number;
		median(): number;
		percentile(n: number): number;
		range(): number[];
		distribution(): Bucket[];
		stddev(): number;
		gstddev(): number;
		moe(): number;
		band_pass(low: number, high: number, open?: boolean): Stats;
		iqr(): Stats
	}

	
}