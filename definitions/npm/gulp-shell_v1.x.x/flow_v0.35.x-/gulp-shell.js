

declare module 'gulp-shell' {
					declare module.exports: Shell


}

declare module 'shell' {
		declare interface Shell {
		(commands: string | string[], options?: Option): NodeJS.ReadWriteStream,
		task(
		commands: string | string[], options?: Option
	): (done: Function) => NodeJS.ReadWriteStream
	}

	declare interface Option {
		errorMessage?: string,
		ignoreErrors?: boolean,
		quiet?: boolean,
		cwd?: string,
		templateData?: any,
		maxBuffer?: number,
		timeout?: number,
		env?: any
	}

			
}