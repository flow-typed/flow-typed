

declare module 'gulp-changed' {
		declare interface IComparator {
		(stream: Transform, callback: Function, sourceFile: File, destPath: string): void
	}

	declare interface IDestination {
		(file: string | Buffer): string
	}

	declare interface IOptions {
		cwd?: string,
		extension?: string,
		hasChanged?: IComparator
	}

	declare interface IGulpChanged {
		(destination: string | IDestination, options?: IOptions): NodeJS.ReadWriteStream,
		compareLastModifiedTime: IComparator,
		compareSha1Digest: IComparator
	}

			declare module.exports: IGulpChanged


}