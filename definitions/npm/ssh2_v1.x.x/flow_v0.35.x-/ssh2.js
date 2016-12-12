

declare module 'ssh2' {
		declare interface Client {
		Server: ServerStatic,
		new (): Client,
		SFTP_STATUS_CODE: Sftp.StatusCode,
		SFTP_OPEN_MODE: Sftp.OpenMode,
		utils: Utils,
		connect(config: ConnectConfig): void,
		end(): void,
		destroy(): void,
		exec(command: string, options: ExecOption, callback: ChannelCallback): boolean,
		exec(command: string, callback: ChannelCallback): boolean,
		shell(
		window: boolean | PseudoTtySettings, options: boolean | number | X11Settings, callback: ChannelCallback
	): boolean,
		shell(window: boolean | PseudoTtySettings, callback: ChannelCallback): boolean,
		shell(callback: ChannelCallback): boolean,
		subsys(subsystem: string, callback: ChannelCallback): boolean,
		sftp(callback: SftpCallback): boolean,
		forwardIn(bindAddr: string, bindPort: number, callback?: ForwardInCallback): boolean,
		unforwardIn(bindAddr: string, bindPort: number, callback?: ErrorCallback): boolean,
		forwardOut(
		srcIP: string, srcPort: number, dstIP: string, dstPort: number, callback: ChannelCallback
	): boolean,
		openssh_noMoreSessions(callback?: ErrorCallback): boolean,
		openssh_forwardInStreamLocal(socketPath: string, callback?: ErrorCallback): boolean,
		openssh_unforwardInStreamLocal(socketPath: string, callback?: ErrorCallback): boolean,
		openssh_forwardOutStreamLocal(socketPath: string, callback?: ChannelCallback): boolean
	}

	declare interface ConnectConfig {
		host?: string,
		port?: number,
		forceIPv4?: boolean,
		forceIPv6?: boolean,
		hostHash?: string,
		hostVerifier?: (keyHash: string) => boolean,
		username?: string,
		password?: string,
		agent?: string,
		privateKey?: Buffer | string,
		passphrase?: string,
		localHostname?: string,
		localUsername?: string,
		tryKeyboard?: boolean,
		keepaliveInterval?: number,
		keepaliveCountMax?: number,
		readyTimeout?: number,
		strictVendor?: boolean,
		sock?: NodeJS.ReadableStream,
		agentForward?: boolean,
		debug?: (information: string) => any
	}

	declare interface ExecOption {
		env?: any,
		pty?: boolean | PseudoTtySettings,
		x11?: boolean | number | X11Settings
	}

	declare interface X11Settings {
		single?: boolean,
		screen?: number
	}

	declare interface PseudoTtySettings {
		rows?: number,
		cols?: number,
		height?: number,
		width?: number,
		term?: string
	}

	declare interface ForwardInCallback {
		(err?: Error, bindPort?: number): void
	}

	declare interface ChannelCallback {
		(err?: Error, channel?: Channel): void
	}

	declare interface SftpCallback {
		(err?: Error, sftp?: Sftp.Wrapper): void
	}

	declare interface ErrorCallback {
		(err?: Error): void
	}

	declare interface Channel {
		new (info?: any, client?: any, options?: any): Channel,
		eof(): boolean,
		close(): boolean,
		destroy(): void,
		setWindow(rows: number, cols: number, height: number, width: number): boolean,
		signal(signalName: string): boolean,
		exit(name: string, coreDumped: boolean, msg: string): boolean,
		exit(status: number): boolean,
		stderr?: ServerStderr
	}

	declare interface ServerStderr {
		new (channel: Channel): ServerStderr
	}

	declare interface ServerStatic {
		new (config: ServerConfig, listener?: any): Server,
		createServer(config: ServerConfig, listener?: any): Server,
		KEEPALIVE_INTERVAL: number,
		KEEPALIVE_CLIENT_INTERVAL: number,
		KEEPALIVE_CLIENT_COUNT_MAX: number
	}

	declare interface Server {
		listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server,
		listen(port: number, hostname?: string, callback?: Function): Server,
		listen(path: string, callback?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		getConnections(callback: any): any,
		close(callback?: Function): Server,
		ref(): void,
		unref(): void
	}

	declare interface ServerConfig {
		privateKey: Buffer | string,
		passphrase?: string,
		banner?: string,
		indent?: string,
		highWaterMark?: number,
		debug?: (information: string) => any
	}

	declare interface Utils {
		iv_inc: Function,
		isStreamCipher: Function,
		isGCM: Function,
		readInt: Function,
		readString: Function,
		parseKey: Function,
		genPublicKey: Function,
		convertPPKPrivate: Function,
		verifyPPKMAC: Function,
		decryptKey: Function
	}

			declare module.exports: Client


}

declare module 'Sftp' {
		declare interface StatusCode {
		OK: number,
		EOF: number,
		NO_SUCH_FILE: number,
		PERMISSION_DENIED: number,
		FAILURE: number,
		BAD_MESSAGE: number,
		NO_CONNECTION: number,
		CONNECTION_LOST: number,
		OP_UNSUPPORTED: number
	}

