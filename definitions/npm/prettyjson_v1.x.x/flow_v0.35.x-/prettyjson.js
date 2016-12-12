

declare module 'prettyjson' {
		declare export interface RendererOptions {
		emptyArrayMsg?: string,
		inlineArrays?: boolean,
		noColor?: boolean,
		keysColor?: string,
		dashColor?: string,
		numberColor?: string,
		stringColor?: string,
		defaultIndentation?: number
	}

	declare export function render(data: any, options?: RendererOptions, indentation?: number): string

	declare export function renderString(data: string, options?: RendererOptions, indentation?: number): string

		
}