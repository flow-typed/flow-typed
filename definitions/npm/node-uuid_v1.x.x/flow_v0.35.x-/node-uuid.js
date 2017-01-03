/**
 * Flowtype definitions for node-uuid
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module '___NodeUUID' {

    /**
     * Overloads for node environment
     * We need to duplicate some declarations because
    interface merging doesn't work with overloads
    */
    declare interface UUID {
        v1(options?: UUIDOptions): string,
            v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
            v1(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer,
            v4(options?: UUIDOptions): string,
            v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[],
            v4(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer,
            parse(id: string, buffer?: number[], offset?: number): number[],
            parse(id: string, buffer?: Buffer, offset?: number): Buffer,
            unparse(buffer: number[], offset?: number): string,
            unparse(buffer: Buffer, offset?: number): string
    }
}