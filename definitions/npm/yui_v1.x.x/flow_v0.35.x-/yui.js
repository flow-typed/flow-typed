/**
 * Flowtype definitions for yui
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface YUI {
    Test: YUITest.YUITestStatic,
        Assert: YUITest.IAssert,
        add(
            name: string,
            fn: (Y: YUI, name: string) => any,
            version: string,
            details?: Y$IConfig): YUI,
        mix(
            receiver: Function,
            supplier: Function,
            overwrite?: boolean,
            whitelist?: string[],
            mode?: number,
            merge?: boolean): any,
        mix(
            receiver: Object,
            supplier: Function,
            overwrite?: boolean,
            whitelist?: string[],
            mode?: number,
            merge?: boolean): any,
        mix(
            receiver: Function,
            supplier: Object,
            overwrite?: boolean,
            whitelist?: string[],
            mode?: number,
            merge?: boolean): any,
        mix(
            receiver: Object,
            supplier: Object,
            overwrite?: boolean,
            whitelist?: string[],
            mode?: number,
            merge?: boolean): any
}
declare interface Y$IConfig {
    requires: string[],
        optional: string[],
        use: string[]
}
declare
var Y: YUI;
declare
var YUI: YUI;