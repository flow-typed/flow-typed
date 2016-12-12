

declare module 'leaflet-editable' {
					
}

declare module 'npm$namespace$L' {
		declare export interface EditableStatic {
		new (map: Map, options: EditOptions): Editable
	}

	declare export interface EditOptions {
		polylineClass?: Object,
		polygonClass?: Object,
		markerClass?: Object,
		drawingCSSClass?: string,
		editLayer?: L.LayerGroup<L.ILayer>,
		featuresLayer?: L.LayerGroup<L.Polyline | L.Polygon | L.Marker>,
		vertexMarkerClass?: Object,
		middleMarkerClass?: Object,
		polylineEditorClass?: Object,
		polygonEditorClass?: Object,
		markerEditorClass?: Object,
		lineGuideOptions?: Object,
		skipMiddleMarkers?: boolean
	}

	declare export interface Editable {
		options: EditOptions,
		currentPolygon: Polyline | Polygon | Marker,
		startPolyline(latLng?: LatLng, options?: L.PolylineOptions): L.Polyline,
		startPolygon(latLng?: LatLng, options?: L.PolylineOptions): L.Polygon,
		startMarker(latLng?: LatLng, options?: L.MarkerOptions): L.Marker,
		stopDrawing(): void
	}

	declare export interface EditableMixin {
		enableEdit(): any,
		disableEdit(): void,
		toggleEdit(): void,
		editEnabled(): boolean
	}

	declare export interface Map {
		editable: boolean,
		editOptions: EditOptions,
		editTools: Editable
	}

	declare export interface Polyline {
		
	}

	declare export interface BaseEditor {
		enable(): MarkerEditor | PolylineEditor | PolygonEditor,
		disable(): MarkerEditor | PolylineEditor | PolygonEditor
	}

	declare export interface PathEditor {
		reset(): void
	}

	declare export interface PolylineEditor {
		continueForward(): void,
		continueBackward(): void
	}

	declare export interface PolygonEditor {
		newHole(latlng: LatLng): void
	}

	declare export interface MarkerEditor {
		
	}

	declare export interface Marker {
		
	}

	declare export interface Polyline {
		
	}

	declare export interface Polygon {
		
	}

			
}

declare module 'Map' {
		declare export interface MapOptions {
		editable?: boolean,
		editOptions?: EditOptions
	}

			
}