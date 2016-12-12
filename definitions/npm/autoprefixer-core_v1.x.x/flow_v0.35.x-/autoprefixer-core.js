

declare module 'autoprefixer-core' {
		declare interface Config {
		browsers?: string[],
		cascade?: boolean,
		remove?: boolean
	}

	declare interface Options {
		from?: string,
		to?: string,
		safe?: boolean,
		map?: {
		inline?: boolean,
		prev?: string | Object
	}
	}

	declare interface Result {
		css: string,
		map: string,
		opts: Options
	}

	declare interface Processor {
		postcss: any,
		info(): string,
		process(css: string, opts?: Options): Result
	}

	declare interface Exports {
		(config: Config): Processor,
		postcss: any,
		info(): string,
		process(css: string, opts?: Options): Result
	}

			declare module.exports: Exports


}