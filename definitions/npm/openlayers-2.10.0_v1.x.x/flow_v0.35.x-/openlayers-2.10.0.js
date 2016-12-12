

declare module 'openlayers-2.10.0' {
					
}

declare module 'npm$namespace$OpenLayers' {
		declare export interface MapOptions {
		projection?: string,
		maxExtend?: Bounds,
		center?: LonLat
	}

	declare export interface DistanceOptions {
		details?: boolean,
		edge?: boolean
	}

	declare export interface BoundsOptions {
		inclusive?: boolean,
		worldBounds?: Bounds
	}

	declare export interface WrapDateLineOptions {
		leftTolerance?: number,
		rightTolerance?: number
	}

	declare export interface LayerOptions {
		
	}

		declare export class Animation  {
		
	}

	declare export class String  {
		
	}

	declare export class Number  {
		
	}

	declare export class Function  {
		
	}

	declare export class Array  {
		
	}

	declare export class Console  {
		
	}

	declare export class Control  {
		
	}

	declare export class Event  {
		
	}

	declare export class Events  {
		attachToElement(element: HTMLElement): void;
		on(object: any): void;
		register(type: string, obj: any, func: () => void, priority: boolean): void;
		registerPriority(type: string, obj: any, func: () => void): void;
		un(object: any): void;
		unregister(type: string, obj: any, func: () => void): void;
		remove(type: string): void;
		triggerEvent(type: string, evt: Event): boolean;
		handleBrowserEvent(evt: Event): void;
		getMousePosition(evt: Event): Pixel
	}

	declare export class Feature  {
		
	}

	declare export class Filter  {
		
	}

	declare export class Format  {
		
	}

	declare export class Handler  {
		
	}

	declare export class Icon  {
		
	}

	declare export class Kinetic  {
		
	}

	declare export class Lang  {
		
	}

	declare export class Layer  {
		id: string;
		name: string;
		div: HTMLElement;
		opacity: number;
		alwaysInRange: boolean;
		RESOLUTION_PROPERTIES: string[];
		events: Events;
		map: Map;
		isBaseLayer: boolean;
		alpha: boolean;
		displayInLayerSwitcher: boolean;
		visibility: boolean;
		attribution: string;
		inRange: boolean;
		imageSize: Size;
		options: Object;
		eventListeners: Object;
		gutter: number;
		projection: Projection;
		units: string;
		scales: any[];
		resolutions: any[];
		maxExtent: Bounds;
		minExtent: Bounds;
		maxResolution: number;
		minResolution: number;
		numZoomLevels: number;
		minScale: number;
		maxScale: number;
		displayOutsideMaxExtent: boolean;
		wrapDateLine: boolean;
		metadata: Object;
		constructor(name: string, options: LayerOptions): this;
		destroy(setNewBaseLayer?: boolean): void;
		clone(): Layer;
		setName(newName: string): void;
		addOptions(newOptions: LayerOptions, reinitialize: boolean): void;
		onMapResize(): void;
		redraw(): void;
		moveTo(bounds: Bounds, zoomChanged: boolean, dragging: boolean): void;
		moveByPx(dx: number, dy: number): void;
		setMap(map: Map): void;
		removeMap(map: Map): void;
		getImageSize(bounds: Bounds): Size;
		setTileSize(size: Size): void;
		getVisibility(): boolean;
		setVisibility(visibility: boolean): void;
		display(display: boolean): void;
		calculateInRange(): boolean;
		setIsBaseLayer(isBaseLayer: boolean): void;
		initResolutions(): void;
		calculateResolutions(props: Object): number[];
		getResolution(): number;
		getExtent(): Bounds;
		getZoomForExtent(extent: Bounds, closest?: boolean): number;
		getResolutionForZoom(zoom: number): number;
		getZoomForResolution(resolution: number, closest?: boolean): number;
		getLonLatFromViewPortPx(viewPortPx: Pixel): LonLat;
		getViewPortPxFromLonLat(lonlat: LonLat, resolution: number): Pixel;
		setOpacity(opacity: number): void;
		getZIndex(): number;
		setZIndex(zIndex: number): void;
		adjustBounds(bounds: Bounds): Bounds;
		CLASS_NAME: string
	}

	declare export class Marker  {
		
	}

	declare export class Popup  {
		
	}

	declare export class Protocol  {
		
	}

	declare export class Renderer  {
		
	}

