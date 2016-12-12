import type { Process, Global } from 'npm$namespace$NodeJS'

declare module 'node' {
	declare type BufferEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "binary" | "hex";

	declare interface Error {
		stack?: string
	}

	declare interface ErrorConstructor {
		captureStackTrace(targetObject: Object, constructorOpt?: Function): void,
		stackTraceLimit: number
	}

	declare interface MapConstructor {
		
	}

	declare interface WeakMapConstructor {
		
	}

	declare interface SetConstructor {
		
	}

	declare interface WeakSetConstructor {
		
	}

	declare interface NodeRequireFunction {
		(id: string): any
	}

	declare interface NodeRequire {
		resolve(id: string): string,
		cache: any,
		extensions: any,
		main: NodeModule
	}

	declare interface NodeModule {
		exports: any,
		require: NodeRequireFunction,
		id: string,
		filename: string,
		loaded: boolean,
		parent: NodeModule,
		children: NodeModule[]
	}

	declare interface Buffer {
		
	}

	declare interface IterableIterator<T> {
		
	}

	declare interface NodeBuffer {
		write(string: string, offset?: number, length?: number, encoding?: string): number,
		toString(encoding?: string, start?: number, end?: number): string,
		toJSON(): {
		type: "Buffer",
		data: any[]
	},
		equals(otherBuffer: Buffer): boolean,
		compare(
		otherBuffer: Buffer, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number
	): number,
		copy(
		targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number
	): number,
		slice(start?: number, end?: number): Buffer,
		writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
		writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
		writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
		writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
		readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
		readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
		readIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
		readIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
		readUInt8(offset: number, noAssert?: boolean): number,
		readUInt16LE(offset: number, noAssert?: boolean): number,
		readUInt16BE(offset: number, noAssert?: boolean): number,
		readUInt32LE(offset: number, noAssert?: boolean): number,
		readUInt32BE(offset: number, noAssert?: boolean): number,
		readInt8(offset: number, noAssert?: boolean): number,
		readInt16LE(offset: number, noAssert?: boolean): number,
		readInt16BE(offset: number, noAssert?: boolean): number,
		readInt32LE(offset: number, noAssert?: boolean): number,
		readInt32BE(offset: number, noAssert?: boolean): number,
		readFloatLE(offset: number, noAssert?: boolean): number,
		readFloatBE(offset: number, noAssert?: boolean): number,
		readDoubleLE(offset: number, noAssert?: boolean): number,
		readDoubleBE(offset: number, noAssert?: boolean): number,
		swap16(): Buffer,
		swap32(): Buffer,
		swap64(): Buffer,
		writeUInt8(value: number, offset: number, noAssert?: boolean): number,
		writeUInt16LE(value: number, offset: number, noAssert?: boolean): number,
		writeUInt16BE(value: number, offset: number, noAssert?: boolean): number,
		writeUInt32LE(value: number, offset: number, noAssert?: boolean): number,
		writeUInt32BE(value: number, offset: number, noAssert?: boolean): number,
		writeInt8(value: number, offset: number, noAssert?: boolean): number,
		writeInt16LE(value: number, offset: number, noAssert?: boolean): number,
		writeInt16BE(value: number, offset: number, noAssert?: boolean): number,
		writeInt32LE(value: number, offset: number, noAssert?: boolean): number,
		writeInt32BE(value: number, offset: number, noAssert?: boolean): number,
		writeFloatLE(value: number, offset: number, noAssert?: boolean): number,
		writeFloatBE(value: number, offset: number, noAssert?: boolean): number,
		writeDoubleLE(value: number, offset: number, noAssert?: boolean): number,
		writeDoubleBE(value: number, offset: number, noAssert?: boolean): number,
		fill(value: any, offset?: number, end?: number): this,
		indexOf(
		value: string | number | Buffer, byteOffset?: number, encoding?: string
	): number,
		lastIndexOf(
		value: string | number | Buffer, byteOffset?: number, encoding?: string
	): number,
		entries(): IterableIterator<[number, number]>,
		includes(
		value: string | number | Buffer, byteOffset?: number, encoding?: string
	): boolean,
		keys(): IterableIterator<number>,
		values(): IterableIterator<number>
	}

	declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer

	declare function clearTimeout(timeoutId: NodeJS.Timer): void

	declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer

	declare function clearInterval(intervalId: NodeJS.Timer): void

	declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any

	declare function clearImmediate(immediateId: any): void

		
}

declare module 'npm$namespace$NodeJS' {
		declare export interface ErrnoException {
		errno?: number,
		code?: string,
		path?: string,
		syscall?: string,
		stack?: string
	}

	declare export interface ReadableStream {
		readable: boolean,
		read(size?: number): string | Buffer,
		setEncoding(encoding: string): void,
		pause(): ReadableStream,
		resume(): ReadableStream,
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T,
		unpipe<T>(destination?: T): void,
		unshift(chunk: string): void,
		unshift(chunk: Buffer): void,
		wrap(oldStream: ReadableStream): ReadableStream
	}

	declare export interface WritableStream {
		writable: boolean,
		write(buffer: Buffer | string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void
	}

	declare export interface ReadWriteStream {
		pause(): ReadWriteStream,
		resume(): ReadWriteStream
	}

	declare export interface Events {
		
	}

	declare export interface Domain {
		run(fn: Function): void,
		add(emitter: Events): void,
		remove(emitter: Events): void,
		bind(cb: (err: Error, data: any) => any): any,
		intercept(cb: (data: any) => any): any,
		dispose(): void,
		addListener(event: string, listener: Function): this,
		on(event: string, listener: Function): this,
		once(event: string, listener: Function): this,
		removeListener(event: string, listener: Function): this,
		removeAllListeners(event?: string): this
	}

	declare export interface MemoryUsage {
		rss: number,
		heapTotal: number,
		heapUsed: number
	}

	declare export interface ProcessVersions {
		http_parser: string,
		node: string,
		v8: string,
		ares: string,
		uv: string,
		zlib: string,
		modules: string,
		openssl: string
	}

	declare export interface Process {
		stdout: WritableStream,
		stderr: WritableStream,
		stdin: ReadableStream,
		argv: string[],
		argv0: string,
		execArgv: string[],
		execPath: string,
		abort(): void,
		chdir(directory: string): void,
		cwd(): string,
		env: any,
		exit(code?: number): void,
		exitCode: number,
		getgid(): number,
		setgid(id: number): void,
		setgid(id: string): void,
		getuid(): number,
		setuid(id: number): void,
		setuid(id: string): void,
		version: string,
		versions: ProcessVersions,
		config: {
		target_defaults: {
		cflags: any[],
		default_configuration: string,
		defines: string[],
		include_dirs: string[],
		libraries: string[]
	},
		variables: {
		clang: number,
		host_arch: string,
		node_install_npm: boolean,
		node_install_waf: boolean,
		node_prefix: string,
		node_shared_openssl: boolean,
		node_shared_v8: boolean,
		node_shared_zlib: boolean,
		node_use_dtrace: boolean,
		node_use_etw: boolean,
		node_use_openssl: boolean,
		target_arch: string,
		v8_no_strict_aliasing: number,
		v8_use_snapshot: boolean,
		visibility: string
	}
	},
		kill(pid: number, signal?: string | number): void,
		pid: number,
		title: string,
		arch: string,
		platform: string,
		mainModule?: NodeModule,
		memoryUsage(): MemoryUsage,
		nextTick(callback: Function, ...args: any[]): void,
		umask(mask?: number): number,
		uptime(): number,
		hrtime(time?: number[]): number[],
		domain: Domain,
		send(message: any, sendHandle?: any): void,
		disconnect(): void,
		connected: boolean
	}

	declare export interface Global {
		Array: typeof Array,
		ArrayBuffer: typeof ArrayBuffer,
		Boolean: typeof Boolean,
		Buffer: typeof Buffer,
		DataView: typeof DataView,
		Date: typeof Date,
		Error: typeof Error,
		EvalError: typeof EvalError,
		Float32Array: typeof Float32Array,
		Float64Array: typeof Float64Array,
		Function: typeof Function,
		GLOBAL: Global,
		Infinity: typeof Infinity,
		Int16Array: typeof Int16Array,
		Int32Array: typeof Int32Array,
		Int8Array: typeof Int8Array,
		Intl: typeof Intl,
		JSON: typeof JSON,
		Map: MapConstructor,
		Math: typeof Math,
		NaN: typeof NaN,
		Number: typeof Number,
		Object: typeof Object,
		Promise: Function,
		RangeError: typeof RangeError,
		ReferenceError: typeof ReferenceError,
		RegExp: typeof RegExp,
		Set: SetConstructor,
		String: typeof String,
		Symbol: Function,
		SyntaxError: typeof SyntaxError,
		TypeError: typeof TypeError,
		URIError: typeof URIError,
		Uint16Array: typeof Uint16Array,
		Uint32Array: typeof Uint32Array,
		Uint8Array: typeof Uint8Array,
		Uint8ClampedArray: Function,
		WeakMap: WeakMapConstructor,
		WeakSet: WeakSetConstructor,
		clearImmediate: (immediateId: any) => void,
		clearInterval: (intervalId: NodeJS.Timer) => void,
		clearTimeout: (timeoutId: NodeJS.Timer) => void,
		console: typeof console,
		decodeURI: typeof decodeURI,
		decodeURIComponent: typeof decodeURIComponent,
		encodeURI: typeof encodeURI,
		encodeURIComponent: typeof encodeURIComponent,
		escape: (str: string) => string,
		eval: typeof eval,
		global: Global,
		isFinite: typeof isFinite,
		isNaN: typeof isNaN,
		parseFloat: typeof parseFloat,
		parseInt: typeof parseInt,
		process: Process,
		root: Global,
		setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any,
		setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer,
		setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer,
		undefined: typeof undefined,
		unescape: (str: string) => string,
		gc: () => void,
		v8debug?: any
	}

	declare export interface Timer {
		ref(): void,
		unref(): void
	}

		declare export class EventEmitter  {
		addListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		on(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		once(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		removeListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		removeAllListeners(event?: string | NO PRINT IMPLEMENTED: SymbolKeyword): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string | NO PRINT IMPLEMENTED: SymbolKeyword): Function[];
		emit(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, ...args: any[]): boolean;
		listenerCount(type: string | NO PRINT IMPLEMENTED: SymbolKeyword): number;
		prependListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		prependOnceListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		eventNames(): (string | NO PRINT IMPLEMENTED: SymbolKeyword)[]
	}

	
}

declare module 'querystring' {
		declare export interface StringifyOptions {
		encodeURIComponent?: Function
	}

	declare export interface ParseOptions {
		maxKeys?: number,
		decodeURIComponent?: Function
	}

