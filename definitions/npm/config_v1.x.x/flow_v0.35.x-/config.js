/**
 * Flowtype definitions for config
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'config' {
    declare var c: c$IConfig;
    declare interface c$IUtil {
        extendDeep(mergeInto: any, mergeFrom: any, depth?: number): any,
            cloneDeep(copyFrom: any, depth?: number): any,
            equalsDeep(object1: any, object2: any, dept?: number): boolean,
            diffDeep(object1: any, object2: any, depth?: number): any,
            makeImmutable(object: any, propertyName?: string, propertyValue?: string): any,
            makeHidden(object: any, propertyName: string, propertyValue?: string): any,
            getEnv(varName: string): string
    }

    declare interface c$IConfig {
        get<T>(setting: string): T,
            has(setting: string): boolean,
            util: c$IUtil
    }
    declare module.exports: typeof c
}