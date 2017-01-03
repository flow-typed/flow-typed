/**
 * Flowtype definitions for react-addons-update
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ___React$UpdateSpecCommand {
    $set?: any,
        $merge?: {},
        $apply(value: any): any
}

declare interface ___React$UpdateSpecPath {
    [key: string]: ___React$UpdateSpec
}

declare type ___React$UpdateSpec = ___React$UpdateSpecCommand | ___React$UpdateSpecPath;

declare type ___React$UpdateArraySpec = {
    $push?: any[],
    $unshift?: any[],
    $splice?: any[][]
} & ___React$UpdateSpecCommand



declare
var npm$namespace$___Addons: {
    update: typeof ___Addons$update,
}
declare
export function ___Addons$update(value: any[], spec: ___React$UpdateArraySpec): any[] declare module 'react-addons-update' {
    declare module.exports: typeof undefined.update
}