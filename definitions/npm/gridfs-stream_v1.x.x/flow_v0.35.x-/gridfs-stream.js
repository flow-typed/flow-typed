/**
 * Flowtype definitions for gridfs-stream
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface GridFSStream$Range {
    startPos: number,
        endPos: number
}

declare
export interface GridFSStream$Options {
    _id?: string,
        filename?: string,
        mode?: string,
        range?: GridFSStream$Range,
        chunkSize?: number,
        content_type?: string,
        root?: string,
        metadata?: any
}

declare
export type GridFSStream$WriteStream = {
    writable: boolean,
    name: string,
    id: string,
    options: GridFSStream$Options,
    mode: string
}

declare
export type GridFSStream$ReadStream = {
    readable: boolean,
    paused: boolean
}
declare module 'gridfs-stream' {
    declare module.exports: typeof g
    declare export class Grid {
        files: mongo.Collection;
        collection(name?: string): mongo.Collection;
        curCol: string;
        createWriteStream(options?: GridFSStream$Options): GridFSStream$WriteStream;
        createReadStream(options?: GridFSStream$Options): GridFSStream$ReadStream;
        createWriteStream(options?: string): GridFSStream$WriteStream;
        createReadStream(options?: string): GridFSStream$ReadStream;
        remove(options: GridFSStream$Options, callback: (err: Error) => void): void;
        exist(
            options: GridFSStream$Options,
            callback: (err: Error, found: boolean) => void): void;
        findOne(
            options: GridFSStream$Options,
            callback: (err: Error, record: any) => void): void
    }
}