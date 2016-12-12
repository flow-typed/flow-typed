

declare module 'aphrodite' {
		declare export interface StyleDeclaration {
		[key: string]: React.CSSProperties
	}

	declare interface StyleSheetStatic {
		create<T>(styles: T): T,
		rehydrate(renderedClassNames: string[]): void
	}

	declare interface StaticRendererResult {
		html: string,
		css: {
		content: string,
		renderedClassNames: string[]
	}
	}

	declare interface StyleSheetServerStatic {
		renderStatic(renderFunc: () => string): StaticRendererResult
	}

	declare interface StyleSheetTestUtilsStatic {
		suppressStyleInjection(): void,
		clearBufferAndResumeStyleInjection(): void
	}

	declare export function css(...styles: any[]): string

		
}