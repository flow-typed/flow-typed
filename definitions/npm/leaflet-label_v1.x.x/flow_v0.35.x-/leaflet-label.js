

declare module 'leaflet-label' {
					
}

declare module 'npm$namespace$L' {
		declare export interface IconOptions {
		labelAnchor?: Point
	}

	declare export interface PathOptions {
		labelAnchor?: Point
	}

	declare export interface CircleMarkerOptions {
		labelAnchor?: Point
	}

	declare export interface Marker {
		showLabel(): Marker,
		hideLabel(): Marker,
		setLabelNoHide(noHide: boolean): void,
		bindLabel(content: string, options?: LabelOptions): Marker,
		unbindLabel(): Marker,
		updateLabelContent(content: string): void,
		getLabel(): Label,
		setOpacity(opacity: number, labelHasSemiTransparency: boolean): void
	}

	declare export interface CircleMarker {
		showLabel(): CircleMarker,
		hideLabel(): CircleMarker,
		setLabelNoHide(noHide: boolean): void,
		bindLabel(content: string, options?: LabelOptions): CircleMarker,
		unbindLabel(): CircleMarker,
		updateLabelContent(content: string): void,
		getLabel(): Label
	}

	declare export interface FeatureGroup<T> {
		clearLayers(): FeatureGroup<T>,
		bindLabel(content: string, options?: LabelOptions): FeatureGroup<T>,
		unbindLabel(): FeatureGroup<T>,
		updateLabelContent(content: string): FeatureGroup<T>
	}

	declare export interface Path {
		bindLabel(content: string, options?: LabelOptions): Path,
		unbindLabel(): Path,
		updateLabelContent(content: string): void
	}

	declare export interface LabelOptions {
		className?: string,
		clickable?: boolean,
		direction?: string,
		pane?: string,
		noHide?: boolean,
		offset?: Point,
		opacity?: number,
		zoomAnimation?: boolean
	}

	declare export interface LabelStatic {
		new (options?: LabelOptions): Label
	}

	declare export interface Label {
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		setLatLng(latlng: LatLng): Label,
		setContent(content: string): Label,
		close(): void,
		updateZIndex(zIndex: number): void,
		setOpacity(opacity: number): void
	}

			
}