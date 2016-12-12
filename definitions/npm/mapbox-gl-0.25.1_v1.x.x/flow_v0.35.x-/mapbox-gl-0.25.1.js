

declare module 'mapbox-gl-0.25.1' {
					
}

declare module 'npm$namespace$mapboxgl' {
		declare export interface MapboxOptions {
		attributionControl?: boolean,
		bearing?: number,
		bearingSnap?: number,
		boxZoom?: boolean,
		center?: mapboxgl.LngLat | number[],
		classes?: string[],
		container?: string | Element,
		dragPan?: boolean,
		dragRotate?: boolean,
		doubleClickZoom?: boolean,
		hash?: boolean,
		failIfMayorPerformanceCaveat?: boolean,
		interactive?: boolean,
		keyboard?: boolean,
		maxBounds?: mapboxgl.LngLatBounds | number[][],
		maxZoom?: number,
		minZoom?: number,
		preserveDrawingBuffer?: boolean,
		pitch?: number,
		scrollZoom?: boolean,
		style?: mapboxgl.Style | string,
		trackResize?: boolean,
		touchZoomRotate?: boolean,
		zoom?: number
	}

	declare export interface ControlOptions {
		position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
	}

	declare export interface PopupOptions {
		closeButton?: boolean,
		closeOnClick?: boolean,
		anchor?: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
		offset?: number | Point | number[] | {
		[key: string]: Point | number[]
	}
	}

	declare export interface Style {
		bearing?: number,
		center?: number[],
		glyphs?: string,
		layers?: Layer[],
		metadata?: any,
		name?: string,
		pitch?: number,
		sources?: any,
		sprite?: string,
		transition?: Transition,
		version: number,
		zoom?: number
	}

	declare export interface Transition {
		delay?: number,
		duration?: number
	}

	declare export interface Source {
		type: "vector" | "raster" | "geojson" | "image" | "video"
	}

	declare export interface GeoJSONSourceRaw {
		type: "geojson"
	}

	declare export interface GeoJSONSourceOptions {
		data?: GeoJSON.Feature<GeoJSON.GeometryObject> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | string,
		maxzoom?: number,
		buffer?: number,
		tolerance?: number,
		cluster?: number | boolean,
		clusterRadius?: number,
		clusterMaxZoom?: number
	}

	declare export interface VideoSourceOptions {
		urls?: string[],
		coordinates?: number[][]
	}

	declare export interface ImageSourceOptions {
		url?: string,
		coordinates?: number[][]
	}

	declare interface VectorSource {
		type: "vector",
		url?: string,
		tiles?: string[],
		minzoom?: number,
		maxzoom?: number
	}

	declare interface RasterSource {
		type: "raster",
		url: string,
		tiles?: string[],
		minzoom?: number,
		maxzoom?: number,
		tileSize?: number
	}

	declare export interface StyleOptions {
		transition?: boolean
	}

	declare export interface AnimationOptions {
		duration?: number,
		easing?: Function,
		offset?: Point | number[],
		animate?: boolean
	}

	declare export interface CameraOptions {
		center?: mapboxgl.LngLat | number[],
		zoom?: number,
		bearing?: number,
		pitch?: number,
		around?: mapboxgl.LngLat | number[]
	}

	declare export interface FlyToOptions {
		curve?: number,
		minZoom?: number,
		speed?: number,
		screenSpeed?: number,
		easing?: Function
	}

