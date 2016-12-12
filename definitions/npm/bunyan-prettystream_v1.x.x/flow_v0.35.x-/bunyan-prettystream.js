

declare module 'bunyan-prettystream' {
				declare class PrettyStream extends stream$Writable {
		constructor(options?: {
		mode?: string,
		useColor?: boolean
	}): this;
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T
	}

	declare module.exports: undefined


}