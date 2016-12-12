

declare module 'leaflet-0.7' {
					
}

declare module 'npm$namespace$L' {
	declare type LatLngExpression = LatLng | number[] | ({
		lat: number,
		lng: number
	});

	declare type LatLngBoundsExpression = LatLngBounds | LatLngExpression[];

	declare type PositionString = "topleft" | "topright" | "bottomleft" | "bottomright";

	declare export interface AttributionOptions {
		position?: PositionString,
		prefix?: string
	}

	declare export interface BoundsStatic {
		new (topLeft: Point, bottomRight: Point): Bounds,
		new (points: Point[]): Bounds
	}

	declare export interface Bounds {
		extend(point: Point): void,
		getCenter(): Point,
		contains(otherBounds: Bounds): boolean,
		contains(point: Point): boolean,
		intersects(otherBounds: Bounds): boolean,
		isValid(): boolean,
		getSize(): Point,
		min: Point,
		max: Point
	}

	declare export interface CircleStatic {
		new (latlng: LatLngExpression, radius: number, options?: PathOptions): Circle
	}

	declare export interface Circle {
		getLatLng(): LatLng,
		getRadius(): number,
		setLatLng(latlng: LatLngExpression): Circle,
		setRadius(radius: number): Circle,
		toGeoJSON(): GeoJSON.Feature<GeoJSON.Point>
	}

	declare export interface CircleMarkerStatic {
		new (latlng: LatLngExpression, options?: PathOptions): CircleMarker
	}

	declare export interface CircleMarker {
		setLatLng(latlng: LatLngExpression): CircleMarker,
		setRadius(radius: number): CircleMarker
	}

	declare export interface ClassExtendOptions {
		initialize?: Function,
		options?: any,
		includes?: any,
		static?: any,
		[prop: string]: any
	}

	declare export interface ClassStatic {
		extend(options: ClassExtendOptions): any,
		extend<Options, NewClass>(
		options: ClassExtendOptions
	): {
		new (options?: Options): NewClass
	},
		addInitHook(methodName: string, ...args: any[]): void
	}

	declare export interface ControlStatic {
		new (options?: ControlOptions): Control,
		Zoom: Control.ZoomStatic,
		Attribution: Control.AttributionStatic,
		Layers: Control.LayersStatic,
		Scale: Control.ScaleStatic
	}

	declare export interface Control {
		setPosition(position: PositionString): Control,
		getPosition(): PositionString,
		addTo(map: Map): Control,
		removeFrom(map: Map): Control,
		getContainer(): HTMLElement,
		onAdd(map: Map): HTMLElement,
		onRemove(map: Map): void
	}

	declare export interface control {
		(options?: ControlOptions): Control
	}

	declare export interface ControlOptions {
		position?: PositionString
	}

	declare export interface DivIconStatic {
		new (options: DivIconOptions): DivIcon
	}

	declare export interface DivIcon {
		
	}

	declare export interface DivIconOptions {
		iconSize?: Point | [number, number],
		iconAnchor?: Point | [number, number],
		className?: string,
		html?: string,
		popupAnchor?: Point | [number, number]
	}

	declare export interface DomEvent {
		addListener(el: HTMLElement, type: string, fn: (e: Event) => void, context?: any): DomEvent,
		on(el: HTMLElement, type: string, fn: (e: Event) => void, context?: any): DomEvent,
		removeListener(el: HTMLElement, type: string, fn: (e: Event) => void, context?: any): DomEvent,
		off(el: HTMLElement, type: string, fn: (e: Event) => void, context?: any): DomEvent,
		stopPropagation(e: Event): DomEvent,
		preventDefault(e: Event): DomEvent,
		stop(e: Event): DomEvent,
		disableClickPropagation(el: HTMLElement): DomEvent,
		getMousePosition(e: Event, container?: HTMLElement): Point,
		getWheelDelta(e: Event): number
	}

	declare export interface DraggableStatic {
		new (element: HTMLElement, dragHandle?: HTMLElement): Draggable
	}

