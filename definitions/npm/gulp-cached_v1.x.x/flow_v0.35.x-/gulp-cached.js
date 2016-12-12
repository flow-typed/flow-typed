

declare module 'gulp-cached' {
		declare interface ICacheStore {
		[name: string]: {
		
	}
	}

	declare interface IOptions {
		optimizeMemory?: boolean
	}

	declare interface IGulpCached {
		(name: string, options?: IOptions): NodeJS.ReadWriteStream,
		caches: ICacheStore
	}

			declare module.exports: IGulpCached


}