

declare module 'Q-io' {
		declare interface QioBufferReader {
		new (): Qio.Reader,
		read(stream: Qio.Reader, charset: string): string,
		read(stream: Qio.Reader): Buffer,
		join(buffers: Buffer[]): Buffer
	}

	declare interface QioBufferWriter {
		(writer: Buffer): Qio.Writer,
		Writer: Qio.Writer
	}

	declare interface QioBufferStream {
		(buffer: Buffer, encoding: string): Qio.Stream
	}

			
}

declare module 'npm$namespace$QioFS' {
		declare interface Stats {
		node: NodeStats,
		size: number
	}

	declare interface NodeStats {
		isFile(): boolean,
		isDirectory(): boolean,
		isBlockDevice(): boolean,
		isCharacterDevice(): boolean,
		isSymbolicLink(): boolean,
		isFIFO(): boolean,
		isSocket(): boolean,
		node: NodeStats,
		dev: number,
		ino: number,
		mode: number,
		nlink: number,
		uid: number,
		gid: number,
		rdev: number,
		size: number,
		blksize: number,
		blocks: number,
		atime: Date,
		mtime: Date,
		ctime: Date
	}

	declare export function open(path: string, options?: any): Q.Promise<any>

	declare export function read(path: string, options?: any): Q.Promise<any>

	declare export function write(path: string, content: Buffer, options?: any): Q.Promise<void>

	declare export function write(path: string, content: string, options?: any): Q.Promise<void>

	declare export function append(path: string, content: Buffer, options?: any): Q.Promise<void>

	declare export function append(path: string, content: string, options?: any): Q.Promise<void>

	declare export function copy(source: string, target: string): Q.Promise<void>

	declare export function copyTree(source: string, target: string): Q.Promise<void>

	declare export function list(path: string): Q.Promise<string[]>

	declare export function listTree(
		path: string, guard?: (path: string, stat: any) => boolean
	): Q.Promise<string[]>

	declare export function listDirectoryTree(path: string): Q.Promise<string[]>

	declare export function makeDirectory(path: string, mode?: string): Q.Promise<void>

	declare export function makeDirectory(path: string, mode?: number): Q.Promise<void>

	declare export function makeTree(path: string, mode?: string): Q.Promise<void>

	declare export function makeTree(path: string, mode?: number): Q.Promise<void>

	declare export function remove(path: string): Q.Promise<void>

	declare export function removeTree(path: string): Q.Promise<void>

	declare export function rename(source: string, target: string): Q.Promise<void>

	declare export function move(source: string, target: string): Q.Promise<void>

	declare export function link(source: string, target: any): Q.Promise<void>

	declare export function symbolicCopy(source: string, target: string, type: string): Q.Promise<void>

	declare export function symbolicLink(target: string, link: string, type: string): Q.Promise<void>

	declare export function chown(path: string, uid: number, gid: number): Q.Promise<void>

	declare export function chmod(path: string, mode?: string): Q.Promise<void>

	declare export function chmod(path: string, mode?: number): Q.Promise<void>

	declare export function stat(path: string): Q.Promise<Stats>

	declare export function statLink(path: string): Q.Promise<Stats>

	declare export function statFd(fd: number): Q.Promise<Stats>

	declare export function exists(path: string): Q.Promise<boolean>

	declare export function isFile(path: string): Q.Promise<boolean>

	declare export function isDirectory(path: string): Q.Promise<boolean>

	declare export function isSymbolicLink(path: string): Q.Promise<boolean>

	declare export function lastModified(path: string): Q.Promise<Date>

	declare export function lastAccessed(path: string): Q.Promise<Date>

	declare export function split(path: string): string[]

	declare export function join(...paths: string[]): string

	declare export function join(paths: string[]): string

	declare export function resolve(...path: string[]): string

	declare export function resolve(paths: string[]): string

	declare export function normal(...path: string[]): string

	declare export function normal(paths: string[]): string

	declare export function absolute(path: string): string

	declare export function canonical(path: string): Q.Promise<string>

	declare export function readLink(path: string): Q.Promise<string>

	declare export function contains(parent: string, child: string): boolean

	declare export function relative(source: string, target: string): Q.Promise<string>

	declare export function relativeFromFile(source: string, target: string): string

	declare export function relativeFromDirectory(source: string, target: string): string

	declare export function isAbsolute(path: string): boolean

	declare export function isRelative(path: string): boolean

	declare export function isRoot(path: string): boolean

	declare export function root(path: string): string

	declare export function directory(path: string): string

	declare export function base(path: string, extension: string): string

	declare export function extension(path: string): string

	declare export function reroot(path: string): typeof QioFS

	declare export function toObject(path: string): {
		[path: string]: Buffer
	}

		
}

declare module 'npm$namespace$QioHTTP' {
		declare interface Request {
		url: string,
		path: string,
		scriptName: string,
		pathInfo: string,
		version: string[],
		method: string,
		scheme: string,
		host: string,
		port: number,
		remoteHost: string,
		remotePort: number,
		headers: Headers,
		agent: any,
		body: any,
		node: any
	}

	declare interface Response {
		status: number,
		headers: Headers,
		body: Qio.Reader,
		onclose: () => void,
		node: any
	}

	declare interface Headers {
		[name: string]: any
	}

	declare interface Body {
		
	}

	declare interface Application {
		(req: Request): Q.Promise<any>
	}

	declare export function request(request: Request): Q.Promise<Response>

	declare export function request(url: string): Q.Promise<Response>

	declare export function read(request: Request): Q.Promise<string>

	declare export function read(url: string): Q.Promise<string>

	declare export function normalizeRequest(request: Request): Request

	declare export function normalizeRequest(url: string): Request

	declare export function normalizeResponse(response: Response): Response

		
}

declare module 'npm$namespace$Qio' {
		declare interface ForEachCallback {
		(chunk: Buffer): Q.Promise<any>,
		(chunk: string): Q.Promise<any>
	}

	declare interface ForEach {
		forEach(callback: ForEachCallback): Q.Promise<void>
	}

	declare interface Reader {
		read(charset: string): Q.Promise<string>,
		read(): Q.Promise<Buffer>,
		close(): void,
		node: NodeJS.ReadableStream
	}

	declare interface Writer {
		write(content: string): void,
		write(content: Buffer): void,
		flush(): Q.Promise<void>,
		close(): void,
		destroy(): void,
		node: NodeJS.WritableStream
	}

	declare interface Stream {
		read(charset: string): Q.Promise<string>,
		read(): Q.Promise<Buffer>,
		write(content: string): void,
		write(content: Buffer): void,
		flush(): Q.Promise<void>,
		close(): void,
		destroy(): void,
		node: any
	}

	declare interface BufferReader {
		
	}

			
}

declare module 'q-io/http' {
					declare module.exports: undefined


}

declare module 'q-io/fs' {
					declare module.exports: undefined


}

declare module 'q-io/reader' {
					declare module.exports: undefined


}

declare module 'q-io/writer' {
					declare module.exports: undefined


}

declare module 'q-io/buffer-stream' {
					declare module.exports: undefined


}