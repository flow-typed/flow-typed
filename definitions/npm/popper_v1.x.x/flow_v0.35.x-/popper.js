/**
 * Flowtype definitions for popper
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Popper$PopperOptions {
    placement?: string,
        gpuAcceleration?: boolean,
        offset?: number,
        boundariesElement?: string | Element,
        boundariesPadding?: number,
        preventOverflowOrder?: ("left" | "right" | "top" | "bottom")[],
        flipBehavior?: string | string[],
        modifiers?: string[],
        modifiersIgnored?: string[],
        removeOnDestroy?: boolean,
        arrowElement?: string | Element
}

declare export class Modifiers {
    applyStyle(data: Object): Object;
    shift(data: Object): Object;
    preventOverflow(data: Object): Object;
    keepTogether(data: Object): Object;
    flip(data: Object): Object;
    offset(data: Object): Object;
    arrow(data: Object): Object
}

declare export interface Popper$Data {
    placement: string,
        offsets: {
            popper: {
                position: string,
                top: number,
                left: number
            }
        }
}
declare class Popper {
    modifiers: Popper$Modifiers;
    placement: string;
    constructor(reference: Element, popper: Element | Object, options?: Popper$PopperOptions): this;
    destroy(): void;
    update(): void;
    onCreate(cb: (data: Popper$Data) => void): this;
    onUpdate(cb: (data: Popper$Data) => void): this;
    parse(config: Object): Element;
    runModifiers(data: Object, modifiers: string[], ends: Function): void;
    isModifierRequired(): boolean
}
declare module 'popper.js' {
    declare module.exports: typeof Popper
}