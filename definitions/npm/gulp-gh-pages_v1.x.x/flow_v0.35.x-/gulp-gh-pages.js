

declare module 'gulp-gh-pages' {
		declare interface Options {
		remoteUrl?: string,
		origin?: string,
		branch?: string,
		cacheDir?: string,
		push?: boolean,
		message?: string
	}

	declare function ghPages(opts?: Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}