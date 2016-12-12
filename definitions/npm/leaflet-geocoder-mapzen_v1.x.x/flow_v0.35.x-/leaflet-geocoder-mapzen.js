

declare module 'leaflet-geocoder-mapzen' {
					
}

declare module 'Control' {
		declare export interface GeocoderStatic {
		new (options?: GeocoderOptions): Geocoder
	}

	declare export interface Geocoder {
		
	}

	declare export interface GeocoderOptions {
		url?: string,
		bounds?: LatLngBounds | boolean,
		focus?: LatLng | boolean,
		layers?: string | any[],
		params?: Object,
		position?: PositionString,
		attribution?: string,
		placeholder?: string,
		title?: string,
		panToPoint?: boolean,
		polygonIcon?: boolean | string,
		markers?: MarkerOptions | boolean,
		fullWidth?: number | boolean,
		expanded?: boolean,
		autocomplete?: boolean,
		place?: boolean
	}

			
}

declare module 'control' {
			declare export function geocoder(api_key: string, options?: Control.GeocoderOptions): L.Control.Geocoder

		
}