	declare export function stringify<T>(obj: T, sep?: string, eq?: string, options?: StringifyOptions): string

	declare export function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): any

	declare export function parse<T>(str: string, sep?: string, eq?: string, options?: ParseOptions): T

	declare export function escape(str: string): string

	declare export function unescape(str: string): string

		
}

declare module 'events' {
				declare export class EventEmitter extends NodeJS$EventEmitter {
		EventEmitter: EventEmitter;
		listenerCount(
		emitter: EventEmitter, event: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): number;
		defaultMaxListeners: number;
		addListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		on(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		once(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		prependListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		prependOnceListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		removeListener(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, listener: Function): this;
		removeAllListeners(event?: string | NO PRINT IMPLEMENTED: SymbolKeyword): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string | NO PRINT IMPLEMENTED: SymbolKeyword): Function[];
		emit(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, ...args: any[]): boolean;
		eventNames(): (string | NO PRINT IMPLEMENTED: SymbolKeyword)[];
		listenerCount(type: string | NO PRINT IMPLEMENTED: SymbolKeyword): number
	}

	
}

declare module 'http' {
		declare export interface RequestOptions {
		protocol?: string,
		host?: string,
		hostname?: string,
		family?: number,
		port?: number,
		localAddress?: string,
		socketPath?: string,
		method?: string,
		path?: string,
		headers?: {
		[key: string]: any
	},
		auth?: string,
		agent?: Agent | boolean
	}

	declare export interface Server {
		setTimeout(msecs: number, callback: Function): void,
		maxHeadersCount: number,
		timeout: number,
		listening: boolean
	}

	declare export interface ServerRequest {
		connection: net.Socket
	}

	declare export interface ServerResponse {
		write(buffer: Buffer): boolean,
		write(buffer: Buffer, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		write(str: string, encoding?: string, fd?: string): boolean,
		writeContinue(): void,
		writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void,
		writeHead(statusCode: number, headers?: any): void,
		statusCode: number,
		statusMessage: string,
		headersSent: boolean,
		setHeader(name: string, value: string | string[]): void,
		setTimeout(msecs: number, callback: Function): ServerResponse,
		sendDate: boolean,
		getHeader(name: string): string,
		removeHeader(name: string): void,
		write(chunk: any, encoding?: string): any,
		addTrailers(headers: any): void,
		finished: boolean,
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		end(data?: any, encoding?: string): void
	}

	declare export interface ClientRequest {
		write(buffer: Buffer): boolean,
		write(buffer: Buffer, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		write(str: string, encoding?: string, fd?: string): boolean,
		write(chunk: any, encoding?: string): void,
		abort(): void,
		setTimeout(timeout: number, callback?: Function): void,
		setNoDelay(noDelay?: boolean): void,
		setSocketKeepAlive(enable?: boolean, initialDelay?: number): void,
		setHeader(name: string, value: string | string[]): void,
		getHeader(name: string): string,
		removeHeader(name: string): void,
		addTrailers(headers: any): void,
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		end(data?: any, encoding?: string): void
	}

	declare export interface IncomingMessage {
		httpVersion: string,
		httpVersionMajor: number,
		httpVersionMinor: number,
		connection: net.Socket,
		headers: any,
		rawHeaders: string[],
		trailers: any,
		rawTrailers: any,
		setTimeout(msecs: number, callback: Function): NodeJS.Timer,
		method?: string,
		url?: string,
		statusCode?: number,
		statusMessage?: string,
		socket: net.Socket,
		destroy(error?: Error): void
	}

	declare export interface ClientResponse {
		
	}

	declare export interface AgentOptions {
		keepAlive?: boolean,
		keepAliveMsecs?: number,
		maxSockets?: number,
		maxFreeSockets?: number
	}

	declare export function createServer(
		requestListener?: (request: IncomingMessage, response: ServerResponse) => void
	): Server

	declare export function createClient(port?: number, host?: string): any

	declare export function request(
		options: RequestOptions, callback?: (res: IncomingMessage) => void
	): ClientRequest

	declare export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest

	declare export class Agent  {
		maxSockets: number;
		sockets: any;
		requests: any;
		constructor(opts?: AgentOptions): this;
		destroy(): void
	}

	
}

declare module 'cluster' {
		declare export interface ClusterSettings {
		execArgv?: string[],
		exec?: string,
		args?: string[],
		silent?: boolean,
		stdio?: any[],
		uid?: number,
		gid?: number
	}

	declare export interface ClusterSetupMasterSettings {
		exec?: string,
		args?: string[],
		silent?: boolean,
		stdio?: any[]
	}

	declare export interface Address {
		address: string,
		port: number,
		addressType: number | "udp4" | "udp6"
	}

	declare export interface Cluster {
		Worker: Worker,
		disconnect(callback?: Function): void,
		fork(env?: any): Worker,
		isMaster: boolean,
		isWorker: boolean,
		settings: ClusterSettings,
		setupMaster(settings?: ClusterSetupMasterSettings): void,
		worker: Worker,
		workers: {
		[index: string]: Worker
	},
		addListener(event: string, listener: Function): this,
		addListener(event: "disconnect", listener: (worker: Worker) => void): this,
		addListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): this,
		addListener(event: "fork", listener: (worker: Worker) => void): this,
		addListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
		addListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): this,
		addListener(event: "online", listener: (worker: Worker) => void): this,
		addListener(event: "setup", listener: (settings: any) => void): this,
		emit(event: string, listener: Function): boolean,
		emit(event: "disconnect", listener: (worker: Worker) => void): boolean,
		emit(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): boolean,
		emit(event: "fork", listener: (worker: Worker) => void): boolean,
		emit(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): boolean,
		emit(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): boolean,
		emit(event: "online", listener: (worker: Worker) => void): boolean,
		emit(event: "setup", listener: (settings: any) => void): boolean,
		on(event: string, listener: Function): this,
		on(event: "disconnect", listener: (worker: Worker) => void): this,
		on(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): this,
		on(event: "fork", listener: (worker: Worker) => void): this,
		on(event: "listening", listener: (worker: Worker, address: Address) => void): this,
		on(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): this,
		on(event: "online", listener: (worker: Worker) => void): this,
		on(event: "setup", listener: (settings: any) => void): this,
		once(event: string, listener: Function): this,
		once(event: "disconnect", listener: (worker: Worker) => void): this,
		once(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): this,
		once(event: "fork", listener: (worker: Worker) => void): this,
		once(event: "listening", listener: (worker: Worker, address: Address) => void): this,
		once(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): this,
		once(event: "online", listener: (worker: Worker) => void): this,
		once(event: "setup", listener: (settings: any) => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "disconnect", listener: (worker: Worker) => void): this,
		prependListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): this,
		prependListener(event: "fork", listener: (worker: Worker) => void): this,
		prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
		prependListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): this,
		prependListener(event: "online", listener: (worker: Worker) => void): this,
		prependListener(event: "setup", listener: (settings: any) => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): this,
		prependOnceListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): this,
		prependOnceListener(event: "fork", listener: (worker: Worker) => void): this,
		prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
		prependOnceListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): this,
		prependOnceListener(event: "online", listener: (worker: Worker) => void): this,
		prependOnceListener(event: "setup", listener: (settings: any) => void): this
	}

	declare export function disconnect(callback?: Function): void

	declare export function fork(env?: any): Worker

	declare export function setupMaster(settings?: ClusterSetupMasterSettings): void

	declare export function addListener(event: string, listener: Function): Cluster

	declare export function addListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare export function addListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): Cluster

	declare export function addListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare export function addListener(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): Cluster

	declare export function addListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): Cluster

	declare export function addListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare export function addListener(event: "setup", listener: (settings: any) => void): Cluster

	declare export function emit(event: string, listener: Function): boolean

	declare export function emit(event: "disconnect", listener: (worker: Worker) => void): boolean

	declare export function emit(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): boolean

	declare export function emit(event: "fork", listener: (worker: Worker) => void): boolean

	declare export function emit(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): boolean

	declare export function emit(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): boolean

	declare export function emit(event: "online", listener: (worker: Worker) => void): boolean

	declare export function emit(event: "setup", listener: (settings: any) => void): boolean

	declare export function on(event: string, listener: Function): Cluster

	declare export function on(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare export function on(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): Cluster

	declare export function on(event: "fork", listener: (worker: Worker) => void): Cluster

	declare export function on(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): Cluster

	declare export function on(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): Cluster

	declare export function on(event: "online", listener: (worker: Worker) => void): Cluster

	declare export function on(event: "setup", listener: (settings: any) => void): Cluster

	declare export function once(event: string, listener: Function): Cluster

	declare export function once(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare export function once(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): Cluster

	declare export function once(event: "fork", listener: (worker: Worker) => void): Cluster

	declare export function once(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): Cluster

	declare export function once(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): Cluster

	declare export function once(event: "online", listener: (worker: Worker) => void): Cluster

	declare export function once(event: "setup", listener: (settings: any) => void): Cluster

	declare export function removeListener(event: string, listener: Function): Cluster

	declare export function removeAllListeners(event?: string): Cluster

	declare export function setMaxListeners(n: number): Cluster

	declare export function getMaxListeners(): number

	declare export function listeners(event: string): Function[]

	declare export function listenerCount(type: string): number

	declare export function prependListener(event: string, listener: Function): Cluster

	declare export function prependListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare export function prependListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): Cluster

	declare export function prependListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare export function prependListener(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): Cluster

	declare export function prependListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): Cluster

	declare export function prependListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare export function prependListener(event: "setup", listener: (settings: any) => void): Cluster

	declare export function prependOnceListener(event: string, listener: Function): Cluster

	declare export function prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare export function prependOnceListener(
		event: "exit", listener: (worker: Worker, code: number, signal: string) => void
	): Cluster

	declare export function prependOnceListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare export function prependOnceListener(
		event: "listening", listener: (worker: Worker, address: Address) => void
	): Cluster

	declare export function prependOnceListener(
		event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
	): Cluster

	declare export function prependOnceListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare export function prependOnceListener(event: "setup", listener: (settings: any) => void): Cluster

	declare export function eventNames(): string[]

	declare export class Worker extends events$EventEmitter {
		id: string;
		process: child.ChildProcess;
		suicide: boolean;
		send(message: any, sendHandle?: any): boolean;
		kill(signal?: string): void;
		destroy(signal?: string): void;
		disconnect(): void;
		isConnected(): boolean;
		isDead(): boolean;
		exitedAfterDisconnect: boolean;
		addListener(event: string, listener: Function): this;
		addListener(event: "disconnect", listener: () => void): this;
		addListener(event: "error", listener: (code: number, signal: string) => void): this;
		addListener(event: "exit", listener: (code: number, signal: string) => void): this;
		addListener(event: "listening", listener: (address: Address) => void): this;
		addListener(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): this;
		addListener(event: "online", listener: () => void): this;
		emit(event: string, listener: Function): boolean;
		emit(event: "disconnect", listener: () => void): boolean;
		emit(event: "error", listener: (code: number, signal: string) => void): boolean;
		emit(event: "exit", listener: (code: number, signal: string) => void): boolean;
		emit(event: "listening", listener: (address: Address) => void): boolean;
		emit(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): boolean;
		emit(event: "online", listener: () => void): boolean;
		on(event: string, listener: Function): this;
		on(event: "disconnect", listener: () => void): this;
		on(event: "error", listener: (code: number, signal: string) => void): this;
		on(event: "exit", listener: (code: number, signal: string) => void): this;
		on(event: "listening", listener: (address: Address) => void): this;
		on(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): this;
		on(event: "online", listener: () => void): this;
		once(event: string, listener: Function): this;
		once(event: "disconnect", listener: () => void): this;
		once(event: "error", listener: (code: number, signal: string) => void): this;
		once(event: "exit", listener: (code: number, signal: string) => void): this;
		once(event: "listening", listener: (address: Address) => void): this;
		once(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): this;
		once(event: "online", listener: () => void): this;
		prependListener(event: string, listener: Function): this;
		prependListener(event: "disconnect", listener: () => void): this;
		prependListener(event: "error", listener: (code: number, signal: string) => void): this;
		prependListener(event: "exit", listener: (code: number, signal: string) => void): this;
		prependListener(event: "listening", listener: (address: Address) => void): this;
		prependListener(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): this;
		prependListener(event: "online", listener: () => void): this;
		prependOnceListener(event: string, listener: Function): this;
		prependOnceListener(event: "disconnect", listener: () => void): this;
		prependOnceListener(event: "error", listener: (code: number, signal: string) => void): this;
		prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this;
		prependOnceListener(event: "listening", listener: (address: Address) => void): this;
		prependOnceListener(
		event: "message", listener: (message: any, handle: net.Socket | net.Server) => void
	): this;
		prependOnceListener(event: "online", listener: () => void): this
	}

	
}

