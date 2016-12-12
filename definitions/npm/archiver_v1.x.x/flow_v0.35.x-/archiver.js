

declare module 'archiver' {
		declare interface nameInterface {
		name?: string
	}

	declare interface Archiver {
		pipe(writeStream: FS.WriteStream): void,
		append(source: FS.ReadStream | Buffer | string, name: nameInterface): void,
		directory(dirpath: string, destpath: nameInterface | string): void,
		directory(dirpath: string, destpath: nameInterface | string, data: any | Function): void,
		bulk(mappings: any): void,
		finalize(): void
	}

	declare interface Options {
		
	}

	declare function archiver(format: string, options?: Options): Archiver

	declare function create(format: string, options?: Options): Archiver

		declare module.exports: undefined


}