	declare export class Request  {
		
	}

	declare export class Rule  {
		
	}

	declare export class SingleFile  {
		
	}

	declare export class Spherical  {
		
	}

	declare export class Strategy  {
		
	}

	declare export class Style  {
		
	}

	declare export class Style2  {
		
	}

	declare export class StyleMap  {
		
	}

	declare export class Symbolizer  {
		
	}

	declare export class Tile  {
		
	}

	declare export class TileManager  {
		
	}

	declare export class Tween  {
		
	}

	declare export class Util  {
		
	}

	declare export class WPSClient  {
		
	}

	declare export class WPSProcess  {
		
	}

	declare export class Geometry  {
		id: string;
		parent: Geometry;
		bounds: Bounds;
		constructor(): this;
		destroy(): void;
		clone(): Geometry;
		setBounds(bounds: Bounds): void;
		clearBounds(): void;
		extendBounds(newBounds: Bounds): void;
		getBounds(): Bounds;
		distanceTo(geometry: Geometry, options: Object): Object;
		getVertices(nodes: boolean): any[];
		atPoint(lonlat: LonLat, toleranceLon?: number, toleranceLat?: number): boolean;
		getLength(): number;
		getArea(): number;
		toString(): string;
		getCentroid(): Geometry.Point;
		CLASS_NAME: string
	}

	declare export class Projection  {
		constructor(projCode: string, options?: any): this;
		getCode(): string;
		getUnits(): string;
		addTransform(from: string, to: string, method: () => void): void;
		transform(point: Geometry.Point, source: Projection, dest: OpenLayers.Projection): Object;
		transform(point: Object, source: Projection, dest: OpenLayers.Projection): Object;
		nullTransform(point: Object): Function
	}

	declare export class Bounds  {
		left: number;
		bottom: number;
		right: number;
		top: number;
		constructor(left: number, bottom: number, right: number, top: number): this;
		constructor(bounds: number[]): this;
		clone(): Bounds;
		equals(bounds: Bounds): boolean;
		toString(): string;
		toArray(reverseAxisOrder?: boolean): number[];
		toBBOX(decimal?: number, reverseAxisOrder?: boolean): string;
		toGeometry(): OpenLayers.Geometry.Polygon;
		getWidth(): number;
		getHeight(): number;
		getSize(): Size;
		getCenterPixel(): Pixel;
		getCenterLonLat(): LonLat;
		scale(ratio: number, origin?: Pixel): void;
		scale(ratio: number, origin?: LonLat): void;
		add(x: number, y: number): Bounds;
		extend(object: LonLat): void;
		extend(object: Geometry.Point): void;
		extend(object: Bounds): void;
		extendXY(x: number, y: number): void;
		containsLonLat(ll: LonLat, options: BoundsOptions): boolean;
		containsLonLat(ll: Object, options: BoundsOptions): boolean;
		containsPixel(px: Pixel, inclusive: boolean): boolean;
		contains(x: number, y: number, inclusive?: boolean): boolean;
		intersectsBounds(bounds: Bounds, options: BoundsOptions): boolean;
		containsBounds(bounds: Bounds, partial: boolean, inclusive: boolean): boolean;
		determineQuadrant(lonlat: LonLat): string;
		transform(source: Projection, dest: Projection): Bounds;
		wrapDateLine(maxExtent: Bounds, options: WrapDateLineOptions): Bounds;
		CLASS_NAME: string;
		fromString(str: string, reverseAxisOrder: boolean): Bounds;
		fromArray(bbox: number[], reverseAxisOrder: boolean): Bounds;
		fromSize(size: Size): Bounds;
		oppositeQuadrant(quadrant: string): string
	}

	declare export class LonLat  {
		constructor(lon: number, lat: number): this;
		constructor(lonlat: number[]): this;
		toShortString(): string;
		clone(): LonLat;
		add(lon: number, lat: number): LonLat;
		equals(ll: LonLat): boolean;
		transform(source: Projection, dest: Projection): LonLat;
		wrapDateLine(maxExtend: Bounds): LonLat
	}

