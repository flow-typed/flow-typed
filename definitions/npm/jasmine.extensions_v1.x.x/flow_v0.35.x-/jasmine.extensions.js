

declare module 'jasmine.extensions' {
					
}

declare module 'npm$namespace$jasmine' {
		declare interface Matchers {
		toContainHtml(expected: string): boolean,
		toContainText(expected: string): boolean
	}

			
}