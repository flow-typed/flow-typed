/**
 * Flowtype definitions for postal-0.8.9
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface IConfiguration {
    SYSTEM_CHANNEL: string,
        DEFAULT_CHANNEL: string,
        resolver: any
}
declare interface ISubscriptionDefinition {
    unsubscribe(): void,
        subscribe(callback: (data: any, envelope: IEnvelope) => void): void,
        defer(): ISubscriptionDefinition,
        disposeAfter(maxCalls: number): ISubscriptionDefinition,
        distinctUntilChanged(): ISubscriptionDefinition,
        once(): ISubscriptionDefinition,
        withConstraint(predicate: Function): ISubscriptionDefinition,
        withConstraints(predicates: Array<Function>): ISubscriptionDefinition,
        withContext(context: any): ISubscriptionDefinition,
        withDebounce(milliseconds: number, immediate: boolean): ISubscriptionDefinition,
        withDelay(milliseconds: number): ISubscriptionDefinition,
        withThrottle(milliseconds: number): ISubscriptionDefinition
}
declare interface IEnvelope {
    topic: string,
        data?: any,
        channel?: string,
        timeStamp?: string
}
declare interface IChannelDefinition {
    subscribe(topic: string): ISubscriptionDefinition,
        subscribe(
            topic: string,
            callback: (data: any, envelope: IEnvelope) => void): ISubscriptionDefinition,
        publish(topic: string, data?: any): void,
        publish(envelope: IEnvelope): void,
        channel: string
}
declare interface IPostalUtils {
    getSubscribersFor(channel: string, tpc: any): any,
        reset(): void
}
declare interface IPostal {
    channel(name?: string): IChannelDefinition,
        linkChannels(
            sources: IEnvelope | IEnvelope[],
            destinations: IEnvelope | IEnvelope[]): ISubscriptionDefinition[],
        utils: IPostalUtils,
        configuration: IConfiguration
}
declare
var postal: IPostal;
declare module 'postal' {
    declare var postal: IPostal;
    declare module.exports: typeof postal
}