	declare export interface Draggable {
		enable(): void,
		disable(): void,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Draggable,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): Draggable,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): Draggable,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Draggable,
		fire(type: string, data?: any): Draggable,
		addEventListener(eventMap: any, context?: any): Draggable,
		removeEventListener(eventMap?: any, context?: any): Draggable,
		clearAllEventListeners(): Draggable,
		on(eventMap: any, context?: any): Draggable,
		off(eventMap?: any, context?: any): Draggable
	}

	declare export interface FeatureGroupStatic {
		new <T>(layers?: T[]): FeatureGroup<T>
	}

	declare export interface FeatureGroup<T> {
		bindPopup(htmlContent: string, options?: PopupOptions): FeatureGroup<T>,
		getBounds(): LatLngBounds,
		setStyle(style: PathOptions): FeatureGroup<T>,
		bringToFront(): FeatureGroup<T>,
		bringToBack(): FeatureGroup<T>,
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): FeatureGroup<T>,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): FeatureGroup<T>,
		fire(type: string, data?: any): FeatureGroup<T>,
		addEventListener(eventMap: any, context?: any): FeatureGroup<T>,
		removeEventListener(eventMap?: any, context?: any): FeatureGroup<T>,
		clearAllEventListeners(): FeatureGroup<T>,
		on(eventMap: any, context?: any): FeatureGroup<T>,
		off(eventMap?: any, context?: any): FeatureGroup<T>
	}

	declare export interface GeoJSONStatic {
		new (geojson?: any, options?: GeoJSONOptions): GeoJSON,
		geometryToLayer(
		featureData: GeoJSON, pointToLayer?: (featureData: any, latlng: LatLng) => ILayer
	): ILayer,
		coordsToLatLng(coords: number[], reverse?: boolean): LatLng,
		coordsToLatLngs(coords: any[], levelsDeep?: number, reverse?: boolean): any[]
	}

	declare export interface GeoJSON {
		addData(data: any): boolean,
		setStyle(style: (featureData: any) => any): GeoJSON,
		setStyle(style: PathOptions): GeoJSON,
		resetStyle(layer: Path): GeoJSON
	}

	declare export interface GeoJSONOptions {
		pointToLayer?: (featureData: any, latlng: LatLng) => ILayer,
		style?: (featureData: any) => any,
		onEachFeature?: (featureData: any, layer: ILayer) => void,
		filter?: (featureData: any, layer: ILayer) => boolean,
		coordsToLatLng?: (coords: any[]) => LatLng[]
	}

	declare export interface IconStatic {
		new (options: IconOptions): Icon,
		Default: {
		new (options?: IconOptions): Icon.Default,
		imagePath: string
	}
	}

	declare export interface Icon {
		
	}

	declare export interface IconOptions {
		iconUrl?: string,
		iconRetinaUrl?: string,
		iconSize?: Point | [number, number],
		iconAnchor?: Point | [number, number],
		shadowUrl?: string,
		shadowRetinaUrl?: string,
		shadowSize?: Point | [number, number],
		shadowAnchor?: Point | [number, number],
		popupAnchor?: Point | [number, number],
		className?: string
	}

	declare export interface IControl {
		onAdd(map: Map): HTMLElement,
		onRemove(map: Map): void
	}

	declare export interface ICRS {
		projection: IProjection,
		transformation: Transformation,
		code: string,
		latLngToPoint(latlng: LatLng, zoom: number): Point,
		pointToLatLng(point: Point, zoom: number): LatLng,
		project(latlng: LatLng): Point,
		scale(zoom: number): number,
		getSize(zoom: number): Point
	}

	declare export interface IEventPowered<T> {
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): T,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): T,
		addEventListener(eventMap: any, context?: any): T,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): T,
		removeEventListener(eventMap?: any, context?: any): T,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): T,
		clearAllEventListeners(): T,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): T,
		on(eventMap: any, context?: any): T,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): T,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): T,
		off(eventMap?: any, context?: any): T,
		fire(type: string, data?: any): T
	}

	declare export interface IHandler {
		enable(): void,
		disable(): void,
		enabled(): boolean
	}

	declare export interface Handler {
		initialize(map: Map): void
	}

	declare export interface ILayer {
		onAdd(map: Map): void,
		onRemove(map: Map): void
	}

	declare export interface ImageOverlayStatic {
		new (
		imageUrl: string, bounds: LatLngBounds, options?: ImageOverlayOptions
	): ImageOverlay
	}

	declare export interface ImageOverlay {
		addTo(map: Map): ImageOverlay,
		setOpacity(opacity: number): ImageOverlay,
		setUrl(imageUrl: string): ImageOverlay,
		bringToFront(): ImageOverlay,
		bringToBack(): ImageOverlay,
		onAdd(map: Map): void,
		onRemove(map: Map): void
	}

	declare export interface ImageOverlayOptions {
		opacity?: number
	}

	declare export interface IProjection {
		project(latlng: LatLng): Point,
		unproject(point: Point): LatLng
	}

	declare export interface LatLngStatic {
		new (latitude: number, longitude: number): LatLng,
		new (coords: LatLngExpression): LatLng,
		DEG_TO_RAD: number,
		RAD_TO_DEG: number,
		MAX_MARGIN: number
	}

	declare export interface LatLng {
		distanceTo(otherLatlng: LatLngExpression): number,
		equals(otherLatlng: LatLngExpression): boolean,
		toString(): string,
		wrap(left?: number, right?: number): LatLng,
		lat: number,
		lng: number
	}

	declare export interface LatLngBoundsStatic {
		new (southWest: LatLngExpression, northEast: LatLngExpression): LatLngBounds,
		new (latlngs: LatLngBoundsExpression): LatLngBounds
	}

	declare export interface LatLngBounds {
		extend(latlng: LatLngExpression): LatLngBounds,
		extend(latlng: LatLngBoundsExpression): LatLngBounds,
		getSouthWest(): LatLng,
		getNorthEast(): LatLng,
		getNorthWest(): LatLng,
		getSouthEast(): LatLng,
		getWest(): number,
		getEast(): number,
		getNorth(): number,
		getSouth(): number,
		getCenter(): LatLng,
		contains(otherBounds: LatLngBoundsExpression): boolean,
		contains(latlng: LatLngExpression): boolean,
		intersects(otherBounds: LatLngBoundsExpression): boolean,
		equals(otherBounds: LatLngBoundsExpression): boolean,
		toBBoxString(): string,
		pad(bufferRatio: number): LatLngBounds,
		isValid(): boolean
	}

	declare export interface LayerGroupStatic {
		new <T>(layers?: T[]): LayerGroup<T>
	}

	declare export interface LayerGroup<T> {
		addTo(map: Map): LayerGroup<T>,
		addLayer(layer: T): LayerGroup<T>,
		removeLayer(layer: T): LayerGroup<T>,
		removeLayer(id: string): LayerGroup<T>,
		hasLayer(layer: T): boolean,
		getLayer(id: string): T,
		getLayers(): T[],
		clearLayers(): LayerGroup<T>,
		eachLayer(fn: (layer: T) => void, context?: any): LayerGroup<T>,
		toGeoJSON(
		
	): GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | GeoJSON.Feature<GeoJSON.MultiLineString | GeoJSON.MultiPolygon>,
		onAdd(map: Map): void,
		onRemove(map: Map): void
	}

	declare export interface LayersOptions {
		position?: PositionString,
		collapsed?: boolean,
		autoZIndex?: boolean
	}

	declare export interface LeafletErrorEvent {
		message: string,
		code: number
	}

	declare export interface LeafletEvent {
		type: string,
		target: any
	}

	declare export interface LeafletGeoJSONEvent {
		layer: ILayer,
		properties: any,
		geometryType: string,
		id: string
	}

	declare export interface LeafletLayerEvent {
		layer: ILayer
	}

	declare export interface LeafletLayersControlEvent {
		layer: ILayer,
		name: string
	}

	declare export interface LeafletLocationEvent {
		latlng: LatLng,
		bounds: LatLngBounds,
		accuracy: number,
		altitude: number,
		altitudeAccuracy: number,
		heading: number,
		speed: number,
		timestamp: number
	}

	declare export interface LeafletMouseEvent {
		latlng: LatLng,
		layerPoint: Point,
		containerPoint: Point,
		originalEvent: MouseEvent
	}

	declare export interface LeafletPopupEvent {
		popup: Popup
	}

	declare export interface LeafletDragEndEvent {
		distance: number
	}

	declare export interface LeafletResizeEvent {
		oldSize: Point,
		newSize: Point
	}

	declare export interface LeafletTileEvent {
		tile: HTMLElement,
		url: string
	}

	declare export interface LocateOptions {
		watch?: boolean,
		setView?: boolean,
		maxZoom?: number,
		timeout?: number,
		maximumAge?: number,
		enableHighAccuracy?: boolean
	}

	declare export interface MapStatic {
		new (id: HTMLElement, options?: Map.MapOptions): Map,
		new (id: string, options?: Map.MapOptions): Map
	}

	declare export interface Map {
		setView(center: LatLngExpression, zoom?: number, options?: Map.ZoomPanOptions): Map,
		setZoom(zoom: number, options?: Map.ZoomPanOptions): Map,
		zoomIn(delta?: number, options?: Map.ZoomPanOptions): Map,
		zoomOut(delta?: number, options?: Map.ZoomPanOptions): Map,
		setZoomAround(latlng: LatLngExpression, zoom: number, options?: Map.ZoomPanOptions): Map,
		fitBounds(bounds: LatLngBounds, options?: Map.FitBoundsOptions): Map,
		fitWorld(options?: Map.FitBoundsOptions): Map,
		panTo(latlng: LatLngExpression, options?: PanOptions): Map,
		panInsideBounds(bounds: LatLngBounds): Map,
		panBy(point: Point, options?: PanOptions): Map,
		invalidateSize(options: Map.ZoomPanOptions): Map,
		invalidateSize(animate: boolean): Map,
		setMaxBounds(bounds: LatLngBounds, options?: Map.ZoomPanOptions): Map,
		locate(options?: LocateOptions): Map,
		stopLocate(): Map,
		remove(): Map,
		getCenter(): LatLng,
		getZoom(): number,
		getMinZoom(): number,
		getMaxZoom(): number,
		getBounds(): LatLngBounds,
		getBoundsZoom(bounds: LatLngBounds, inside?: boolean): number,
		getSize(): Point,
		getPixelBounds(): Bounds,
		getPixelOrigin(): Point,
		addLayer(layer: ILayer, insertAtTheBottom?: boolean): Map,
		removeLayer(layer: ILayer): Map,
		hasLayer(layer: ILayer): boolean,
		openPopup(popup: Popup): Map,
		openPopup(html: string, latlng: LatLngExpression, options?: PopupOptions): Map,
		openPopup(el: HTMLElement, latlng: LatLngExpression, options?: PopupOptions): Map,
		closePopup(popup?: Popup): Map,
		addControl(control: IControl): Map,
		removeControl(control: IControl): Map,
		latLngToLayerPoint(latlng: LatLngExpression): Point,
		layerPointToLatLng(point: Point): LatLng,
		containerPointToLayerPoint(point: Point): Point,
		layerPointToContainerPoint(point: Point): Point,
		latLngToContainerPoint(latlng: LatLngExpression): Point,
		containerPointToLatLng(point: Point): LatLng,
		project(latlng: LatLngExpression, zoom?: number): Point,
		unproject(point: Point, zoom?: number): LatLng,
		mouseEventToContainerPoint(event: LeafletMouseEvent): Point,
		mouseEventToLayerPoint(event: LeafletMouseEvent): Point,
		mouseEventToLatLng(event: LeafletMouseEvent): LatLng,
		getContainer(): HTMLElement,
		getPanes(): MapPanes,
		whenReady(fn: (map: Map) => void, context?: any): Map,
		dragging: IHandler,
		touchZoom: IHandler,
		doubleClickZoom: IHandler,
		scrollWheelZoom: IHandler,
		boxZoom: IHandler,
		keyboard: IHandler,
		tap: IHandler,
		zoomControl: Control.Zoom,
		attributionControl: Control.Attribution,
		options: Map.MapOptions,
		eachLayer(fn: (layer: ILayer) => void, context?: any): Map,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Map,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Map,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Map,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): Map,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): Map,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): Map,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Map,
		fire(type: string, data?: any): Map,
		addEventListener(eventMap: any, context?: any): Map,
		removeEventListener(eventMap?: any, context?: any): Map,
		clearAllEventListeners(): Map,
		on(eventMap: any, context?: any): Map,
		off(eventMap?: any, context?: any): Map
	}

	declare export interface MapPanes {
		mapPane: HTMLElement,
		tilePane: HTMLElement,
		objectsPane: HTMLElement,
		shadowPane: HTMLElement,
		overlayPane: HTMLElement,
		markerPane: HTMLElement,
		popupPane: HTMLElement
	}

	declare export interface Marker {
		addTo(map: Map): Marker,
		getLatLng(): LatLng,
		setLatLng(latlng: LatLngExpression): Marker,
		setIcon(icon: Icon): Marker,
		setZIndexOffset(offset: number): Marker,
		setOpacity(opacity: number): Marker,
		update(): Marker,
		bindPopup(html: string, options?: PopupOptions): Marker,
		bindPopup(el: HTMLElement, options?: PopupOptions): Marker,
		bindPopup(popup: Popup, options?: PopupOptions): Marker,
		unbindPopup(): Marker,
		openPopup(): Marker,
		getPopup(): Popup,
		closePopup(): Marker,
		togglePopup(): Marker,
		setPopupContent(html: string, options?: PopupOptions): Marker,
		setPopupContent(el: HTMLElement, options?: PopupOptions): Marker,
		toGeoJSON(): GeoJSON.Feature<GeoJSON.Point>,
		dragging: IHandler,
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Marker,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): Marker,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): Marker,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Marker,
		fire(type: string, data?: any): Marker,
		addEventListener(eventMap: any, context?: any): Marker,
		removeEventListener(eventMap?: any, context?: any): Marker,
		clearAllEventListeners(): Marker,
		on(eventMap: any, context?: any): Marker,
		off(eventMap?: any, context?: any): Marker
	}

	declare export interface MarkerOptions {
		icon?: Icon,
		clickable?: boolean,
		draggable?: boolean,
		keyboard?: boolean,
		title?: string,
		alt?: string,
		zIndexOffset?: number,
		opacity?: number,
		riseOnHover?: boolean,
		riseOffset?: number
	}

	declare export interface MultiPolygonStatic {
		new (latlngs: LatLng[][], options?: PolylineOptions): MultiPolygon
	}

	declare export interface MultiPolygon {
		setLatLngs(latlngs: LatLng[][]): MultiPolygon,
		getLatLngs(): LatLng[][],
		openPopup(): MultiPolygon,
		toGeoJSON(): GeoJSON.Feature<GeoJSON.MultiPolygon>
	}

	declare export interface MultiPolylineStatic {
		new (latlngs: LatLng[][], options?: PolylineOptions): MultiPolyline
	}

	declare export interface MultiPolyline {
		setLatLngs(latlngs: LatLng[][]): MultiPolyline,
		getLatLngs(): LatLng[][],
		openPopup(): MultiPolyline,
		toGeoJSON(): GeoJSON.Feature<GeoJSON.MultiLineString>
	}

	declare export interface PanOptions {
		animate?: boolean,
		duration?: number,
		easeLinearity?: number,
		noMoveStart?: boolean
	}

	declare export interface Path {
		addTo(map: Map): Path,
		bindPopup(html: string, options?: PopupOptions): Path,
		bindPopup(el: HTMLElement, options?: PopupOptions): Path,
		bindPopup(popup: Popup, options?: PopupOptions): Path,
		unbindPopup(): Path,
		openPopup(latlng?: LatLngExpression): Path,
		closePopup(): Path,
		setStyle(object: PathOptions): Path,
		getBounds(): LatLngBounds,
		bringToFront(): Path,
		bringToBack(): Path,
		redraw(): Path,
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Path,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Path,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Path,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): Path,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): Path,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): Path,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Path,
		fire(type: string, data?: any): Path,
		addEventListener(eventMap: any, context?: any): Path,
		removeEventListener(eventMap?: any, context?: any): Path,
		clearAllEventListeners(): Path,
		on(eventMap: any, context?: any): Path,
		off(eventMap?: any, context?: any): Path
	}

	declare export interface PathOptions {
		stroke?: boolean,
		color?: string,
		weight?: number,
		opacity?: number,
		fill?: boolean,
		fillColor?: string,
		fillOpacity?: number,
		dashArray?: string,
		lineCap?: string,
		lineJoin?: string,
		clickable?: boolean,
		pointerEvents?: string,
		className?: string,
		radius?: number
	}

	declare export interface PointStatic {
		new (x: number, y: number, round?: boolean): Point
	}

	declare export interface Point {
		add(otherPoint: Point): Point,
		subtract(otherPoint: Point): Point,
		multiplyBy(number: number): Point,
		divideBy(number: number, round?: boolean): Point,
		distanceTo(otherPoint: Point): number,
		clone(): Point,
		round(): Point,
		equals(otherPoint: Point): boolean,
		toString(): string,
		x: number,
		y: number
	}

	declare export interface PolygonStatic {
		new (latlngs: LatLngBoundsExpression, options?: PolylineOptions): Polygon
	}

	declare export interface Polygon {
		
	}

	declare export interface PolylineStatic {
		new (latlngs: LatLngBoundsExpression, options?: PolylineOptions): Polyline
	}

	declare export interface Polyline {
		addLatLng(latlng: LatLngExpression): Polyline,
		setLatLngs(latlngs: LatLngBoundsExpression): Polyline,
		getLatLngs(): LatLng[],
		spliceLatLngs(index: number, pointsToRemove: number, ...latlngs: LatLng[]): LatLng[],
		getBounds(): LatLngBounds,
		toGeoJSON(): GeoJSON.Feature<GeoJSON.LineString>
	}

	declare export interface PolylineOptions {
		smoothFactor?: number,
		noClip?: boolean
	}

	declare export interface PopupStatic {
		new (options?: PopupOptions, source?: any): Popup
	}

	declare export interface Popup {
		addTo(map: Map): Popup,
		openOn(map: Map): Popup,
		setLatLng(latlng: LatLngExpression): Popup,
		getLatLng(): LatLng,
		setContent(html: string): Popup,
		setContent(el: HTMLElement): Popup,
		getContent(): HTMLElement,
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		update(): Popup
	}

	declare export interface PopupOptions {
		maxWidth?: number,
		minWidth?: number,
		maxHeight?: number,
		autoPan?: boolean,
		keepInView?: boolean,
		closeButton?: boolean,
		offset?: Point,
		autoPanPaddingTopLeft?: Point,
		autoPanPaddingBottomRight?: Point,
		autoPanPadding?: Point,
		zoomAnimation?: boolean,
		closeOnClick?: boolean,
		className?: string
	}

	declare export interface PosAnimationStatic {
		new (): PosAnimation
	}

	declare export interface PosAnimation {
		run(
		element: HTMLElement, newPos: Point, duration?: number, easeLinearity?: number
	): PosAnimation,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): PosAnimation,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): PosAnimation,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): PosAnimation,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): PosAnimation,
		fire(type: string, data?: any): PosAnimation,
		addEventListener(eventMap: any, context?: any): PosAnimation,
		removeEventListener(eventMap?: any, context?: any): PosAnimation,
		clearAllEventListeners(): PosAnimation,
		on(eventMap: any, context?: any): PosAnimation,
		off(eventMap?: any, context?: any): PosAnimation
	}

	declare export interface RectangleStatic {
		new (bounds: LatLngBounds, options?: PathOptions): Rectangle
	}

	declare export interface Rectangle {
		setBounds(bounds: LatLngBounds): Rectangle
	}

	declare export interface ScaleOptions {
		position?: PositionString,
		maxWidth?: number,
		metric?: boolean,
		imperial?: boolean,
		updateWhenIdle?: boolean
	}

	declare export interface TileLayerStatic {
		new (urlTemplate: string, options?: TileLayerOptions): TileLayer,
		WMS: {
		new (baseUrl: string, options: WMSOptions): TileLayer.WMS
	},
		Canvas: {
		new (options?: TileLayerOptions): TileLayer.Canvas
	}
	}

	declare export interface TileLayer {
		addTo(map: Map): TileLayer,
		bringToFront(): TileLayer,
		bringToBack(): TileLayer,
		setOpacity(opacity: number): TileLayer,
		setZIndex(zIndex: number): TileLayer,
		redraw(): TileLayer,
		setUrl(urlTemplate: string): TileLayer,
		getContainer(): HTMLElement,
		onAdd(map: Map): void,
		onRemove(map: Map): void,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): TileLayer,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): TileLayer,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): TileLayer,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): TileLayer,
		fire(type: string, data?: any): TileLayer,
		addEventListener(eventMap: any, context?: any): TileLayer,
		removeEventListener(eventMap?: any, context?: any): TileLayer,
		clearAllEventListeners(): TileLayer,
		on(eventMap: any, context?: any): TileLayer,
		off(eventMap?: any, context?: any): TileLayer
	}

	declare export interface TileLayerFactory {
		(urlTemplate: string, options?: TileLayerOptions): TileLayer,
		wms(baseUrl: string, options: WMSOptions): L.TileLayer.WMS,
		canvas(options?: TileLayerOptions): L.TileLayer.Canvas
	}

	declare export interface TileLayerOptions {
		minZoom?: number,
		maxZoom?: number,
		maxNativeZoom?: number,
		tileSize?: number,
		subdomains?: string | string[],
		errorTileUrl?: string,
		attribution?: string,
		tms?: boolean,
		continuousWorld?: boolean,
		noWrap?: boolean,
		zoomOffset?: number,
		zoomReverse?: boolean,
		opacity?: number,
		zIndex?: number,
		unloadInvisibleTiles?: boolean,
		updateWhenIdle?: boolean,
		detectRetina?: boolean,
		reuseTiles?: boolean,
		bounds?: LatLngBounds,
		[additionalKeys: string]: any
	}

	declare export interface TransformationStatic {
		new (a: number, b: number, c: number, d: number): Transformation
	}

	declare export interface Transformation {
		transform(point: Point, scale?: number): Point,
		untransform(point: Point, scale?: number): Point
	}

	declare export interface WMSOptions {
		layers?: string,
		styles?: string,
		format?: string,
		transparent?: boolean,
		version?: string
	}

	declare export function bounds(topLeft: Point, bottomRight: Point): Bounds

	declare export function bounds(points: Point[]): Bounds

	declare function circle(latlng: LatLngExpression, radius: number, options?: PathOptions): Circle

	declare function circleMarker(latlng: LatLngExpression, options?: PathOptions): CircleMarker

	declare function divIcon(options: DivIconOptions): DivIcon

	declare function featureGroup<T>(layers?: T[]): FeatureGroup<T>

	declare function geoJson(geojson?: any, options?: GeoJSONOptions): GeoJSON

	declare function icon(options: IconOptions): Icon

	declare function imageOverlay(
		imageUrl: string, bounds: LatLngBounds, options?: ImageOverlayOptions
	): ImageOverlay

	declare export function noConflict(): typeof L

	declare function latLng(latitude: number, longitude: number): LatLng

	declare function latLng(coords: LatLngExpression): LatLng

	declare function latLngBounds(southWest: LatLngExpression, northEast: LatLngExpression): LatLngBounds

	declare function latLngBounds(latlngs: LatLngBoundsExpression): LatLngBounds

	declare function layerGroup<T>(layers?: T[]): LayerGroup<T>

	declare function map(id: HTMLElement, options?: Map.MapOptions): Map

	declare function map(id: string, options?: Map.MapOptions): Map

	declare function marker(latlng: LatLngExpression, options?: MarkerOptions): Marker

	declare function multiPolygon(latlngs: LatLng[][], options?: PolylineOptions): MultiPolygon

	declare function multiPolyline(latlngs: LatLng[][], options?: PolylineOptions): MultiPolyline

	declare function point(x: number, y: number, round?: boolean): Point

	declare function polygon(latlngs: LatLngBoundsExpression, options?: PolylineOptions): Polygon

	declare function polyline(latlngs: LatLngBoundsExpression, options?: PolylineOptions): Polyline

	declare function popup(options?: PopupOptions, source?: any): Popup

	declare function rectangle(bounds: LatLngBounds, options?: PathOptions): Rectangle

		
}

