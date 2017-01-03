/**
 * Flowtype definitions for screenfull
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var screenfull: IScreenfull;
declare interface IScreenfullRaw {
    requestFullscreen?: string,
        exitFullscreen?: string,
        fullscreenElement?: string,
        fullscreenEnabled?: string,
        fullscreenchange?: string,
        fullscreenerror?: string
}
declare interface IScreenfull {
    isFullscreen: boolean,
        element: Element,
        enabled: boolean,
        raw: IScreenfullRaw,
        request(elem?: Element): void,
        toggle(elem?: Element): void,
        exit(): void
}