	declare interface OpenMode {
		READ: number,
		WRITE: number,
		APPEND: number,
		CREAT: number,
		TRUNC: number,
		EXCL: number
	}

	declare interface Attributes {
		mode: number,
		uid: number,
		gid: number,
		size: number,
		atime: number,
		mtime: number
	}

	declare interface InputAttributes {
		mode?: number,
		uid?: number,
		gid?: number,
		size?: number,
		atime?: number,
		mtime?: number
	}

	declare interface Stats {
		isDirectory(): boolean,
		isFile(): boolean,
		isBlockDevice(): boolean,
		isCharacterDevice(): boolean,
		isSymbloicLink(): boolean,
		isFIFO(): boolean,
		isSocket(): boolean
	}

	declare interface Wrapper {
		fastGet(remotePath: string, localPath: string, callback: (err: any) => void): void,
		fastGet(
		remotePath: string, localPath: string, options: TransferOptions, callback: (err: any) => void
	): void,
		fastPut(localPath: string, remotePath: string, callback: (err: any) => void): void,
		fastPut(
		localPath: string, remotePath: string, options: TransferOptions, callback: (err: any) => void
	): void,
		createReadStream(path: string, options?: ReadStreamOptions): stream.Readable,
		createWriteStream(path: string, options?: WriteStreamOptions): stream.Writable,
		open(
		filename: string, mode: string, callback: (err: any, handle: Buffer) => void
	): boolean,
		open(
		filename: string, mode: string, attributes: InputAttributes, callback: (err: any, handle: Buffer) => void
	): boolean,
		close(handle: Buffer, callback: (err: any) => void): boolean,
		readData(
		handle: Buffer, buffer: Buffer, offset: number, length: number, position: number, callback: (err: any, bytesRead: number, buffer: Buffer, position: number) => void
	): boolean,
		writeData(
		handle: Buffer, buffer: Buffer, offset: number, length: number, position: number, callback: (err: any) => void
	): boolean,
		fstat(handle: Buffer, callback: (err: any, stats: Stats) => void): boolean,
		fsetstat(
		handle: Buffer, attributes: InputAttributes, callback: (err: any) => void
	): boolean,
		futimes(
		handle: Buffer, atime: number | Date, mtime: number | Date, callback: (err: any) => void
	): boolean,
		fchown(
		handle: Buffer, uid: number, gid: number, callback: (err: any) => void
	): boolean,
		fchmod(handle: Buffer, mode: number | string, callback: (err: any) => void): boolean,
		opendir(path: string, callback: (err: any, handle: Buffer) => void): boolean,
		readdir(
		location: string | Buffer, callback: (err: any, list: ReadDirItem[]) => void
	): boolean,
		unlink(path: string, callback: (err: any) => void): boolean,
		rename(srcPath: string, destPath: string, callback: (err: any) => void): boolean,
		mkdir(path: string, callback: (err: any) => void): boolean,
		mkdir(
		path: string, attributes: InputAttributes, callback: (err: any) => void
	): boolean,
		rmdir(path: string, callback: (err: any) => void): boolean,
		stat(path: string, callback: (err: any, stats: Stats) => void): boolean,
		lstat(path: string, callback: (err: any, stats: Stats) => void): boolean,
		setstat(
		path: string, attributes: InputAttributes, callback: (err: any) => void
	): boolean,
		utimes(
		path: string, atime: number | Date, mtime: number | Date, callback: (err: any) => void
	): boolean,
		chown(path: string, uid: number, gid: number, callback: (err: any) => void): boolean,
		chmod(path: string, mode: number | string, callback: (err: any) => void): boolean,
		readlink(path: string, callback: (err: any, target: string) => void): boolean,
		symlink(targetPath: string, linkPath: string, callback: (err: any) => void): boolean,
		realpath(path: string, callback: (err: any, absPath: string) => void): boolean,
		ext_openssh_rename(srcPath: string, destPath: string, callback: (err: any) => void): boolean,
		ext_openssh_statvfs(path: string, callback: (err: any, fsInfo: any) => void): boolean,
		ext_openssh_fstatvfs(handle: Buffer, callback: (err: any, fsInfo: any) => void): boolean,
		ext_openssh_hardlink(targetPath: string, linkPath: string, callback: (err: any) => void): boolean,
		ext_openssh_fsync(handle: Buffer, callback: (err: any, fsInfo: any) => void): boolean
	}

	declare interface TransferOptions {
		concurrency?: number,
		chunkSize?: number,
		step?: (total_transferred: number, chunk: number, total: number) => void
	}

	declare interface ReadStreamOptions {
		flags?: string,
		encoding?: string,
		handle?: Buffer,
		mode?: number,
		autoClose?: boolean,
		start?: number,
		end?: number
	}

	declare interface WriteStreamOptions {
		flags?: string,
		encoding?: string,
		mode?: number
	}

	declare interface ReadDirItem {
		filename: string,
		longname: string,
		attrs: Attributes
	}

			
}