

declare module 'gulp-nodemon' {
					declare module.exports: Nodemon


}

declare module 'nodemon' {
		declare interface Nodemon {
		(option?: Option): EventEmitter
	}

	declare interface Option {
		tasks?: string[] | ((changedFiles: string[]) => string[])
	}

	declare interface _Option {
		env?: {
		[key: string]: string | boolean | number
	},
		script?: string,
		ext?: string,
		exec?: string,
		watch?: string[],
		ignore?: string[],
		quiet?: boolean,
		verbose?: boolean,
		stdin?: boolean,
		stdout?: boolean,
		runOnChangeOnly?: boolean,
		delay?: number,
		legacyWatch?: boolean,
		exitcrash?: boolean,
		execMap?: {
		[key: string]: string | boolean | number
	},
		events?: {
		[key: string]: string
	},
		restartable?: string
	}

	declare interface EventEmitter {
		addListener(event: string, listener: Function): this,
		addListener(event: string, tasks: string[]): this,
		on(event: string, listener: Function): this,
		on(event: string, tasks: string[]): this,
		once(event: string, listener: Function): this,
		once(event: string, tasks: string[]): this
	}

			
}