

declare module 'leaflet.fullscreen' {
					
}

declare module 'Control' {
		declare export interface Fullscreen {
		
	}

	declare export interface FullscreenOptions {
		content?: string,
		position?: string,
		title?: string,
		titleCancel?: string,
		forceSeparateButton?: boolean,
		forcePseudoFullscreen?: boolean
	}

			
}

declare module 'control' {
			declare export function fullscreen(options?: Control.FullscreenOptions): L.Control.Fullscreen

		
}