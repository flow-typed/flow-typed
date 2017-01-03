// @flow
/**
 * Flowtype definitions for tether
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare class Tether {
    constructor(options: Tether$ITetherOptions): this;
    setOptions(options: Tether$ITetherOptions): void;
    disable(): void;
    enable(): void;
    destroy(): void;
    position(): void;
    position(): void
}
declare interface Tether$ITetherOptions {
    attachment?: string,
        classes?: {
            [className: string]: boolean
        },
        classPrefix?: string,
        constraints?: Tether$ITetherConstraint[],
        element?: HTMLElement | string | any,
        enabled?: boolean,
        offset?: string,
        optimizations?: any,
        target?: HTMLElement | string | any,
        targetAttachment?: string,
        targetOffset?: string,
        targetModifier?: string
}

declare interface Tether$ITetherConstraint {
    attachment?: string,
        outOfBoundsClass?: string,
        pin?: boolean | string[],
        pinnedClass?: string,
        to?: string | HTMLElement | number[]
}
declare module 'tether' {
    declare module.exports: typeof Tether
}