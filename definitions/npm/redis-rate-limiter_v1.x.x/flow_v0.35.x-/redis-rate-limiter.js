

declare module 'redis-rate-limiter' {
				declare class RedisRateLimiter  {
		create(
		options: RedisRateLimiter.Options
	): (
		req: express.Request, callback: (err: Error, res: RedisRateLimiter.Response) => void
	) => void;
		middleware(options: RedisRateLimiter.Options): express.RequestHandler
	}

	declare module.exports: undefined


}

declare module 'RedisRateLimiter' {
		declare export interface Options {
		redis: redis.RedisClient,
		key: "ip" | ((req: express.Request) => string),
		window?: number,
		limit?: number,
		rate?: string
	}

	declare export interface Response {
		key: string,
		current: number,
		limit: number,
		window: number,
		over: boolean
	}

			
}