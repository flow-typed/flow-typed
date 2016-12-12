

declare module 'amqplib' {
		declare interface Connection {
		close(): when.Promise<void>,
		createChannel(): when.Promise<Channel>,
		createConfirmChannel(): when.Promise<Channel>
	}

	declare interface Channel {
		close(): when.Promise<void>,
		assertQueue(
		queue: string, options?: Options.AssertQueue
	): when.Promise<Replies.AssertQueue>,
		checkQueue(queue: string): when.Promise<Replies.AssertQueue>,
		deleteQueue(
		queue: string, options?: Options.DeleteQueue
	): when.Promise<Replies.DeleteQueue>,
		purgeQueue(queue: string): when.Promise<Replies.PurgeQueue>,
		bindQueue(
		queue: string, source: string, pattern: string, args?: any
	): when.Promise<Replies.Empty>,
		unbindQueue(
		queue: string, source: string, pattern: string, args?: any
	): when.Promise<Replies.Empty>,
		assertExchange(
		exchange: string, type: string, options?: Options.AssertExchange
	): when.Promise<Replies.AssertExchange>,
		checkExchange(exchange: string): when.Promise<Replies.Empty>,
		deleteExchange(
		exchange: string, options?: Options.DeleteExchange
	): when.Promise<Replies.Empty>,
		bindExchange(
		destination: string, source: string, pattern: string, args?: any
	): when.Promise<Replies.Empty>,
		unbindExchange(
		destination: string, source: string, pattern: string, args?: any
	): when.Promise<Replies.Empty>,
		publish(
		exchange: string, routingKey: string, content: Buffer, options?: Options.Publish
	): boolean,
		sendToQueue(queue: string, content: Buffer, options?: Options.Publish): boolean,
		consume(
		queue: string, onMessage: (msg: Message) => any, options?: Options.Consume
	): when.Promise<Replies.Consume>,
		cancel(consumerTag: string): when.Promise<Replies.Empty>,
		get(queue: string, options?: Options.Get): when.Promise<Message | boolean>,
		ack(message: Message, allUpTo?: boolean): void,
		ackAll(): void,
		nack(message: Message, allUpTo?: boolean, requeue?: boolean): void,
		nackAll(requeue?: boolean): void,
		reject(message: Message, requeue?: boolean): void,
		prefetch(count: number, global?: boolean): when.Promise<Replies.Empty>,
		recover(): when.Promise<Replies.Empty>
	}

	declare function connect(url: string, socketOptions?: any): when.Promise<Connection>

		
}

declare module 'Replies' {
		declare interface Empty {
		
	}

	declare interface AssertQueue {
		queue: string,
		messageCount: number,
		consumerCount: number
	}

	declare interface PurgeQueue {
		messageCount: number
	}

	declare interface DeleteQueue {
		messageCount: number
	}

	declare interface AssertExchange {
		exchange: string
	}

	declare interface Consume {
		consumerTag: string
	}

			
}

declare module 'Options' {
		declare interface AssertQueue {
		exclusive?: boolean,
		durable?: boolean,
		autoDelete?: boolean,
		arguments?: any,
		messageTtl?: number,
		expires?: number,
		deadLetterExchange?: string,
		deadLetterRoutingKey?: string,
		maxLength?: number
	}

	declare interface DeleteQueue {
		ifUnused?: boolean,
		ifEmpty?: boolean
	}

	declare interface AssertExchange {
		durable?: boolean,
		internal?: boolean,
		autoDelete?: boolean,
		alternateExchange?: string,
		arguments?: any
	}

	declare interface DeleteExchange {
		ifUnused?: boolean
	}

	declare interface Publish {
		expiration?: string,
		userId?: string,
		CC?: string | string[],
		mandatory?: boolean,
		persistent?: boolean,
		deliveryMode?: boolean | number,
		BCC?: string | string[],
		contentType?: string,
		contentEncoding?: string,
		headers?: any,
		priority?: number,
		correlationId?: string,
		replyTo?: string,
		messageId?: string,
		timestamp?: number,
		type?: string,
		appId?: string
	}

	declare interface Consume {
		consumerTag?: string,
		noLocal?: boolean,
		noAck?: boolean,
		exclusive?: boolean,
		priority?: number,
		arguments?: any
	}

	declare interface Get {
		noAck?: boolean
	}

			
}

declare module 'amqplib/properties' {
		declare interface Message {
		content: Buffer,
		fields: any,
		properties: any
	}

			
}

declare module 'amqplib/callback_api' {
		declare interface Connection {
		close(callback?: (err: any) => void): void,
		createChannel(callback: (err: any, channel: Channel) => void): void,
		createConfirmChannel(callback: (err: any, confirmChannel: ConfirmChannel) => void): void
	}

	declare interface Channel {
		close(callback: (err: any) => void): void,
		assertQueue(
		queue?: string, options?: Options.AssertQueue, callback?: (err: any, ok: Replies.AssertQueue) => void
	): void,
		checkQueue(queue: string, callback?: (err: any, ok: Replies.AssertQueue) => void): void,
		deleteQueue(
		queue: string, options?: Options.DeleteQueue, callback?: (err: any, ok: Replies.DeleteQueue) => void
	): void,
		purgeQueue(queue: string, callback?: (err: any, ok: Replies.PurgeQueue) => void): void,
		bindQueue(
		queue: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void
	): void,
		unbindQueue(
		queue: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void
	): void,
		assertExchange(
		exchange: string, type: string, options?: Options.AssertExchange, callback?: (err: any, ok: Replies.AssertExchange) => void
	): void,
		checkExchange(exchange: string, callback?: (err: any, ok: Replies.Empty) => void): void,
		deleteExchange(
		exchange: string, options?: Options.DeleteExchange, callback?: (err: any, ok: Replies.Empty) => void
	): void,
		bindExchange(
		destination: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void
	): void,
		unbindExchange(
		destination: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void
	): void,
		publish(
		exchange: string, routingKey: string, content: Buffer, options?: Options.Publish
	): boolean,
		sendToQueue(queue: string, content: Buffer, options?: Options.Publish): boolean,
		consume(
		queue: string, onMessage: (msg: Message) => any, options?: Options.Consume, callback?: (err: any, ok: Replies.Consume) => void
	): void,
		cancel(consumerTag: string, callback?: (err: any, ok: Replies.Empty) => void): void,
		get(
		queue: string, options?: Options.Get, callback?: (err: any, ok: Message | boolean) => void
	): void,
		ack(message: Message, allUpTo?: boolean): void,
		ackAll(): void,
		nack(message: Message, allUpTo?: boolean, requeue?: boolean): void,
		nackAll(requeue?: boolean): void,
		reject(message: Message, requeue?: boolean): void,
		prefetch(count: number, global?: boolean): void,
		recover(callback?: (err: any, ok: Replies.Empty) => void): void
	}

	declare interface ConfirmChannel {
		publish(
		exchange: string, routingKey: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void
	): boolean,
		sendToQueue(
		queue: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void
	): boolean,
		waitForConfirms(callback?: (err: any) => void): void
	}

	declare function connect(callback: (err: any, connection: Connection) => void): void

	declare function connect(url: string, callback: (err: any, connection: Connection) => void): void

	declare function connect(
		url: string, socketOptions: any, callback: (err: any, connection: Connection) => void
	): void

		
}