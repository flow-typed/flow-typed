

declare module 'glob-stream' {
		declare export interface Options {
		cwd?: string,
		base?: string,
		cwdbase?: boolean
	}

	declare export interface Element {
		cwd: string,
		base: string,
		path: string
	}

	declare export function create(glob: string, opts?: Options): NodeJS.ReadableStream

	declare export function create(globs: string[], opts?: Options): NodeJS.ReadableStream

		
}