	declare export interface MapEvent {
		webglcontextlost?: {
		originalEvent: WebGLContextEvent
	},
		webglcontextrestored?: {
		originalEvent: WebGLContextEvent
	},
		render?: void,
		contextmenu?: {
		data: mapboxgl.MapMouseEvent
	},
		dblclick?: {
		data: mapboxgl.MapMouseEvent
	},
		click?: {
		data: mapboxgl.MapMouseEvent
	},
		touchcancel?: {
		data: mapboxgl.MapTouchEvent
	},
		touchmove?: {
		data: mapboxgl.MapTouchEvent
	},
		touchend?: {
		data: mapboxgl.MapTouchEvent
	},
		touchstart?: {
		data: mapboxgl.MapTouchEvent
	},
		mousemove?: {
		data: mapboxgl.MapMouseEvent
	},
		mouseup?: {
		data: mapboxgl.MapMouseEvent
	},
		mousedown?: {
		data: mapboxgl.MapMouseEvent
	},
		moveend?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		move?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		movestart?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		mouseout?: {
		data: mapboxgl.MapMouseEvent
	},
		load?: void,
		zoomend?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		zoom?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		zoomstart?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		boxzoomcancel?: {
		data: mapboxgl.MapBoxZoomEvent
	},
		boxzoomstart?: {
		data: mapboxgl.MapBoxZoomEvent
	},
		boxzoomend?: {
		data: mapboxgl.MapBoxZoomEvent
	},
		rotate?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		rotatestart?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		rotateend?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		drag?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		dragend?: {
		data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent
	},
		pitch?: {
		data: mapboxgl.EventData
	}
	}

	declare export interface Layer {
		id: string,
		type?: "fill" | "line" | "symbol" | "circle" | "raster" | "background" | string,
		metadata?: any,
		ref?: string,
		source?: string,
		source-layer?: string,
		minzoom?: number,
		maxzoom?: number,
		interactive?: boolean,
		filter?: any[],
		layout?: BackgroundLayout | FillLayout | LineLayout | SymbolLayout | RasterLayout | CircleLayout,
		paint?: BackgroundPaint | FillPaint | LinePaint | SymbolPaint | RasterPaint | CirclePaint
	}

	declare export interface StyleFunction {
		stops: any[][],
		property?: string,
		base?: number,
		type?: "continuous" | "interval" | "categorical"
	}

	declare export interface BackgroundLayout {
		visibility?: "visible" | "none"
	}

	declare export interface BackgroundPaint {
		background-color?: string,
		background-pattern?: string,
		background-opacity?: number
	}

	declare export interface FillLayout {
		visibility?: "visible" | "none"
	}

	declare export interface FillPaint {
		fill-antialias?: boolean,
		fill-opacity?: number | StyleFunction,
		fill-color?: string | StyleFunction,
		fill-outline-color: string | StyleFunction,
		fill-translate?: number[],
		fill-translate-anchor?: "map" | "viewport",
		fill-pattern?: "string"
	}

	declare export interface LineLayout {
		visibility?: "visible" | "none",
		line-cap?: "butt" | "round" | "square",
		line-join?: "bevel" | "round" | "miter",
		line-miter-limit?: number,
		line-round-limit?: number
	}

	declare export interface LinePaint {
		line-opacity?: number,
		line-color?: string | StyleFunction,
		line-translate?: number[],
		line-translate-anchor?: "map" | "viewport",
		line-width?: number,
		line-gap-width?: number,
		line-offset?: number,
		line-blur?: number,
		line-dasharray?: number[],
		line-dasharray-transition?: Transition,
		line-pattern?: string
	}

	declare export interface SymbolLayout {
		visibility?: "visible" | "none",
		symbol-placement?: "point" | "line",
		symbol-spacing?: number,
		symbol-avoid-edges?: boolean,
		icon-allow-overlap?: boolean,
		icon-ignore-placement?: boolean,
		icon-optional?: boolean,
		icon-rotation-alignment?: "map" | "viewport" | "auto",
		icon-size?: number,
		icon-text-fit?: "none" | "both" | "width" | "height",
		icon-text-fit-padding?: number[],
		icon-image?: string,
		icon-rotate?: number | StyleFunction,
		icon-padding?: number,
		icon-keep-upright?: boolean,
		icon-offset?: number[],
		text-pitch-alignment?: "map" | "viewport" | "auto",
		text-rotation-alignment?: "map" | "viewport" | "auto",
		text-field?: string,
		text-font?: string | string[],
		text-size?: number,
		text-max-width?: number,
		text-line-height?: number,
		text-letter-spacing?: number,
		text-justify?: "left" | "center" | "right",
		text-anchor?: "center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
		text-max-angle?: number,
		text-rotate?: number,
		text-padding?: number,
		text-keep-upright?: boolean,
		text-transform?: "none" | "uppercase" | "lowercase",
		text-offset?: number[],
		text-allow-overlap?: boolean,
		text-ignore-placement?: boolean,
		text-optional?: boolean
	}

