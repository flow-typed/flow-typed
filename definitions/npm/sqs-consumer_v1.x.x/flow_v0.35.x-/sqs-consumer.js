

declare module 'sqs-consumer' {
					declare module.exports: ConsumerFactory


}

declare module 'SQSConsumer' {
		declare interface MessageHandler {
		(message: SQS.Message, done: Function): any
	}

	declare interface ConsumerOpts {
		queueUrl: string,
		handleMessage: MessageHandler,
		region?: string,
		attributeNames?: string[],
		messageAttributeNames?: string[],
		batchSize?: number,
		visibilityTimeout?: number,
		waitTimeSeconds?: number,
		authenticationErrorTimeout?: number,
		sqs?: SQS
	}

	declare interface Consumer {
		start(): void,
		stop(): void
	}

	declare interface ConsumerFactory {
		create(opts: ConsumerOpts): Consumer
	}

			
}