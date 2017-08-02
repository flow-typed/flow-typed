declare export type Popper$Position = 'top' | 'right' | 'bottom' | 'left';

declare export type Popper$Placement = 'auto-start' |
    'auto' |
    'auto-end' |
    'top-start' |
    'top' |
    'top-end' |
    'right-start' |
    'right' |
    'right-end' |
    'bottom-end' |
    'bottom' |
    'bottom-start' |
    'left-end' |
    'left' |
    'left-start';

declare export type Popper$Boundary = scrollParent | viewport | window;

declare export type Popper$ModifierFn = (data: Popper$Data, options: Object) => Popper$Data;

declare export interface Popper$BaseModifier {
    order?: number,
        enabled?: boolean,
        fn?: Popper$ModifierFn
}

declare export interface Popper$Modifiers {
    shift?: Popper$BaseModifier,
        offset?: Popper$BaseModifier & {
            offset?: number | string
        },
        preventOverflow?: Popper$BaseModifier & {
            priority?: Popper$Position[],
            padding?: number,
            boundariesElement?: Popper$Boundary | Element,
            escapeWithReference?: boolean
        },
        keepTogether?: Popper$BaseModifier,
        arrow?: Popper$BaseModifier & {
            element?: string | Element
        },
        flip?: Popper$BaseModifier & {
            behavior?: flip | clockwise | counterclockwise | Popper$Position[],
            padding?: number,
            boundariesElement?: Popper$Boundary | Element
        },
        inner?: Popper$BaseModifier,
        hide?: Popper$BaseModifier,
        applyStyle?: Popper$BaseModifier & {
            onLoad?: Function,
            gpuAcceleration?: boolean
        },
        computeStyle?: Popper$BaseModifier & {
            gpuAcceleration?: boolean,
            x?: bottom | top,
            y?: left | right
        }, [name: string]: (Popper$BaseModifier & Record<string, any>) | void
}

declare export interface Popper$Offset {
    top: number,
        left: number,
        width: number,
        height: number
}

declare export interface Popper$Data {
    instance: Popper,
        placement: Popper$Placement,
        originalPlacement: Popper$Placement,
        flipped: boolean,
        hide: boolean,
        arrowElement: Element,
        styles: CSSStyleDeclaration,
        boundaries: Object,
        offsets: {
            popper: Popper$Offset,
            reference: Popper$Offset,
            arrow: {
                top: number,
                left: number
            }
        }
}

declare export interface Popper$PopperOptions {
    placement?: Popper$Placement,
        eventsEnabled?: boolean,
        modifiers?: Popper$Modifiers,
        removeOnDestroy?: boolean,
        onCreate(data: Popper$Data): void,
        onUpdate(data: Popper$Data): void
}

declare export interface Popper$ReferenceObject {
    clientHeight: number,
        clientWidth: number,
        getBoundingClientRect(): ClientRect
}
declare class Popper {
    modifiers: (Popper$BaseModifier & {
        name: string
    })[];
    placements: Popper$Placement[];
    Defaults: Popper$PopperOptions;
    options: Popper$PopperOptions;
    constructor(reference: Element | Popper$ReferenceObject, popper: Element, options?: Popper$PopperOptions): this;
    destroy(): void;
    update(): void;
    scheduleUpdate(): void;
    enableEventListeners(): void;
    disableEventListeners(): void
}
declare module 'popper.js' {
    declare module.exports: typeof Popper
}
