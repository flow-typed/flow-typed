/**
 * Flowtype definitions for bigscreen
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface BigScreenStatic {
    element: Element,
        enabled: boolean,
        exit(): void,
        onchange(element: Element): void,
        onenter(element: Element): void,
        onerror(element: Element, reason: string): void,
        onexit(): void,
        request(
            element: Element,
            onEnter?: (element: Element) => void,
            onExit?: () => void,
            onError?: (element: Element, reason: string) => void): void,
        toggle(
            element: Element,
            onEnter?: (element: Element) => void,
            onExit?: () => void,
            onError?: (element: Element, reason: string) => void): void,
        videoEnabled(video: HTMLVideoElement): boolean
}
declare var bigscreen: BigScreenStatic;
declare module 'bigscreen' {
    declare module.exports: typeof bigscreen
}