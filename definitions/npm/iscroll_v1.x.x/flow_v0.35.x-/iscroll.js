/**
 * Flowtype definitions for iscroll
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface iScrollEvent {
    (e: Event): void
}
declare interface iScrollOptions {
    hScroll?: boolean,
        vScroll?: boolean,
        x?: number,
        y?: number,
        bounce?: boolean,
        bounceLock?: boolean,
        momentum?: boolean,
        lockDirection?: boolean,
        useTransform?: boolean,
        useTransition?: boolean,
        topOffset?: number,
        checkDOMChanges?: boolean,
        handleClick?: boolean,
        hScrollbar?: boolean,
        vScrollbar?: boolean,
        fixedScrollbar?: boolean,
        hideScrollbar?: boolean,
        fadeScrollbar?: boolean,
        scrollbarClass?: string,
        zoom?: boolean,
        zoomMin?: number,
        zoomMax?: number,
        doubleTapZoom?: number,
        wheelAction?: string,
        snap?: any,
        snapThreshold?: number,
        onRefresh?: iScrollEvent,
        onBeforeScrollStart?: iScrollEvent,
        onScrollStart?: iScrollEvent,
        onBeforeScrollMove?: iScrollEvent,
        onScrollMove?: iScrollEvent,
        onBeforeScrollEnd?: iScrollEvent,
        onScrollEnd?: iScrollEvent,
        onTouchEnd?: iScrollEvent,
        onDestroy?: iScrollEvent,
        onZoomStart?: iScrollEvent,
        onZoom?: iScrollEvent,
        onZoomEnd?: iScrollEvent
}
declare class iScroll {
    constructor(element: string, options?: iScrollOptions): this;
    constructor(element: HTMLElement, options?: iScrollOptions): this;
    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
    scrollToElement(element: string, time?: number): void;
    scrollToElement(element: HTMLElement, time?: number): void;
    scrollToPage(pageX: number, pageY: number, time?: number): void;
    disable(): void;
    enable(): void;
    stop(): void;
    zoom(x: number, y: number, scale: number, time?: number): void;
    isReady(): boolean
}