declare module 'zlib' {
		declare export interface ZlibOptions {
		chunkSize?: number,
		windowBits?: number,
		level?: number,
		memLevel?: number,
		strategy?: number,
		dictionary?: any
	}

	declare export interface Gzip {
		
	}

	declare export interface Gunzip {
		
	}

	declare export interface Deflate {
		
	}

	declare export interface Inflate {
		
	}

	declare export interface DeflateRaw {
		
	}

	declare export interface InflateRaw {
		
	}

	declare export interface Unzip {
		
	}

	declare export function createGzip(options?: ZlibOptions): Gzip

	declare export function createGunzip(options?: ZlibOptions): Gunzip

	declare export function createDeflate(options?: ZlibOptions): Deflate

	declare export function createInflate(options?: ZlibOptions): Inflate

	declare export function createDeflateRaw(options?: ZlibOptions): DeflateRaw

	declare export function createInflateRaw(options?: ZlibOptions): InflateRaw

	declare export function createUnzip(options?: ZlibOptions): Unzip

	declare export function deflate(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function deflateSync(buf: Buffer, options?: ZlibOptions): any

	declare export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any

	declare export function gzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function gzipSync(buf: Buffer, options?: ZlibOptions): any

	declare export function gunzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function gunzipSync(buf: Buffer, options?: ZlibOptions): any

	declare export function inflate(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function inflateSync(buf: Buffer, options?: ZlibOptions): any

	declare export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any

	declare export function unzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function unzipSync(buf: Buffer, options?: ZlibOptions): any

		
}

declare module 'os' {
		declare export interface CpuInfo {
		model: string,
		speed: number,
		times: {
		user: number,
		nice: number,
		sys: number,
		idle: number,
		irq: number
	}
	}

	declare export interface NetworkInterfaceInfo {
		address: string,
		netmask: string,
		family: string,
		mac: string,
		internal: boolean
	}

	declare export function hostname(): string

	declare export function loadavg(): number[]

	declare export function uptime(): number

	declare export function freemem(): number

	declare export function totalmem(): number

	declare export function cpus(): CpuInfo[]

	declare export function type(): string

	declare export function release(): string

	declare export function networkInterfaces(): {
		[index: string]: NetworkInterfaceInfo[]
	}

	declare export function homedir(): string

	declare export function userInfo(
		options?: {
		encoding: string
	}
	): {
		username: string,
		uid: number,
		gid: number,
		shell: any,
		homedir: string
	}

	declare export function arch(): string

	declare export function platform(): string

	declare export function tmpdir(): string

	declare export function endianness(): "BE" | "LE"

		
}

declare module 'https' {
		declare export interface ServerOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		crl?: any,
		ciphers?: string,
		honorCipherOrder?: boolean,
		requestCert?: boolean,
		rejectUnauthorized?: boolean,
		NPNProtocols?: any,
		SNICallback?: (servername: string, cb: (err: Error, ctx: tls.SecureContext) => any) => any
	}

	declare export interface RequestOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		ciphers?: string,
		rejectUnauthorized?: boolean,
		secureProtocol?: string
	}

	declare export interface Agent {
		
	}

	declare export interface AgentOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		ciphers?: string,
		rejectUnauthorized?: boolean,
		secureProtocol?: string,
		maxCachedSessions?: number
	}

	declare export interface Server {
		
	}

	declare export function createServer(options: ServerOptions, requestListener?: Function): Server

	declare export function request(
		options: RequestOptions, callback?: (res: http.IncomingMessage) => void
	): http.ClientRequest

	declare export function get(
		options: RequestOptions, callback?: (res: http.IncomingMessage) => void
	): http.ClientRequest

		
}

declare module 'punycode' {
		declare interface ucs2 {
		decode(string: string): number[],
		encode(codePoints: number[]): string
	}

	declare export function decode(string: string): string

	declare export function encode(string: string): string

	declare export function toUnicode(domain: string): string

	declare export function toASCII(domain: string): string

		
}

declare module 'repl' {
		declare export interface ReplOptions {
		prompt?: string,
		input?: NodeJS.ReadableStream,
		output?: NodeJS.WritableStream,
		terminal?: boolean,
		eval?: Function,
		useColors?: boolean,
		useGlobal?: boolean,
		ignoreUndefined?: boolean,
		writer?: Function,
		completer?: Function,
		replMode?: any,
		breakEvalOnSigint?: any
	}

	declare export interface REPLServer {
		defineCommand(keyword: string, cmd: Function | {
		help: string,
		action: Function
	}): void,
		displayPrompt(preserveCursor?: boolean): void,
		addListener(event: string, listener: Function): this,
		addListener(event: "exit", listener: () => void): this,
		addListener(event: "reset", listener: Function): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "exit"): boolean,
		emit(event: "reset", context: any): boolean,
		on(event: string, listener: Function): this,
		on(event: "exit", listener: () => void): this,
		on(event: "reset", listener: Function): this,
		once(event: string, listener: Function): this,
		once(event: "exit", listener: () => void): this,
		once(event: "reset", listener: Function): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "exit", listener: () => void): this,
		prependListener(event: "reset", listener: Function): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "exit", listener: () => void): this,
		prependOnceListener(event: "reset", listener: Function): this
	}

	declare export function start(options: ReplOptions): REPLServer

		
}

declare module 'readline' {
		declare export interface Key {
		sequence?: string,
		name?: string,
		ctrl?: boolean,
		meta?: boolean,
		shift?: boolean
	}

	declare export interface ReadLine {
		setPrompt(prompt: string): void,
		prompt(preserveCursor?: boolean): void,
		question(query: string, callback: (answer: string) => void): void,
		pause(): ReadLine,
		resume(): ReadLine,
		close(): void,
		write(data: string | Buffer, key?: Key): void,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: () => void): this,
		addListener(event: "line", listener: (input: any) => void): this,
		addListener(event: "pause", listener: () => void): this,
		addListener(event: "resume", listener: () => void): this,
		addListener(event: "SIGCONT", listener: () => void): this,
		addListener(event: "SIGINT", listener: () => void): this,
		addListener(event: "SIGTSTP", listener: () => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close"): boolean,
		emit(event: "line", input: any): boolean,
		emit(event: "pause"): boolean,
		emit(event: "resume"): boolean,
		emit(event: "SIGCONT"): boolean,
		emit(event: "SIGINT"): boolean,
		emit(event: "SIGTSTP"): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: () => void): this,
		on(event: "line", listener: (input: any) => void): this,
		on(event: "pause", listener: () => void): this,
		on(event: "resume", listener: () => void): this,
		on(event: "SIGCONT", listener: () => void): this,
		on(event: "SIGINT", listener: () => void): this,
		on(event: "SIGTSTP", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: () => void): this,
		once(event: "line", listener: (input: any) => void): this,
		once(event: "pause", listener: () => void): this,
		once(event: "resume", listener: () => void): this,
		once(event: "SIGCONT", listener: () => void): this,
		once(event: "SIGINT", listener: () => void): this,
		once(event: "SIGTSTP", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: () => void): this,
		prependListener(event: "line", listener: (input: any) => void): this,
		prependListener(event: "pause", listener: () => void): this,
		prependListener(event: "resume", listener: () => void): this,
		prependListener(event: "SIGCONT", listener: () => void): this,
		prependListener(event: "SIGINT", listener: () => void): this,
		prependListener(event: "SIGTSTP", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: () => void): this,
		prependOnceListener(event: "line", listener: (input: any) => void): this,
		prependOnceListener(event: "pause", listener: () => void): this,
		prependOnceListener(event: "resume", listener: () => void): this,
		prependOnceListener(event: "SIGCONT", listener: () => void): this,
		prependOnceListener(event: "SIGINT", listener: () => void): this,
		prependOnceListener(event: "SIGTSTP", listener: () => void): this
	}

	declare export interface Completer {
		(line: string): CompleterResult,
		(line: string, callback: (err: any, result: CompleterResult) => void): any
	}

	declare export interface CompleterResult {
		completions: string[],
		line: string
	}

	declare export interface ReadLineOptions {
		input: NodeJS.ReadableStream,
		output?: NodeJS.WritableStream,
		completer?: Completer,
		terminal?: boolean,
		historySize?: number
	}

	declare export function createInterface(
		input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean
	): ReadLine

	declare export function createInterface(options: ReadLineOptions): ReadLine

	declare export function cursorTo(stream: NodeJS.WritableStream, x: number, y: number): void

	declare export function moveCursor(stream: NodeJS.WritableStream, dx: number | string, dy: number | string): void

	declare export function clearLine(stream: NodeJS.WritableStream, dir: number): void

	declare export function clearScreenDown(stream: NodeJS.WritableStream): void

		
}

