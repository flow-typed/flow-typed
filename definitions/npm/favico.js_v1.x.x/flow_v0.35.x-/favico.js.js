/**
 * Flowtype definitions for favico.js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface favicojs$FavicoJsStatic {
    new(opt?: favicojs$FavicoJsOptions): favicojs$Favico
}

declare interface favicojs$FavicoJsOptions {
    bgColor?: string,
        textColor?: string,
        fontFamily?: string,
        fontStyle?: string,
        type?: string,
        position?: string,
        animation?: string,
        elementId?: string,
        element?: HTMLElement,
        dataUrl?: (url: string) => any
}

declare interface favicojs$Favico {
    badge(number: number): void,
        badge(number: number, animation: string): void,
        badge(number: number, opts: favicojs$FavicoJsOptions): void,
        reset(): void,
        image(imageElement: HTMLElement): void,
        video(imageElement: HTMLElement): void,
        webcam(): void
}
declare var Favico: favicojs$FavicoJsStatic;