

declare module 'app-root-path' {
		declare interface RootPath {
		path: string,
		resolve(pathToModule: string): string,
		require(pathToModule: string): any,
		setPath(explicitlySetPath: string): void,
		toString(): string
	}

			declare module.exports: RootPath


}