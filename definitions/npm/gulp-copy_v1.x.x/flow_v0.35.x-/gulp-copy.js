

declare module 'gulp-copy' {
			declare function gulpCopy(outDirectory: string): through.ThroughStream

	declare function gulpCopy(outDirectory: string, options: gulpCopy.GulpCopyOptions): through.ThroughStream

		declare module.exports: undefined


}

declare module 'gulpCopy' {
		declare export interface GulpCopyOptions {
		prefix: number
	}

			
}