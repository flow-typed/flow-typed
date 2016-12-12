

declare module 'redlock' {
				declare class Redlock  {
		driftFactor: number;
		retryCount: number;
		retryDelay: number;
		servers: redis.RedisClient[];
		constructor(clients: any[], options?: Redlock.Options): this;
		acquire(
		resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>
	): Promise<Redlock.Lock>;
		lock(
		resource: string, ttl: number, callback?: Redlock.Callback<Redlock.Lock>
	): Promise<Redlock.Lock>;
		disposer(resource: string, ttl: number, errorHandler?: Redlock.Callback<void>): any;
		release(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;
		unlock(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;
		extend(
		lock: Redlock.Lock, ttl: number, callback?: Redlock.Callback<Redlock.Lock>
	): Promise<Redlock.Lock>
	}

	declare module.exports: undefined


}

declare module 'Redlock' {
		declare interface Callback<T> {
		(err: any, value?: T): void
	}

	declare interface Lock {
		redlock: Redlock,
		resource: string,
		value: any,
		expiration: number,
		unlock(callback?: Callback<void>): Promise<void>,
		extend(ttl: number, callback?: Callback<Lock>): Promise<Lock>
	}

	declare interface Options {
		driftFactor?: number,
		retryCount?: number,
		retryDelay?: number
	}

	declare interface LockError {
		
	}

			
}