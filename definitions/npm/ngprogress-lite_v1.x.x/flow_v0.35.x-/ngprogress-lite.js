/**
 * Flowtype definitions for ngprogress-lite
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'progressLite' {
    declare export interface INgProgressLite {
        set(num: number): INgProgressLite,
            get(): number,
            start(): INgProgressLite,
            inc(amount?: number): INgProgressLite,
            done(): void
    }
    declare export interface IConfigurationOptions {
        minimum: number,
            speed: number,
            ease: string,
            trickleRate: number,
            trickleSpeed: number,
            template: string
    }
    declare export interface INgProgressLiteProvider {
        settings: IConfigurationOptions
    }
}