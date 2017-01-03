// @flow
/**
 * Flowtype definitions for platform
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface PlatformStatic {
    description?: string,
        layout?: string,
        manufacturer?: string,
        name?: string,
        prerelease?: string,
        product?: string,
        ua?: string,
        version?: string,
        os?: PlatformOS,
        parse(ua: string): PlatformStatic,
        toString(): string
}
declare interface PlatformOS {
    architecture?: number,
        family?: string,
        version?: string,
        toString(): string
}
declare var platform: PlatformStatic;