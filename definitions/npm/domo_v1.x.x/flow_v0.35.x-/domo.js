

declare module 'domo' {
		declare interface Domo {
		(attributes?: Object): string,
		(attributes?: Object, ...content: string[]): string,
		on(element: string, ...styles: Object[]): string
	}

			
}