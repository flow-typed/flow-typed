

declare module 'typescript.bgiframe' {
					
}

declare module 'npm$namespace$BgiFrame' {
		declare interface ISettings {
		top: string,
		left: string,
		width: string,
		height: string,
		opacity: boolean,
		src: string,
		conditional: boolean
	}

	declare interface IBgiframe {
		s: ISettings,
		createIframe(): HTMLElement,
		fire(element: HTMLElement): void,
		getIframe(element: HTMLElement): HTMLElement,
		prop(n: any): string
	}

			
}