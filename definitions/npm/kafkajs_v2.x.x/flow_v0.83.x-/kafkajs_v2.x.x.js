// @flow

declare module "kafkajs" {
  declare type KafkaOptions = {|
    brokers: string[],
    clientId?: string,
    connectionTimeout?: number,
    logLevel?: number,
    retry?: {|
      initialRetryTime?: number,
      maxRetryTime?: number,
      retries?: number
    |},
    sasl?: {|
      mechanism: string,
      password: string,
      username: string
    |},
    +ssl?:
      | boolean
      | {|
          ca?: string | string[],
          cert?: string,
          key?: string,
          passphrase?: string,
          pfx?: string | Buffer,
          rejectUnauthorized?: boolean,
          secureProtocol?: string,
          servername?: string
        |}
  |}

  declare type ConsumerOptions = {|
    +groupId: string,
    +sessionTimeout?: number,
    +heartbeatInterval?: number,
    +maxBytesPerPartition?: number,
    +minBytes?: number,
    +maxBytes?: number,
    +maxWaitTimeInMs?: number,
    +rebalanceTimeout?: number
  |}

  declare type Message = {|
    +key?: string,
    +value: string,
    +timestamp?: string
  |}

  declare type ConsumerEachMessageOptions = {|
    +message: Message,
    +partition: number,
    +topic: string
  |}

  declare export type ConsumerRunOptions = {|
    +eachMessage: (options: ConsumerEachMessageOptions) => Promise<void>
  |}

  declare export type ConsumerSubscribeOptions = {|
    +fromBeginning?: boolean,
    +topic: string
  |}

  declare export interface ConsumerInterface {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    run(options: ConsumerRunOptions): Promise<void>;
    subscribe(options: ConsumerSubscribeOptions): Promise<void>;
  }

  declare export class Consumer implements ConsumerInterface {
    constructor(options: ConsumerOptions): this;

    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    run: (options: ConsumerRunOptions) => Promise<void>;
    subscribe: (options: ConsumerSubscribeOptions) => Promise<void>;
  }

  declare type CustomPartitioner = () => Partitioner

  declare type ProducerOptions = {|
    +allowAutoTopicCreation?: boolean,
    +createPartitioner?: CustomPartitioner,
    +idempotent?: boolean,
    +maxQueueSize?: number,
    +retry?: {|
      retries?: number
    |}
  |}

  declare export type ProducerSendOptions = {|
    +messages: Message[],
    +topic: string
  |}

  declare export interface ProducerInterface {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    send(options: ProducerSendOptions): Promise<void>;
  }

  declare export class Producer implements ProducerInterface {
    constructor(options: ProducerOptions): this;

    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    send: (options: ProducerSendOptions) => Promise<void>;
  }

  declare export class Kafka {
    constructor(options: KafkaOptions): this;

    consumer: (options: ConsumerOptions) => Consumer;
    producer: (options: ProducerOptions) => Producer;
  }

  declare export type Partitioner = (args: {|
    +topic: string,
    +partitionMetadata: Array<{|
      +partitionId: number,
      +leader: number,
      +replicas: number[],
      +isr: number[],
      +isPreferredLeader: boolean,
      +isUnderReplicated: boolean
    |}>,
    +message: Message
  |}) => number

  declare export var Partitioners: {|
    +DefaultPartitioner: Partitioner,
    +RoundRobinPartitioner: Partitioner,
    +RandomPartitioner: Partitioner
  |}

  declare export var logLevel: {|
    +NOTHING: number,
    +ERROR: number,
    +WARN: number,
    +INFO: number,
    +DEBUG: number
  |}
}
