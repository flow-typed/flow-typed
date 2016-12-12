

declare module 'ratelimiter' {
		declare interface LimiterOption {
		id: string,
		db: RedisClient,
		max?: number,
		duration?: number
	}

	declare interface LimiterInfo {
		total: number,
		remaining: number,
		reset: number
	}

		declare class Limiter  {
		constructor(opts: LimiterOption): this;
		inspect(): string;
		get(fn: (err: any, info: LimiterInfo) => void): void
	}

	declare module.exports: undefined


}