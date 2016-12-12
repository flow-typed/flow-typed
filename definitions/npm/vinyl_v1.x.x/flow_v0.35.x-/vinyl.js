

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
		dirname: string;
		basename: string;
		base: string;
		path: string;
		stat: fs.Stats;
		stem: string;
		extname: string;
		history: string[];
		contents: Buffer | NodeJS.ReadableStream;
		relative: string;
		isBuffer(): boolean;
		isStream(): boolean;
		isNull(): boolean;
		clone(opts?: {
		contents?: boolean,
		deep?: boolean
	}): File;
		pipe<T>(stream: T, opts?: {
		end?: boolean
	}): T;
		inspect(): string;
		isVinyl(obj: any): boolean;
		isCustomProp(name: string): boolean
	}

	declare module.exports: undefined


}