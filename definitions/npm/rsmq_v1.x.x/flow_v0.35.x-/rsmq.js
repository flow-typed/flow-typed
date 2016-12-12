

declare module 'rsmq' {
		declare interface RedisSMQStatic {
		new (options: ClientOptions): Client
	}

	declare interface Client {
		redis: redis.RedisClient
	}

	declare interface ClientOptions {
		host?: string,
		port?: number,
		options?: redis.ClientOpts,
		client?: redis.RedisClient,
		ns?: string
	}

			declare module.exports: RedisSMQStatic


}

declare module 'npm$namespace$RedisSMQ' {
		declare interface CallbackT<R> {
		(e?: Error, res?: R): void
	}

	declare interface Client {
		createQueue(options: QueueOptions, cb: CallbackT<number>): void,
		changeMessageVisibility(options: VisibilityOptions, cb: CallbackT<number>): void,
		deleteMessage(options: MessageIdentifier, cb: CallbackT<number>): void,
		deleteQueue(options: QueueIdentifier, cb: CallbackT<number>): void,
		getQueueAttributes(options: QueueIdentifier, cb: CallbackT<QueueAttributes>): void,
		listQueues(cb: CallbackT<string[]>): void,
		receiveMessage(options: ReceiveOptions, cb: CallbackT<Message>): void,
		sendMessage(options: NewMessage, cb: CallbackT<string>): void,
		setQueueAttributes(options: QueueOptions, cb: CallbackT<QueueAttributes>): void,
		quit(): void
	}

	declare interface QueueIdentifier {
		qname: string
	}

	declare interface QueueOptions {
		vt?: number,
		delay?: number,
		maxsize?: number
	}

	declare interface MessageIdentifier {
		id: string
	}

	declare interface VisibilityOptions {
		vt: number
	}

	declare export interface QueueAttributes {
		vt: number,
		delay: number,
		maxsize: number,
		totalrecv: number,
		totalsent: number,
		created: number,
		modified: number,
		msgs: number,
		hiddenmsgs: number
	}

	declare interface ReceiveOptions {
		vt?: number
	}

	declare export interface Message {
		message: string,
		sent: number,
		fr: number,
		rc: number
	}

	declare interface NewMessage {
		message: string,
		delay?: number
	}

			
}