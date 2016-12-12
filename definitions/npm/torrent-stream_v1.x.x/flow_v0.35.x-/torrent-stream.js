

declare module 'torrent-stream' {
			declare function s(
		magnet: string | Buffer, options?: TorrentStream.TorrentEngineOptions
	): TorrentStream.TorrentEngine

		declare module.exports: undefined


}

declare module 'npm$namespace$TorrentStream' {
		declare interface TorrentEngine {
		files: TorrentFile[],
		destroy(callback: () => void): void,
		connect(peer: string): void,
		disconnect(peer: string): void,
		block(peer: string): void,
		remove(keepPieces: boolean, callback: () => void): void,
		listen(port: number, callback: () => void): void,
		swarm: Swarm,
		infoHash: string,
		on(event: "ready" | "torrent" | "idle", callback: Function): void,
		on(event: "download", callback: (pieceIndex: number) => void): void,
		on(
		event: "upload", callback: (pieceIndex: number, offset: number, length: number) => void
	): void,
		on(event: string, callback: Function): void
	}

	declare interface TorrentEngineOptions {
		connections?: number,
		uploads?: number,
		tmp?: string,
		path?: string,
		verify?: boolean,
		dht?: boolean,
		tracker?: boolean,
		trackers?: string[],
		storage?: any
	}

	declare interface Swarm {
		downloaded: number
	}

	declare interface TorrentFile {
		name: string,
		path: string,
		length: number,
		select(): void,
		deselect(): void,
		createReadStream(options?: ReadStreamOptions): any
	}

	declare interface ReadStreamOptions {
		start: number,
		end: number
	}

			
}