

declare module 'vinyl-0.4.3' {
					
}

declare module 'vinyl' {
				declare class File  {
		constructor(options?: {
		cwd?: string,
		base?: string,
		path?: string,
		history?: string[],
		stat?: fs.Stats,
		contents?: Buffer | NodeJS.ReadWriteStream
	}): this;
		cwd: string;
		base: string;
		path: string;
		stat: fs.Stats;
		contents: Buffer | NodeJS.ReadableStream;
		relative: string;
		isBuffer(): boolean;
		isStream(): boolean;
		isNull(): boolean;
		isDirectory(): boolean;
		clone(opts?: {
		contents?: boolean
	}): File;
		pipe<T>(stream: T, opts?: {
		end?: boolean
	}): T;
		inspect(): string
	}

	declare module.exports: undefined


}