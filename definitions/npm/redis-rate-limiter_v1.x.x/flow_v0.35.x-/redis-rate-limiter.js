// @flow
/**
 * Flowtype definitions for redis-rate-limiter
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'redis-rate-limiter' {


    declare module.exports: typeof RedisRateLimiter
    declare     export interface RedisRateLimiter$Options {
        redis: redis.RedisClient,
            key: "ip" | ((req: express.Request) => string),
            window?: number,
            limit?: number,
            rate?: string
    }

    declare     export interface RedisRateLimiter$Response {
        key: string,
            current: number,
            limit: number,
            window: number,
            over: boolean
    }
}