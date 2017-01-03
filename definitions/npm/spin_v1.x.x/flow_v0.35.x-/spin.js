// @flow
/**
 * Flowtype definitions for spin
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SpinnerOptions {
    lines?: number,
        length?: number,
        width?: number,
        radius?: number,
        corners?: number,
        rotate?: number,
        direction?: number,
        color?: any,
        speed?: number,
        trail?: number,
        shadow?: boolean,
        hwaccel?: boolean,
        className?: string,
        zIndex?: number,
        top?: string,
        left?: string,
        scale?: number,
        opacity?: number,
        fps?: number,
        position?: string
}
declare class Spinner {

    /**
     * The Spinner's HTML element - can be used to manually insert the spinner into the DOM  
     */
    el: HTMLElement;
    constructor(options?: SpinnerOptions): this;

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
    stop() internally.
    */
    spin(target?: HTMLElement): Spinner;

    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    stop(): Spinner;
    lines(el: HTMLElement, o: SpinnerOptions): HTMLElement;
    opacity(el: HTMLElement, i: number, val: number, o: SpinnerOptions): void
}
declare module 'spin.js' {
    declare module.exports: typeof Spinner
}