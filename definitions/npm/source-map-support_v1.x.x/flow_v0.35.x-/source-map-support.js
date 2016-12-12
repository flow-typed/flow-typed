

declare module 'source-map-support' {
		declare export interface UrlAndMap {
		url: string,
		map: string | Buffer
	}

	declare export interface Options {
		handleUncaughtExceptions?: boolean,
		emptyCacheBetweenOperations?: boolean,
		retrieveFile?: (path: string) => string,
		retrieveSourceMap?: (source: string) => UrlAndMap
	}

	declare export interface Position {
		source: string,
		line: number,
		column: number
	}

	declare export function wrapCallSite(frame: any): any

	declare export function getErrorSource(error: Error): string

	declare export function mapSourcePosition(position: Position): Position

	declare export function retrieveSourceMap(source: string): UrlAndMap

	declare export function install(options?: Options): void

		
}