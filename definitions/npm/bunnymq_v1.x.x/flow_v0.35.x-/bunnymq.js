

declare module 'bunnymq' {
	declare export type ConsumerCallback = (message: Object) => void;

	declare export interface Consumer {
		consume(queue: string, callback: ConsumerCallback): void
	}

	declare export interface Instance {
		consumer: Consumer,
		producer: Producer
	}

	declare export interface Options {
		consumerSuffix?: string,
		host?: string,
		hostname?: string,
		prefetch?: number,
		requeue?: boolean,
		timeout?: number,
		transport?: any
	}

	declare export interface Producer {
		produce(queue: string, message: Object, options?: ProducerOptions): PromiseLike<Object>
	}

	declare export interface ProducerOptions {
		routingKey?: string,
		rpc?: boolean
	}

	declare function bunnymq(options?: bunnymq.Options): bunnymq.Instance

		declare module.exports: undefined


}