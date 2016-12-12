

declare module 'cliff' {
			declare export function inspect(obj: any): string

	declare export function stringifyRows(rows: string[][], colors?: string[]): string

	declare export function stringifyObjectRows(rows: Array<{
		
	}>, keys: string[], colors?: string[]): string

	declare export function putRows(level: string, rows: string[][], colors?: string[]): void

	declare export function putObjectRows(level: string, rows: Array<{
		
	}>, keys: string[], colors?: string[]): void

	declare export function putObject(level: string, object: any, rewriters?: any, padding?: any): void

		
}