	declare export class Map  {
		id: string;
		fractionalZoom: boolean;
		events: Events;
		allOverlays: boolean;
		div: HTMLElement;
		dragging: boolean;
		size: Size;
		viewPortDiv: HTMLDivElement;
		layerContainerOrigin: LonLat;
		layerContainerDiv: HTMLDivElement;
		layers: Layer[];
		controls: Control[];
		popups: Popup[];
		baseLayer: Layer;
		center: LonLat;
		resolution: number;
		zoom: number;
		panRatio: number;
		options: Object;
		tileSize: Size;
		projection: string;
		units: string;
		resolutions: number[];
		maxResolution: number;
		minResolution: number;
		maxScale: number;
		minScale: number;
		maxExtent: Bounds;
		minExtent: Bounds;
		restrictedExtent: Bounds;
		numZoomLevels: number;
		theme: string;
		displayProjection: Projection;
		fallThrough: boolean;
		autoUpdateSize: boolean;
		eventListeners: Object;
		panTween: Tween;
		panMethod: () => void;
		panDuration: number;
		zoomTween: Tween;
		zoomMethod: () => void;
		zoomDuration: number;
		paddingForPopups: Bounds;
		layerContainerOriginPx: Object;
		minPx: {
		x: number,
		y: number
	};
		maxPx: {
		x: number,
		y: number
	};
		constructor(id: HTMLElement, options?: MapOptions): this;
		constructor(id: string, options?: MapOptions): this;
		getViewport(): HTMLElement;
		render(div: string): void;
		render(div: HTMLElement): void;
		destroy(): void;
		setOptions(options: {
		
	}): void;
		getTileSize(): Size;
		getBy(array: string, property: string, match: string): any[];
		getBy(array: string, property: string, match: Object): any[];
		getLayersBy(property: string, match: string): Layer[];
		getLayersBy(property: string, match: Object): Layer[];
		getLayersByName(match: string): Layer[];
		getLayersByName(match: Object): Layer[];
		getLayersByClass(match: string): Layer[];
		getLayersByClass(match: Object): Layer[];
		getControlsBy(property: string, match: string): Control[];
		getControlsBy(property: string, match: Object): Control[];
		getControlsByClass(match: string): Control[];
		getControlsByClass(match: Object): Control[];
		getLayer(id: string): Layer;
		addLayer(layer: Layer): boolean;
		addLayers(layers: Layer[]): void;
		removeLayer(layer: Layer, setNewBaseLayer?: boolean): void;
		getNumLayers(): number;
		getLayerIndex(layer: Layer): number;
		setLayerIndex(layer: Layer, idx: number): void;
		raiseLayer(layer: Layer, delta: number): void;
		setBaseLayer(newBaseLayer: Layer): void;
		addControl(control: Control, px: Pixel): void;
		addControls(controls: Control[], pixels: Pixel[]): void;
		getControl(id: string): Control;
		removeControl(control: Control): void;
		addPopup(popup: Popup, exclusive: boolean): void;
		removePopup(popup: Popup): void;
		getSize(): Size;
		updateSize(): void;
		calculateBounds(center?: LonLat, resolution?: number): Bounds;
		getCenter(): LonLat;
		getZoom(): number;
		pan(
		dx: number, dy: number, options?: {
		animate?: boolean,
		dragging?: boolean
	}
	): void;
		panTo(lonlat: LonLat): void;
		setCenter(
		lonlat: LonLat, zoom?: number, dragging?: boolean, forceZoomChange?: boolean
	): void;
		setCenter(
		lonlat: number[], zoom?: number, dragging?: boolean, forceZoomChange?: boolean
	): void;
		getMinZoom(): number;
		getProjection(): string;
		getProjectionObject(): Projection;
		getMaxResolution(): string;
		getMaxExtent(options: {
		restricted: boolean
	}): Bounds;
		getNumZoomLevels(): number;
		getExtent(): Bounds;
		getResolution(): number;
		getUnits(): number;
		getScale(): number;
		getZoomForExtent(bounds: Bounds, closest?: boolean): number;
		getResolutionForZoom(zoom: number): number;
		getZoomForResolution(resolution: number, closest?: boolean): number;
		zoomTo(zoom: number, px: Pixel): void;
		zoomIn(): void;
		zoomOut(): void;
		zoomToExtent(bounds: Bounds, closest?: boolean): void;
		zoomToExtent(bounds: number[], closest?: boolean): void;
		zoomToMaxExtent(options?: {
		restricted: boolean
	}): void;
		zoomToScale(scale: number, closest: boolean): void;
		getViewPortPxFromLonLat(lonlat: LonLat): Pixel;
		getLonLatFromPixel(px: Pixel): LonLat;
		getLonLatFromPixel(px: {
		x: number,
		y: number
	}): LonLat;
		getPixelFromLonLat(lonlat: LonLat): Pixel;
		getViewPortPxFromLayerPx(layerPx: Pixel): Pixel;
		getLayerPxFromViewPortPx(viewPortPx: Pixel): Pixel;
		getLayerPxFromLonLat(lonlat: LonLat): Pixel;
		TILE_WIDTH: string;
		TILE_HEIGHT: string
	}

