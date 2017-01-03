// @flow
/**
 * Flowtype definitions for glob
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'glob' {
    declare module.exports: typeof G

    declare     var npm$namespace$G: {
        sync: typeof G$sync,
        hasMagic: typeof G$hasMagic,
    }
    declare     function G$sync(pattern: string, options?: G$IOptions): string[]

    declare     function G$hasMagic(pattern: string, options?: G$IOptions): boolean

    declare     var Glob: G$IGlobStatic;

    declare     var GlobSync: G$IGlobSyncStatic;

    declare type G$IOptions = {
        cwd?: string,
        root?: string,
        dot?: boolean,
        nomount?: boolean,
        mark?: boolean,
        nosort?: boolean,
        stat?: boolean,
        silent?: boolean,
        strict?: boolean,
        cache?: {
            [path: string]: any
        },
        statCache?: {
            [path: string]: fs.Stats
        },
        symlinks?: any,
        sync?: boolean,
        nounique?: boolean,
        nonull?: boolean,
        debug?: boolean,
        nobrace?: boolean,
        noglobstar?: boolean,
        noext?: boolean,
        nocase?: boolean,
        matchBase?: any,
        nodir?: boolean,
        ignore?: any,
        follow?: boolean,
        realpath?: boolean,
        nonegate?: boolean,
        nocomment?: boolean,

        /**
         * Deprecated. 
         */
        globDebug?: boolean
    }

    declare type G$IGlobStatic = {
        new(pattern: string, cb?: (err: Error, matches: string[]) => void): G$IGlob,
        new(
            pattern: string,
            options: G$IOptions,
            cb?: (err: Error, matches: string[]) => void): G$IGlob,
        prototype: G$IGlob
    }

    declare interface G$IGlobSyncStatic {
        new(pattern: string, options?: G$IOptions): G$IGlobBase,
        prototype: G$IGlobBase
    }

    declare interface G$IGlobBase {
        minimatch: minimatch.IMinimatch,
            options: G$IOptions,
            aborted: boolean,
            cache: {
                [path: string]: any
            },
            statCache: {
                [path: string]: fs.Stats
            },
            symlinks: {
                [path: string]: boolean
            },
            realpathCache: {
                [path: string]: string
            },
            found: string[]
    }

    declare type G$IGlob = {
            pause(): void,
            resume(): void,
            abort(): void,

            /**
             * Deprecated. 
             */
            EOF: any,

            /**
             * Deprecated. 
             */
            paused: boolean,

            /**
             * Deprecated. 
             */
            maxDepth: number,

            /**
             * Deprecated. 
             */
            maxLength: number,

            /**
             * Deprecated. 
             */
            changedCwd: boolean,

            /**
             * Deprecated. 
             */
            cwd: string,

            /**
             * Deprecated. 
             */
            root: string,

            /**
             * Deprecated. 
             */
            error: any,

            /**
             * Deprecated. 
             */
            matches: string[],

            /**
             * Deprecated. 
             */
            log(...args: any[]): void,

            /**
             * Deprecated. 
             */
            emitMatch(m: any): void
        } & G$IGlobBase &

}