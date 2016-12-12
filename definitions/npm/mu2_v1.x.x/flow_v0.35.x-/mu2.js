

declare module 'mu2' {
		declare export interface IParsed {
		
	}

	declare export function compileAndRender(templateName: string, view: any): NodeJS.ReadableStream

	declare export function compile(filename: string, callback: (err: Error, parsed: IParsed) => void): void

	declare export function compileText(
		name: string, template: string, callback: (err: Error, parsed: IParsed) => void
	): void

	declare export function compileText(name: string, template: string): IParsed

	declare export function compileText(template: string): IParsed

	declare export function render(filenameOrParsed: string, view: any): NodeJS.ReadableStream

	declare export function render(filenameOrParsed: IParsed, view: any): NodeJS.ReadableStream

	declare export function renderText(template: string, view: any, partials?: any): NodeJS.ReadableStream

	declare export function clearCache(templateName?: string): void

		
}