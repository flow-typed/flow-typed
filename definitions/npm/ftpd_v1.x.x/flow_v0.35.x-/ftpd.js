

declare module 'ftpd' {
		declare export interface FtpServerOptions {
		getInitialCwd: (
		connection: FtpConnection, callback?: (error: Error, path: string) => void
	) => void | string,
		getRoot: (
		connection: FtpConnection, callback?: (error: Error, path: string) => void
	) => void | string,
		useWriteFile?: boolean,
		useReadFile?: boolean,
		uploadMaxSlurpSize?: number,
		maxStatsAtOnce?: number,
		filenameSortFunc?: (a: string, b: string) => number,
		filenameSortMap?: ((a: string) => string) | boolean,
		dontSortFilenames?: boolean,
		noWildcards?: boolean,
		tlsOptions?: tls.TlsOptions,
		tlsOnly?: boolean,
		allowUnauthorizedTls?: boolean,
		pasvPortRangeStart?: number,
		pasvPortRangeEnd?: number
	}

	declare export interface FtpFileSystem {
		unlink: (path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void,
		readdir: (
		path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void
	) => void,
		mkdir: ((path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void) | ((
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	) => void) | ((
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	) => void),
		open: ((
		path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	) => void) | ((
		path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	) => void) | ((
		path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	) => void),
		close: (fd: number, callback?: (err?: NodeJS.ErrnoException) => void) => void,
		rmdir: (path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void,
		rename: (
		oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void
	) => void,
		stat: (
		path: string, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any
	) => void,
		createReadStream?: (
		path: string, options?: {
		flags?: string,
		encoding?: string,
		fd?: string,
		mode?: string,
		bufferSize?: number
	}
	) => fs.ReadStream,
		createWriteStream?: (
		path: string, options?: {
		flags?: string,
		encoding?: string,
		string?: string
	}
	) => fs.WriteStream,
		readFile?: ((
		filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void
	) => void) | ((
		filename: string, options: {
		encoding: string,
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: string) => void
	) => void) | ((
		filename: string, options: {
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	) => void) | ((
		filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	) => void),
		writeFile?: ((
		filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void
	) => void) | ((
		filename: string, data: any, options: {
		encoding?: string,
		mode?: number,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	) => void) | ((
		filename: string, data: any, options: {
		encoding?: string,
		mode?: string,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	) => void)
	}

		declare export class FtpConnection extends events$EventEmitter {
		server: FtpServer;
		socket: net.Socket;
		pasv: net.Server;
		dataSocket: net.Socket;
		mode: string;
		username: string;
		cwd: string;
		root: string;
		hasQuit: boolean;
		secure: boolean;
		pbszReceived: boolean
	}

	declare export class FtpServer extends events$EventEmitter {
		constructor(host: string, options: FtpServerOptions): this;
		listen(
		port: number, host?: string, backlog?: number, listeningListener?: () => void
	): void;
		close(callback?: () => void): void
	}

	
}