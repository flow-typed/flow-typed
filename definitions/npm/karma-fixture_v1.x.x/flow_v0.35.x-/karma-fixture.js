

declare module 'karma-fixture' {
					
}

declare module 'npm$namespace$fixture' {
			declare export function load(...files: string[]): any

	declare export function load(file1: string, append?: boolean): any

	declare export function load(file1: string, file2: string, append?: boolean): any

	declare export function load(file1: string, file2: string, file3: string, append?: boolean): any

	declare export function load(
		file1: string, file2: string, file3: string, file4: string, append?: boolean
	): any

	declare export function load(
		file1: string, file2: string, file3: string, file4: string, file5: string, append?: boolean
	): any

	declare export function set(...htmlStrs: string[]): HTMLElement | HTMLElement[]

	declare export function set(htmlStr1: string, append?: boolean): HTMLElement | HTMLElement[]

	declare export function set(
		htmlStr1: string, htmlStr2: string, append?: boolean
	): HTMLElement | HTMLElement[]

	declare export function set(
		htmlStr1: string, htmlStr2: string, htmlStr3: string, append?: boolean
	): HTMLElement | HTMLElement[]

	declare export function set(
		htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, append?: boolean
	): HTMLElement | HTMLElement[]

	declare export function set(
		htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, htmlStr5: string, append?: boolean
	): HTMLElement | HTMLElement[]

	declare export function cleanup(): void

	declare export function setBase(fixtureBasePath: string): void

		
}