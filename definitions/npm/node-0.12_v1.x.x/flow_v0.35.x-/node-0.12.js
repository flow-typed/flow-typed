import type { Process, Global } from 'npm$namespace$NodeJS'

declare module 'node-0.12' {
		declare interface Error {
		stack?: string
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
		main: any
	}

	declare interface NodeModule {
		exports: any,
		require: NodeRequireFunction,
		id: string,
		filename: string,
		loaded: boolean,
		parent: any,
		children: any[]
	}

	declare interface Buffer {
		
	}

	declare interface NodeBuffer {
		[index: number]: number,
		write(string: string, offset?: number, length?: number, encoding?: string): number,
		toString(encoding?: string, start?: number, end?: number): string,
		toJSON(): any,
		length: number,
		equals(otherBuffer: Buffer): boolean,
		compare(otherBuffer: Buffer): number,
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
		fill(value: any, offset?: number, end?: number): Buffer
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

	declare export interface EventEmitter {
		addListener(event: string, listener: Function): this,
		on(event: string, listener: Function): this,
		once(event: string, listener: Function): this,
		removeListener(event: string, listener: Function): this,
		removeAllListeners(event?: string): this,
		setMaxListeners(n: number): void,
		listeners(event: string): Function[],
		emit(event: string, ...args: any[]): boolean
	}

	declare export interface ReadableStream {
		readable: boolean,
		read(size?: number): string | Buffer,
		setEncoding(encoding: string): void,
		pause(): void,
		resume(): void,
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
		
	}

	declare export interface Process {
		stdout: WritableStream,
		stderr: WritableStream,
		stdin: ReadableStream,
		argv: string[],
		execPath: string,
		abort(): void,
		chdir(directory: string): void,
		cwd(): string,
		env: any,
		exit(code?: number): void,
		getgid(): number,
		setgid(id: number): void,
		setgid(id: string): void,
		getuid(): number,
		setuid(id: number): void,
		setuid(id: string): void,
		version: string,
		versions: {
		http_parser: string,
		node: string,
		v8: string,
		ares: string,
		uv: string,
		zlib: string,
		modules: string,
		openssl: string
	},
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
		memoryUsage(): {
		rss: number,
		heapTotal: number,
		heapUsed: number
	},
		nextTick(callback: Function): void,
		umask(mask?: number): number,
		uptime(): number,
		hrtime(time?: number[]): number[],
		send(message: any, sendHandle?: any): void
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

			
}

declare module 'querystring' {
			declare export function stringify(obj: any, sep?: string, eq?: string): string

	declare export function parse(str: string, sep?: string, eq?: string, options?: {
		maxKeys?: number
	}): any

	declare export function escape(str: string): string

