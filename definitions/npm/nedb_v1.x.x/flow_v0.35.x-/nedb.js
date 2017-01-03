// @flow
/**
 * Flowtype definitions for nedb
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'nedb' {
    declare module.exports: typeof NeDBDataStore

}
declare interface NeDB$Cursor<T>{
    sort(query: any): NeDB$Cursor<T>,
    skip(n: number): NeDB$Cursor<T>,
    limit(n: number): NeDB$Cursor<T>,
    projection(query: any): NeDB$Cursor<T>,
    exec(callback: (err: Error, documents: Array<T>) => void): void
}

declare interface NeDB$CursorCount {
    exec(callback: (err: Error, count: number) => void): void
}

declare interface NeDB$DataStoreOptions {
    filename?: string,
        inMemoryOnly?: boolean,
        nodeWebkitAppName?: boolean,
        autoload?: boolean,
        onload?: (error: Error) => any,
        afterSerialization?: (line: string) => string,
        beforeDeserialization?: (line: string) => string,
        corruptAlertThreshold?: number
}


/**
 * multi (defaults to false) which allows the modification of several documents if set to true
 * upsert (defaults to false) if you want to insert a new document corresponding to the update rules if your query doesn't match anything
 */
declare interface NeDB$UpdateOptions {
    multi?: boolean,
        upsert?: boolean,
        returnUpdatedDocs?: boolean
}


/**
 * options only one option for now: multi which allows the removal of multiple documents if set to true. Default is false
 */
declare interface NeDB$RemoveOptions {
    multi?: boolean
}

declare interface NeDB$EnsureIndexOptions {
    fieldName: string,
        unique?: boolean,
        sparse?: boolean
}

declare interface NeDB$Persistence {
    compactDatafile(): void,
        setAutocompactionInterval(interval: number): void,
        stopAutocompaction(): void
}