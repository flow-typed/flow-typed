

declare module 'fs-ext' {
			declare export function flock(fd: number, flags: string, callback: (err: Error) => void): void

	declare export function flockSync(fd: number, flags: string): void

	declare export function fcntl(
		fd: number, cmd: string, arg: number, callback: (err: Error, result: number) => void
	): void

	declare export function fcntl(fd: number, cmd: string, callback: (err: Error, result: number) => void): void

	declare export function fcntlSync(fd: number, cmd: string, arg?: number): number

	declare export function seek(
		fd: number, offset: number, whence: number, callback: (err: Error, currFilePos: number) => void
	): void

	declare export function seekSync(fd: number, offset: number, whence: number): number

	declare export function utime(
		path: string, atime: number, mtime: number, callback: (err: Error) => void
	): void

	declare export function utimeSync(path: string, atime: number, mtime: number): void

		
}