	declare export function unescape(str: string): string

		
}

declare module 'events' {
				declare export class EventEmitter extends NodeJS$EventEmitter {
		listenerCount(emitter: EventEmitter, event: string): number;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): void;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean
	}

	
}

declare module 'http' {
		declare export interface Server {
		listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server,
		listen(port: number, hostname?: string, callback?: Function): Server,
		listen(path: string, callback?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		close(cb?: any): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		maxHeadersCount: number
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
		setHeader(name: string, value: string): void,
		sendDate: boolean,
		getHeader(name: string): string,
		removeHeader(name: string): void,
		write(chunk: any, encoding?: string): any,
		addTrailers(headers: any): void,
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
		end(): void,
		end(buffer: Buffer, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		end(data?: any, encoding?: string): void
	}

	declare export interface IncomingMessage {
		httpVersion: string,
		headers: any,
		rawHeaders: string[],
		trailers: any,
		rawTrailers: any,
		setTimeout(msecs: number, callback: Function): NodeJS.Timer,
		method?: string,
		url?: string,
		statusCode?: number,
		statusMessage?: string,
		socket: net.Socket
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

	declare export function request(options: any, callback?: (res: IncomingMessage) => void): ClientRequest

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
		exec?: string,
		args?: string[],
		silent?: boolean
	}

	declare export function setupMaster(settings?: ClusterSettings): void

	declare export function fork(env?: any): Worker

	declare export function disconnect(callback?: Function): void

	declare export function addListener(event: string, listener: Function): void

	declare export function on(event: string, listener: Function): any

	declare export function once(event: string, listener: Function): void

	declare export function removeListener(event: string, listener: Function): void

	declare export function removeAllListeners(event?: string): void

	declare export function setMaxListeners(n: number): void

	declare export function listeners(event: string): Function[]

	declare export function emit(event: string, ...args: any[]): boolean

	declare export class Worker extends events$EventEmitter {
		id: string;
		process: child.ChildProcess;
		suicide: boolean;
		send(message: any, sendHandle?: any): void;
		kill(signal?: string): void;
		destroy(signal?: string): void;
		disconnect(): void
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
			declare export function tmpdir(): string

	declare export function hostname(): string

	declare export function type(): string

	declare export function platform(): string

	declare export function arch(): string

	declare export function release(): string

	declare export function uptime(): number

	declare export function loadavg(): number[]

	declare export function totalmem(): number

	declare export function freemem(): number

	declare export function cpus(
		
	): {
		model: string,
		speed: number,
		times: {
		user: number,
		nice: number,
		sys: number,
		idle: number,
		irq: number
	}
	}[]

	declare export function networkInterfaces(): any

		
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
		SNICallback?: (servername: string) => any
	}

	declare export interface RequestOptions {
		host?: string,
		hostname?: string,
		port?: number,
		path?: string,
		method?: string,
		headers?: any,
		auth?: string,
		agent?: any,
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		ciphers?: string,
		rejectUnauthorized?: boolean
	}

	declare export interface Agent {
		maxSockets: number,
		sockets: any,
		requests: any
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
		decode(string: string): string,
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
		writer?: Function
	}

	declare export function start(options: ReplOptions): events.EventEmitter

		
}

declare module 'readline' {
		declare export interface ReadLine {
		setPrompt(prompt: string): void,
		prompt(preserveCursor?: boolean): void,
		question(query: string, callback: Function): void,
		pause(): void,
		resume(): void,
		close(): void,
		write(data: any, key?: any): void
	}

	declare export interface ReadLineOptions {
		input: NodeJS.ReadableStream,
		output: NodeJS.WritableStream,
		completer?: Function,
		terminal?: boolean
	}

	declare export function createInterface(options: ReadLineOptions): ReadLine

		
}

declare module 'vm' {
		declare export interface Context {
		
	}

	declare export interface Script {
		runInThisContext(): void,
		runInNewContext(sandbox?: Context): void
	}

	declare export function runInThisContext(code: string, filename?: string): void

	declare export function runInNewContext(code: string, sandbox?: Context, filename?: string): void

	declare export function runInContext(code: string, context: Context, filename?: string): void

	declare export function createContext(initSandbox?: Context): Context

	declare export function createScript(code: string, filename?: string): Script

		
}

declare module 'child_process' {
		declare export interface ChildProcess {
		stdin: stream.Writable,
		stdout: stream.Readable,
		stderr: stream.Readable,
		pid: number,
		kill(signal?: string): void,
		send(message: any, sendHandle?: any): void,
		connected: boolean,
		disconnect(): void,
		unref(): void
	}

	declare export function spawn(
		command: string, args?: string[], options?: {
		cwd?: string,
		stdio?: any,
		custom?: any,
		env?: any,
		detached?: boolean
	}
	): ChildProcess

