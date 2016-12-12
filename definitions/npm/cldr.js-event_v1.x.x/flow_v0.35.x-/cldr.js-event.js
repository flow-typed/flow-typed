

declare module 'cldr.js-event' {
					
}

declare module 'npm$namespace$cldr' {
		declare interface CldrStatic {
		on(event: string, listener: (path: string, value: any) => void): void,
		once(event: string, listener: (path: string, value: any) => void): void,
		off(event: string, listener: (path: string, value: any) => void): void
	}

	declare interface CldrFactory {
		on(event: string, listener: (path: string, value: any) => void): void,
		once(event: string, listener: (path: string, value: any) => void): void,
		off(event: string, listener: (path: string, value: any) => void): void
	}

			
}

declare module 'cldr/event' {
					declare module.exports: undefined


}