	declare export interface SymbolPaint {
		icon-opacity?: number,
		icon-color?: string,
		icon-halo-color?: string,
		icon-halo-width?: number,
		icon-halo-blur?: number,
		icon-translate?: number[],
		icon-translate-anchor?: "map" | "viewport",
		text-opacity?: number,
		text-color?: "string",
		text-halo-color?: "string",
		text-halo-width?: number,
		text-halo-blur?: number,
		text-translate?: number[],
		text-translate-anchor?: "map" | "viewport"
	}

	declare export interface RasterLayout {
		visibility?: "visible" | "none"
	}

	declare export interface RasterPaint {
		raster-opacity?: number,
		raster-hue-rotate?: number,
		raster-brightness-min?: number,
		raster-brightness-max?: number,
		raster-saturation?: number,
		raster-contrast?: number,
		raster-fade-duration?: number
	}

	declare export interface CircleLayout {
		visibility?: "visible" | "none"
	}

	declare export interface CirclePaint {
		circle-radius?: number | StyleFunction,
		circle-radius-transition?: Transition,
		circle-color?: number | StyleFunction,
		circle-blur?: number | StyleFunction,
		circle-opacity?: number | StyleFunction,
		circle-translate?: number[],
		circle-translate-anchor?: "map" | "viewport",
		circle-pitch-scale?: "map" | "viewport"
	}

	declare export function supported(options?: {
		failIfMajorPerformanceCaveat?: boolean
	}): boolean