declare module 'Class' {
			declare function extend(options: ClassExtendOptions): any

		
}

declare module 'Control' {
		declare export interface ZoomStatic {
		new (options?: ZoomOptions): Zoom
	}

	declare export interface Zoom {
		
	}

	declare export interface ZoomOptions {
		position?: PositionString,
		zoomInText?: string,
		zoomOutText?: string,
		zoomInTitle?: string,
		zoomOutTitle?: string
	}

	declare export interface AttributionStatic {
		new (options?: AttributionOptions): Attribution
	}

	declare export interface Attribution {
		setPrefix(prefix: string): Attribution,
		addAttribution(text: string): Attribution,
		removeAttribution(text: string): Attribution
	}

	declare export interface LayersStatic {
		new (baseLayers?: any, overlays?: any, options?: LayersOptions): Layers
	}

	declare export interface Layers {
		addBaseLayer(layer: ILayer, name: string): Layers,
		addOverlay(layer: ILayer, name: string): Layers,
		removeLayer(layer: ILayer): Layers,
		addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers,
		addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers,
		removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Layers,
		hasEventListeners(type: string): boolean,
		fireEvent(type: string, data?: any): Layers,
		on(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers,
		once(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers,
		off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Layers,
		fire(type: string, data?: any): Layers,
		addEventListener(eventMap: any, context?: any): Layers,
		removeEventListener(eventMap?: any, context?: any): Layers,
		clearAllEventListeners(): Layers,
		on(eventMap: any, context?: any): Layers,
		off(eventMap?: any, context?: any): Layers
	}

	declare export interface ScaleStatic {
		new (options?: ScaleOptions): Scale
	}

	declare export interface Scale {
		
	}

			
}

declare module 'control' {
			declare export function zoom(options?: Control.ZoomOptions): L.Control.Zoom

