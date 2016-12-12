

declare module 'mapbox' {
		declare interface MapOptions {
		featureLayer?: FeatureLayerOptions,
		gridLayer?: any,
		tileLayer?: TileLayerOptions,
		infoControl?: ControlOptions,
		legendControl?: ControlOptions,
		shareControl?: ShareControlOptions
	}

	declare interface FilterFunction {
		(feature: any): boolean
	}

	declare interface Map {
		tileLayer: L.mapbox.TileLayer,
		gridLayer: L.mapbox.GridLayer,
		featureLayer: L.mapbox.FeatureLayer,
		gridControl: L.mapbox.GridControl,
		infoControl: L.mapbox.InfoControl,
		legendControl: L.mapbox.LegendControl,
		shareControl: L.mapbox.ShareControl,
		getTileJSON(): any
	}

	declare interface TileLayerOptions {
		retinaVersion?: string
	}

	declare interface TileLayer {
		getTileJSON(): any,
		setFormat(format: string): TileLayer
	}

	declare interface GridLayer {
		active(): boolean,
		addTo(map: L.mapbox.Map): any,
		onAdd(map: L.mapbox.Map): any,
		onRemove(): any,
		on(event: string, handler: Function, context?: any): any,
		getTileJSON(): any,
		getData(latlng: L.LatLng, callback: Function): any
	}

	declare interface FeatureLayerOptions {
		filter?: FilterFunction,
		sanitizer?: (template: string) => string
	}

	declare interface FeatureLayer {
		loadURL(url: string): any,
		loadID(id: string): any,
		setFilter(filter: FilterFunction): any,
		getFilter(): FilterFunction,
		setGeoJSON(geojson: any): L.mapbox.FeatureLayer,
		getGeoJSON(): any
	}

	declare interface Geocoder {
		getURL(): string,
		setURL(url: string): any,
		setID(id: string): any,
		setTileJSON(tilejson: any): any,
		queryURL(url: string): string,
		query(queryString: string, callback: Function): any,
		reverseQuery(location: any, callback: Function): any
	}

	declare interface ControlOptions {
		sanitizer?: (template: string) => string
	}

	declare interface InfoControl {
		onAdd(map: L.mapbox.Map): any,
		onRemove(map: L.mapbox.Map): any,
		addInfo(info: string): any,
		removeInfo(info: string): any
	}

	declare interface LegendControl {
		onAdd(map: L.mapbox.Map): any,
		addLegend(legend: string): any,
		removeLegend(legend: string): any
	}

	declare interface GridControlOptions {
		template?: string,
		follow?: boolean,
		pinnable?: boolean,
		touchTeaser?: boolean,
		location?: boolean
	}

	declare interface GridControl {
		onAdd(map: L.mapbox.Map): any,
		onRemove(map: L.mapbox.Map): any,
		hide(): any,
		setTemplate(template: string): any
	}

	declare interface GeocoderControlOptions {
		keepOpen?: boolean
	}

	declare interface GeocoderControl {
		getURL(): string,
		onAdd(map: L.mapbox.Map): any,
		setURL(url: string): any,
		setID(id: string): any,
		setTileJSON(tilejson: any): any,
		on(event: string, callback: Function): any
	}

	declare interface ShareControlOptions {
		url?: string
	}

	declare interface ShareControl {
		onAdd(map: L.mapbox.Map): any
	}

	declare function map(element: string | Element, id: string, options?: MapOptions): L.mapbox.Map

	declare function map(element: string | Element, tilejson: any, options?: MapOptions): L.mapbox.Map

	declare function tileLayer(id: string, options?: TileLayerOptions): L.mapbox.TileLayer

	declare function tileLayer(tilejson: any, options?: TileLayerOptions): L.mapbox.TileLayer

	declare function gridLayer(id: string): L.mapbox.GridLayer

	declare function gridLayer(tilejson: any): L.mapbox.GridLayer

	declare function featureLayer(): L.mapbox.FeatureLayer

	declare function featureLayer(id: string, options?: FeatureLayerOptions): L.mapbox.FeatureLayer

	declare function featureLayer(geojson: any, options?: FeatureLayerOptions): L.mapbox.FeatureLayer

	declare function geocoder(id: string): L.mapbox.Geocoder

	declare function infoControl(options?: ControlOptions): InfoControl

	declare function legendControl(options?: ControlOptions): LegendControl

	declare function gridControl(layer: string, options?: GridControlOptions): GridControl

	declare function geocoderControl(id: string, options?: GeocoderControlOptions): GeocoderControl

	declare function shareControl(id: string, options?: ShareControlOptions): ShareControl

	declare function sanitize(text: string): string

	declare function template(template: string, data?: any): string

	declare export class config  {
		FORCE_HTTPS: boolean;
		HTTP_URLS: string[];
		HTTPS_URLS: string[]
	}

	
}

declare module 'marker' {
			declare function icon(feature: any): L.Icon

	declare function style(feature: any, latlng: any): L.Marker

		
}

declare module 'simplestyle' {
			declare function style(feature: any): L.PathOptions

		
}