	declare export class Map extends Evented {
		constructor(options?: MapboxOptions): this;
		addControl(control: Control): this;
		addClass(klass: string, options?: mapboxgl.StyleOptions): this;
		removeClass(klass: string, options?: mapboxgl.StyleOptions): this;
		setClasses(klasses: string[], options?: mapboxgl.StyleOptions): this;
		hasClass(klass: string): boolean;
		getClasses(): string[];
		resize(): this;
		getBounds(): mapboxgl.LngLatBounds;
		setMaxBounds(lnglatbounds?: mapboxgl.LngLatBounds | number[][]): this;
		setMinZoom(minZoom?: number): this;
		setMaxZoom(maxZoom?: number): this;
		project(lnglat: mapboxgl.LngLat | number[]): mapboxgl.Point;
		unproject(point: mapboxgl.Point | number[]): mapboxgl.LngLat;
		queryRenderedFeatures(
		pointOrBox?: mapboxgl.Point | number[] | mapboxgl.Point[] | number[][], parameters?: {
		layers?: string[],
		filter?: any[]
	}
	): GeoJSON.Feature<GeoJSON.GeometryObject>[];
		querySourceFeatures(
		sourceID: string, parameters: {
		sourceLayer?: string,
		filter?: any[]
	}
	): GeoJSON.Feature<GeoJSON.GeometryObject>[];
		setStyle(style: mapboxgl.Style | string): this;
		getStyle(): mapboxgl.Style;
		addSource(
		id: string, source: VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw
	): this;
		removeSource(id: string): this;
		getSource(
		id: string
	): VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource;
		addLayer(layer: mapboxgl.Layer, before?: string): this;
		removeLayer(id: string): this;
		getLayer(id: string): mapboxgl.Layer;
		setFilter(layer: string, filter: any[]): this;
		setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;
		getFilter(layer: string): any[];
		setPaintProperty(layer: string, name: string, value: any, klass?: string): this;
		getPaintProperty(layer: string, name: string, klass?: string): any;
		setLayoutProperty(layer: string, name: string, value: any): this;
		getLayoutProperty(layer: string, name: string, klass?: string): any;
		getContainer(): HTMLElement;
		getCanvasContainer(): HTMLElement;
		getCanvas(): HTMLCanvasElement;
		loaded(): boolean;
		remove(): void;
		onError(): void;
		showTileBoundaries: boolean;
		showCollisionBoxes: boolean;
		repaint: boolean;
		getCenter(): mapboxgl.LngLat;
		setCenter(center: LngLat | number[], eventData?: mapboxgl.EventData): this;
		panBy(
		offset: number[], options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData
	): this;
		panTo(
		lnglat: mapboxgl.LngLat, options?: mapboxgl.AnimationOptions, eventdata?: mapboxgl.EventData
	): this;
		getZoom(): number;
		setZoom(zoom: number, eventData?: mapboxgl.EventData): this;
		zoomTo(
		zoom: number, options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData
	): this;
		zoomIn(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;
		zoomOut(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;
		getBearing(): number;
		setBearing(bearing: number, eventData?: mapboxgl.EventData): this;
		rotateTo(
		bearing: number, options?: mapboxgl.AnimationOptions, eventData?: EventData
	): this;
		resetNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;
		snapToNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;
		getPitch(): number;
		setPitch(pitch: number, eventData?: EventData): this;
		fitBounds(
		bounds: mapboxgl.LngLatBounds | number[][], options?: {
		linear?: boolean,
		easing?: Function,
		padding?: number,
		offset?: Point | number[],
		maxZoom?: number
	}
	): this;
		jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;
		easeTo(
		options: mapboxgl.CameraOptions | mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData
	): this;
		flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): this;
		stop(): this;
		scrollZoom: ScrollZoomHandler;
		boxZoom: BoxZoomHandler;
		dragRotate: DragRotateHandler;
		dragPan: DragPanHandler;
		keyboard: KeyboardHandler;
		doublClickZoom: DoubleClickZoomHandler;
		touchZoomRotate: TouchZoomRotateHandler
	}