	declare export class Class  {
		
	}

	declare export class Date  {
		dateRegEx: string;
		toISOString(date: Date): string;
		parse(str: string): Date
	}

	declare export class Element  {
		visible(element: HTMLElement): boolean;
		toggle(element: HTMLElement): void;
		remove(element: HTMLElement): void;
		getHeight(element: HTMLElement): number;
		hasClass(element: HTMLElement, name: string): boolean;
		addClass(element: HTMLElement, name: string): HTMLElement;
		removeClass(element: HTMLElement, name: string): HTMLElement;
		toggleClass(element: HTMLElement, name: string): HTMLElement;
		getStyle(element: HTMLElement, style: any): any
	}

	declare export class Pixel  {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		clone(): Pixel;
		equals(px: Pixel): boolean;
		equals(px: {
		x: number,
		y: number
	}): boolean;
		distanceTo(px: Pixel): number;
		add(x: number, y: number): Pixel;
		offset(px: Pixel): Pixel;
		offset(px: {
		x: number,
		y: number
	}): Pixel;
		CLASS_NAME: string
	}

	declare export class Size  {
		w: number;
		h: number;
		constructor(w: number, h: number): this;
		toString(): string;
		clone(): Size;
		equals(sz: Size): boolean;
		CLASS_NAME: string
	}

	
}

declare module 'Geometry' {
				declare export class Collection extends Geometry {
		components: Geometry[];
		componentTypes: string[];
		constructor(components: Geometry[]): this;
		destroy(): void;
		clone(): Collection;
		getComponentsString(): string;
		calculateBounds(): void;
		addComponents(components: Geometry[]): void;
		addComponent(component: Geometry, index: number): boolean;
		removeComponents(components: Geometry[]): boolean;
		removeComponent(component: Geometry): boolean;
		getLength(): number;
		getArea(): number;
		getGeodesicArea(projection: Projection): number;
		getCentroid(weighted?: boolean): Point;
		getGeodesicLength(projection: Projection): number;
		move(x: number, y: number): void;
		rotate(angle: number, origin: Point): void;
		resize(scale: number, origin: Point, ratio: number): Geometry;
		distanceTo(geometry: Geometry, options: DistanceOptions): Object;
		equals(geometry: Geometry): boolean;
		transform(source: Projection, dest: Projection): Geometry;
		intersects(geometry: Geometry): boolean;
		getVertices(nodes: boolean): any[];
		CLASS_NAME: string
	}

	declare export class Point extends Geometry {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		clone(): Geometry;
		clone(obj: Point): Point;
		distanceTo(geometry: Geometry, options: DistanceOptions): Object;
		equals(geom: Point): boolean;
		move(x: number, y: number): void;
		rotate(angle: number, origin: Point): void;
		resize(scale: number, origin: Point, ratio: number): Geometry;
		intersects(geometry: Geometry): boolean;
		transform(source: Projection, dest: Projection): Geometry;
		getVertices(nodes: boolean): any[]
	}

	declare export class Curve extends Geometry$MultiPoint {
		
	}

	declare export class LineString extends Geometry$Curve {
		
	}

	declare export class LinearRing extends Geometry$LineString {
		
	}

	declare export class MultiLineString extends Geometry$Collection {
		
	}

	declare export class MultiPoint extends Geometry$Collection {
		
	}

	declare export class MultiPolygon extends Geometry$Collection {
		
	}

	declare export class Polygon extends Geometry$Collection {
		
	}

	
}

declare module 'Control' {
				declare export class ArgParser  {
		
	}

	declare export class Attribution  {
		
	}

	declare export class Button  {
		
	}

	declare export class CacheRead  {
		
	}

	declare export class CacheWrite  {
		
	}

	declare export class DragFeature  {
		
	}

	declare export class DragPan  {
		
	}

	declare export class DrawFeature  {
		
	}

	declare export class EditingToolbar  {
		
	}

	declare export class Geolocate  {
		
	}

