

declare module 'mock-fs' {
			declare function mock(config?: mock.Config, options?: mock.Options): void

		declare module.exports: undefined


}

declare module 'mock' {
		declare interface Config {
		[path: string]: string | Buffer | File | Directory | Symlink | Config
	}

	declare interface Options {
		createCwd?: boolean,
		createTmp?: boolean
	}

	declare interface CommonConfig {
		mode?: number,
		uid?: number,
		git?: number,
		atime?: Date,
		ctime?: Date,
		mtime?: Date,
		birthtime?: Date
	}

	declare interface FileConfig {
		content: string | Buffer
	}

	declare interface DirectoryConfig {
		items: Config
	}

	declare interface SymlinkConfig {
		path: string
	}

	declare function file(config: FileConfig): File

	declare function directory(config: DirectoryConfig): Directory

	declare function symlink(config: SymlinkConfig): Symlink

	declare function restore(): void

	declare function fs(config?: Config, options?: Options): typeof fs

	declare class File  {
		
	}

	declare class Directory  {
		
	}

	declare class Symlink  {
		
	}

	
}