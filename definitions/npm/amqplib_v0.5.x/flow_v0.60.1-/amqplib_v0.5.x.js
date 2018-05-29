// @flow

declare module 'amqplib' {
  declare export type AMQPError = any;

  declare export type Message = {
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
      headers: Object,
      correlationId: string,
      replyTo: string,
      messageId: string,
      timestamp: number,
      type: string,
      appId: string,
    },
  }

  declare export type ConnectOptions = {
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

  declare export type AssertQueueOptions = {
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

  declare export type DeleteQueueOptions = {
    +ifUnused?: boolean,
    +ifEmpty?: boolean,
  }

  declare export type AssertExchangeOptions = {
    +durable?: boolean,
    +internal?: boolean,
    +autoDelete?: boolean,
    +alternateExchange?: string,
    +arguments?: Object,
  }

  declare export type DeleteExchangeOptions = {
    +ifUnused?: boolean,
  }

  declare export type PublishOptions = {
    +expiration?: string,
    +userId?: string,
    +CC?: string | string[],
    +priority?: number,
    +persistent?: boolean,
    +deliveryMode?: boolean | number,
    +mandatory?: boolean,
    +BCC?: string | string[],
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

  declare export type ConsumeOptions = {
    +consumerTag?: string,
    +noLocal?: boolean,
    +noAck?: boolean,
    +exclusive?: boolean,
    +priority?: number,
    +arguments?: Object,
  }

  declare export type GetOptions = {
    +noAck?: boolean,
  }

  declare export type QueueOKReply = {
    queue: string,
    messageCount: number,
    consumerCount: number,
  }

  declare export type OKReply = {
    messageCount: number,
  }

  declare export type ExchangeOKReply = {
    exchange: string,
  }

  declare export type ConsumeOKReply = {
    consumerTag: string,
  }


  declare export class Channel {
    close: () => Promise<void>,

      on:
      & (('close', (() => mixed)) => void)
      & (('error', ((err: any) => mixed)) => void)
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
  import type {
    AMQPError,
    AssertExchangeOptions,
    AssertQueueOptions,
    ConnectOptions,
    ConsumeOKReply,
    ConsumeOptions,
    DeleteExchangeOptions,
    DeleteQueueOptions,
    ExchangeOKReply,
    GetOptions,
    Message,
    OKReply,
    PublishOptions,
    QueueOKReply,
  } from 'amqplib';

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
