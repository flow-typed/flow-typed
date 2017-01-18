/**
 * Flowtype definitions for storejs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface StoreJSStatic {
    set(key: string, value: any): any,
        get(key: string): any,
        remove(key: string): void,
        clear(): void,
        enabled: boolean,
        disabled: boolean,
        transact(key: string, defaultValue: any, transactionFn?: (val: any) => void): void,
        getAll(): any,
        serialize(value: any): string,
        deserialize(value: string): any
}
declare var store: StoreJSStatic;