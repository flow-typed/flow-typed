

declare module 'domready' {
					
}

declare module 'domReady' {
		declare interface DomReady {
		(callback: () => any): DomReady,
		version: string
	}

			declare module.exports: DomReady


}