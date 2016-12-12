

declare module 'jquery.jsignature' {
		declare interface JQuery {
		jSignature(): JQuery,
		jSignature(command: string): any,
		jSignature(command: string, ...arg: string[]): any
	}

			
}