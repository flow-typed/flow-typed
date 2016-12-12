

declare module 'gulp-remember' {
		declare interface ICache {
		[path: string]: NodeJS.ReadWriteStream
	}

	declare interface IGulpRemember {
		(cacheName?: string): NodeJS.ReadWriteStream,
		forget(path: string): void,
		forget(cacheName: string, path: string): void,
		forgetAll(cacheName?: string): void,
		cacheFor(cacheName?: string): ICache
	}

			declare module.exports: IGulpRemember


}