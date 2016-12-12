

declare module 'mz' {
					
}

declare module 'mz/fs' {
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

	declare export function rename(oldPath: string, newPath: string): Promise<void>

	declare export function rename(
		oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function renameSync(oldPath: string, newPath: string): void

	declare export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function truncate(
		path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function truncateSync(path: string, len?: number): void

	declare export function ftruncate(fd: number): Promise<void>

	declare export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function ftruncate(fd: number, len: number): Promise<void>

	declare export function ftruncate(
		fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function ftruncateSync(fd: number, len?: number): void

	declare export function chown(path: string, uid: number, gid: number): Promise<void>

	declare export function chown(
		path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chownSync(path: string, uid: number, gid: number): void

	declare export function fchown(fd: number, uid: number, gid: number): Promise<void>

	declare export function fchown(
		fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchownSync(fd: number, uid: number, gid: number): void

	declare export function lchown(path: string, uid: number, gid: number): Promise<void>

	declare export function lchown(
		path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function lchownSync(path: string, uid: number, gid: number): void

	declare export function chmod(path: string, mode: number): Promise<void>

	declare export function chmod(
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmod(path: string, mode: string): Promise<void>

	declare export function chmod(
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function chmodSync(path: string, mode: number): void

	declare export function chmodSync(path: string, mode: string): void

	declare export function fchmod(fd: number, mode: number): Promise<void>

	declare export function fchmod(
		fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function fchmod(fd: number, mode: string): Promise<void>

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

	declare export function stat(path: string): Promise<Stats>

	declare export function stat(
		path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function lstat(path: string): Promise<Stats>

	declare export function lstat(
		path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any
	): void

	declare export function fstat(fd: number): Promise<Stats>

	declare export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void

	declare export function statSync(path: string): Stats

	declare export function lstatSync(path: string): Stats

	declare export function fstatSync(fd: number): Stats

	declare export function link(srcpath: string, dstpath: string): Promise<void>

	declare export function link(
		srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function linkSync(srcpath: string, dstpath: string): void

	declare export function symlink(srcpath: string, dstpath: string, type?: string): Promise<void>

	declare export function symlink(
		srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function symlinkSync(srcpath: string, dstpath: string, type?: string): void

	declare export function readlink(path: string): Promise<string>

	declare export function readlink(
		path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any
	): void

	declare export function readlinkSync(path: string): string

	declare export function realpath(path: string): Promise<string>

	declare export function realpath(
		path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpath(path: string, cache: {
		[path: string]: string
	}): Promise<string>

	declare export function realpath(
		path: string, cache: {
		[path: string]: string
	}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any
	): void

	declare export function realpathSync(path: string, cache?: {
		[path: string]: string
	}): string

	declare export function unlink(path: string): Promise<void>

	declare export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function unlinkSync(path: string): void

	declare export function rmdir(path: string): Promise<void>

	declare export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function rmdirSync(path: string): void

	declare export function mkdir(path: string): Promise<void>

	declare export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function mkdir(path: string, mode: number): Promise<void>

	declare export function mkdir(
		path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdir(path: string, mode: string): Promise<void>

	declare export function mkdir(
		path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function mkdirSync(path: string, mode?: number): void

	declare export function mkdirSync(path: string, mode?: string): void

	declare export function readdir(path: string): Promise<string[]>

	declare export function readdir(
		path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void
	): void

	declare export function readdirSync(path: string): string[]

	declare export function close(fd: number): Promise<void>

	declare export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function closeSync(fd: number): void

	declare export function open(path: string, flags: string): Promise<number>

	declare export function open(
		path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function open(path: string, flags: string, mode: number): Promise<number>

	declare export function open(
		path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function open(path: string, flags: string, mode: string): Promise<number>

	declare export function open(
		path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any
	): void

	declare export function openSync(path: string, flags: string, mode?: number): number

	declare export function openSync(path: string, flags: string, mode?: string): number

	declare export function utimes(path: string, atime: number, mtime: number): Promise<void>

	declare export function utimes(
		path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimes(path: string, atime: Date, mtime: Date): Promise<void>

	declare export function utimes(
		path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function utimesSync(path: string, atime: number, mtime: number): void

	declare export function utimesSync(path: string, atime: Date, mtime: Date): void

	declare export function futimes(fd: number, atime: number, mtime: number): Promise<void>

	declare export function futimes(
		fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function futimes(fd: number, atime: Date, mtime: Date): Promise<void>

	declare export function futimes(
		fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void
	): void

	declare export function futimesSync(fd: number, atime: number, mtime: number): void

	declare export function futimesSync(fd: number, atime: Date, mtime: Date): void

	declare export function fsync(fd: number): Promise<void>

	declare export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void

	declare export function fsyncSync(fd: number): void

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): Promise<[number, Buffer]>

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void
	): void

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number
	): Promise<[number, Buffer]>

	declare export function write(
		fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void
	): void

	declare export function write(fd: number, data: any): Promise<[number, string]>

	declare export function write(
		fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function write(fd: number, data: any, offset: number): Promise<[number, string]>

	declare export function write(
		fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function write(
		fd: number, data: any, offset: number, encoding: string
	): Promise<[number, string]>

	declare export function write(
		fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void
	): void

	declare export function writeSync(
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): number

	declare export function read(
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): Promise<[number, Buffer]>

	declare export function read(
		fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void
	): void

	declare export function readSync(
		fd: number, buffer: Buffer, offset: number, length: number, position: number
	): number

	declare export function readFile(filename: string, encoding: string): Promise<string>

	declare export function readFile(
		filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void
	): void

	declare export function readFile(
		filename: string, options: {
		encoding: string,
		flag?: string
	}
	): Promise<string>

	declare export function readFile(
		filename: string, options: {
		encoding: string,
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: string) => void
	): void

	declare export function readFile(filename: string, options: {
		flag?: string
	}): Promise<Buffer>

	declare export function readFile(
		filename: string, options: {
		flag?: string
	}, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	): void

	declare export function readFile(filename: string): Promise<Buffer>

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

	declare export function writeFile(filename: string, data: any): Promise<void>

	declare export function writeFile(
		filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function writeFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: number,
		flag?: string
	}
	): Promise<void>

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
	}
	): Promise<void>

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
	}
	): Promise<void>

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
	}
	): Promise<void>

	declare export function appendFile(
		filename: string, data: any, options: {
		encoding?: string,
		mode?: string,
		flag?: string
	}, callback?: (err: NodeJS.ErrnoException) => void
	): void

	declare export function appendFile(filename: string, data: any): Promise<void>

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

	declare export function exists(path: string): Promise<boolean>

	declare export function exists(path: string, callback: (err: any, exists: boolean) => void): void

	declare export function existsSync(path: string): boolean

	declare export function access(path: string): Promise<void>

	declare export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void

	declare export function access(path: string, mode: number): Promise<void>

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

declare module 'mz/dns' {
			declare export function lookup(domain: string, family: number): Promise<[string, number]>

	declare export function lookup(
		domain: string, family: number, callback: (err: Error, address: string, family: number) => void
	): string

	declare export function lookup(domain: string): Promise<[string, number]>

	declare export function lookup(
		domain: string, callback: (err: Error, address: string, family: number) => void
	): string

	declare export function resolve(domain: string, rrtype: string): Promise<string[]>

	declare export function resolve(
		domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void
	): string[]

	declare export function resolve(domain: string): Promise<string[]>

	declare export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolve4(domain: string): Promise<string[]>

	declare export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolve6(domain: string): Promise<string[]>

	declare export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveMx(domain: string): Promise<string[]>

	declare export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveTxt(domain: string): Promise<string[]>

	declare export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveSrv(domain: string): Promise<string[]>

	declare export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveNs(domain: string): Promise<string[]>

	declare export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function resolveCname(domain: string): Promise<string[]>

	declare export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[]

	declare export function reverse(ip: string): Promise<string[]>

	declare export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[]

		
}

declare module 'mz/crypto' {
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

	declare export interface Hash {
		update(data: any, input_encoding?: string): Hash,
		digest(encoding: "buffer"): Buffer,
		digest(encoding: string): any,
		digest(): Buffer
	}

	declare export interface Hmac {
		update(data: any, input_encoding?: string): Hmac,
		digest(encoding: "buffer"): Buffer,
		digest(encoding: string): any,
		digest(): Buffer
	}

	declare export interface Cipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding?: string, output_encoding?: string): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding: boolean): void
	}

	declare export interface Decipher {
		update(data: Buffer): Buffer,
		update(data: string, input_encoding?: string, output_encoding?: string): string,
		final(): Buffer,
		final(output_encoding: string): string,
		setAutoPadding(auto_padding: boolean): void
	}

	declare export interface Signer {
		update(data: any): void,
		sign(private_key: string, output_format: string): string
	}

	declare export interface Verify {
		update(data: any): void,
		verify(object: string, signature: string, signature_format?: string): boolean
	}

	declare export interface DiffieHellman {
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

	declare export interface RsaPublicKey {
		key: string,
		padding?: any
	}

	declare export interface RsaPrivateKey {
		key: string,
		passphrase?: string,
		padding?: any
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
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number
	): Promise<Buffer>

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any
	): void

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string
	): Promise<Buffer>

	declare export function pbkdf2(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any
	): void

	declare export function pbkdf2Sync(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number
	): Buffer

	declare export function pbkdf2Sync(
		password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string
	): Buffer

	declare export function randomBytes(size: number): Promise<Buffer>

	declare export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

	declare export function pseudoRandomBytes(size: number): Promise<Buffer>

	declare export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void

	declare export function publicEncrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer

	declare export function privateDecrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer

		
}

declare module 'mz/child_process' {
		declare export interface ChildProcess {
		stdin: stream.Writable,
		stdout: stream.Readable,
		stderr: stream.Readable,
		stdio: (stream.Readable | stream.Writable)[],
		pid: number,
		kill(signal?: string): void,
		send(message: any, sendHandle?: any): void,
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
	}
	): Promise<[Buffer, Buffer]>

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

	declare export function exec(command: string): Promise<[Buffer, Buffer]>

	declare export function exec(
		command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(file: string): Promise<[Buffer, Buffer]>

	declare export function execFile(
		file: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void
	): ChildProcess

	declare export function execFile(file: string, args?: string[]): Promise<[Buffer, Buffer]>

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
	}
	): Promise<[Buffer, Buffer]>

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
		execPath?: string,
		execArgv?: string[],
		silent?: boolean,
		uid?: number,
		gid?: number
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

declare module 'mz/zlib' {
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

	declare export function deflate(buf: Buffer): Promise<any>

	declare export function deflate(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function deflateSync(buf: Buffer, options?: ZlibOptions): any

	declare export function deflateRaw(buf: Buffer): Promise<any>

	declare export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any

	declare export function gzip(buf: Buffer): Promise<any>

	declare export function gzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function gzipSync(buf: Buffer, options?: ZlibOptions): any

	declare export function gunzip(buf: Buffer): Promise<any>

	declare export function gunzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function gunzipSync(buf: Buffer, options?: ZlibOptions): any

	declare export function inflate(buf: Buffer): Promise<any>

	declare export function inflate(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function inflateSync(buf: Buffer, options?: ZlibOptions): any

	declare export function inflateRaw(buf: Buffer): Promise<any>

	declare export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any

	declare export function unzip(buf: Buffer): Promise<any>

	declare export function unzip(buf: Buffer, callback: (error: Error, result: any) => void): void

	declare export function unzipSync(buf: Buffer, options?: ZlibOptions): any

		
}

declare module 'mz/readline' {
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
		question(query: string): Promise<string>,
		pause(): ReadLine,
		resume(): ReadLine,
		close(): void,
		write(data: string | Buffer, key?: Key): void
	}

	declare export interface Completer {
		(line: string): Promise<[string[], string]>,
		(line: string): [string[], string],
		(line: string, callback: (err: any, result: [string[], string]) => void): any,
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