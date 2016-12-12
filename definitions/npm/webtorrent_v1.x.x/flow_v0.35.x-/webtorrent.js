import type { ClientConstructor } from 'npm$namespace$WebTorrent'

declare module 'webtorrent' {
					declare module.exports: ClientConstructor


}

declare module 'npm$namespace$WebTorrent' {
		declare export interface ClientOptions {
		dht?: boolean | Object,
		maxConns?: number,
		nodeId?: string | Buffer,
		peerId?: string | Buffer,
		rtcConfig?: Object,
		tracker?: boolean,
		wrtc?: Object
	}

	declare export interface TorrentOptions {
		announce?: Array<string>,
		path?: string,
		store?: Function
	}

	declare export interface ClientConstructor {
		new (config?: ClientOptions): Client
	}

	declare export interface Client {
		on(event: string, listener: Function): this,
		add(
		magnetUriOrPathOrInfoHash: string, opts?: TorrentOptions, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		add(
		torrentFileOrInfoHash: Buffer, opts?: TorrentOptions, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		add(
		parsedTorrent: ParseTorrent.ParsedTorrent, opts?: TorrentOptions, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		add(
		magnetUriOrPathOrInfoHash: string, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		add(
		torrentFileOrInfoHash: Buffer, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		add(
		parsedTorrent: ParseTorrent.ParsedTorrent, onTorrentCallback?: (torrent: Torrent) => void
	): Torrent,
		on(event: "torrent", callback: (torrent: Torrent) => void): this,
		seed(
		inputFileOrFolderPath: string, opts?: TorrentOptions | any, onSeed?: (torrent: Torrent) => void
	): void,
		seed(
		inputFile: File, opts?: TorrentOptions | any, onSeed?: (torrent: Torrent) => void
	): void,
		seed(
		inputFileList: FileList, opts?: TorrentOptions | any, onSeed?: (torrent: Torrent) => void
	): void,
		seed(
		inputBuffer: Buffer, opts?: TorrentOptions | any, onSeed?: (torrent: Torrent) => void
	): void,
		seed(
		inputBuffersFilesOrPaths: Array<string | File | Buffer>, opts?: TorrentOptions | any, onSeed?: (torrent: Torrent) => void
	): void,
		seed(inputFileOrFolderPath: string, onSeed?: (torrent: Torrent) => void): void,
		seed(inputFile: File, onSeed?: (torrent: Torrent) => void): void,
		seed(inputFileList: FileList, onSeed?: (torrent: Torrent) => void): void,
		seed(inputBuffer: Buffer, onSeed?: (torrent: Torrent) => void): void,
		seed(
		inputBuffersFilesOrPaths: Array<string | File | Buffer>, onSeed?: (torrent: Torrent) => void
	): void,
		remove(torrentId: string, callback?: (err: Error) => void): void,
		destroy(callback?: (err: Error) => void): void,
		torrents: Array<Torrent>,
		get(torrentId: string): Torrent,
		ratio: number
	}

	declare export interface Torrent {
		on(event: string, listener: Function): this,
		infoHash: string,
		magnetURI: string,
		files: Array<InTorrentFile>,
		swarm: any,
		recieved: number,
		downloaded: number,
		timeRemaining: number,
		progress: number,
		ratio: number,
		downloadSpeed(): number,
		uploadSpeed(): number,
		path: string,
		destroy(): void,
		addPeer(addr: string): boolean,
		select(
		start: number, end: number, priority?: number, notifyCallback?: () => void
	): void,
		deselect(start: number, end: number, priority: number): void,
		critical(start: number, end: number): void,
		createServer(opts?: any): any,
		pause(): void,
		resume(): void,
		on(event: "done", callback: () => void): this,
		on(event: "download", callback: (chunkSize: number) => void): this,
		on(event: "wire", callback: (wire: any) => void): this
	}

	declare export interface InTorrentFile {
		on(event: string, listener: Function): this,
		name: string,
		path: string,
		length: number,
		select(): void,
		deselect(): void,
		createReadStream(opts?: {
		start: number,
		end: number
	}): NodeJS.ReadableStream,
		getBuffer(callback: (err: Error, buffer: Buffer) => void): void,
		appendTo(
		rootElem: Element | string, callback?: (err: Error, elem: Element) => void
	): void,
		renderTo(elem: Element | string, callback?: (err: Error, elem: Element) => void): void,
		getBlobURL(callback: (err: Error, url: string) => void): void,
		on(event: "done", callback: () => void): this
	}

			
}