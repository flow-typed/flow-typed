

declare module 'load-json-file' {
		declare interface LoadJsonFile {
		(filepath: string): Promise<any>,
		sync(filepath: string): any
	}

			declare module.exports: LoadJsonFile


}