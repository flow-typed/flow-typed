

declare module 'dts-bundle' {
		declare interface Options {
		name: string,
		main: string,
		baseDir?: string,
		exclude?: RegExp,
		externals?: boolean,
		indent?: string,
		newLine?: string,
		out?: string,
		prefix?: string,
		removeSource?: boolean,
		separator?: string,
		verbose?: boolean
	}

	declare export function bundle(opts: Options): void

		
}