declare module 'vm' {
		declare export interface Context {
		
	}

	declare export interface ScriptOptions {
		filename?: string,
		lineOffset?: number,
		columnOffset?: number,
		displayErrors?: boolean,
		timeout?: number,
		cachedData?: Buffer,
		produceCachedData?: boolean
	}

	declare export interface RunningScriptOptions {
		filename?: string,
		lineOffset?: number,
		columnOffset?: number,
		displayErrors?: boolean,
		timeout?: number
	}

	declare export function createContext(sandbox?: Context): Context

	declare export function isContext(sandbox: Context): boolean

	declare export function runInContext(
		code: string, contextifiedSandbox: Context, options?: RunningScriptOptions
	): any

	declare export function runInDebugContext(code: string): any

	declare export function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions): any

	declare export function runInThisContext(code: string, options?: RunningScriptOptions): any

	declare export class Script  {
		constructor(code: string, options?: ScriptOptions): this;
		runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
		runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
		runInThisContext(options?: RunningScriptOptions): any
	}

	
}

declare module 'child_process' {
		declare export interface ChildProcess {
		stdin: stream.Writable,
		stdout: stream.Readable,
		stderr: stream.Readable,
		stdio: [stream.Writable, stream.Readable, stream.Readable],
		pid: number,
		kill(signal?: string): void,
		send(message: any, sendHandle?: any): boolean,
		connected: boolean,
		disconnect(): void,
		unref(): void,
		ref(): void,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: (code: number, signal: string) => void): this,
		addListener(event: "disconnet", listener: () => void): this,
		addListener(event: "error", listener: (err: Error) => void): this,
		addListener(event: "exit", listener: (code: number, signal: string) => void): this,
		addListener(
		event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void
	): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close", code: number, signal: string): boolean,
		emit(event: "disconnet"): boolean,
		emit(event: "error", err: Error): boolean,
		emit(event: "exit", code: number, signal: string): boolean,
		emit(event: "message", message: any, sendHandle: net.Socket | net.Server): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: (code: number, signal: string) => void): this,
		on(event: "disconnet", listener: () => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		on(event: "exit", listener: (code: number, signal: string) => void): this,
		on(
		event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void
	): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: (code: number, signal: string) => void): this,
		once(event: "disconnet", listener: () => void): this,
		once(event: "error", listener: (err: Error) => void): this,
		once(event: "exit", listener: (code: number, signal: string) => void): this,
		once(
		event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void
	): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: (code: number, signal: string) => void): this,
		prependListener(event: "disconnet", listener: () => void): this,
		prependListener(event: "error", listener: (err: Error) => void): this,
		prependListener(event: "exit", listener: (code: number, signal: string) => void): this,
		prependListener(
		event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void
	): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: (code: number, signal: string) => void): this,
		prependOnceListener(event: "disconnet", listener: () => void): this,
		prependOnceListener(event: "error", listener: (err: Error) => void): this,
		prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this,
		prependOnceListener(
		event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void
	): this
	}

	declare export interface SpawnOptions {
		cwd?: string,
		env?: any,
		stdio?: any,
		detached?: boolean,
		uid?: number,
		gid?: number,
		shell?: boolean | string
	}

	declare export interface ExecOptions {
		cwd?: string,
		env?: any,
		shell?: string,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string,
		uid?: number,
		gid?: number
	}

	declare export interface ExecOptionsWithStringEncoding {
		encoding: BufferEncoding
	}

	declare export interface ExecOptionsWithBufferEncoding {
		encoding: string
	}

	declare export interface ExecFileOptions {
		cwd?: string,
		env?: any,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string,
		uid?: number,
		gid?: number
	}

	declare export interface ExecFileOptionsWithStringEncoding {
		encoding: BufferEncoding
	}

	declare export interface ExecFileOptionsWithBufferEncoding {
		encoding: string
	}

	declare export interface ForkOptions {
		cwd?: string,
		env?: any,
		execPath?: string,
		execArgv?: string[],
		silent?: boolean,
		uid?: number,
		gid?: number
	}

	declare export interface SpawnSyncOptions {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		uid?: number,
		gid?: number,
		timeout?: number,
		killSignal?: string,
		maxBuffer?: number,
		encoding?: string,
		shell?: boolean | string
	}

	declare export interface SpawnSyncOptionsWithStringEncoding {
		encoding: BufferEncoding
	}

	declare export interface SpawnSyncOptionsWithBufferEncoding {
		encoding: string
	}

	declare export interface SpawnSyncReturns<T> {
		pid: number,
		output: string[],
		stdout: T,
		stderr: T,
		status: number,
		signal: string,
		error: Error
	}

	declare export interface ExecSyncOptions {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		shell?: string,
		uid?: number,
		gid?: number,
		timeout?: number,
		killSignal?: string,
		maxBuffer?: number,
		encoding?: string
	}

	declare export interface ExecSyncOptionsWithStringEncoding {
		encoding: BufferEncoding
	}

	declare export interface ExecSyncOptionsWithBufferEncoding {
		encoding: string
	}

	declare export interface ExecFileSyncOptions {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		uid?: number,
		gid?: number,
		timeout?: number,
		killSignal?: string,
		maxBuffer?: number,
		encoding?: string
	}

	declare export interface ExecFileSyncOptionsWithStringEncoding {
		encoding: BufferEncoding
	}

	declare export interface ExecFileSyncOptionsWithBufferEncoding {
		encoding: string
	}

	declare export function spawn(command: string, args?: string[], options?: SpawnOptions): ChildProcess

	declare export function exec(
		command: string, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function exec(
		command: string, options: ExecOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function exec(
		command: string, options: ExecOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function exec(
		command: string, options: ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, options?: ExecFileOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, options?: ExecFileOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(
		file: string, options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], options?: ExecFileOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], options?: ExecFileOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void
	): ChildProcess

	declare export function fork(modulePath: string, args?: string[], options?: ForkOptions): ChildProcess

	declare export function spawnSync(command: string): SpawnSyncReturns<Buffer>

	declare export function spawnSync(
		command: string, options?: SpawnSyncOptionsWithStringEncoding
	): SpawnSyncReturns<string>

	declare export function spawnSync(
		command: string, options?: SpawnSyncOptionsWithBufferEncoding
	): SpawnSyncReturns<Buffer>

	declare export function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>

	declare export function spawnSync(
		command: string, args?: string[], options?: SpawnSyncOptionsWithStringEncoding
	): SpawnSyncReturns<string>

	declare export function spawnSync(
		command: string, args?: string[], options?: SpawnSyncOptionsWithBufferEncoding
	): SpawnSyncReturns<Buffer>

	declare export function spawnSync(
		command: string, args?: string[], options?: SpawnSyncOptions
	): SpawnSyncReturns<Buffer>

	declare export function execSync(command: string): Buffer

	declare export function execSync(command: string, options?: ExecSyncOptionsWithStringEncoding): string

	declare export function execSync(command: string, options?: ExecSyncOptionsWithBufferEncoding): Buffer

	declare export function execSync(command: string, options?: ExecSyncOptions): Buffer

	declare export function execFileSync(command: string): Buffer

	declare export function execFileSync(command: string, options?: ExecFileSyncOptionsWithStringEncoding): string

	declare export function execFileSync(command: string, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer

	declare export function execFileSync(command: string, options?: ExecFileSyncOptions): Buffer

	declare export function execFileSync(
		command: string, args?: string[], options?: ExecFileSyncOptionsWithStringEncoding
	): string

	declare export function execFileSync(
		command: string, args?: string[], options?: ExecFileSyncOptionsWithBufferEncoding
	): Buffer

	declare export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptions): Buffer

		
}

declare module 'url' {
		declare export interface Url {
		href?: string,
		protocol?: string,
		auth?: string,
		hostname?: string,
		port?: string,
		host?: string,
		pathname?: string,
		search?: string,
		query?: string | any,
		slashes?: boolean,
		hash?: string,
		path?: string
	}

	declare export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url

	declare export function format(url: Url): string

	declare export function resolve(from: string, to: string): string

		
}

declare module 'dns' {
		declare export interface MxRecord {
		exchange: string,
		priority: number
	}

	declare export function lookup(
		domain: string, family: number, callback: (err: Error, address: string, family: number) => void
	): string

	declare export function lookup(
		domain: string, callback: (err: Error, address: string, family: number) => void
	): string

	declare export function resolve(
		domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void
	): string[]

	declare export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveMx(
		domain: string, callback: (err: Error, addresses: MxRecord[]) => void
	): string[]

	declare export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[]

	declare export function setServers(servers: string[]): void

		
}

declare module 'net' {
		declare export interface Socket {
		write(buffer: Buffer): boolean,
		write(buffer: Buffer, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		write(str: string, encoding?: string, fd?: string): boolean,
		connect(port: number, host?: string, connectionListener?: Function): void,
		connect(path: string, connectionListener?: Function): void,
		bufferSize: number,
		setEncoding(encoding?: string): void,
		write(data: any, encoding?: string, callback?: Function): void,
		destroy(): void,
		pause(): Socket,
		resume(): Socket,
		setTimeout(timeout: number, callback?: Function): void,
		setNoDelay(noDelay?: boolean): void,
		setKeepAlive(enable?: boolean, initialDelay?: number): void,
		address(): {
		port: number,
		family: string,
		address: string
	},
		unref(): void,
		ref(): void,
		remoteAddress: string,
		remoteFamily: string,
		remotePort: number,
		localAddress: string,
		localPort: number,
		bytesRead: number,
		bytesWritten: number,
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		end(data?: any, encoding?: string): void,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: (had_error: boolean) => void): this,
		addListener(event: "connect", listener: () => void): this,
		addListener(event: "data", listener: (data: Buffer) => void): this,
		addListener(event: "drain", listener: () => void): this,
		addListener(event: "end", listener: () => void): this,
		addListener(event: "error", listener: (err: Error) => void): this,
		addListener(
		event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void
	): this,
		addListener(event: "timeout", listener: () => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close", had_error: boolean): boolean,
		emit(event: "connect"): boolean,
		emit(event: "data", data: Buffer): boolean,
		emit(event: "drain"): boolean,
		emit(event: "end"): boolean,
		emit(event: "error", err: Error): boolean,
		emit(
		event: "lookup", err: Error, address: string, family: string | number, host: string
	): boolean,
		emit(event: "timeout"): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: (had_error: boolean) => void): this,
		on(event: "connect", listener: () => void): this,
		on(event: "data", listener: (data: Buffer) => void): this,
		on(event: "drain", listener: () => void): this,
		on(event: "end", listener: () => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		on(
		event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void
	): this,
		on(event: "timeout", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: (had_error: boolean) => void): this,
		once(event: "connect", listener: () => void): this,
		once(event: "data", listener: (data: Buffer) => void): this,
		once(event: "drain", listener: () => void): this,
		once(event: "end", listener: () => void): this,
		once(event: "error", listener: (err: Error) => void): this,
		once(
		event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void
	): this,
		once(event: "timeout", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: (had_error: boolean) => void): this,
		prependListener(event: "connect", listener: () => void): this,
		prependListener(event: "data", listener: (data: Buffer) => void): this,
		prependListener(event: "drain", listener: () => void): this,
		prependListener(event: "end", listener: () => void): this,
		prependListener(event: "error", listener: (err: Error) => void): this,
		prependListener(
		event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void
	): this,
		prependListener(event: "timeout", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: (had_error: boolean) => void): this,
		prependOnceListener(event: "connect", listener: () => void): this,
		prependOnceListener(event: "data", listener: (data: Buffer) => void): this,
		prependOnceListener(event: "drain", listener: () => void): this,
		prependOnceListener(event: "end", listener: () => void): this,
		prependOnceListener(event: "error", listener: (err: Error) => void): this,
		prependOnceListener(
		event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void
	): this,
		prependOnceListener(event: "timeout", listener: () => void): this
	}

	declare export interface ListenOptions {
		port?: number,
		host?: string,
		backlog?: number,
		path?: string,
		exclusive?: boolean
	}

	declare export interface Server {
		listen(
		port: number, hostname?: string, backlog?: number, listeningListener?: Function
	): Server,
		listen(port: number, hostname?: string, listeningListener?: Function): Server,
		listen(port: number, backlog?: number, listeningListener?: Function): Server,
		listen(port: number, listeningListener?: Function): Server,
		listen(path: string, backlog?: number, listeningListener?: Function): Server,
		listen(path: string, listeningListener?: Function): Server,
		listen(options: ListenOptions, listeningListener?: Function): Server,
		listen(handle: any, backlog?: number, listeningListener?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		close(callback?: Function): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		getConnections(cb: (error: Error, count: number) => void): void,
		ref(): Server,
		unref(): Server,
		maxConnections: number,
		connections: number,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: () => void): this,
		addListener(event: "connection", listener: (socket: Socket) => void): this,
		addListener(event: "error", listener: (err: Error) => void): this,
		addListener(event: "listening", listener: () => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close"): boolean,
		emit(event: "connection", socket: Socket): boolean,
		emit(event: "error", err: Error): boolean,
		emit(event: "listening"): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: () => void): this,
		on(event: "connection", listener: (socket: Socket) => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		on(event: "listening", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: () => void): this,
		once(event: "connection", listener: (socket: Socket) => void): this,
		once(event: "error", listener: (err: Error) => void): this,
		once(event: "listening", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: () => void): this,
		prependListener(event: "connection", listener: (socket: Socket) => void): this,
		prependListener(event: "error", listener: (err: Error) => void): this,
		prependListener(event: "listening", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: () => void): this,
		prependOnceListener(event: "connection", listener: (socket: Socket) => void): this,
		prependOnceListener(event: "error", listener: (err: Error) => void): this,
		prependOnceListener(event: "listening", listener: () => void): this
	}

	declare export function createServer(connectionListener?: (socket: Socket) => void): Server

	declare export function createServer(
		options?: {
		allowHalfOpen?: boolean
	}, connectionListener?: (socket: Socket) => void
	): Server

	declare export function connect(
		options: {
		port: number,
		host?: string,
		localAddress?: string,
		localPort?: string,
		family?: number,
		allowHalfOpen?: boolean
	}, connectionListener?: Function
	): Socket

	declare export function connect(port: number, host?: string, connectionListener?: Function): Socket

	declare export function connect(path: string, connectionListener?: Function): Socket

	declare export function createConnection(
		options: {
		port: number,
		host?: string,
		localAddress?: string,
		localPort?: string,
		family?: number,
		allowHalfOpen?: boolean
	}, connectionListener?: Function
	): Socket

	declare export function createConnection(port: number, host?: string, connectionListener?: Function): Socket

	declare export function createConnection(path: string, connectionListener?: Function): Socket

	declare export function isIP(input: string): number

	declare export function isIPv4(input: string): boolean

	declare export function isIPv6(input: string): boolean

		
}

declare module 'dgram' {
		declare interface RemoteInfo {
		address: string,
		family: string,
		port: number
	}

	declare interface AddressInfo {
		address: string,
		family: string,
		port: number
	}

	declare interface BindOptions {
		port: number,
		address?: string,
		exclusive?: boolean
	}

	declare interface SocketOptions {
		type: "udp4" | "udp6",
		reuseAddr?: boolean
	}

	declare export interface Socket {
		send(
		msg: Buffer | String | any[], port: number, address: string, callback?: (error: Error, bytes: number) => void
	): void,
		send(
		msg: Buffer | String | any[], offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void
	): void,
		bind(port?: number, address?: string, callback?: () => void): void,
		bind(options: BindOptions, callback?: Function): void,
		close(callback?: any): void,
		address(): AddressInfo,
		setBroadcast(flag: boolean): void,
		setTTL(ttl: number): void,
		setMulticastTTL(ttl: number): void,
		setMulticastLoopback(flag: boolean): void,
		addMembership(multicastAddress: string, multicastInterface?: string): void,
		dropMembership(multicastAddress: string, multicastInterface?: string): void,
		ref(): void,
		unref(): void,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: () => void): this,
		addListener(event: "error", listener: (err: Error) => void): this,
		addListener(event: "listening", listener: () => void): this,
		addListener(event: "message", listener: (msg: string, rinfo: AddressInfo) => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close"): boolean,
		emit(event: "error", err: Error): boolean,
		emit(event: "listening"): boolean,
		emit(event: "message", msg: string, rinfo: AddressInfo): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: () => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		on(event: "listening", listener: () => void): this,
		on(event: "message", listener: (msg: string, rinfo: AddressInfo) => void): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: () => void): this,
		once(event: "error", listener: (err: Error) => void): this,
		once(event: "listening", listener: () => void): this,
		once(event: "message", listener: (msg: string, rinfo: AddressInfo) => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: () => void): this,
		prependListener(event: "error", listener: (err: Error) => void): this,
		prependListener(event: "listening", listener: () => void): this,
		prependListener(event: "message", listener: (msg: string, rinfo: AddressInfo) => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: () => void): this,
		prependOnceListener(event: "error", listener: (err: Error) => void): this,
		prependOnceListener(event: "listening", listener: () => void): this,
		prependOnceListener(event: "message", listener: (msg: string, rinfo: AddressInfo) => void): this
	}

	declare export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket

	declare export function createSocket(
		options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void
	): Socket

		
}

declare module 'fs' {
		declare interface Stats {
		isFile(): boolean,
		isDirectory(): boolean,
		isBlockDevice(): boolean,
		isCharacterDevice(): boolean,
		isSymbolicLink(): boolean,
		isFIFO(): boolean,
		isSocket(): boolean,
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
		ctime: Date,
		birthtime: Date
	}

	declare interface FSWatcher {
		close(): void,
		addListener(event: string, listener: Function): this,
		addListener(
		event: "change", listener: (eventType: string, filename: string | Buffer) => void
	): this,
		addListener(event: "error", listener: (code: number, signal: string) => void): this,
		on(event: string, listener: Function): this,
		on(
		event: "change", listener: (eventType: string, filename: string | Buffer) => void
	): this,
		on(event: "error", listener: (code: number, signal: string) => void): this,
		once(event: string, listener: Function): this,
		once(
		event: "change", listener: (eventType: string, filename: string | Buffer) => void
	): this,
		once(event: "error", listener: (code: number, signal: string) => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(
		event: "change", listener: (eventType: string, filename: string | Buffer) => void
	): this,
		prependListener(event: "error", listener: (code: number, signal: string) => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(
		event: "change", listener: (eventType: string, filename: string | Buffer) => void
	): this,
		prependOnceListener(event: "error", listener: (code: number, signal: string) => void): this
	}

	declare export interface ReadStream {
		close(): void,
		destroy(): void,
		bytesRead: number,
		path: string | Buffer,
		addListener(event: string, listener: Function): this,
		addListener(event: "open", listener: (fd: number) => void): this,
		addListener(event: "close", listener: () => void): this,
		on(event: string, listener: Function): this,
		on(event: "open", listener: (fd: number) => void): this,
		on(event: "close", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "open", listener: (fd: number) => void): this,
		once(event: "close", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "open", listener: (fd: number) => void): this,
		prependListener(event: "close", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "open", listener: (fd: number) => void): this,
		prependOnceListener(event: "close", listener: () => void): this
	}

	declare export interface WriteStream {
		close(): void,
		bytesWritten: number,
		path: string | Buffer,
		addListener(event: string, listener: Function): this,
		addListener(event: "open", listener: (fd: number) => void): this,
		addListener(event: "close", listener: () => void): this,
		on(event: string, listener: Function): this,
		on(event: "open", listener: (fd: number) => void): this,
		on(event: "close", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "open", listener: (fd: number) => void): this,
		once(event: "close", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "open", listener: (fd: number) => void): this,
		prependListener(event: "close", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "open", listener: (fd: number) => void): this,
		prependOnceListener(event: "close", listener: () => void): this
	}

	declare export function rename(
		oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function renameSync(oldPath: string, newPath: string): void

	declare export function truncate(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function truncate(
		path: string | Buffer, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function truncateSync(path: string | Buffer, len?: number): void

	declare export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function ftruncate(
		fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function ftruncateSync(fd: number, len?: number): void

	declare export function chown(
		path: string | Buffer, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chownSync(path: string | Buffer, uid: number, gid: number): void

	declare export function fchown(
		fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchownSync(fd: number, uid: number, gid: number): void

	declare export function lchown(
		path: string | Buffer, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchownSync(path: string | Buffer, uid: number, gid: number): void

	declare export function chmod(
		path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmod(
		path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmodSync(path: string | Buffer, mode: number): void

	declare export function chmodSync(path: string | Buffer, mode: string): void

	declare export function fchmod(
		fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchmod(
		fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchmodSync(fd: number, mode: number): void

	declare export function fchmodSync(fd: number, mode: string): void

	declare export function lchmod(
		path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchmod(
		path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchmodSync(path: string | Buffer, mode: number): void

	declare export function lchmodSync(path: string | Buffer, mode: string): void

	declare export function stat(
		path: string | Buffer, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function lstat(
		path: string | Buffer, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void

	declare export function statSync(path: string | Buffer): Stats

	declare export function lstatSync(path: string | Buffer): Stats

	declare export function fstatSync(fd: number): Stats

	declare export function link(
		srcpath: string | Buffer, dstpath: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function linkSync(srcpath: string | Buffer, dstpath: string | Buffer): void

	declare export function symlink(
		srcpath: string | Buffer, dstpath: string | Buffer, type?: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function symlinkSync(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): void

	declare export function readlink(
		path: string | Buffer, callback?: (err: NodeJS.ErrnoException, linkString: string) => any
	): void

	declare export function readlinkSync(path: string | Buffer): string

	declare export function realpath(
		path: string | Buffer, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpath(
		path: string | Buffer, cache: {
		[path: string]: string
	}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpathSync(path: string | Buffer, cache?: {
		[path: string]: string
	}): string

	declare export function unlink(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function unlinkSync(path: string | Buffer): void

	declare export function rmdir(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function rmdirSync(path: string | Buffer): void

	declare export function mkdir(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function mkdir(
		path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdir(
		path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdirSync(path: string | Buffer, mode?: number): void

	declare export function mkdirSync(path: string | Buffer, mode?: string): void

	declare export function mkdtemp(
		prefix: string, callback?: (err: NodeJS.ErrnoException, folder: string) => void
	): void

	declare export function mkdtempSync(prefix: string): string

	declare export function readdir(
		path: string | Buffer, callback?: (err: NodeJS.ErrnoException, files: string[]) => void
	): void

	declare export function readdirSync(path: string | Buffer): string[]

	declare export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function closeSync(fd: number): void

	declare export function open(
		path: string | Buffer, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void
	): void

	declare export function open(
		path: string | Buffer, flags: string | number, mode: number, callback: (err: NodeJS.ErrnoException, fd: number) => void
	): void

	declare export function openSync(path: string | Buffer, flags: string | number, mode?: number): number

	declare export function utimes(
		path: string | Buffer, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimes(
		path: string | Buffer, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimesSync(path: string | Buffer, atime: number, mtime: number): void

	declare export function utimesSync(path: string | Buffer, atime: Date, mtime: Date): void

	declare export function futimes(
		fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function futimes(
		fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function futimesSync(fd: number, atime: number, mtime: number): void

	declare export function futimesSync(fd: number, atime: Date, mtime: Date): void

	declare export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function fsyncSync(fd: number): void

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void
	): void

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void
	): void

	declare export function write(
		fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function write(
		fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function write(
		fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function writeSync(
		fd: number, buffer: Buffer, offset: number, length: number, position?: number
	): number

	declare export function writeSync(fd: number, data: any, position?: number, enconding?: string): number

	declare export function read(
		fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void
	): void

	declare export function readSync(
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): number

	declare export function readFile(
		filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void
	): void

	declare export function readFile(
		filename: string, options: {
		encoding: string,
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: string) => void
	): void

	declare export function readFile(
		filename: string, options: {
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	): void

	declare export function readFile(
		filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	): void

	declare export function readFileSync(filename: string, encoding: string): string

	declare export function readFileSync(filename: string, options: {
		encoding: string,
		flag?: string
	}): string

	declare export function readFileSync(filename: string, options?: {
		flag?: string
	}): Buffer

	declare export function writeFile(
		filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function writeFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: number,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function writeFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: string,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function writeFileSync(
		filename: string, data: any, options?: {
		encoding?: string,
		mode?: number,
		flag?: string
	}
	): void

	declare export function writeFileSync(
		filename: string, data: any, options?: {
		encoding?: string,
		mode?: string,
		flag?: string
	}
	): void

	declare export function appendFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: number,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function appendFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: string,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function appendFile(
		filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function appendFileSync(
		filename: string, data: any, options?: {
		encoding?: string,
		mode?: number,
		flag?: string
	}
	): void

	declare export function appendFileSync(
		filename: string, data: any, options?: {
		encoding?: string,
		mode?: string,
		flag?: string
	}
	): void

	declare export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void

	declare export function watchFile(
		filename: string, options: {
		persistent?: boolean,
		interval?: number
	}, listener: (curr: Stats, prev: Stats) => void
	): void

	declare export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void

	declare export function watch(
		filename: string, listener?: (event: string, filename: string) => any
	): FSWatcher

	declare export function watch(
		filename: string, encoding: string, listener?: (event: string, filename: string | Buffer) => any
	): FSWatcher

	declare export function watch(
		filename: string, options: {
		persistent?: boolean,
		recursive?: boolean,
		encoding?: string
	}, listener?: (event: string, filename: string | Buffer) => any
	): FSWatcher

	declare export function exists(path: string | Buffer, callback?: (exists: boolean) => void): void

	declare export function existsSync(path: string | Buffer): boolean

	declare export function access(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void

	declare export function access(
		path: string | Buffer, mode: number, callback: (err: NodeJS.ErrnoException) => void
	): void

	declare export function accessSync(path: string | Buffer, mode?: number): void

	declare export function createReadStream(
		path: string | Buffer, options?: {
		flags?: string,
		encoding?: string,
		fd?: number,
		mode?: number,
		autoClose?: boolean,
		start?: number,
		end?: number
	}
	): ReadStream

	declare export function createWriteStream(
		path: string | Buffer, options?: {
		flags?: string,
		encoding?: string,
		fd?: number,
		mode?: number,
		autoClose?: boolean,
		start?: number
	}
	): WriteStream

	declare export function fdatasync(fd: number, callback: Function): void

	declare export function fdatasyncSync(fd: number): void

		
}

declare module 'path' {
		declare export interface ParsedPath {
		root: string,
		dir: string,
		base: string,
		ext: string,
		name: string
	}

	declare export function normalize(p: string): string

	declare export function join(...paths: any[]): string

	declare export function join(...paths: string[]): string

	declare export function resolve(...pathSegments: any[]): string

	declare export function isAbsolute(path: string): boolean

	declare export function relative(from: string, to: string): string

	declare export function dirname(p: string): string

	declare export function basename(p: string, ext?: string): string

	declare export function extname(p: string): string

	declare export function parse(pathString: string): ParsedPath

	declare export function format(pathObject: ParsedPath): string

		
}

declare module 'posix' {
			declare export function normalize(p: string): string

	declare export function join(...paths: any[]): string

	declare export function resolve(...pathSegments: any[]): string

	declare export function isAbsolute(p: string): boolean

	declare export function relative(from: string, to: string): string

	declare export function dirname(p: string): string

	declare export function basename(p: string, ext?: string): string

	declare export function extname(p: string): string

	declare export function parse(p: string): ParsedPath

	declare export function format(pP: ParsedPath): string

		
}

declare module 'win32' {
			declare export function normalize(p: string): string

	declare export function join(...paths: any[]): string

	declare export function resolve(...pathSegments: any[]): string

	declare export function isAbsolute(p: string): boolean

	declare export function relative(from: string, to: string): string

	declare export function dirname(p: string): string

	declare export function basename(p: string, ext?: string): string

	declare export function extname(p: string): string

	declare export function parse(p: string): ParsedPath

	declare export function format(pP: ParsedPath): string

		
}

declare module 'string_decoder' {
		declare export interface NodeStringDecoder {
		write(buffer: Buffer): string,
		end(buffer?: Buffer): string
	}

			
}

declare module 'tls' {
		declare export interface Certificate {
		C: string,
		ST: string,
		L: string,
		O: string,
		OU: string,
		CN: string
	}

	declare export interface CipherNameAndProtocol {
		name: string,
		version: string
	}

	declare export interface TlsOptions {
		host?: string,
		port?: number,
		pfx?: string | Buffer[],
		key?: string | string[] | Buffer | any[],
		passphrase?: string,
		cert?: string | string[] | Buffer | Buffer[],
		ca?: string | string[] | Buffer | Buffer[],
		crl?: string | string[],
		ciphers?: string,
		honorCipherOrder?: boolean,
		requestCert?: boolean,
		rejectUnauthorized?: boolean,
		NPNProtocols?: string[] | Buffer,
		SNICallback?: (servername: string, cb: (err: Error, ctx: SecureContext) => any) => any,
		ecdhCurve?: string,
		dhparam?: string | Buffer,
		handshakeTimeout?: number,
		ALPNProtocols?: string[] | Buffer,
		sessionTimeout?: number,
		ticketKeys?: any,
		sessionIdContext?: string,
		secureProtocol?: string
	}

	declare export interface ConnectionOptions {
		host?: string,
		port?: number,
		socket?: net.Socket,
		pfx?: string | Buffer,
		key?: string | string[] | Buffer | Buffer[],
		passphrase?: string,
		cert?: string | string[] | Buffer | Buffer[],
		ca?: string | Buffer | (string | Buffer)[],
		rejectUnauthorized?: boolean,
		NPNProtocols?: (string | Buffer)[],
		servername?: string,
		path?: string,
		ALPNProtocols?: (string | Buffer)[],
		checkServerIdentity?: (servername: string, cert: string | Buffer | (string | Buffer)[]) => any,
		secureProtocol?: string,
		secureContext?: Object,
		session?: Buffer,
		minDHSize?: number
	}

	declare export interface Server {
		close(): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		addContext(
		hostName: string, credentials: {
		key: string,
		cert: string,
		ca: string
	}
	): void,
		maxConnections: number,
		connections: number,
		addListener(event: string, listener: Function): this,
		addListener(
		event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void
	): this,
		addListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	) => void
	): this,
		addListener(
		event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void
	): this,
		addListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		addListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "tlsClientError", err: Error, tlsSocket: TLSSocket): boolean,
		emit(
		event: "newSession", sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	): boolean,
		emit(
		event: "OCSPRequest", certificate: Buffer, issuer: Buffer, callback: Function
	): boolean,
		emit(
		event: "resumeSession", sessionId: any, callback: (err: Error, sessionData: any) => void
	): boolean,
		emit(event: "secureConnection", tlsSocket: TLSSocket): boolean,
		on(event: string, listener: Function): this,
		on(
		event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void
	): this,
		on(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	) => void
	): this,
		on(
		event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void
	): this,
		on(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		on(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this,
		once(event: string, listener: Function): this,
		once(
		event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void
	): this,
		once(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	) => void
	): this,
		once(
		event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void
	): this,
		once(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		once(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(
		event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void
	): this,
		prependListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	) => void
	): this,
		prependListener(
		event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void
	): this,
		prependListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		prependListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(
		event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void
	): this,
		prependOnceListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void
	) => void
	): this,
		prependOnceListener(
		event: "OCSPRequest", listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void
	): this,
		prependOnceListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		prependOnceListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this
	}

	declare export interface ClearTextStream {
		authorized: boolean,
		authorizationError: Error,
		getPeerCertificate(): any,
		getCipher: {
		name: string,
		version: string
	},
		address: {
		port: number,
		family: string,
		address: string
	},
		remoteAddress: string,
		remotePort: number
	}

	declare export interface SecurePair {
		encrypted: any,
		cleartext: any
	}

	declare export interface SecureContextOptions {
		pfx?: string | Buffer,
		key?: string | Buffer,
		passphrase?: string,
		cert?: string | Buffer,
		ca?: string | Buffer,
		crl?: string | string[],
		ciphers?: string,
		honorCipherOrder?: boolean
	}

	declare export interface SecureContext {
		context: any
	}

	declare export function createServer(
		options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) => void
	): Server

	declare export function connect(
		options: ConnectionOptions, secureConnectionListener?: () => void
	): ClearTextStream

	declare export function connect(
		port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () => void
	): ClearTextStream

	declare export function connect(
		port: number, options?: ConnectionOptions, secureConnectListener?: () => void
	): ClearTextStream

	declare export function createSecurePair(
		credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean
	): SecurePair

	declare export function createSecureContext(details: SecureContextOptions): SecureContext

	declare export class TLSSocket extends stream$Duplex {
		constructor(socket: net.Socket, options?: {
		secureContext?: SecureContext,
		isServer?: boolean,
		server?: net.Server,
		requestCert?: boolean,
		rejectUnauthorized?: boolean,
		NPNProtocols?: string[] | Buffer,
		ALPNProtocols?: string[] | Buffer,
		SNICallback?: Function,
		session?: Buffer,
		requestOCSP?: boolean
	}): this;
		address(): {
		port: number,
		family: string,
		address: string
	};
		authorized: boolean;
		authorizationError: Error;
		encrypted: boolean;
		getCipher(): CipherNameAndProtocol;
		getPeerCertificate(
		detailed?: boolean
	): {
		subject: Certificate,
		issuerInfo: Certificate,
		issuer: Certificate,
		raw: any,
		valid_from: string,
		valid_to: string,
		fingerprint: string,
		serialNumber: string
	};
		getSession(): any;
		getTLSTicket(): any;
		localAddress: string;
		localPort: string;
		remoteAddress: string;
		remoteFamily: string;
		remotePort: number;
		renegotiate(options: TlsOptions, callback: (err: Error) => any): any;
		setMaxSendFragment(size: number): boolean;
		addListener(event: string, listener: Function): this;
		addListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
		addListener(event: "secureConnect", listener: () => void): this;
		emit(event: string, ...args: any[]): boolean;
		emit(event: "OCSPResponse", response: Buffer): boolean;
		emit(event: "secureConnect"): boolean;
		on(event: string, listener: Function): this;
		on(event: "OCSPResponse", listener: (response: Buffer) => void): this;
		on(event: "secureConnect", listener: () => void): this;
		once(event: string, listener: Function): this;
		once(event: "OCSPResponse", listener: (response: Buffer) => void): this;
		once(event: "secureConnect", listener: () => void): this;
		prependListener(event: string, listener: Function): this;
		prependListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
		prependListener(event: "secureConnect", listener: () => void): this;
		prependOnceListener(event: string, listener: Function): this;
		prependOnceListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
		prependOnceListener(event: "secureConnect", listener: () => void): this
	}

	
}

declare module 'crypto' {
	declare type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";

	declare type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";

	declare type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";

	declare type HexBase64BinaryEncoding = "binary" | "base64" | "hex";

	declare type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

	declare export interface Certificate {
		exportChallenge(spkac: string | Buffer): Buffer,
		exportPublicKey(spkac: string | Buffer): Buffer,
		verifySpkac(spkac: Buffer): boolean
	}

	declare export interface CredentialDetails {
		pfx: string,
		key: string,
		passphrase: string,
		cert: string,
		ca: string | string[],
		crl: string | string[],
		ciphers: string
	}

	declare export interface Credentials {
		context?: any
	}

	declare export interface Hash {
		update(data: string | Buffer): Hash,
		update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hash,
		digest(): Buffer,
		digest(encoding: HexBase64Latin1Encoding): string
	}

	declare export interface Hmac {
		update(data: string | Buffer): Hmac,
		update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hmac,
		digest(): Buffer,
		digest(encoding: HexBase64Latin1Encoding): string
	}

	declare export interface Cipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer,
		update(
		data: Buffer, input_encoding: any, output_encoding: HexBase64BinaryEncoding
	): string,
		update(
		data: string, input_encoding: Utf8AsciiBinaryEncoding, output_encoding: HexBase64BinaryEncoding
	): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding?: boolean): void,
		getAuthTag(): Buffer,
		setAAD(buffer: Buffer): void
	}

	declare export interface Decipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer,
		update(
		data: Buffer, input_encoding: any, output_encoding: Utf8AsciiBinaryEncoding
	): string,
		update(
		data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding
	): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding?: boolean): void,
		setAuthTag(tag: Buffer): void,
		setAAD(buffer: Buffer): void
	}

	declare export interface Signer {
		update(data: string | Buffer): Signer,
		update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Signer,
		sign(private_key: string | {
		key: string,
		passphrase: string
	}): Buffer,
		sign(
		private_key: string | {
		key: string,
		passphrase: string
	}, output_format: HexBase64Latin1Encoding
	): string
	}

	declare export interface Verify {
		update(data: string | Buffer): Verify,
		update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Verify,
		verify(object: string, signature: Buffer): boolean,
		verify(
		object: string, signature: string, signature_format: HexBase64Latin1Encoding
	): boolean
	}

	declare export interface DiffieHellman {
		generateKeys(): Buffer,
		generateKeys(encoding: HexBase64Latin1Encoding): string,
		computeSecret(other_public_key: Buffer): Buffer,
		computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer,
		computeSecret(
		other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding
	): string,
		getPrime(): Buffer,
		getPrime(encoding: HexBase64Latin1Encoding): string,
		getGenerator(): Buffer,
		getGenerator(encoding: HexBase64Latin1Encoding): string,
		getPublicKey(): Buffer,
		getPublicKey(encoding: HexBase64Latin1Encoding): string,
		getPrivateKey(): Buffer,
		getPrivateKey(encoding: HexBase64Latin1Encoding): string,
		setPublicKey(public_key: Buffer): void,
		setPublicKey(public_key: string, encoding: string): void,
		setPrivateKey(private_key: Buffer): void,
		setPrivateKey(private_key: string, encoding: string): void,
		verifyError: number
	}

	declare export interface RsaPublicKey {
		key: string,
		padding?: number
	}

	declare export interface RsaPrivateKey {
		key: string,
		passphrase?: string,
		padding?: number
	}

	declare export interface ECDH {
		generateKeys(): Buffer,
		generateKeys(encoding: HexBase64Latin1Encoding): string,
		generateKeys(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string,
		computeSecret(other_public_key: Buffer): Buffer,
		computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer,
		computeSecret(
		other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding
	): string,
		getPrivateKey(): Buffer,
		getPrivateKey(encoding: HexBase64Latin1Encoding): string,
		getPublicKey(): Buffer,
		getPublicKey(encoding: HexBase64Latin1Encoding): string,
		getPublicKey(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string,
		setPrivateKey(private_key: Buffer): void,
		setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void
	}

	declare export function createCredentials(details: CredentialDetails): Credentials

	declare export function createHash(algorithm: string): Hash

	declare export function createHmac(algorithm: string, key: string | Buffer): Hmac

	declare export function createCipher(algorithm: string, password: any): Cipher

	declare export function createCipheriv(algorithm: string, key: any, iv: any): Cipher

	declare export function createDecipher(algorithm: string, password: any): Decipher

	declare export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher

	declare export function createSign(algorithm: string): Signer

	declare export function createVerify(algorith: string): Verify

	declare export function createDiffieHellman(prime_length: number, generator?: number): DiffieHellman

	declare export function createDiffieHellman(prime: Buffer): DiffieHellman

	declare export function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman

	declare export function createDiffieHellman(
		prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Buffer
	): DiffieHellman

	declare export function createDiffieHellman(
		prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding
	): DiffieHellman

	declare export function getDiffieHellman(group_name: string): DiffieHellman

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any
	): void

	declare export function pbkdf2Sync(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string
	): Buffer

	declare export function randomBytes(size: number): Buffer

	declare export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

	declare export function pseudoRandomBytes(size: number): Buffer

	declare export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

	declare export function publicEncrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer

	declare export function privateDecrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer

	declare export function privateEncrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer

	declare export function publicDecrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer

	declare export function getCiphers(): string[]

	declare export function getCurves(): string[]

	declare export function getHashes(): string[]

	declare export function createECDH(curve_name: string): ECDH

	declare export function timingSafeEqual(a: Buffer, b: Buffer): boolean

		
}

declare module 'stream' {
				declare class internal extends events$EventEmitter {
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T
	}

	declare module.exports: undefined


}

declare module 'internal' {
		declare export interface ReadableOptions {
		highWaterMark?: number,
		encoding?: string,
		objectMode?: boolean,
		read?: (size?: number) => any
	}

	declare export interface WritableOptions {
		highWaterMark?: number,
		decodeStrings?: boolean,
		objectMode?: boolean,
		write?: (chunk: string | Buffer, encoding: string, callback: Function) => any,
		writev?: (
		chunks: {
		chunk: string | Buffer,
		encoding: string
	}[], callback: Function
	) => any
	}

	declare export interface DuplexOptions {
		allowHalfOpen?: boolean,
		readableObjectMode?: boolean,
		writableObjectMode?: boolean
	}

	declare export interface TransformOptions {
		transform?: (chunk: string | Buffer, encoding: string, callback: Function) => any,
		flush?: (callback: Function) => any
	}

	declare export function fail(actual: any, expected: any, message: string, operator: string): void

	declare export function ok(value: any, message?: string): void

	declare export function equal(actual: any, expected: any, message?: string): void

	declare export function notEqual(actual: any, expected: any, message?: string): void

	declare export function deepEqual(actual: any, expected: any, message?: string): void

	declare export function notDeepEqual(acutal: any, expected: any, message?: string): void

	declare export function strictEqual(actual: any, expected: any, message?: string): void

	declare export function notStrictEqual(actual: any, expected: any, message?: string): void

	declare export function deepStrictEqual(actual: any, expected: any, message?: string): void

	declare export function notDeepStrictEqual(actual: any, expected: any, message?: string): void

	declare export function ifError(value: any): void

	declare export class Stream extends internal {
		
	}

	declare export class Readable extends events$EventEmitter, NodeJS$ReadableStream {
		readable: boolean;
		constructor(opts?: ReadableOptions): this;
		_read(size: number): void;
		read(size?: number): any;
		setEncoding(encoding: string): void;
		pause(): Readable;
		resume(): Readable;
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T;
		unpipe<T>(destination?: T): void;
		unshift(chunk: any): void;
		wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
		push(chunk: any, encoding?: string): boolean;
		addListener(event: string, listener: Function): this;
		addListener(event: string, listener: Function): this;
		addListener(event: "close", listener: () => void): this;
		addListener(event: "data", listener: (chunk: Buffer | string) => void): this;
		addListener(event: "end", listener: () => void): this;
		addListener(event: "readable", listener: () => void): this;
		addListener(event: "error", listener: (err: Error) => void): this;
		emit(event: string, ...args: any[]): boolean;
		emit(event: "close"): boolean;
		emit(event: "data", chunk: Buffer | string): boolean;
		emit(event: "end"): boolean;
		emit(event: "readable"): boolean;
		emit(event: "error", err: Error): boolean;
		on(event: string, listener: Function): this;
		on(event: "close", listener: () => void): this;
		on(event: "data", listener: (chunk: Buffer | string) => void): this;
		on(event: "end", listener: () => void): this;
		on(event: "readable", listener: () => void): this;
		on(event: "error", listener: (err: Error) => void): this;
		once(event: string, listener: Function): this;
		once(event: "close", listener: () => void): this;
		once(event: "data", listener: (chunk: Buffer | string) => void): this;
		once(event: "end", listener: () => void): this;
		once(event: "readable", listener: () => void): this;
		once(event: "error", listener: (err: Error) => void): this;
		prependListener(event: string, listener: Function): this;
		prependListener(event: "close", listener: () => void): this;
		prependListener(event: "data", listener: (chunk: Buffer | string) => void): this;
		prependListener(event: "end", listener: () => void): this;
		prependListener(event: "readable", listener: () => void): this;
		prependListener(event: "error", listener: (err: Error) => void): this;
		prependOnceListener(event: string, listener: Function): this;
		prependOnceListener(event: "close", listener: () => void): this;
		prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this;
		prependOnceListener(event: "end", listener: () => void): this;
		prependOnceListener(event: "readable", listener: () => void): this;
		prependOnceListener(event: "error", listener: (err: Error) => void): this;
		removeListener(event: string, listener: Function): this;
		removeListener(event: "close", listener: () => void): this;
		removeListener(event: "data", listener: (chunk: Buffer | string) => void): this;
		removeListener(event: "end", listener: () => void): this;
		removeListener(event: "readable", listener: () => void): this;
		removeListener(event: "error", listener: (err: Error) => void): this
	}

	declare export class Writable extends events$EventEmitter, NodeJS$WritableStream {
		writable: boolean;
		constructor(opts?: WritableOptions): this;
		_write(chunk: any, encoding: string, callback: Function): void;
		write(chunk: any, cb?: Function): boolean;
		write(chunk: any, encoding?: string, cb?: Function): boolean;
		end(): void;
		end(chunk: any, cb?: Function): void;
		end(chunk: any, encoding?: string, cb?: Function): void;
		addListener(event: string, listener: Function): this;
		addListener(event: "close", listener: () => void): this;
		addListener(event: "drain", listener: () => void): this;
		addListener(event: "error", listener: (err: Error) => void): this;
		addListener(event: "finish", listener: () => void): this;
		addListener(event: "pipe", listener: (src: Readable) => void): this;
		addListener(event: "unpipe", listener: (src: Readable) => void): this;
		emit(event: string, ...args: any[]): boolean;
		emit(event: "close"): boolean;
		emit(event: "drain", chunk: Buffer | string): boolean;
		emit(event: "error", err: Error): boolean;
		emit(event: "finish"): boolean;
		emit(event: "pipe", src: Readable): boolean;
		emit(event: "unpipe", src: Readable): boolean;
		on(event: string, listener: Function): this;
		on(event: "close", listener: () => void): this;
		on(event: "drain", listener: () => void): this;
		on(event: "error", listener: (err: Error) => void): this;
		on(event: "finish", listener: () => void): this;
		on(event: "pipe", listener: (src: Readable) => void): this;
		on(event: "unpipe", listener: (src: Readable) => void): this;
		once(event: string, listener: Function): this;
		once(event: "close", listener: () => void): this;
		once(event: "drain", listener: () => void): this;
		once(event: "error", listener: (err: Error) => void): this;
		once(event: "finish", listener: () => void): this;
		once(event: "pipe", listener: (src: Readable) => void): this;
		once(event: "unpipe", listener: (src: Readable) => void): this;
		prependListener(event: string, listener: Function): this;
		prependListener(event: "close", listener: () => void): this;
		prependListener(event: "drain", listener: () => void): this;
		prependListener(event: "error", listener: (err: Error) => void): this;
		prependListener(event: "finish", listener: () => void): this;
		prependListener(event: "pipe", listener: (src: Readable) => void): this;
		prependListener(event: "unpipe", listener: (src: Readable) => void): this;
		prependOnceListener(event: string, listener: Function): this;
		prependOnceListener(event: "close", listener: () => void): this;
		prependOnceListener(event: "drain", listener: () => void): this;
		prependOnceListener(event: "error", listener: (err: Error) => void): this;
		prependOnceListener(event: "finish", listener: () => void): this;
		prependOnceListener(event: "pipe", listener: (src: Readable) => void): this;
		prependOnceListener(event: "unpipe", listener: (src: Readable) => void): this;
		removeListener(event: string, listener: Function): this;
		removeListener(event: "close", listener: () => void): this;
		removeListener(event: "drain", listener: () => void): this;
		removeListener(event: "error", listener: (err: Error) => void): this;
		removeListener(event: "finish", listener: () => void): this;
		removeListener(event: "pipe", listener: (src: Readable) => void): this;
		removeListener(event: "unpipe", listener: (src: Readable) => void): this
	}

	declare export class Duplex extends Readable, NodeJS$ReadWriteStream {
		pause(): Duplex;
		resume(): Duplex;
		writable: boolean;
		constructor(opts?: DuplexOptions): this;
		_write(chunk: any, encoding: string, callback: Function): void;
		write(chunk: any, cb?: Function): boolean;
		write(chunk: any, encoding?: string, cb?: Function): boolean;
		end(): void;
		end(chunk: any, cb?: Function): void;
		end(chunk: any, encoding?: string, cb?: Function): void
	}

	declare export class Transform extends events$EventEmitter, NodeJS$ReadWriteStream {
		readable: boolean;
		writable: boolean;
		constructor(opts?: TransformOptions): this;
		_transform(chunk: any, encoding: string, callback: Function): void;
		_flush(callback: Function): void;
		read(size?: number): any;
		setEncoding(encoding: string): void;
		pause(): Transform;
		resume(): Transform;
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T;
		unpipe<T>(destination?: T): void;
		unshift(chunk: any): void;
		wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
		push(chunk: any, encoding?: string): boolean;
		write(chunk: any, cb?: Function): boolean;
		write(chunk: any, encoding?: string, cb?: Function): boolean;
		end(): void;
		end(chunk: any, cb?: Function): void;
		end(chunk: any, encoding?: string, cb?: Function): void
	}

	declare export class PassThrough extends Transform {
		
	}

	declare export class AssertionError extends Error {
		name: string;
		message: string;
		actual: any;
		expected: any;
		operator: string;
		generatedMessage: boolean;
		constructor(options?: {
		message?: string,
		actual?: any,
		expected?: any,
		operator?: string,
		stackStartFunction?: Function
	}): this
	}

	
}

declare module 'util' {
		declare export interface InspectOptions {
		showHidden?: boolean,
		depth?: number,
		colors?: boolean,
		customInspect?: boolean
	}

	declare export function format(format: any, ...param: any[]): string

	declare export function debug(string: string): void

	declare export function error(...param: any[]): void

	declare export function puts(...param: any[]): void

	declare export function print(...param: any[]): void

	declare export function log(string: string): void

	declare export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string

	declare export function inspect(object: any, options: InspectOptions): string

	declare export function isArray(object: any): boolean

	declare export function isRegExp(object: any): boolean

	declare export function isDate(object: any): boolean

	declare export function isError(object: any): boolean

	declare export function inherits(constructor: any, superConstructor: any): void

	declare export function debuglog(key: string): (msg: string, ...param: any[]) => void

	declare export function isBoolean(object: any): boolean

	declare export function isBuffer(object: any): boolean

	declare export function isFunction(object: any): boolean

	declare export function isNull(object: any): boolean

	declare export function isNullOrUndefined(object: any): boolean

	declare export function isNumber(object: any): boolean

	declare export function isObject(object: any): boolean

	declare export function isPrimitive(object: any): boolean

	declare export function isString(object: any): boolean

	declare export function isSymbol(object: any): boolean

	declare export function isUndefined(object: any): boolean

	declare export function deprecate(fn: Function, message: string): Function

		
}

declare module 'assert' {
			declare function internal(value: any, message?: string): void

		declare module.exports: undefined


}

declare module 'tty' {
		declare export interface ReadStream {
		isRaw: boolean,
		setRawMode(mode: boolean): void,
		isTTY: boolean
	}

	declare export interface WriteStream {
		columns: number,
		rows: number,
		isTTY: boolean
	}

	declare export function isatty(fd: number): boolean

		
}

declare module 'domain' {
			declare export function create(): Domain

	declare export class Domain extends events$EventEmitter, NodeJS$Domain {
		run(fn: Function): void;
		add(emitter: events.EventEmitter): void;
		remove(emitter: events.EventEmitter): void;
		bind(cb: (err: Error, data: any) => any): any;
		intercept(cb: (data: any) => any): any;
		dispose(): void;
		members: any[];
		enter(): void;
		exit(): void
	}

	
}

declare module 'process' {
					declare module.exports: undefined


}

declare module 'v8' {
		declare interface HeapSpaceInfo {
		space_name: string,
		space_size: number,
		space_used_size: number,
		space_available_size: number,
		physical_space_size: number
	}

	declare export function getHeapStatistics(
		
	): {
		total_heap_size: number,
		total_heap_size_executable: number,
		total_physical_size: number,
		total_avaialble_size: number,
		used_heap_size: number,
		heap_size_limit: number
	}

	declare export function getHeapSpaceStatistics(): HeapSpaceInfo[]

	declare export function setFlagsFromString(flags: string): void

		
}

declare module 'timers' {
			declare export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer

	declare export function clearTimeout(timeoutId: NodeJS.Timer): void

	declare export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer

	declare export function clearInterval(intervalId: NodeJS.Timer): void

	declare export function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any

	declare export function clearImmediate(immediateId: any): void

		
}

declare module 'console' {
					declare module.exports: undefined


}