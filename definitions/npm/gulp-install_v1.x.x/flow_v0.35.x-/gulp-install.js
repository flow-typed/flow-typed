

declare module 'gulp-install' {
		declare interface Options {
		production?: boolean,
		ignoreScripts?: boolean,
		noOptional?: boolean,
		allowRoot?: boolean,
		args?: string | string[]
	}

	declare interface Install {
		(options?: Options): NodeJS.ReadWriteStream
	}

			declare module.exports: Install


}