	declare export function exec(
		command: string, options: {
		cwd?: string,
		stdio?: any,
		customFds?: any,
		env?: any,
		encoding?: string,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string
	}, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function exec(
		command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(
		file: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(
		file: string, args?: string[], options?: {
		cwd?: string,
		stdio?: any,
		customFds?: any,
		env?: any,
		encoding?: string,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string
	}, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function fork(
		modulePath: string, args?: string[], options?: {
		cwd?: string,
		env?: any,
		encoding?: string
	}
	): ChildProcess

	declare export function spawnSync(
		command: string, args?: string[], options?: {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		uid?: number,
		gid?: number,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string,
		encoding?: string
	}
	): {
		pid: number,
		output: string[],
		stdout: string | Buffer,
		stderr: string | Buffer,
		status: number,
		signal: string,
		error: Error
	}

	declare export function execSync(
		command: string, options?: {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		uid?: number,
		gid?: number,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string,
		encoding?: string
	}
	): string | Buffer

	declare export function execFileSync(
		command: string, args?: string[], options?: {
		cwd?: string,
		input?: string | Buffer,
		stdio?: any,
		env?: any,
		uid?: number,
		gid?: number,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string,
		encoding?: string
	}
	): string | Buffer

		
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
		query?: any,
		slashes?: boolean,
		hash?: string,
		path?: string
	}

	declare export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url

	declare export function format(url: Url): string

	declare export function resolve(from: string, to: string): string

		
}

declare module 'dns' {
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

	declare export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[]

		
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
		pause(): void,
		resume(): void,
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
		end(data?: any, encoding?: string): void
	}

	declare export interface Server {
		listen(
		port: number, host?: string, backlog?: number, listeningListener?: Function
	): Server,
		listen(path: string, listeningListener?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		close(callback?: Function): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
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
		port: number,
		size: number
	}

	declare interface AddressInfo {
		address: string,
		family: string,
		port: number
	}

	declare interface Socket {
		send(
		buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void
	): void,
		bind(port: number, address?: string, callback?: () => void): void,
		close(): void,
		address(): AddressInfo,
		setBroadcast(flag: boolean): void,
		setMulticastTTL(ttl: number): void,
		setMulticastLoopback(flag: boolean): void,
		addMembership(multicastAddress: string, multicastInterface?: string): void,
		dropMembership(multicastAddress: string, multicastInterface?: string): void
	}

	declare export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket

		
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
		close(): void
	}

	declare export interface ReadStream {
		close(): void
	}

	declare export interface WriteStream {
		close(): void,
		bytesWritten: number
	}

	declare export function rename(
		oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function renameSync(oldPath: string, newPath: string): void

	declare export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function truncate(
		path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function truncateSync(path: string, len?: number): void

	declare export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function ftruncate(
		fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function ftruncateSync(fd: number, len?: number): void

	declare export function chown(
		path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chownSync(path: string, uid: number, gid: number): void

	declare export function fchown(
		fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchownSync(fd: number, uid: number, gid: number): void

	declare export function lchown(
		path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchownSync(path: string, uid: number, gid: number): void

	declare export function chmod(
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmod(
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmodSync(path: string, mode: number): void

	declare export function chmodSync(path: string, mode: string): void

	declare export function fchmod(
		fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchmod(
		fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchmodSync(fd: number, mode: number): void

	declare export function fchmodSync(fd: number, mode: string): void

	declare export function lchmod(
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchmod(
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchmodSync(path: string, mode: number): void

	declare export function lchmodSync(path: string, mode: string): void

	declare export function stat(
		path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function lstat(
		path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void

	declare export function statSync(path: string): Stats

	declare export function lstatSync(path: string): Stats

	declare export function fstatSync(fd: number): Stats

	declare export function link(
		srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function linkSync(srcpath: string, dstpath: string): void

	declare export function symlink(
		srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function symlinkSync(srcpath: string, dstpath: string, type?: string): void

	declare export function readlink(
		path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any
	): void

	declare export function readlinkSync(path: string): string

	declare export function realpath(
		path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpath(
		path: string, cache: {
		[path: string]: string
	}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpathSync(path: string, cache?: {
		[path: string]: string
	}): string

	declare export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function unlinkSync(path: string): void

	declare export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function rmdirSync(path: string): void

	declare export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function mkdir(
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdir(
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdirSync(path: string, mode?: number): void

	declare export function mkdirSync(path: string, mode?: string): void

	declare export function readdir(
		path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void
	): void

	declare export function readdirSync(path: string): string[]

	declare export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function closeSync(fd: number): void

	declare export function open(
		path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function open(
		path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function open(
		path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function openSync(path: string, flags: string, mode?: number): number

	declare export function openSync(path: string, flags: string, mode?: string): number

	declare export function utimes(
		path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimes(
		path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimesSync(path: string, atime: number, mtime: number): void

	declare export function utimesSync(path: string, atime: Date, mtime: Date): void

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
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): number

	declare export function read(
		fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void
	): void

	declare export function readSync(
		fd: number, buffer: Buffer, offset: number, length: number, position?: number
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
		filename: string, options: {
		persistent?: boolean
	}, listener?: (event: string, filename: string) => any
	): FSWatcher

	declare export function exists(path: string, callback?: (exists: boolean) => void): void

	declare export function existsSync(path: string): boolean

	declare export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void

	declare export function access(
		path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void
	): void

	declare export function accessSync(path: string, mode?: number): void

	declare export function createReadStream(
		path: string, options?: {
		flags?: string,
		encoding?: string,
		fd?: number,
		mode?: number,
		autoClose?: boolean
	}
	): ReadStream

	declare export function createWriteStream(
		path: string, options?: {
		flags?: string,
		encoding?: string,
		fd?: number,
		mode?: number
	}
	): WriteStream

		
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
		end(): string
	}

			
}

declare module 'tls' {
		declare export interface TlsOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		crl?: any,
		ciphers?: string,
		honorCipherOrder?: any,
		requestCert?: boolean,
		rejectUnauthorized?: boolean,
		NPNProtocols?: any,
		SNICallback?: (servername: string) => any
	}

	declare export interface ConnectionOptions {
		host?: string,
		port?: number,
		socket?: net.Socket,
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		rejectUnauthorized?: boolean,
		NPNProtocols?: any,
		servername?: string
	}

	declare export interface Server {
		listen(
		port: number, host?: string, backlog?: number, listeningListener?: Function
	): Server,
		listen(path: string, listeningListener?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		listen(port: number, host?: string, callback?: Function): Server,
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
		connections: number
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
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		crl?: any,
		ciphers?: string,
		honorCipherOrder?: boolean
	}

	declare export interface SecureContext {
		context: any
	}

	declare export function createServer(
		options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) => void
	): Server

	declare export function connect(options: TlsOptions, secureConnectionListener?: () => void): ClearTextStream

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

		
}

declare module 'crypto' {
		declare export interface CredentialDetails {
		pfx: string,
		key: string,
		passphrase: string,
		cert: string,
		ca: any,
		crl: any,
		ciphers: string
	}

	declare export interface Credentials {
		context?: any
	}

	declare interface Hash {
		update(data: any, input_encoding?: string): Hash,
		digest(encoding: "buffer"): Buffer,
		digest(encoding: string): any,
		digest(): Buffer
	}

	declare interface Hmac {
		update(data: any, input_encoding?: string): Hmac,
		digest(encoding: "buffer"): Buffer,
		digest(encoding: string): any,
		digest(): Buffer
	}

	declare interface Cipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding?: string, output_encoding?: string): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding: boolean): void
	}

	declare interface Decipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding?: string, output_encoding?: string): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding: boolean): void
	}

	declare interface Signer {
		update(data: any): void,
		sign(private_key: string, output_format: string): string
	}

	declare interface Verify {
		update(data: any): void,
		verify(object: string, signature: string, signature_format?: string): boolean
	}

	declare interface DiffieHellman {
		generateKeys(encoding?: string): string,
		computeSecret(
		other_public_key: string, input_encoding?: string, output_encoding?: string
	): string,
		getPrime(encoding?: string): string,
		getGenerator(encoding: string): string,
		getPublicKey(encoding?: string): string,
		getPrivateKey(encoding?: string): string,
		setPublicKey(public_key: string, encoding?: string): void,
		setPrivateKey(public_key: string, encoding?: string): void
	}

	declare export function createCredentials(details: CredentialDetails): Credentials

	declare export function createHash(algorithm: string): Hash

	declare export function createHmac(algorithm: string, key: string): Hmac

	declare export function createHmac(algorithm: string, key: Buffer): Hmac

	declare export function createCipher(algorithm: string, password: any): Cipher

	declare export function createCipheriv(algorithm: string, key: any, iv: any): Cipher

	declare export function createDecipher(algorithm: string, password: any): Decipher

	declare export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher

	declare export function createSign(algorithm: string): Signer

	declare export function createVerify(algorith: string): Verify

	declare export function createDiffieHellman(prime_length: number): DiffieHellman

	declare export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman

	declare export function getDiffieHellman(group_name: string): DiffieHellman

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any
	): void

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any
	): void

	declare export function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number): Buffer

	declare export function pbkdf2Sync(
		password: string, salt: string, iterations: number, keylen: number, digest: string
	): Buffer

	declare export function randomBytes(size: number): Buffer

	declare export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

	declare export function pseudoRandomBytes(size: number): Buffer

	declare export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

		
}

declare module 'stream' {
		declare export interface Stream {
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T
	}

	declare export interface ReadableOptions {
		highWaterMark?: number,
		encoding?: string,
		objectMode?: boolean
	}

	declare export interface WritableOptions {
		highWaterMark?: number,
		decodeStrings?: boolean,
		objectMode?: boolean
	}

	declare export interface DuplexOptions {
		allowHalfOpen?: boolean
	}

	declare export interface TransformOptions {
		
	}

		declare export class Readable extends events$EventEmitter, NodeJS$ReadableStream {
		readable: boolean;
		constructor(opts?: ReadableOptions): this;
		_read(size: number): void;
		read(size?: number): any;
		setEncoding(encoding: string): void;
		pause(): void;
		resume(): void;
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T;
		unpipe<T>(destination?: T): void;
		unshift(chunk: any): void;
		wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
		push(chunk: any, encoding?: string): boolean
	}

	declare export class Writable extends events$EventEmitter, NodeJS$WritableStream {
		writable: boolean;
		constructor(opts?: WritableOptions): this;
		_write(chunk: any, encoding: string, callback: Function): void;
		write(chunk: any, cb?: Function): boolean;
		write(chunk: any, encoding?: string, cb?: Function): boolean;
		end(): void;
		end(chunk: any, cb?: Function): void;
		end(chunk: any, encoding?: string, cb?: Function): void
	}

	declare export class Duplex extends Readable, NodeJS$ReadWriteStream {
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
		pause(): void;
		resume(): void;
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

		
}

declare module 'assert' {
			declare function internal(value: any, message?: string): void

		declare module.exports: undefined


}

declare module 'internal' {
			declare export function fail(actual?: any, expected?: any, message?: string, operator?: string): void

	declare export function ok(value: any, message?: string): void

	declare export function equal(actual: any, expected: any, message?: string): void

	declare export function notEqual(actual: any, expected: any, message?: string): void

	declare export function deepEqual(actual: any, expected: any, message?: string): void

	declare export function notDeepEqual(acutal: any, expected: any, message?: string): void

	declare export function strictEqual(actual: any, expected: any, message?: string): void

	declare export function notStrictEqual(actual: any, expected: any, message?: string): void

	declare export function ifError(value: any): void

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

declare module 'tty' {
		declare export interface ReadStream {
		isRaw: boolean,
		setRawMode(mode: boolean): void
	}

	declare export interface WriteStream {
		columns: number,
		rows: number
	}

	declare export function isatty(fd: number): boolean

		
}

declare module 'domain' {
			declare export function create(): Domain

	declare export class Domain extends events$EventEmitter {
		run(fn: Function): void;
		add(emitter: events.EventEmitter): void;
		remove(emitter: events.EventEmitter): void;
		bind(cb: (err: Error, data: any) => any): any;
		intercept(cb: (data: any) => any): any;
		dispose(): void
	}

	
}