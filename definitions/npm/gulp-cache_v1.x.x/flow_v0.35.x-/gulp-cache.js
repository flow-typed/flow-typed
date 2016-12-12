

declare module 'gulp-cache' {
					declare module.exports: IGulpCacheStatic


}

declare module 'gc' {
	declare type Predicate<T> = (arg: T) => boolean;

	declare interface IGulpCacheOptions {
		fileCache?: IGulpCache,
		name?: string,
		key?: (
		file: File, callback?: (err: any, result: string) => void
	) => string | Promise<string>,
		success?: boolean | Predicate<any>,
		value?: (result: any) => Object | Promise<Object> | string
	}

	declare interface ICacheOptions {
		cacheDirName: string
	}

	declare interface IGulpCacheStatic {
		(task: NodeJS.ReadWriteStream): Transform,
		(task: NodeJS.ReadWriteStream, options: IGulpCacheOptions): Transform,
		clear(options: IGulpCacheOptions): Transform,
		Cache: IGulpCache,
		clearAll(callback?: (err: PluginError) => void): void
	}

	declare interface IGulpCache {
		new (options: ICacheOptions): any
	}

			
}