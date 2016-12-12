

declare module 'hyperscript' {
		declare interface HyperScript {
		(tagName: string, ...args: any[]): HTMLElement,
		cleanup(): void,
		context(): HyperScript
	}

			declare module.exports: HyperScript


}