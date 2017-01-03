// @flow
/**
 * Flowtype definitions for sqs-consumer
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'sqs-consumer' {

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
        declare type Consumer = {
            start(): void,
            stop(): void
        }
        declare interface ConsumerFactory {
            create(opts: ConsumerOpts): Consumer
        }
    }

    declare     var Consumer: SQSConsumer.ConsumerFactory;
    declare module.exports: typeof Consumer
}