	declare export class GetFeature  {
		
	}

	declare export class Graticule  {
		
	}

	declare export class KeyboardDefaults  {
		
	}

	declare export class LayerSwitcher  {
		
	}

	declare export class Measure  {
		
	}

	declare export class ModifyFeature  {
		
	}

	declare export class MousePosition  {
		
	}

	declare export class NavToolbar  {
		
	}

	declare export class Navigation  {
		
	}

	declare export class NavigationHistory  {
		
	}

	declare export class OverviewMap  {
		
	}

	declare export class Pan  {
		
	}

	declare export class PanPanel  {
		
	}

	declare export class PanZoom  {
		
	}

	declare export class PanZoomBar  {
		
	}

	declare export class Panel  {
		
	}

	declare export class Permalink  {
		
	}

	declare export class PinchZoom  {
		
	}

	declare export class SLDSelect  {
		
	}

	declare export class Scale  {
		
	}

	declare export class ScaleLine  {
		
	}

	declare export class SelectFeature  {
		
	}

	declare export class Snapping  {
		
	}

	declare export class Split  {
		
	}

	declare export class TextButtonPanel  {
		
	}

	declare export class TouchNavigation  {
		
	}

	declare export class TransformFeature  {
		
	}

	declare export class UTFGrid  {
		
	}

	declare export class WMSGetFeatureInfo  {
		
	}

	declare export class WMTSGetFeatureInfo  {
		
	}

	declare export class Zoom  {
		
	}

	declare export class ZoomBox  {
		
	}

	declare export class ZoomIn  {
		
	}

	declare export class ZoomOut  {
		
	}

	declare export class ZoomPanel  {
		
	}

	declare export class ZoomToMaxExtent  {
		
	}

	
}

declare module 'Events' {
				declare export class buttonclick extends OpenLayers$Class {
		
	}

	declare export class featureclick extends OpenLayers$Class {
		
	}

	
}

declare module 'Feature' {
				declare export class Vector  {
		
	}

	
}

declare module 'Filter' {
				declare export class Comparison  {
		
	}

	declare export class FeatureId  {
		
	}

	declare export class Function  {
		
	}

	declare export class Logical  {
		
	}

	declare export class Spatial  {
		
	}

	
}

declare module 'Format' {
				declare export class ArcXML  {
		constructor(): this
	}

	declare export class Atom  {
		
	}

	declare export class CQL  {
		
	}

	declare export class CSWGetDomain  {
		
	}

	declare export class CSWGetRecords  {
		
	}

	declare export class Context  {
		
	}

	declare export class EncodedPolyline  {
		
	}

	declare export class Filter  {
		
	}

	declare export class GML  {
		
	}

	declare export class GPX  {
		
	}

	declare export class GeoJSON  {
		
	}

	declare export class GeoRSS  {
		
	}

	declare export class JSON  {
		
	}

	declare export class KML  {
		
	}

	declare export class OGCExceptionReport  {
		
	}

	declare export class OSM  {
		
	}

	declare export class OWSCommon  {
		
	}

	declare export class OWSContext  {
		
	}

	declare export class QueryStringFilter  {
		
	}

	declare export class SLD  {
		
	}

	declare export class SOSCapabilities  {
		
	}

	declare export class SOSGetFeatureOfInterest  {
		
	}

	declare export class SOSGetObservation  {
		
	}

	declare export class TMSCapabilities  {
		
	}

	declare export class Text  {
		
	}

	declare export class WCSCapabilities  {
		
	}

	declare export class WCSDescribeCoverage  {
		
	}

	declare export class WCSGetCoverage  {
		
	}

	declare export class WFS  {
		
	}

	declare export class WFSCapabilities  {
		
	}

	declare export class WFSDescribeFeatureType  {
		
	}

	declare export class WFST  {
		
	}

	declare export class WKT  {
		
	}

	declare export class WMC  {
		
	}

	declare export class WMSCapabilities  {
		
	}

	declare export class WMSDescribeLayer  {
		
	}

	declare export class WMSGetFeatureInfo  {
		
	}

	declare export class WMTSCapabilities  {
		
	}

	declare export class WPSCapabilities  {
		
	}

	declare export class WPSDescribeProcess  {
		
	}

	declare export class WPSExecute  {
		
	}

	declare export class XLS  {
		
	}

	declare export class XML  {
		
	}

	
}

