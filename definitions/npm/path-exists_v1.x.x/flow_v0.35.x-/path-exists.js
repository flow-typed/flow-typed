

declare module 'path-exists' {
		declare interface PathExists {
		(path: string, callback: (error: Error, exists: boolean) => void): void,
		sync(path: string): boolean
	}

			declare module.exports: PathExists


}