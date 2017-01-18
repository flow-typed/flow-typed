/**
 * Flowtype definitions for jquery.watermark
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface WatermarkOptions {
    className?: string,
        useNative?: boolean,
        hideBeforeUnload?: boolean
}
declare interface Watermark {
    options: WatermarkOptions,
        show(element: string): void,
        hide(element: string): void,
        showAll(): void,
        hideAll(): void
}
declare interface JQuery {
    watermark(text: string, options?: WatermarkOptions): JQuery
}
declare interface JQueryStatic {
    watermark: Watermark
}