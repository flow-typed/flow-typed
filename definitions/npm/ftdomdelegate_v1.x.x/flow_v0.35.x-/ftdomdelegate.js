// @flow
/**
 * Flowtype definitions for ftdomdelegate
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare class Delegate {
    constructor(element: HTMLElement): this;
    on(
        eventType: string,
        selector: string,
        handler: (event: Event, targetElement: Element) => void,
        eventData?: any): void;
    on(
        eventType: string,
        selector: (element: Element) => boolean,
        handler: (event: Event, targetElement: Element) => void,
        eventData?: any): void;
    on(
        eventType: string,
        handler: (event: Event, targetElement: Element) => void,
        eventData?: any): void;
    off(
        eventType?: string,
        selector?: string,
        handler?: (event: Event, targetElement: Element) => void): void;
    off(
        eventType?: string,
        selector?: (element: Element) => boolean,
        handler?: (event: Event, targetElement: Element) => void): void;
    root(element?: Element): void;
    destroy(): void
}