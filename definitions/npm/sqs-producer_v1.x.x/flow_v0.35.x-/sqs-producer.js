

declare module 'sqs-producer' {
					declare module.exports: ProducerFactory


}

declare module 'SQSProducer' {
		declare interface ProducerOpts {
		queueUrl: string,
		region?: string,
		batchSize?: number,
		sqs?: SQS
	}

	declare interface ProducerCallback<T> {
		(err?: Error, data?: T): any
	}

	declare interface ProducerMessageAttribute {
		DataType: "String" | "Binary",
		StringValue?: string,
		BinaryValue?: Buffer
	}

	declare interface ProducerMessage {
		id: string,
		body: string,
		messageAttributes?: {
		[key: string]: ProducerMessageAttribute
	},
		delaySeconds?: number
	}

	declare interface ProducerFactory {
		create(opts: ProducerOpts): Producer
	}

	declare interface Producer {
		send(messages: string[], cb: ProducerCallback<void>): void,
		send(messages: ProducerMessage[], cb: ProducerCallback<void>): void,
		queueSize(cb: ProducerCallback<number>): void
	}

			
}