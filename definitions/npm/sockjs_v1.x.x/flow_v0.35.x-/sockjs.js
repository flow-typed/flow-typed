// @flow
/**
 * Flowtype definitions for sockjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SockJSSimpleEvent {
    type: string,
        toString(): string
}
declare type SJSOpenEvent = {} & SockJSSimpleEvent & Event
declare type SJSCloseEvent = {
    code: number,
    reason: string,
    wasClean: boolean
} & SockJSSimpleEvent & CloseEvent
declare type SJSMessageEvent = {
    data: string
} & SockJSSimpleEvent & MessageEvent
declare type SockJS = {
    protocol: string,
    readyState: number,
    onopen: (ev: SJSOpenEvent) => any,
    onmessage: (ev: SJSMessageEvent) => any,
    onclose: (ev: SJSCloseEvent) => any,
    send(data: any): void,
    close(code?: number, reason?: string): void,
    OPEN: number,
    CLOSING: number,
    CONNECTING: number,
    CLOSED: number
} & WebSocket
declare var SockJS: {
    prototype: SockJS,
    new(
        url: string,
        _reserved?: any,
        options?: {
            debug?: boolean,
            devel?: boolean,
            protocols_whitelist?: string[],
            server?: string,
            rtt?: number,
            rto?: number,
            info?: {
                websocket?: boolean,
                cookie_needed?: boolean,
                null_origin?: boolean
            }
        }): SockJS
};