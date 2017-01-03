/**
 * Flowtype definitions for deep-diff
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface deepDiff$IDiff {
    kind: string,
        path: string[],
        lhs: any,
        rhs: any,
        index?: number,
        item?: deepDiff$IDiff
}

declare interface deepDiff$IAccumulator {
    push(diff: deepDiff$IDiff): void,
        length: number
}

declare interface deepDiff$IPrefilter {
    (path: string[], key: string): boolean
}

declare interface deepDiff$IDeepDiff {
    diff(): deepDiff$IDiff,
        diff(
            lhs: Object,
            rhs: Object,
            prefilter?: deepDiff$IPrefilter,
            acc?: deepDiff$IAccumulator): deepDiff$IDiff[],
        observableDiff(
            lhs: Object,
            rhs: Object,
            changes: Function,
            prefilter?: deepDiff$IPrefilter,
            path?: string[],
            key?: string,
            stack?: Object[]): void,
        applyDiff(target: Object, source: Object, filter: Function): void,
        applyChange(target: Object, source: Object, change: deepDiff$IDiff): void,
        revertChange(target: Object, source: Object, change: deepDiff$IDiff): void,
        isConflict(): boolean,
        noConflict(): deepDiff$IDeepDiff
}
declare
var DeepDiff: deepDiff$IDeepDiff;
declare module 'deep-diff' {
    declare var diff: deepDiff$IDeepDiff;
    declare module.exports: typeof diff
}