	declare export function attribution(options?: AttributionOptions): L.Control.Attribution

	declare export function layers(baseLayers?: any, overlays?: any, options?: LayersOptions): L.Control.Layers

	declare export function scale(options?: ScaleOptions): L.Control.Scale

		
}

declare module 'CRS' {
					
}

declare module 'DomUtil' {
			declare export function get(id: string): HTMLElement

	declare export function getStyle(el: HTMLElement, style: string): string

	declare export function getViewportOffset(el: HTMLElement): Point

	declare export function create(tagName: string, className: string, container?: HTMLElement): HTMLElement

	declare export function disableTextSelection(): void

	declare export function enableTextSelection(): void

	declare export function hasClass(el: HTMLElement, name: string): boolean

	declare export function addClass(el: HTMLElement, name: string): void

	declare export function removeClass(el: HTMLElement, name: string): void

	declare export function setOpacity(el: HTMLElement, value: number): void

	declare export function testProp(props: string[]): any

	declare export function getTranslateString(point: Point): string

	declare export function getScaleString(scale: number, origin: Point): string

	declare export function setPosition(el: HTMLElement, point: Point, disable3D?: boolean): void

	declare export function getPosition(el: HTMLElement): Point

		
}

declare module 'Icon' {
		declare export interface Default {
		
	}

			
}

declare module 'Mixin' {
		declare export interface LeafletMixinEvents {
		
	}

			
}

declare module 'LineUtil' {
			declare export function simplify(points: Point[], tolerance: number): Point[]

