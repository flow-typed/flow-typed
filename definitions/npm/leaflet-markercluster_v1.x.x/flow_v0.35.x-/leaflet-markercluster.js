

declare module 'leaflet-markercluster' {
					
}

declare module 'npm$namespace$L' {
		declare export interface MarkerClusterGroupOptions {
		showCoverageOnHover?: boolean,
		zoomToBoundsOnClick?: boolean,
		spiderfyOnMaxZoom?: boolean,
		removeOutsideVisibleBounds?: boolean,
		animate?: boolean,
		animateAddingMarkers?: boolean,
		disableClusteringAtZoom?: number,
		maxClusterRadius?: number | ((zoom: number) => number),
		polygonOptions?: PolylineOptions,
		singleMarkerMode?: boolean,
		spiderLegPolylineOptions?: PolylineOptions,
		spiderfyDistanceMultiplier?: number,
		iconCreateFunction?: any,
		chunkedLoading?: boolean,
		chunkDelay?: number
	}

		declare export class MarkerClusterGroup extends FeatureGroup<ILayer> {
		constructor(): this;
		constructor(options: MarkerClusterGroupOptions): this;
		addLayers(layers: ILayer[]): MarkerClusterGroup;
		removeLayers(layers: ILayer[]): MarkerClusterGroup;
		clearLayers(): MarkerClusterGroup;
		getVisibleParent(marker: Marker): Marker;
		refreshClusters(): MarkerClusterGroup;
		refreshClusters(layerGroup: LayerGroup<ILayer>): MarkerClusterGroup;
		refreshClusters(marker: Marker): MarkerClusterGroup;
		refreshClusters(markers: Marker[]): MarkerClusterGroup;
		getChildCount(): number;
		getAllChildMarkers(): Marker[];
		zoomToShowLayer(layer: any, callback: () => void): void
	}

	
}