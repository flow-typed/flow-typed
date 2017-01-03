/**
 * Flowtype definitions for rsmq
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface RedisSMQ$CallbackT<R>{
    (e?: Error, res?: R): void
}

declare interface RedisSMQ$Client {
    createQueue(options: RedisSMQ$QueueOptions, cb: RedisSMQ$CallbackT<number>): void,
        changeMessageVisibility(options: RedisSMQ$VisibilityOptions, cb: RedisSMQ$CallbackT<number>): void,
        deleteMessage(options: RedisSMQ$MessageIdentifier, cb: RedisSMQ$CallbackT<number>): void,
        deleteQueue(options: RedisSMQ$QueueIdentifier, cb: RedisSMQ$CallbackT<number>): void,
        getQueueAttributes(
            options: RedisSMQ$QueueIdentifier,
            cb: RedisSMQ$CallbackT<RedisSMQ$QueueAttributes>): void,
        listQueues(cb: RedisSMQ$CallbackT<string[]>): void,
        receiveMessage(
            options: RedisSMQ$ReceiveOptions,
            cb: RedisSMQ$CallbackT<RedisSMQ$Message>): void,
        sendMessage(options: RedisSMQ$NewMessage, cb: RedisSMQ$CallbackT<string>): void,
        setQueueAttributes(
            options: RedisSMQ$QueueOptions,
            cb: RedisSMQ$CallbackT<RedisSMQ$QueueAttributes>): void,
        quit(): void
}

declare interface RedisSMQ$QueueIdentifier {
    qname: string
}

declare type RedisSMQ$QueueOptions = {
    vt?: number,
    delay?: number,
    maxsize?: number
} & RedisSMQ$QueueIdentifier


declare type RedisSMQ$MessageIdentifier = {
    id: string
} & RedisSMQ$QueueIdentifier


declare type RedisSMQ$VisibilityOptions = {
    vt: number
} & RedisSMQ$MessageIdentifier


declare export type RedisSMQ$QueueAttributes = {
    vt: number,
    delay: number,
    maxsize: number,
    totalrecv: number,
    totalsent: number,
    created: number,
    modified: number,
    msgs: number,
    hiddenmsgs: number
} & RedisSMQ$QueueIdentifier


declare type RedisSMQ$ReceiveOptions = {
    vt?: number
} & RedisSMQ$QueueIdentifier


declare export type RedisSMQ$Message = {
    message: string,
    sent: number,
    fr: number,
    rc: number
} & RedisSMQ$MessageIdentifier


declare type RedisSMQ$NewMessage = {
    message: string,
    delay?: number
} & RedisSMQ$QueueIdentifier
declare module 'rsmq' {
    declare interface RedisSMQStatic {
        new(options: ClientOptions): RedisSMQ$Client
    }
    declare interface Client {
        createQueue(options: RedisSMQ$QueueOptions, cb: RedisSMQ$CallbackT<number>): void,
            changeMessageVisibility(options: RedisSMQ$VisibilityOptions, cb: RedisSMQ$CallbackT<number>): void,
            deleteMessage(options: RedisSMQ$MessageIdentifier, cb: RedisSMQ$CallbackT<number>): void,
            deleteQueue(options: RedisSMQ$QueueIdentifier, cb: RedisSMQ$CallbackT<number>): void,
            getQueueAttributes(
                options: RedisSMQ$QueueIdentifier,
                cb: RedisSMQ$CallbackT<RedisSMQ$QueueAttributes>): void,
            listQueues(cb: RedisSMQ$CallbackT<string[]>): void,
            receiveMessage(
                options: RedisSMQ$ReceiveOptions,
                cb: RedisSMQ$CallbackT<RedisSMQ$Message>): void,
            sendMessage(options: RedisSMQ$NewMessage, cb: RedisSMQ$CallbackT<string>): void,
            setQueueAttributes(
                options: RedisSMQ$QueueOptions,
                cb: RedisSMQ$CallbackT<RedisSMQ$QueueAttributes>): void,
            quit(): void
    }
    declare interface ClientOptions {
        host?: string,
            port?: number,
            options?: redis.ClientOpts,
            client?: redis.RedisClient,
            ns?: string
    }
    declare var rsmq: RedisSMQStatic;
    declare module.exports: typeof rsmq
}