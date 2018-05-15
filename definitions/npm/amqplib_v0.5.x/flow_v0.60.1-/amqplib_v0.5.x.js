// @flow

type Msg = {
    content: Buffer,
    fields: {
        deliveryTag: string,
        consumerTag: string,
        exchange: string,
        routingKey: string,
        redelivered: boolean,
    },
    properties: {
        expiration: string,
        userId: string,
        CC: string | string[],
        priority: number,
        persistent: boolean,
        contentType: string,
        contentEncoding: string,
        headers: { [string]: string },
        correlationId: string,
        replyTo: string,
        messageId: string,
        timestamp: number,
        type: string,
        appId: string,
    },
}

type ConnectOptions = {
    +protocol?: 'amqp' | 'amqps',
    +hostname?: string,
    +port?: number,
    +username?: string,
    +password?: string,
    +locale?: string,
    +frameMax?: number,
    +heartbeat?: number,
    +vhost?: string,
}

type AssertQueueOptions = {
    +exclusive?: boolean,
    +durable?: boolean,
    +autoDelete?: boolean,
    +arguments?: Object,
    +messageTtl?: number,
    +expires?: number,
    +deadLetterExchange?: string,
    +maxLength?: number,
    +maxPriority?: number,
}

type DeleteQueueOptions = {
    +ifUnused?: boolean,
    +ifEmpty?: boolean,
}

type AssertExchangeOptions = {
    +durable?: boolean,
    +internal?: boolean,
    +autoDelete?: boolean,
    +alternateExchange?: string,
    +arguments?: Object,
}

type DeleteExchangeOptions = {
    +ifUnused?: boolean,
}

type PublishOptions = {
    +expiration?: string,
    +userId?: string,
    +CC?: string | string[],
    +priority?: number,
    +persistent?: boolean,
    +deliveryMode?: boolean | number,
    +mandatory?: boolean,
    +BCC?: boolean,
    +immediate?: boolean,
    +contentType?: string,
    +contentEncoding?: string,
    +headers?: Object,
    +correlationId?: string,
    +replyTo?: string,
    +messageId?: string,
    +timestamp?: number,
    +type?: string,
    +appId?: string,
}

type ConsumeOptions = {
    +consumerTag?: string,
    +noLocal?: boolean,
    +noAck?: boolean,
    +exclusive?: boolean,
    +priority?: number,
    +arguments?: Object,
}

type GetOptions = {
    +noAck?: boolean,
}

type QueueOKReply = {
    queue: string,
    messageCount: number,
    consumerCount: number,
}

type OKReply = {
    messageCount: number,
}

type ExchangeOKReply = {
    exchange: string,
}

type ConsumeOKReply = {
    consumerTag: string,
}

declare module 'amqplib' {

    declare export type Message = Msg

    declare export class Channel {
        close: () => Promise<void>,

        on:
            & (('close', (() => mixed)) => void)
            & (('error', ((err: Object) => mixed)) => void)
            & (('return', ((msg: Message) => mixed)) => void)
            & (('drain', (() => mixed)) => void),

        assertQueue: (queue: string, options?: AssertQueueOptions) => Promise<QueueOKReply>,

        checkQueue: (queue: string) => Promise<QueueOKReply>,

        deleteQueue: (queue: string, options?: DeleteQueueOptions) => Promise<OKReply>,

        purgeQueue: (queue: string) => Promise<OKReply>,

        bindQueue: (queue: string, source: string, pattern: string, args?: Object) => Promise<void>,

        unbindQueue: (queue: string, source: string, pattern: string, args?: Object) => Promise<void>,

        assertExchange: (exchange: string, type: string, options?: AssertExchangeOptions) => Promise<ExchangeOKReply>,

        checkExchange: (exchange: string) => Promise<void>,

        deleteExchange: (name: string, options?: DeleteExchangeOptions) => Promise<void>,

        bindExchange: (destination: string, source: string, pattern: string, args?: Object) => Promise<void>,

        unbindExchange: (destination: string, source: string, pattern: string, args?: Object) => Promise<void>,

        publish: (exchange: string, routingKey: string, content: Buffer, options?: PublishOptions) => boolean,

        sendToQueue: (queue: string, content: Buffer, options?: PublishOptions) => boolean,