	declare export class BoxZoomHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		isActive(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class ScrollZoomHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class DragPanHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		isActive(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class DragRotateHandler  {
		constructor(map: mapboxgl.Map, options?: {
		bearingSnap?: number,
		pitchWithRotate?: boolean
	}): this;
		isEnabled(): boolean;
		isActive(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class KeyboardHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class DoubleClickZoomHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		enable(): void;
		disable(): void
	}

	declare export class TouchZoomRotateHandler  {
		constructor(map: mapboxgl.Map): this;
		isEnabled(): boolean;
		enable(): void;
		disable(): void;
		disableRotation(): void;
		enableRotation(): void
	}

	declare export class Control extends Evented {
		addTo(map: mapboxgl.Map): this;
		remove(): this
	}

	declare export class Navigation extends Control {
		constructor(options?: mapboxgl.ControlOptions): this
	}

	declare export class Geolocate extends Control {
		constructor(options?: mapboxgl.ControlOptions): this
	}

	declare export class Attribution extends Control {
		constructor(options?: mapboxgl.ControlOptions): this
	}

	declare export class Scale extends Control {
		constructor(options?: {
		position?: "top-right" | "top-left" | "bottom-right" | "bottom-left",
		maxWidth?: number,
		unit?: string
	}): this
	}

	declare export class Popup extends Evented {
		constructor(options?: mapboxgl.PopupOptions): this;
		addTo(map: mapboxgl.Map): this;
		isOpen(): boolean;
		remove(): this;
		getLngLat(): mapboxgl.LngLat;
		setLngLat(lnglat: mapboxgl.LngLat | number[]): this;
		setText(text: string): this;
		setHTML(html: string): this;
		setDOMContent(htmlNode: Node): this
	}

	declare export class GeoJSONSource extends GeoJSONSourceRaw {
		type: "geojson";
		constructor(options?: mapboxgl.GeoJSONSourceOptions): this;
		setData(
		data: GeoJSON.Feature<GeoJSON.GeometryObject> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | String
	): this
	}

	declare export class VideoSource extends Source {
		type: "video";
		constructor(options?: mapboxgl.VideoSourceOptions): this;
		getVideo(): HTMLVideoElement;
		setCoordinates(coordinates: number[][]): this
	}

	declare export class ImageSource extends Source {
		type: "image";
		constructor(options?: mapboxgl.ImageSourceOptions): this;
		setCoordinates(coordinates: number[][]): this
	}

	declare export class LngLat  {
		lng: number;
		lat: number;
		constructor(lng: number, lat: number): this;
		wrap(): mapboxgl.LngLat;
		toArray(): number[];
		toString(): string;
		convert(input: number[] | mapboxgl.LngLat): mapboxgl.LngLat
	}

	declare export class LngLatBounds  {
		sw: LngLat | number[];
		ne: LngLat | number[];
		constructor(sw?: LngLat, ne?: LngLat): this;
		extend(obj: mapboxgl.LngLat | mapboxgl.LngLatBounds): this;
		getCenter(): mapboxgl.LngLat;
		getSouthWest(): mapboxgl.LngLat;
		getNorthEast(): mapboxgl.LngLat;
		getNorthWest(): mapboxgl.LngLat;
		getSouthEast(): mapboxgl.LngLat;
		getWest(): number;
		getSouth(): number;
		getEast(): number;
		getNorth(): number;
		toArray(): number[][];
		toString(): string;
		convert(input: mapboxgl.LngLatBounds | number[] | number[][]): mapboxgl.LngLatBounds
	}

	declare export class Point  {
		constructor(options?: Object): this;
		clone(): Point;
		add(p: number): Point;
		sub(p: number): Point;
		mult(k: number): Point;
		div(k: number): Point;
		rotate(a: number): Point;
		matMult(m: number): Point;
		unit(): Point;
		perp(): Point;
		round(): Point;
		mag(): number;
		equals(): boolean;
		dist(): number;
		distSqr(): number;
		angle(): number;
		angleTo(): number;
		angleWidth(): number;
		angleWidthSep(): number
	}

	declare export class Marker  {
		constructor(element?: HTMLElement, options?: {
		offset?: Point | number[]
	}): this;
		addTo(map: Map): this;
		remove(): this;
		getLngLat(): LngLat;
		setLngLat(lngLat: LngLat | number[]): this;
		setPopup(popup?: Popup): this;
		getPopup(): Popup;
		togglePopup(): this
	}

	declare export class Evented  {
		on(type: string, listener: Function): this;
		off(type?: string | any, listener?: Function): this;
		once(type: string, listener: Function): this;
		fire(type: string, data?: mapboxgl.EventData | Object): this;
		listens(type: string): boolean
	}

	declare export class EventData  {
		type: string;
		target: Map;
		originalEvent: Event;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat
	}

	declare export class MapMouseEvent  {
		type: string;
		target: Map;
		originalEvent: MouseEvent;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat
	}

	declare export class MapTouchEvent  {
		type: string;
		target: Map;
		originalEvent: TouchEvent;
		point: mapboxgl.Point;
		lngLat: mapboxgl.LngLat;
		points: Point[];
		lngLats: LngLat[]
	}

	declare export class MapBoxZoomEvent  {
		originalEvent: MouseEvent;
		boxZoomBounds: LngLatBounds
	}

	
}

declare module 'mapbox-gl' {
					declare module.exports: undefined


}