	declare export function pointToSegmentDistance(p: Point, p1: Point, p2: Point): number

	declare export function closestPointOnSegment(p: Point, p1: Point, p2: Point): Point

	declare export function clipSegment(a: Point, b: Point, bounds: Bounds): Point[] | boolean

		
}

declare module 'Map' {
		declare export interface MapOptions {
		center?: LatLng,
		zoom?: number,
		layers?: ILayer[],
		minZoom?: number,
		maxZoom?: number,
		maxBounds?: LatLngBounds,
		crs?: ICRS,
		dragging?: boolean,
		touchZoom?: boolean,
		scrollWheelZoom?: boolean,
		doubleClickZoom?: boolean,
		boxZoom?: boolean,
		tap?: boolean,
		tapTolerance?: number,
		trackResize?: boolean,
		worldCopyJump?: boolean,
		closePopupOnClick?: boolean,
		keyboard?: boolean,
		keyboardPanOffset?: number,
		keyboardZoomOffset?: number,
		inertia?: boolean,
		inertiaDeceleration?: number,
		inertiaMaxSpeed?: number,
		inertiaThreshold?: number,
		zoomControl?: boolean,
		attributionControl?: boolean,
		fadeAnimation?: boolean,
		zoomAnimation?: boolean,
		zoomAnimationThreshold?: number,
		markerZoomAnimation?: boolean,
		bounceAtZoomLimits?: boolean
	}