        consume: (queue: string, (msg: ?Message) => mixed, options?: ConsumeOptions) => Promise<ConsumeOKReply>,

        cancel: (consumerTag: string) => Promise<void>,

        get: (queue: string, options?: GetOptions) => Promise<Message | false>,

        ack: (message: Message, allUpTo?: boolean) => void,

        ackAll: () => void,

        nack: (message: Message, allUpTo?: boolean, requeue?: boolean) => void,

        nackAll: (requeue?: boolean) => void,

        reject: (message: Message, requeue?: boolean) => void,

        prefetch: (count: number, global?: boolean) => void,

        recover: () => Promise<void>,
    }

    declare export class ConfirmChannel extends Channel {
        waitForConfirms: () => Promise<void>,
    }

    declare export class Connection {
        createChannel: () => Promise<Channel>,

        createConfirmChannel: () => Promise<ConfirmChannel>,

        close: () => Promise<void>,
    }

    declare export var connect: (url?: string | ConnectOptions, socketOptions?: Object) => Promise<Connection>
}

declare module 'amqplib/callback_api' {

    declare type AMQPError = Object;

    declare export type Message = Msg;

    declare export class Channel {
        close: (?(?AMQPError => void)) => void,
        on:
            & (('close', (() => mixed)) => void)
            & (('error', ((err:?AMQPError) => mixed)) => void)
            & (('return', ((msg: Message) => mixed)) => void)
            & (('drain', (() => mixed)) => void),

        assertQueue: (queue: string, options: ?AssertQueueOptions, ?(?AMQPError , QueueOKReply) => mixed) => void,

        checkQueue: (queue: string, ?(?AMQPError , QueueOKReply) => mixed) => void,

        deleteQueue: (queue: string, options: ?DeleteQueueOptions, ?(?AMQPError , OKReply) => mixed) => void,

        purgeQueue: (queue: string, ?(?AMQPError , OKReply) => mixed) => void,

        bindQueue: (queue: string, source: string, pattern: string, args: ?Object, ?(?AMQPError , void) => mixed) => void,

        unbindQueue: (queue: string, source: string, pattern: string, args: ?Object, ?(?AMQPError , void) => mixed) => void,

        assertExchange: (exchange: string, type: string, options: ?AssertExchangeOptions, ?(?AMQPError , ExchangeOKReply) => mixed) => void,

        checkExchange: (?(exchange: string) => void) => void,

        deleteExchange: (name: string, options: ?DeleteExchangeOptions, ?(?AMQPError , void) => mixed) => void,

        bindExchange: (destination: string, source: string, pattern: string, args: ?Object, ?(?AMQPError , void) => mixed) => void,

        unbindExchange: (destination: string, source: string, pattern: string, args: ?Object, ?(?AMQPError , void) => mixed) => void,

        publish: (exchange: string, routingKey: string, content: Buffer, options?: PublishOptions) => boolean,

        sendToQueue: (queue: string, content: Buffer, options?: PublishOptions) => boolean,

        consume: (queue: string, (msg: ?Message) => mixed, options: ?ConsumeOptions, ?(?AMQPError , ConsumeOKReply) => mixed) => void,

        cancel: (consumerTag: string, ?(?AMQPError , void) => mixed) => void,

        get: (queue: string, options: ?GetOptions, ?(?AMQPError , Message | false) => mixed) => void,

        ack: (message: Message, allUpTo?: boolean) => void,

        ackAll: () => void,

        nack: (message: Message, allUpTo?: boolean, requeue?: boolean) => void,

        nackAll: (requeue?: boolean) => void,

        reject: (message: Message, requeue?: boolean) => void,

        prefetch: (count: number, global?: boolean) => void,

        recover: ((?AMQPError , void) => mixed) => void,
    }

    declare export class ConfirmChannel extends Channel {
        waitForConfirms: (?(?AMQPError ) => void) => void,
    }

    declare export class Connection {
        createChannel: ((?AMQPError, Channel) => mixed) => void,

        createConfirmChannel: ((?AMQPError, ConfirmChannel) => mixed) => void,

        close: (?(?AMQPError => void)) => void,
    }

    declare export var connect:
        & ((url?: string | ConnectOptions, (AMQPError, Connection) => void) => void)
        & ((url?: string | ConnectOptions, socketOptions: Object, (AMQPError, Connection) => void) => void)
}
