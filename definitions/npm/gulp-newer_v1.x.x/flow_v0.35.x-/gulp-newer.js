

declare module 'gulp-newer' {
		declare interface IOptions {
		dest: string,
		ext?: string,
		map?: (relativePath: string) => string
	}

	declare interface IGulpNewer {
		(dest: string): NodeJS.ReadWriteStream,
		(options: IOptions): NodeJS.ReadWriteStream
	}

			declare module.exports: IGulpNewer


}