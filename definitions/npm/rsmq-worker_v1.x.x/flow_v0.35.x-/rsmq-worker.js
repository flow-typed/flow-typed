

declare module 'rsmq-worker' {
		declare interface RSMQWorkerStatic {
		new (queuename: string, options?: RSMQWorker.Options): RSMQWorker.Client
	}

			declare module.exports: RSMQWorkerStatic


}

declare module 'RSMQWorker' {
		declare export interface Client {
		start(): Client,
		stop(): Client,
		send(message: string, delay?: number, cb?: CallbackT<string>): Client,
		send(message: string, cb: CallbackT<string>): Client,
		del(id: string, cb?: CallbackT<void>): Client,
		changeInterval(interval: number | number[]): Client
	}

	declare export interface Options {
		interval?: number,
		maxReceiveCount?: number,
		invisibletime?: number,
		defaultDelay?: number,
		autostart?: boolean,
		timeout?: number,
		customExceedCheck?: CustomExceedCheckCallback,
		rsmq?: RedisSMQ.Client,
		redis?: redis.RedisClient,
		redisPrefix?: string,
		host?: string,
		port?: number,
		options?: redis.ClientOpts
	}

	declare export interface CustomExceedCheckCallback {
		(message: RedisSMQ.Message): boolean
	}

	declare export interface CallbackT<R> {
		(e?: Error, res?: R): void
	}

			
}