declare module 'ArcXML' {
				declare export class Features extends OpenLayers$Class {
		
	}

	
}

declare module 'CSWGetDomain' {
				declare export class v2_0_2  {
		
	}

	
}

declare module 'CSWGetRecords' {
				declare export class v2_0_2  {
		
	}

	
}

declare module 'Handler' {
				declare export class Box  {
		
	}

	declare export class Click  {
		
	}

	declare export class Drag  {
		
	}

	declare export class Feature  {
		
	}

	declare export class Hover  {
		
	}

	declare export class Keyboard  {
		
	}

	declare export class MouseWheel  {
		
	}

	declare export class Path  {
		
	}

	declare export class Pinch  {
		
	}

	declare export class Point  {
		
	}

	declare export class Polygon  {
		
	}

	declare export class RegularPolygon  {
		
	}

	
}

declare module 'Layer' {
		declare export interface WMSGetMapParams {
		version?: string,
		exceptions?: string,
		transparent?: string,
		format?: string,
		styles?: string,
		layers: string,
		service?: string
	}

	declare export interface WMSOptions {
		opacity?: number,
		singleTile?: boolean,
		isBaseLayer?: boolean,
		encodeBBOX?: boolean,
		noMagic?: boolean,
		yx?: Object
	}

	declare export interface TileOptions {
		crossOriginKeyword?: string
	}

		declare export class ArcGIS93Rest  {
		
	}

	declare export class ArcGISCache  {
		
	}

	declare export class ArcIMS  {
		
	}

	declare export class Bing  {
		
	}

	declare export class Boxes  {
		
	}

	declare export class EventPane  {
		
	}

	declare export class FixedZoomLevels  {
		
	}

	declare export class GeoRSS  {
		
	}

	declare export class Google  {
		
	}

	declare export class Grid extends HTTPRequest {
		tileSize: Size;
		tileOriginCorner: string;
		tileOrigin: LonLat;
		tileOptions: Object;
		tileClass: OpenLayers.Tile;
		grid: OpenLayers.Tile[][];
		singleTile: boolean;
		ratio: number;
		buffer: number;
		transitionEffect: string;
		numLoadingTiles: number;
		serverResolutions: number[];
		loading: boolean;
		backBuffer: HTMLElement;
		gridResolution: number;
		backBufferResolution: number;
		backBufferLonLat: {
		lon: number,
		lat: number
	};
		backBufferTimerId: number;
		removeBackBufferDelay: number;
		className: string;
		gridLayout: {
		tilelon: number,
		tilelat: number,
		startcol: number,
		startrow: number
	};
		rowSign: number;
		transitionendEvents: string[];
		constructor(name: string, url: string, params: {
		
	}, options: {
		
	}): this;
		setMap(map: Map): void;
		removeMap(map: Map): void;
		destroy(): void;
		addOptions(newOptions: {
		
	}, reinitialize: boolean): void;
		clone(obj?: Object): Layer.Grid;
		moveTo(bounds: Bounds, zoomChanged: boolean, dragging: boolean): void;
		moveByPx(dx: number, dy: number): void;
		setTileSize(size: Size): void;
		getTilesBounds(): Bounds;
		getImageSize(): Size;
		addTile(bounds: Bounds, position: number): Tile;
		onMapResize(): void;
		getTileBounds(viewPortPx: Pixel): Bounds
	}

	declare export class HTTPRequest extends Layer {
		URL_HASH_FACTOR: number;
		url: string[];
		params: Object;
		reproject: boolean;
		constructor(name: string, url: string, params: Object, options: Object): this;
		constructor(name: string, url: string[], params: Object, options: Object): this;
		destroy(): void;
		clone(obj?: Object): HTTPRequest;
		setUrl(newUrl: string): void;
		mergeNewParams(newParams: Object): boolean;
		redraw(force?: boolean): boolean;
		getFullRequestString(newParams: Object, altUrl: string): string
	}

	declare export class Image extends Layer {
		isBaseLayer: boolean;
		url: string;
		extent: OpenLayers.Bounds;
		size: OpenLayers.Size;
		tile: OpenLayers.Tile.Image;
		aspectRatio: number;
		constructor(name: string, url: string, extent: OpenLayers.Bounds, size: OpenLayers.Size, options: any): this;
		destroy(): void;
		clone(obj?: any): OpenLayers.Layer.Image;
		setMap(map: OpenLayers.Map): void;
		moveTo(bounds: OpenLayers.Bounds, zoomChanged: boolean, dragging: boolean): void;
		setTileSize(): void;
		addTileMonitoringHooks(tile: OpenLayers.Tile): void;
		removeTileMonitoringHooks(tile: OpenLayers.Tile): void;
		setUrl(newUrl: string): void;
		getURL(bounds: OpenLayers.Bounds): string;
		CLASS_NAME: string
	}

