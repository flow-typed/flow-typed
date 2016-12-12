

declare module 'gulp-concat' {
		declare interface IOptions {
		newLine: string
	}

	declare interface IFsStats {
		dev?: number,
		ino?: number,
		mode?: number,
		nlink?: number,
		uid?: number,
		gid?: number,
		rdev?: number,
		size?: number,
		blksize?: number,
		blocks?: number,
		atime?: Date,
		mtime?: Date,
		ctime?: Date
	}

	declare interface IVinylOptions {
		cwd?: string,
		base?: string,
		path?: string,
		stat?: IFsStats,
		contents?: NodeJS.ReadableStream | Buffer
	}

	declare interface IConcat {
		(filename: string, options?: IOptions): NodeJS.ReadWriteStream,
		(options: IVinylOptions): NodeJS.ReadWriteStream
	}

			declare module.exports: IConcat


}