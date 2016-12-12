import type { FavicoJsStatic } from 'npm$namespace$favicojs'

declare module 'favico.js' {
					
}

declare module 'npm$namespace$favicojs' {
		declare interface FavicoJsStatic {
		new (opt?: FavicoJsOptions): Favico
	}

	declare interface FavicoJsOptions {
		bgColor?: string,
		textColor?: string,
		fontFamily?: string,
		fontStyle?: string,
		type?: string,
		position?: string,
		animation?: string,
		elementId?: string,
		element?: HTMLElement,
		dataUrl?: (url: string) => any
	}

	declare interface Favico {
		badge(number: number): void,
		badge(number: number, animation: string): void,
		badge(number: number, opts: FavicoJsOptions): void,
		reset(): void,
		image(imageElement: HTMLElement): void,
		video(imageElement: HTMLElement): void,
		webcam(): void
	}

			
}