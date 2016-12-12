

declare module 'markerclustererplus' {
		declare interface ClusterIconStyle {
		url: string,
		height: number,
		width: number,
		anchorText?: number[],
		anchorIcon?: number[],
		textColor?: string,
		textSize?: number,
		textDecoration?: string,
		fontWeight?: string,
		fontStyle?: string,
		fontFamily?: string,
		backgroundPosition?: string
	}

	declare interface Cluster {
		new (mc: MarkerClusterer): Cluster,
		getSize(): number,
		getMarkers(): google.maps.Marker[],
		getCenter(): google.maps.LatLng,
		getMap(): google.maps.Map,
		getMarkerClusterer(): MarkerClusterer,
		getBounds(): google.maps.LatLngBounds,
		remove(): void,
		addMarker(marker: google.maps.Marker): boolean,
		isMarkerInClusterBounds(marker: google.maps.Marker): boolean,
		calculateBounds_(): void,
		updateIcon_(): void,
		isMarkerAlreadyAdded_(marker: google.maps.Marker): boolean
	}

	declare interface MarkerClustererOptions {
		gridSize?: number,
		maxZoom?: number,
		zoomOnClick?: boolean,
		averageCenter?: boolean,
		minimumClusterSize?: number,
		ignoreHidden?: boolean,
		title?: string,
		calculator?: (
		markers: google.maps.Marker[], clusterIconStylesCount: number
	) => ClusterIconInfo,
		clusterClass?: string,
		styles?: ClusterIconStyle[],
		enableRetinaIcons?: boolean,
		batchSize?: number,
		batchSizeIE?: number,
		imagePath?: string,
		imageExtension?: string,
		imageSizes?: number[]
	}

	declare interface MarkerClusterer {
		new (
		map: google.maps.Map, opt_markers: google.maps.Marker[], opt_options?: MarkerClustererOptions
	): MarkerClusterer,
		onAdd(): void,
		onRemove(): void,
		draw(): void,
		setupStyles_(): void,
		fitMapToMarkers(): void,
		getGridSize(): number,
		setGridSize(gridSize: number): void,
		getMinimumClusterSize(): number,
		setMinimumClusterSize(minimumClusterSize: number): void,
		getMaxZoom(): number,
		setMaxZoom(maxZoom: number): void,
		getStyles(): ClusterIconStyle[],
		setStyles(styles: ClusterIconStyle[]): void,
		getTitle(): string,
		setTitle(title: string): void,
		getZoomOnClick(): boolean,
		setZoomOnClick(zoomOnClick: boolean): void,
		getAverageCenter(): boolean,
		setAverageCenter(averageCenter: boolean): void,
		getIgnoreHidden(): boolean,
		setIgnoreHidden(ignoreHidden: boolean): void,
		getEnableRetinaIcons(): boolean,
		setEnableRetinaIcons(enableRetinaIcons: boolean): void,
		getImageExtension(): string,
		setImageExtension(imageExtension: string): void,
		getImagePath(): string,
		setImagePath(imagePath: string): void,
		getImageSizes(): number[],
		setImageSizes(imageSizes: number[]): void,
		getCalculator(): Function,
		setCalculator(calculator: (marker: google.maps.Marker, value: number) => Function): void,
		setHideLabel(printable: boolean): void,
		getHideLabel(): boolean,
		getBatchSizeIE(): number,
		setBatchSizeIE(batchSizeIE: number): void,
		getClusterClass(): string,
		setClusterClass(clusterClass: string): void,
		getMarkers(): google.maps.Marker[],
		getTotalMarkers(): number,
		getClusters(): Cluster[],
		getTotalClusters(): number,
		addMarker(marker: google.maps.Marker, opt_nodraw: boolean): void,
		addMarkers(markers: google.maps.Marker[], opt_nodraw: boolean): void,
		pushMarkerTo_(marker: google.maps.Marker): void,
		removeMarker(marker: google.maps.Marker, opt_nodraw: boolean, noMapRemove: boolean): boolean,
		removeMarkers(
		markers: google.maps.Marker[], opt_nodraw: boolean, opt_noMapRemove: boolean
	): boolean,
		removeMarker_(marker: google.maps.Marker, removeFromMap: boolean): boolean,
		clearMarkers(): void,
		repaint(): void,
		getExtendedBounds(bounds: google.maps.LatLngBounds): google.maps.LatLngBounds,
		redraw_(): void,
		resetViewport_(opt_hide: boolean): void,
		distanceBetweenPoints_(p1: google.maps.LatLng, p2: google.maps.LatLng): number,
		isMarkerInBounds_(marker: google.maps.Marker, bounds: google.maps.LatLngBounds): boolean,
		addToClosestCluster_(marker: google.maps.Marker): void,
		createClusters_(iFirst: number): void,
		extend(obj1: Object, obj2: Object): Object,
		CALCULATOR(markers: google.maps.Marker[], numStyles: number): ClusterIconInfo,
		BATCH_SIZE: number,
		BATCH_SIZE_IE: number,
		IMAGE_PATH: string,
		IMAGE_EXTENSION: string,
		IMAGE_SIZES: number[]
	}

	declare interface String {
		trim(): string
	}

		declare class ClusterIconInfo extends undefined$OverlayView {
		text: string;
		index: number;
		title: string;
		constructor(cluster: Cluster, styles: ClusterIconStyle[]): this;
		onAdd(): void;
		onRemove(): void;
		draw(): void;
		hide(): void;
		show(): void;
		useStyle(sums: ClusterIconInfo[]): void;
		setCenter(center: google.maps.LatLng): void;
		createCss(pos: google.maps.Point): string;
		getPosFromLatLng_(latLng: google.maps.LatLng): google.maps.Point
	}

	
}