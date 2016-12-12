

declare module 'gulp-coffeeify' {
					declare module.exports: Coffeeify


}

declare module 'coffeeify' {
		declare interface Coffeeify {
		(option?: Option): NodeJS.ReadWriteStream
	}

	declare interface Option {
		options?: {
		debug?: boolean,
		paths?: string[]
	},
		aliases?: Aliases,
		transforms?: Transforms
	}

	declare interface Aliases {
		cwd?: string,
		base?: string
	}

	declare interface Transforms {
		ext?: string,
		transform(data: string): string
	}

			
}