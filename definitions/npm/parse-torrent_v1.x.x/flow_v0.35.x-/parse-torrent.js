import type { StaticInstance } from 'npm$namespace$ParseTorrent'

declare module 'parse-torrent' {
					declare module.exports: StaticInstance


}

declare module 'npm$namespace$ParseTorrent' {
		declare export interface ParsedTorrent {
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
		pieces?: Array<string>
	}

	declare interface StaticInstance {
		(magnetUriOrInfoHash: string): ParsedTorrent,
		(torrentFileOrInfoHash: Buffer): {
		info: ParsedTorrent
	},
		toMagnetURI(parsedTorrent: ParsedTorrent): string,
		toTorrentFile(parsedTorrent: {
		info: ParsedTorrent
	}): Buffer,
		remote(
		remoteURLorLocalTorrentPath: string, onTorrentCallback?: (err: Error, parsedTorrent: ParsedTorrent) => void
	): void,
		remote(
		torrentBlob: Blob, onTorrentCallback?: (err: Error, parsedTorrent: ParsedTorrent) => void
	): void
	}

			
}