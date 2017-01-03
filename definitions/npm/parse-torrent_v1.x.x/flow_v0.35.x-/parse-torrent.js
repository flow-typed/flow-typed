/**
 * Flowtype definitions for parse-torrent
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface ParseTorrent$ParsedTorrent {
    infoHash: string,
        xt?: string,
        info?: {
            length: number,
            name: Buffer,
            piece length: number,
            pieces: Buffer
        },
        infoBuffer?: Buffer,
        name?: string,
        private?: boolean,
        created?: Date,
        comment?: string,
        announce?: Array<string>,
        urlList?: Array<string>,
        files?: Array<{
            path: string,
            name: string,
            length: number,
            offset: number
        }>,
        length?: number,
        pieceLength?: number,
        lastPieceLength?: number,
        pieces?: Array<string >
}

declare interface ParseTorrent$StaticInstance {
    (magnetUriOrInfoHash: string): ParseTorrent$ParsedTorrent,
    (torrentFileOrInfoHash: Buffer): {
        info: ParseTorrent$ParsedTorrent
    },
    toMagnetURI(parsedTorrent: ParseTorrent$ParsedTorrent): string,
        toTorrentFile(parsedTorrent: {
            info: ParseTorrent$ParsedTorrent
        }): Buffer,
        remote(
            remoteURLorLocalTorrentPath: string,
            onTorrentCallback?: (err: Error, parsedTorrent: ParseTorrent$ParsedTorrent) => void): void,
        remote(
            torrentBlob: Blob,
            onTorrentCallback?: (err: Error, parsedTorrent: ParseTorrent$ParsedTorrent) => void): void
}
declare module 'parse-torrent' {
    declare var parseTorrentStatic: ParseTorrent$StaticInstance;
    declare module.exports: typeof parseTorrentStatic
}