	declare export interface ZoomOptions {
		animate?: boolean
	}

	declare export interface ZoomPanOptions {
		reset?: boolean,
		pan?: PanOptions,
		zoom?: ZoomOptions,
		animate?: boolean,
		debounceMoveend?: boolean,
		duration?: number,
		easeLinearity?: number,
		noMoveStart?: boolean
	}

	declare export interface FitBoundsOptions {
		paddingTopLeft?: Point,
		paddingBottomRight?: Point,
		padding?: Point,
		maxZoom?: number
	}

			
}

declare module 'PolyUtil' {
			declare export function clipPolygon(points: Point[], bounds: Bounds): Point[]

		
}

declare module 'Projection' {
					
}

declare module 'TileLayer' {
		declare export interface WMS {
		setParams(params: WMS, noRedraw?: boolean): WMS
	}

	declare export interface Canvas {
		drawTile(canvas: HTMLCanvasElement, tilePoint: Point, zoom: number): Canvas,
		redraw(): Canvas
	}

			
}

declare module 'Util' {
			declare export function extend(dest: any, ...sources: any[]): any

	declare export function bind<T>(fn: T, obj: any): T

	declare export function stamp(obj: any): string

	declare export function limitExecByInterval<T>(fn: T, time: number, context?: any): T

	declare export function falseFn(): () => boolean

	declare export function formatNum(num: number, digits: number): number

	declare export function splitWords(str: string): string[]

	declare export function setOptions(obj: any, options: any): any

	declare export function getParamString(obj: any): string

	declare export function template(str: string, data: any): string

	declare export function isArray(obj: any): boolean

	declare export function trim(str: string): string

		
}

declare module 'leaflet' {
					declare module.exports: undefined


}