/**
 * Flowtype definitions for gulp-concat
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-concat' {
    declare interface IOptions {
        newLine: string
    }
    declare interface IFsStats {
        dev?: number,
            ino?: number,
            mode?: number,
            nlink?: number,
            uid?: number,
            gid?: number,
            rdev?: number,
            size?: number,
            blksize?: number,
            blocks?: number,
            atime?: Date,
            mtime?: Date,
            ctime?: Date
    }
    declare interface IVinylOptions {
        cwd?: string,
            base?: string,
            path?: string,
            stat?: IFsStats,
            contents?: NodeJS.ReadableStream | Buffer
    }
    declare interface IConcat {
        (filename: string, options?: IOptions): NodeJS.ReadWriteStream,
            (options: IVinylOptions): NodeJS.ReadWriteStream
    }
    declare var _tmp: IConcat;
    declare module.exports: typeof _tmp
}