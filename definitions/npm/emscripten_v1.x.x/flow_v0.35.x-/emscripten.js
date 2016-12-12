import type { FileSystemType } from 'npm$namespace$Emscripten'

declare module 'emscripten' {
		declare interface Math {
		imul(a: number, b: number): number
	}

			
}

declare module 'npm$namespace$Emscripten' {
		declare interface FileSystemType {
		
	}

			
}

declare module 'npm$namespace$Module' {
			declare function print(str: string): void

	declare function printErr(str: string): void

	declare function ccall(ident: string, returnType: string, argTypes: string[], args: any[]): any

	declare function cwrap(ident: string, returnType: string, argTypes: string[]): any

	declare function setValue(ptr: number, value: any, type: string, noSafe?: boolean): void

	declare function getValue(ptr: number, type: string, noSafe?: boolean): number

	declare function allocate(slab: any, types: string, allocator: number, ptr: number): number

	declare function allocate(slab: any, types: string[], allocator: number, ptr: number): number

	declare function Pointer_stringify(ptr: number, length?: number): string

	declare function UTF16ToString(ptr: number): string

	declare function stringToUTF16(str: string, outPtr: number): void

	declare function UTF32ToString(ptr: number): string

	declare function stringToUTF32(str: string, outPtr: number): void

	declare function addOnPreRun(cb: () => any): void

	declare function addOnInit(cb: () => any): void

	declare function addOnPreMain(cb: () => any): void

	declare function addOnExit(cb: () => any): void

	declare function addOnPostRun(cb: () => any): void

	declare function intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[]

	declare function intArrayToString(array: number[]): string

	declare function writeStringToMemory(str: string, buffer: number, dontAddNull: boolean): void

	declare function writeArrayToMemory(array: number[], buffer: number): void

	declare function writeAsciiToMemory(str: string, buffer: number, dontAddNull: boolean): void

	declare function addRunDependency(id: any): void

	declare function removeRunDependency(id: any): void

	declare function _malloc(size: number): number

	declare function _free(ptr: number): void

		
}

declare module 'npm$namespace$FS' {
		declare interface Lookup {
		path: string,
		node: FSNode
	}

	declare interface FSStream {
		
	}

	declare interface FSNode {
		
	}

	declare interface ErrnoError {
		
	}

	declare function lookupPath(path: string, opts: any): Lookup

	declare function getPath(node: FSNode): string

	declare function isFile(mode: number): boolean

	declare function isDir(mode: number): boolean

	declare function isLink(mode: number): boolean

	declare function isChrdev(mode: number): boolean

	declare function isBlkdev(mode: number): boolean

	declare function isFIFO(mode: number): boolean

	declare function isSocket(mode: number): boolean

	declare function major(dev: number): number

	declare function minor(dev: number): number

	declare function makedev(ma: number, mi: number): number

	declare function registerDevice(dev: number, ops: any): void

	declare function syncfs(populate: boolean, callback: (e: any) => any): void

	declare function syncfs(callback: (e: any) => any, populate?: boolean): void

	declare function mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any

	declare function unmount(mountpoint: string): void

	declare function mkdir(path: string, mode?: number): any

	declare function mkdev(path: string, mode?: number, dev?: number): any

	declare function symlink(oldpath: string, newpath: string): any

	declare function rename(old_path: string, new_path: string): void

	declare function rmdir(path: string): void

	declare function readdir(path: string): any

	declare function unlink(path: string): void

	declare function readlink(path: string): string

	declare function stat(path: string, dontFollow?: boolean): any

	declare function lstat(path: string): any

	declare function chmod(path: string, mode: number, dontFollow?: boolean): void

	declare function lchmod(path: string, mode: number): void

	declare function fchmod(fd: number, mode: number): void

	declare function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void

	declare function lchown(path: string, uid: number, gid: number): void

	declare function fchown(fd: number, uid: number, gid: number): void

	declare function truncate(path: string, len: number): void

	declare function ftruncate(fd: number, len: number): void

	declare function utime(path: string, atime: number, mtime: number): void

	declare function open(
		path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number
	): FSStream

	declare function close(stream: FSStream): void

	declare function llseek(stream: FSStream, offset: number, whence: number): any

	declare function read(
		stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number
	): number

	declare function write(
		stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number, canOwn?: boolean
	): number

	declare function allocate(stream: FSStream, offset: number, length: number): void

	declare function mmap(
		stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position: number, prot: number, flags: number
	): any

	declare function ioctl(stream: FSStream, cmd: any, arg: any): any

	declare function readFile(path: string, opts?: {
		encoding: string,
		flags: string
	}): any

	declare function writeFile(
		path: string, data: ArrayBufferView, opts?: {
		encoding: string,
		flags: string
	}
	): void

	declare function writeFile(
		path: string, data: string, opts?: {
		encoding: string,
		flags: string
	}
	): void

	declare function cwd(): string

	declare function chdir(path: string): void

	declare function init(
		input: () => number, output: (c: number) => any, error: (c: number) => any
	): void

	declare function createLazyFile(
		parent: string, name: string, url: string, canRead: boolean, canWrite: boolean
	): FSNode

	declare function createLazyFile(
		parent: FSNode, name: string, url: string, canRead: boolean, canWrite: boolean
	): FSNode

	declare function createPreloadedFile(
		parent: string, name: string, url: string, canRead: boolean, canWrite: boolean, onload?: () => void, onerror?: () => void, dontCreateFile?: boolean, canOwn?: boolean
	): void

	declare function createPreloadedFile(
		parent: FSNode, name: string, url: string, canRead: boolean, canWrite: boolean, onload?: () => void, onerror?: () => void, dontCreateFile?: boolean, canOwn?: boolean
	): void

		
}