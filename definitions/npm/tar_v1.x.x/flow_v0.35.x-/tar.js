/**
 * Flowtype definitions for tar
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'tar' {
    declare export interface HeaderProperties {
        path?: string,
            mode?: number,
            uid?: number,
            gid?: number,
            size?: number,
            mtime?: number,
            uname?: string,
            gname?: string,
            devmaj?: number,
            devmin?: number
    }
    declare export interface ExtractOptions {
        type?: string,
            Directory?: boolean,
            path?: string,
            strip?: number
    }
    declare export type ParseStream = {
        position: number,
        _stream: stream.Stream,
        _ended: boolean,
        _streamEnd(): void,
        _process(c: Buffer): void,
        _startEntry(c: Buffer): void
    }
    declare export type PackStream = {
        writable: boolean,
        readable: boolean,
        _noProprietary: boolean,
        _global: HeaderProperties,
        _buffer: stream.Stream[],
        _currentEntry: any,
        _processing: boolean,
        _pipeRoot: stream.Stream,
        _needDrain: boolean,
        _paused: boolean,
        addGlobal(props: HeaderProperties): void,
        add(stream: stream.Stream): boolean,
        destroy(): void,
        _process(): void
    }
    declare export type ExtractStream = {} & ParseStream

    declare export var fields: {
        path: number,
        mode: number,
        uid: number,
        gid: number,
        size: number,
        mtime: number,
        cksum: number,
        type: number,
        linkpath: number,
        ustar: number,
        ustarvar: number,
        uname: number,
        gname: number,
        devmaj: number,
        devmin: number,
        prefix: number,
        fill: number
    };
    declare export var fieldSize: number[];
    declare export var fieldOffs: number[];
    declare export var fieldEnds: number[];
    declare export var types: {
        0: string,
         : string,
        : string,
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string,
        7: string,
        g: string,
        x: string,
        A: string,
        D: string,
        I: string,
        K: string,
        L: string,
        M: string,
        N: string,
        S: string,
        V: string,
        X: string,
        File: string,
        OldFile: string,
        Link: string,
        SymbolicLick: string,
        CharacterDevice: string,
        BlockDevice: string,
        Directory: string,
        FIFO: string,
        ContiguousFile: string,
        GlobalExtendedHeader: string,
        ExtendedHeader: string,
        SolarisACL: string,
        GNUDumpDir: string,
        INode: string,
        NextFileHasLonLinkPath: string,
        NextFileHasLongPath: string,
        ContinuationFile: string,
        TapeVolumeHeader: string,
        OldExtendedHeader: string
    };
    declare export var modes: {
        suid: number,
        sgid: number,
        svtx: number,
        uread: number,
        uwrite: number,
        uexec: number,
        gread: number,
        gwrite: number,
        gexec: number,
        oread: number,
        owrite: number,
        oexec: number
    };
    declare export var numeric: {
        mode: boolean,
        uid: boolean,
        gid: boolean,
        size: boolean,
        mtime: boolean,
        devmaj: boolean,
        devmin: boolean,
        cksum: boolean,
        atime: boolean,
        ctime: boolean,
        dev: boolean,
        ino: boolean,
        nlink: boolean
    };
    declare export var knownExtended: {
        atime: boolean,
        charset: boolean,
        comment: boolean,
        ctime: boolean,
        gid: boolean,
        gname: boolean,
        linkpat: boolean,
        mtime: boolean,
        path: boolean,
        realtime: boolean,
        security: boolean,
        size: boolean,
        uid: boolean,
        uname: boolean
    };
    declare export var headerSize: number;
    declare export var blockSize: number;

    /**
     * Returns a writable stream. Write tar data to it and it will emit entry events for each entry parsed from the tarball. This is used by tar.Extract.
     */
    declare export function Parse(): ParseStream

    /**
     * Returns a through stream. Use fstream to write files into the pack stream and you will receive tar archive data from the pack stream.
     * This only works with directories, it does not work with individual files.
    The optional properties object are used to set properties in the tar 'Global Extended Header'.
    */
    declare export function Pack(props?: HeaderProperties): PackStream

    /**
     * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
     */
    declare export function Extract(path: string): ExtractStream
}