/**
 * Flowtype definitions for tether-drop
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare class Drop {
    constructor(options: Drop$IDropOptions): this;
    content: HTMLElement;
    tether: Tether;
    open(): void;
    close(): void;
    remove(): void;
    toggle(): void;
    isOpened(): boolean;
    position(): void;
    destroy(): void;
    on(event: string, handler: Function, context?: any): void;
    once(event: string, handler: Function, context?: any): void;
    off(event: string, handler?: Function): void;
    createContext(options: Drop$IDropContextOptions): typeof Drop
}
declare interface Drop$IDropContextOptions {
    classPrefix?: string,
        defaults?: Drop$IDropOptions
}

declare interface Drop$IDropOptions {
    target?: Element,
        content?: Element | string | ((drop?: Drop) => string) | ((drop?: Drop) => Element),
        position?: string,
        openOn?: string,
        classes?: string,
        constrainToWindow?: boolean,
        constrainToScrollParent?: boolean,
        remove?: boolean,
        beforeClose?: () => boolean,
        openDelay?: number,
        closeDelay?: number,
        focusDelay?: number,
        blurDelay?: number,
        hoverOpenDelay?: number,
        hoverCloseDelay?: number,
        tetherOptions?: Tether.ITetherOptions
}
declare module 'tether-drop' {
    declare module.exports: typeof Drop
}