	declare export class KaMap  {
		
	}

	declare export class KaMapCache  {
		
	}

	declare export class MapGuide  {
		
	}

	declare export class MapServer  {
		
	}

	declare export class Markers  {
		
	}

	declare export class OSM extends Layer$XYZ {
		name: string;
		url: string[];
		attribution: string;
		sphericalMercator: boolean;
		wrapDateLine: boolean;
		tileOptions: TileOptions;
		constructor(): this;
		constructor(name: string, url: string, options: TileOptions): this;
		clone(obj?: Object): Layer.OSM;
		CLASS_NAME: string
	}

	declare export class PointGrid  {
		
	}

	declare export class PointTrack  {
		
	}

	declare export class SphericalMercator  {
		
	}

	declare export class TMS  {
		
	}

	declare export class Text  {
		
	}

	declare export class TileCache  {
		
	}

	declare export class UTFGrid  {
		
	}

	declare export class Vector  {
		
	}

	declare export class WMS extends Layer$Grid {
		isBaseLayer: boolean;
		encodeBBOX: boolean;
		noMagic: boolean;
		yx: Object;
		constructor(name: string, url: string, params: WMSGetMapParams, options: WMSOptions): this;
		clone(): Layer.WMS;
		reverseAxisOrder(): boolean;
		getURL(bounds: Bounds): string;
		mergeNewParams(newParams: Object): boolean;
		getFullRequestString(newParams: Object, altUrl: string): string;
		CLASS_NAME: string
	}

	declare export class WMTS  {
		
	}

	declare export class WorldWind  {
		
	}

	declare export class XYZ extends Layer$Grid {
		isBaseLayer: boolean;
		sphericalMercator: boolean;
		zoomOffset: number;
		serverResolutions: number[];
		constructor(name: string, url: string, options?: any): this;
		clone(obj?: any): Layer.XYZ;
		setMap(map: Map): void
	}

	declare export class Zoomify  {
		
	}

	
}

declare module 'Google' {
				declare export class v3  {
		
	}

	
}

declare module 'Vector' {
				declare export class RootContainer  {
		
	}

	
}

declare module 'Marker' {
				declare export class Box  {
		
	}

	
}

declare module 'Popup' {
				declare export class Anchored  {
		
	}

	declare export class Framed  {
		
	}

	declare export class FramedCloud  {
		
	}

	
}

declare module 'Protocol' {
				declare export class CSW  {
		
	}

	declare export class HTTP  {
		
	}

	declare export class SOS  {
		
	}

	declare export class Script  {
		
	}

	declare export class WFS  {
		
	}

	
}

declare module 'CSW' {
				declare export class v2_0_2  {
		
	}

	
}

declare module 'SOS' {
				declare export class v1_0_0  {
		
	}

	
}

declare module 'WFS' {
				declare export class v2_0_0  {
		
	}

	
}

declare module 'Renderer' {
				declare export class Canvas  {
		
	}

	declare export class Elements  {
		
	}

	declare export class SVG  {
		
	}

	declare export class VML  {
		
	}

	
}

declare module 'Request' {
				declare export class XMLHttpRequest  {
		
	}

	
}

declare module 'Strategy' {
				declare export class BBOX  {
		
	}

	declare export class Cluster  {
		
	}

	declare export class Filter  {
		
	}

	declare export class Fixed  {
		
	}

	declare export class Paging  {
		
	}

	declare export class Refresh  {
		
	}

	declare export class Save  {
		
	}

	
}

declare module 'Symbolizer' {
				declare export class Line  {
		
	}

	declare export class Point  {
		
	}

	declare export class Polygon  {
		
	}

	declare export class Raster  {
		
	}

	declare export class Text  {
		
	}

	
}

declare module 'Tile' {
				declare export class Image  {
		
	}

	declare export class UTFGrid  {
		
	}

	
}

declare module 'Image' {
				declare export class IFrame  {
		
	}

	
}

declare module 'Util' {
				declare export class vendorPrefix  {
		
	}

	
}