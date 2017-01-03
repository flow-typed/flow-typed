// @flow
/**
 * Flowtype definitions for react-ga
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$___reactGA: {
    initialize: typeof ___reactGA$initialize,
    pageview: typeof ___reactGA$pageview,
    modalview: typeof ___reactGA$modalview,
    event: typeof ___reactGA$event,
    set: typeof ___reactGA$set,
}
declare export interface ___reactGA$EventArgs {
    category: string,
        action: string,
        label?: string,
        value?: number,
        nonInteraction?: boolean
}

declare export interface ___reactGA$InitializeOptions {
    debug?: boolean
}

declare export interface ___reactGA$FieldsObject {
    [i: string]: any
}

declare export function ___reactGA$initialize(trackingCode: string, options?: ___reactGA$InitializeOptions): void

declare export function ___reactGA$pageview(path: string): void

declare export function ___reactGA$modalview(name: string): void

declare export function ___reactGA$event(args: ___reactGA$EventArgs): void

declare export function ___reactGA$set(fieldsObject: ___reactGA$FieldsObject): voiddeclare module 'react-ga' {
    declare module.exports: typeof ___reactGA
}