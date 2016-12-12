

declare module 'heremaps' {
					
}

declare module 'npm$namespace$H' {
				declare export class Map extends undefined$EventTarget {
		constructor(element: Element, baseLayer: H.map.layer.Layer, opt_options?: H.Map.Options): this;
		getElement(): Element;
		setCenter(center: H.geo.IPoint, opt_animate?: boolean): H.Map;
		getCenter(): H.geo.Point;
		setZoom(zoom: number, opt_animate?: boolean): H.Map;
		getZoom(): number;
		zoomAt(zoom: number, x: number, y: number): void;
		setViewBounds(boundingRect: H.geo.Rect, opt_animate?: boolean): H.Map;
		getViewBounds(): H.geo.Rect;
		getCameraDataForBounds(rect: H.geo.Rect): H.map.ViewModel.CameraData;
		getViewPort(): H.map.ViewPort;
		getViewModel(): H.map.ViewModel;
		getLayers(): H.map.DataModel;
		getImprint(): H.map.Imprint;
		capture(
		callback?: (canvas: HTMLCanvasElement) => void, opt_capturables?: Array<H.util.ICapturable>, opt_x1?: number, opt_y1?: number, opt_x2?: number, opt_y2?: number
	): void;
		setEngineType(type: H.Map.EngineType): H.Map;
		storeContent(
		opt_onprogress?: (req: H.util.Request) => void, opt_bounds?: H.geo.Rect, opt_min?: number, opt_max?: number, opt_layer?: H.map.layer.BaseTileLayer
	): H.util.Request;
		clearContent(opt_onprogress?: (req: H.util.Request) => void): H.util.Request;
		addLayer(layer: H.map.layer.Layer, opt_idx?: number): H.Map;
		removeLayer(layer: H.map.layer.Layer): H.Map;
		setBaseLayer(layer: H.map.layer.Layer): H.Map;
		getBaseLayer(): H.map.layer.Layer;
		geoToScreen(geoPoint: H.geo.IPoint): H.math.Point;
		screenToGeo(x: number, y: number): H.geo.Point;
		screenToCameraData(x: number, y: number): H.map.ViewModel.CameraData;
		addObject(mapObject: H.map.Object): H.map.Object;
		removeObject(mapObject: H.map.Object): H.map.Object;
		getObjects(): Array<H.map.Object>;
		addObjects(mapObjects: Array<H.map.Object>): H.Map;
		removeObjects(mapObjects: (Array<H.map.Object> | H.map.Group)): H.Map;
		getObjectAt(x: number, y: number): H.map.Object;
		getObjectsAt(x: number, y: number): Array<H.map.Object>;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	
}

declare module 'Map' {
		declare export interface BackgroundRange {
		lower: number,
		higher: number
	}

	declare export interface Options {
		center?: H.geo.IPoint,
		zoom?: number,
		bounds?: H.geo.Rect,
		layers?: Array<H.map.layer.Layer>,
		engineType?: EngineType,
		pixelRatio?: number,
		imprint?: H.map.Imprint.Options,
		renderBaseBackground?: BackgroundRange,
		autoColor?: boolean,
		margin?: number,
		padding?: H.map.ViewPort.Padding,
		fixedCenter?: boolean
	}

			
}

declare module 'clustering' {
		declare export interface ICluster {
		getMaxZoom(): number,
		getBounds(): H.geo.Rect,
		forEachEntry(callback: (result: H.clustering.IResult) => void): void,
		forEachDataPoint(callback: (noise: H.clustering.INoisePoint) => void): void,
		getPosition(): H.geo.Point,
		getWeight(): number,
		isCluster(): boolean,
		getMinZoom(): number
	}

	declare export interface INoisePoint {
		getData(): any,
		getPosition(): H.geo.Point,
		getWeight(): number,
		isCluster(): boolean,
		getMinZoom(): number
	}

	declare export interface IResult {
		getPosition(): H.geo.Point,
		getWeight(): number,
		isCluster(): boolean,
		getMinZoom(): number
	}

	declare export interface ITheme {
		getClusterPresentation(cluster: H.clustering.ICluster): H.map.Object,
		getNoisePresentation(noisePoint: H.clustering.INoisePoint): H.map.Object
	}

		declare export class DataPoint extends undefined$IPoint {
		constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_weight?: number, opt_data?: any): this;
		lat: H.geo.Latitude;
		lng: H.geo.Longitude;
		alt: H.geo.Altitude;
		ctx: H.geo.AltitudeContext;
		wt: number;
		data: any
	}

	declare export class Provider extends undefined$EventTarget {
		constructor(dataPoints: Array<H.clustering.DataPoint>, opt_options?: H.clustering.Provider.Options): this;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void;
		setDataPoints(dataPoints: Array<H.clustering.DataPoint>): void;
		addDataPoint(dataPoint: H.clustering.DataPoint): void;
		addDataPoints(dataPoints: Array<H.clustering.DataPoint>): void;
		removeDataPoint(dataPoint: H.clustering.DataPoint): void;
		getTheme(): H.clustering.ITheme;
		setTheme(theme: H.clustering.ITheme): void;
		providesDomMarkers(): boolean;
		requestDomMarkers(
		bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.DomMarker>;
		providesMarkers(): boolean;
		requestMarkers(
		bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Marker>;
		providesSpatials(): boolean;
		requestSpatials(
		bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Spatial>;
		requestSpatialsByTile(
		tile: H.map.provider.Tile, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Spatial>;
		getInvalidations(): H.map.provider.Invalidations;
		invalidateObject(mapObject: H.map.Object, changes: H.math.BitMask): void;
		min: number;
		max: number
	}

	
}

declare module 'Provider' {
		declare export interface ClusteringOptions {
		eps?: number,
		minWeight?: number,
		projection?: H.geo.IProjection,
		strategy?: H.clustering.Provider.Strategy
	}

	declare export interface Options {
		min?: number,
		max?: number,
		clusteringOptions?: H.clustering.Provider.ClusteringOptions,
		theme?: H.clustering.ITheme
	}

	declare export interface Options {
		uri?: string,
		min?: number,
		max?: number,
		getCopyrights?: (rect: H.geo.Rect, n: number) => Array<H.map.ICopyright>
	}

			
}

declare module 'data' {
				declare export class AbstractReader extends undefined$EventTarget {
		constructor(opt_url?: string): this;
		getLayer(): H.map.layer.ObjectLayer;
		getParsedObjects(): Array<H.map.Object>;
		getUrl(): string | void;
		setUrl(url: string): H.data.AbstractReader;
		getState(): H.data.AbstractReader.State;
		parse(): void
	}

	
}

declare module 'AbstractReader' {
				declare export class Event extends undefined$Event {
		constructor(target: (H.data.AbstractReader | H.map.Object), type: string, state: H.data.AbstractReader.State, message: string): this
	}

	
}

declare module 'geo' {
	declare export type Altitude = number;

	declare export type Latitude = number;

	declare export type Longitude = number;

	declare export interface IPoint {
		lat: H.geo.Latitude,
		lng: Longitude,
		alt?: H.geo.Altitude,
		ctx?: H.geo.AltitudeContext
	}

	declare export interface IProjection {
		latLngToPoint(lat: number, lng: number, opt_out?: H.math.Point): H.math.Point,
		xyToGeo(x: number, y: number, opt_out?: H.geo.Point): H.geo.Point,
		pointToGeo(point: H.math.IPoint, opt_out?: H.geo.Point): H.geo.Point,
		geoToPoint(geoPoint: H.geo.IPoint, opt_out?: H.math.Point): H.math.Point
	}

		declare export class Point extends IPoint {
		constructor(lat: H.geo.Latitude, lng: Longitude, opt_alt?: H.geo.Altitude, opt_ctx?: H.geo.AltitudeContext): this;
		equals(other: IPoint): boolean;
		distance(other: IPoint): number;
		walk(bearing: number, distance: number, opt_overGreatCircle?: boolean): Point;
		validate(point: IPoint, opt_caller?: Function, opt_argNr?: number): boolean;
		fromIPoint(iPoint: IPoint): Point;
		lat: H.geo.Latitude;
		lng: H.geo.Longitude;
		alt: H.geo.Altitude;
		ctx: H.geo.AltitudeContext
	}

	declare export class Rect  {
		constructor(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude): this;
		equals(other: H.geo.Rect): boolean;
		clone(): H.geo.Rect;
		getTopLeft(): H.geo.Point;
		getBottomRight(): H.geo.Point;
		getTop(): H.geo.Latitude;
		getBottom(): H.geo.Latitude;
		getLeft(): H.geo.Longitude;
		getRight(): H.geo.Longitude;
		getCenter(): H.geo.Point;
		getWidth(): number;
		getHeight(): number;
		isCDB(): boolean;
		isEmpty(): boolean;
		containsLatLng(
		lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean
	): boolean;
		containsPoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean): boolean;
		containsRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;
		mergeLatLng(
		lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect
	): H.geo.Rect;
		mergePoint(
		geoPoint: H.geo.IPoint, opt_skipValidation?: boolean, opt_out?: H.geo.Rect
	): H.geo.Rect;
		mergeRect(
		geoRect: H.geo.Rect, opt_skipValidation?: boolean, opt_out?: H.geo.Rect
	): H.geo.Rect;
		mergeTopLeftBottomRight(
		top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect
	): H.geo.Rect;
		intersects(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;
		merge(
		topA: H.geo.Latitude, leftA: H.geo.Longitude, bottomA: H.geo.Latitude, rightA: H.geo.Longitude, topB: H.geo.Latitude, leftB: H.geo.Longitude, bottomB: H.geo.Latitude, rightB: H.geo.Longitude, opt_out?: H.geo.Rect
	): H.geo.Rect;
		fromPoints(
		topLeft: H.geo.IPoint, bottomRight: H.geo.IPoint, opt_skipValidation?: boolean
	): H.geo.Rect;
		coverPoints(pointArray: Array<H.geo.IPoint>, opt_skipValidation?: boolean): H.geo.Rect;
		coverLatLngAlts(latLngAltArray: Array<number>, opt_skipValidation?: boolean): H.geo.Rect | void;
		coverRects(rectArray: Array<H.geo.Rect>, opt_skipValidation?: boolean): H.geo.Rect | void;
		resizeToCenter(center: H.geo.IPoint, opt_out?: H.geo.Rect): H.geo.Rect
	}

	declare export class Strip  {
		constructor(opt_latLngAlts?: Array<number>, opt_ctx?: H.geo.AltitudeContext): this;
		pushLatLngAlt(lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude): void;
		spliceLatLngAlts(
		index: number, opt_nRemove?: number, opt_latLngAlts?: Array<number>
	): Array<number>;
		insertLatLngAlt(
		index: number, lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude
	): void;
		removeLatLngAlt(index: number): void;
		pushPoint(geoPoint: H.geo.IPoint): void;
		insertPoint(pointIndex: number, geoPoint: H.geo.IPoint): void;
		removePoint(pointIndex: number): void;
		extractPoint(pointIndex: number, opt_out?: H.geo.Point): H.geo.Point;
		eachLatLngAlt(
		eachFn: (
		lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude, n: number
	) => void, opt_start?: number, opt_end?: number
	): void;
		getDBCs(opt_closed?: boolean): number;
		getPointCount(): number;
		getLatLngAltArray(): Array<number>;
		getBounds(): H.geo.Rect;
		isDBC(lng1: H.geo.Longitude, lng2: H.geo.Longitude): boolean;
		fromLatLngArray(latLngs: Array<number>): H.geo.Strip
	}

	
}

declare module 'map' {
		declare export interface IControl {
		startControl(
		opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number
	): void,
		control(
		moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, zoom: number, opt_timestamp?: number
	): void,
		endControl(
		opt_preventKinetics?: boolean, opt_adjustView?: (data: H.map.ViewModel.CameraData) => void
	): void
	}

	declare export interface ICopyright {
		label: string,
		alt: string
	}

	declare export interface IInteraction {
		startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void,
		interaction(
		x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number
	): void,
		endInteraction(opt_preventKinetics?: boolean): void
	}

		declare export class AbstractMarker extends undefined$Object {
		constructor(position: H.geo.IPoint, opt_options?: H.map.AbstractMarker.Options): this;
		getPosition(): H.geo.Point;
		setPosition(position: H.geo.IPoint): H.map.AbstractMarker;
		getIcon(): (H.map.Icon | H.map.DomIcon);
		setIcon(icon: (H.map.Icon | H.map.DomIcon)): H.map.AbstractMarker
	}

	declare export class ArrowStyle  {
		constructor(opt_options?: (H.map.ArrowStyle | H.map.ArrowStyle.Options)): this;
		equals(other: (H.map.ArrowStyle | H.map.ArrowStyle.Options)): boolean
	}

	declare export class Circle extends undefined$Polygon {
		constructor(center: H.geo.IPoint, radius: number, opt_options?: H.map.Circle.Options): this;
		setCenter(center: H.geo.IPoint): void;
		getCenter(): H.geo.Point;
		setRadius(radius: number): void;
		getRadius(): number;
		setPrecision(precision: number): void;
		getPrecision(): number
	}

	declare export class DataModel extends undefined$OList {
		constructor(opt_layers?: Array<H.map.layer.Layer>): this
	}

	declare export class DomIcon  {
		constructor(element: (Element | string), opt_options?: H.map.DomIcon.Options): this
	}

	declare export class DomMarker extends undefined$AbstractMarker {
		constructor(position: H.geo.IPoint, opt_options?: H.map.DomMarker.Options): this
	}

	declare export class GeoShape extends undefined$Spatial {
		constructor(isClosed: boolean, strip: H.geo.Strip, options: H.map.Spatial.Options): this;
		getStrip(): H.geo.Strip;
		setStrip(strip: H.geo.Strip): H.map.GeoShape;
		getBounds(): H.geo.Rect
	}

	declare export class Group extends undefined$Object {
		constructor(opt_options?: H.map.Group.Options): this;
		forEach(
		callback: (object: H.map.Object, n: number, group: H.map.Group) => void, opt_recursive?: boolean, opt_context?: any
	): void;
		getObjects(opt_recursive?: boolean): Array<H.map.Object>;
		getBounds(): H.geo.Rect;
		addObject(object: H.map.Object): H.map.Object;
		addObjects(objects: Array<H.map.Object>): void;
		removeObject(object: H.map.Object): H.map.Object;
		removeObjects(objects: Array<H.map.Object>): void;
		removeAll(): void
	}

	declare export class HitArea  {
		constructor(shapeType: H.map.HitArea.ShapeType, opt_values?: Array<number>): this
	}

	declare export class Icon  {
		constructor(bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H.map.Icon.Options): this;
		getState(): H.map.Icon.State;
		getBitmap(): (HTMLImageElement | HTMLCanvasElement);
		getSize(): H.math.Size;
		getAnchor(): H.math.Point;
		getHitArea(): H.map.HitArea;
		addEventListener(
		type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object
	): void;
		removeEventListener(
		type: string, handler: Function, opt_capture?: boolean, opt_scope?: Object
	): void;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class Imprint  {
		constructor(map: H.Map, opt_options?: H.map.Imprint.Options): this;
		setOptions(opt_options?: H.map.Imprint.Options): void;
		getCopyrights(): string;
		getStyle(): CSSStyleDeclaration;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void;
		capture(
		canvas: HTMLCanvasElement, pixelRatio: number, callback?: (canvas: HTMLCanvasElement) => void, opt_errback?: (s: string) => void
	): void
	}

	declare export class Marker extends undefined$AbstractMarker {
		constructor(position: H.geo.IPoint, opt_options?: H.map.Marker.Options): this
	}

	declare export class Object extends undefined$EventTarget {
		constructor(opt_options?: H.map.Object.Options): this;
		getId(): any;
		setVisibility(opt_visibility?: boolean): H.map.Object;
		getVisibility(opt_effective?: boolean): boolean;
		getZIndex(): number | void;
		setZIndex(zIndex?: number): H.map.Object;
		compareZOrder(first: H.map.Object, second: H.map.Object): number;
		getParentGroup(): H.map.Group;
		getRootGroup(): H.map.Object;
		contains(object: any): boolean;
		getProvider(): H.map.provider.ObjectProvider;
		getInvalidations(): H.map.provider.Invalidations;
		invalidate(flags: H.math.BitMask): boolean;
		getData(): any;
		setData(data: any): H.map.Object;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class Overlay extends undefined$Object {
		constructor(bounds: H.geo.Rect, bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H.map.Overlay.Options): this;
		getBounds(): H.geo.Rect;
		setBounds(bounds: H.geo.Rect): H.map.Overlay;
		getBitmap(): (HTMLImageElement | HTMLCanvasElement);
		setBitmap(bitmap: (string | HTMLImageElement | HTMLCanvasElement)): H.map.Overlay;
		getOpacity(): number;
		setOpacity(opacity: number): H.map.Overlay
	}

	declare export class Polygon extends undefined$GeoShape {
		constructor(strip: H.geo.Strip, opt_options?: H.map.Spatial.Options): this;
		setNorthPoleCovering(flag: boolean): H.map.Polygon;
		getNorthPoleCovering(): boolean
	}

	declare export class Polyline extends undefined$GeoShape {
		constructor(strip: H.geo.Strip, opt_options?: H.map.Polyline.Options): this;
		clip(geoRect: H.geo.Rect): Array<Array<number>>
	}

	declare export class Rect extends undefined$Polygon {
		constructor(bounds: H.geo.Rect, opt_options?: H.map.Spatial.Options): this;
		setBounds(bounds: H.geo.Rect): void
	}

	declare export class Spatial extends undefined$Object {
		constructor(isClosed: boolean, opt_options?: H.map.Spatial.Options): this;
		getStyle(): H.map.SpatialStyle;
		setStyle(opt_style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): H.map.Spatial;
		getArrows(): H.map.ArrowStyle | void;
		setArrows(opt_arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options)): H.map.Spatial;
		isClosed(): boolean
	}

	declare export class SpatialStyle  {
		constructor(opt_options?: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): this;
		equals(other: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): boolean;
		getCopy(opt_attributes?: H.map.SpatialStyle.Options): H.map.SpatialStyle;
		strokeColor: string;
		fillColor: string;
		lineWidth: number;
		lineCap: H.map.SpatialStyle.LineCap;
		lineJoin: H.map.SpatialStyle.LineJoin;
		miterLimit: number;
		lineDash: Array<number>;
		lineDashOffset: number;
		MAX_LINE_WIDTH: number;
		DEFAULT_STYLE: H.map.SpatialStyle
	}

	declare export class ViewModel extends undefined$EventTarget, undefined$IControl {
		getCameraData(): H.map.ViewModel.CameraData;
		setCameraData(data: H.map.ViewModel.CameraData): H.map.ViewModel;
		setZoom(zoom: number, animate: boolean): void;
		getZoom(): number;
		getRequestedCameraData(): H.map.ViewModel.CameraData;
		startControl(
		opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number
	): void;
		control(
		moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, opt_zoom?: number
	): void;
		endControl(
		opt_preventKinetics?: boolean, opt_adjustView?: (data: H.map.ViewModel.CameraData) => void
	): void;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class ViewPort extends undefined$EventTarget, undefined$IInteraction {
		constructor(element: Element, opt_options?: H.map.ViewPort.Options): this;
		setMargin(margin: number): void;
		setPadding(top: number, right: number, bottom: number, left: number): void;
		resize(): void;
		startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void;
		interaction(
		x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number
	): void;
		endInteraction(opt_preventKinetics?: boolean): void;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void;
		element: Element;
		width: number;
		height: number;
		margin: number;
		padding: H.map.ViewPort.Padding;
		center: H.math.Point
	}

	
}

declare module 'AbstractMarker' {
		declare export interface Options {
		min?: number,
		max?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		icon?: H.map.Icon | H.map.DomIcon,
		data?: any
	}

			
}

declare module 'ArrowStyle' {
		declare export interface Options {
		fillColor?: string,
		width?: number,
		length?: number,
		frequency?: number
	}

			
}

declare module 'Circle' {
		declare export interface Options {
		style?: H.map.SpatialStyle | H.map.SpatialStyle.Options,
		visibility?: boolean,
		precision?: number,
		zIndex?: number,
		min?: number,
		max?: number,
		provider?: H.map.provider.Provider,
		data?: any
	}

			
}

declare module 'DomIcon' {
		declare export interface Options {
		onAttach?: (el: Element, icon: H.map.DomIcon, marker: H.map.DomMarker) => void,
		onDetach?: (el: Element, icon: H.map.DomIcon, marker: H.map.DomMarker) => void
	}

			
}

declare module 'DomMarker' {
		declare export interface Options {
		min?: number,
		max?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		icon?: H.map.DomIcon,
		data?: any
	}

			
}

declare module 'Group' {
		declare export interface Options {
		min?: number,
		max?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		data?: any,
		objects?: Array<H.map.Object>
	}

			
}

declare module 'Icon' {
		declare export interface Options {
		size?: H.math.ISize,
		anchor?: H.math.IPoint,
		hitArea?: H.map.HitArea,
		asCanvas?: H.map.HitArea,
		crossOrigin: boolean
	}

			
}

declare module 'Imprint' {
		declare export interface Options {
		invert?: boolean,
		font?: string,
		href?: string
	}

			
}

declare module 'Marker' {
		declare export interface Options {
		min?: number,
		max?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		icon?: H.map.Icon,
		data?: any
	}

			
}

declare module 'Object' {
		declare export interface Options {
		min?: number,
		max?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		data?: any
	}

			
}

declare module 'Overlay' {
		declare export interface Options {
		min?: number,
		max?: number,
		opacity?: number,
		visibility?: boolean,
		zIndex?: number,
		provider?: H.map.provider.Provider,
		data?: any
	}

			
}

declare module 'Polyline' {
		declare export interface Options {
		style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options),
		arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options),
		visibility?: boolean,
		zIndex?: number,
		min?: number,
		max?: number,
		provider?: H.map.provider.Provider,
		data?: any
	}

			
}

declare module 'Spatial' {
		declare export interface Label {
		x: number,
		y: number,
		angle: number,
		font: string,
		size: number,
		color: string,
		text: string
	}

	declare export interface Options {
		style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options),
		arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options),
		visibility?: boolean,
		zIndex?: number,
		min?: number,
		max?: number,
		provider?: H.map.provider.Provider,
		data?: any
	}

			
}

declare module 'SpatialStyle' {
	declare export type LineCap = "butt" | "round" | "square";

	declare export type LineJoin = "round" | "bevel" | "miter";

	declare export interface Options {
		strokeColor?: string,
		fillColor?: string,
		lineWidth?: number,
		lineCap?: H.map.SpatialStyle.LineCap,
		lineJoin?: H.map.SpatialStyle.LineJoin,
		miterLimit?: number,
		lineDash?: Array<number>,
		lineDashOffset?: number
	}

			
}

declare module 'ViewModel' {
		declare export interface CameraData {
		zoom?: number,
		position: H.geo.IPoint,
		pitch?: number,
		yaw?: number,
		roll?: number,
		fov?: number
	}

	declare export interface RequestedData {
		camera?: H.map.ViewModel.CameraData,
		zoom?: number,
		animate?: boolean
	}

		declare export class UpdateEvent extends undefined$Event {
		constructor(requested: H.map.ViewModel.RequestedData): this;
		preventDefault(): void;
		stopPropagation(): void;
		target: any;
		currentTarget: any;
		type: string;
		defaultPrevented: boolean
	}

	
}

declare module 'ViewPort' {
		declare export interface Options {
		margin?: number,
		padding?: H.map.ViewPort.Padding,
		fixedCenter?: boolean
	}

	declare export interface Padding {
		top: number,
		right: number,
		bottom: number,
		left: number
	}

			
}

declare module 'layer' {
		declare export interface IMarkerLayer {
		requestMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse),
		requestDomMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)
	}

	declare export interface ITileLayer {
		requestTiles(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): H.map.layer.ITileLayer.Response,
		requestTile(
		x: number, y: number, z: number, cacheOnly: boolean
	): H.map.provider.Tile | void,
		cancelTile(x: number, y: number, z: number): void
	}

		declare export class BaseTileLayer extends undefined$Layer {
		constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options): this;
		getProvider(): H.map.provider.TileProvider;
		geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;
		getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;
		requestTile(
		x: number, y: number, z: number, cacheOnly: boolean
	): H.map.provider.Tile | void;
		cancelTile(x: number, y: number, z: number): void;
		getProviderTiles(
		tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): H.map.layer.ITileLayer.Response
	}

	declare export class Layer extends undefined$EventTarget {
		constructor(opt_options?: H.map.layer.Layer.Options): this;
		isValid(zoomLevel: number): boolean;
		setMin(min: number): H.map.layer.Layer;
		setMax(max: number): H.map.layer.Layer;
		getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class MarkerTileLayer extends undefined$BaseTileLayer, undefined$IMarkerLayer {
		constructor(provider: H.map.provider.MarkerTileProvider, opt_options?: H.map.layer.ITileLayer.Options): this;
		requestMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse);
		requestDomMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)
	}

	declare export class ObjectLayer extends undefined$Layer, undefined$ITileLayer {
		constructor(provider: H.map.provider.ObjectProvider, opt_options?: H.map.layer.ObjectLayer.Options): this;
		getProvider(): H.map.provider.ObjectProvider;
		requestOverlays(
		bounds: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): H.map.layer.ObjectLayer.OverlaysResponse;
		requestTiles(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): H.map.layer.ITileLayer.Response;
		requestTile(
		x: number, y: number, z: number, cacheOnly: boolean
	): H.map.provider.Tile | void;
		cancelTile(x: number, y: number, z: number): void;
		requestMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse);
		requestDomMarkers(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)
	}

	declare export class TileLayer extends undefined$BaseTileLayer, undefined$ITileLayer {
		constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options): this;
		requestTiles(
		boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point
	): H.map.layer.ITileLayer.Response;
		update: H.util.Event
	}

	
}

declare module 'IMarkerLayer' {
		declare export interface Response {
		total: number,
		markers: Array<H.map.AbstractMarker>
	}

	declare export interface TiledResponse {
		number: number,
		requested: number,
		objects: Array<H.map.AbstractMarker>
	}

			
}

declare module 'ITileLayer' {
		declare export interface Options {
		projection?: H.geo.IProjection,
		opacity?: number
	}

	declare export interface Response {
		total: number,
		tiles: Array<H.map.provider.Tile>
	}

			
}

declare module 'Layer' {
		declare export interface Options {
		min?: number,
		max?: number,
		dark?: boolean,
		projection?: H.geo.IProjection,
		minWorldSize?: number
	}

			
}

declare module 'ObjectLayer' {
		declare export interface Options {
		tileSize?: number,
		tileCacheSize?: number,
		dataCacheSize?: number,
		pixelRatio?: number
	}

	declare export interface OverlaysResponse {
		total: number,
		overlays: Array<H.map.Overlay>
	}

			
}

declare module 'provider' {
				declare export class ImageTileProvider extends undefined$RemoteTileProvider {
		constructor(options: H.map.provider.ImageTileProvider.Options): this;
		tileSize: number
	}

	declare export class Invalidations  {
		update(mark: H.map.provider.Invalidations.Mark, types: H.math.BitMask): void;
		getMark(): H.map.provider.Invalidations.Mark;
		isAny(since: H.map.provider.Invalidations.Mark): boolean;
		isVisual(since: H.map.provider.Invalidations.Mark): boolean;
		isSpatial(since: H.map.provider.Invalidations.Mark): boolean;
		isAdd(since: H.map.provider.Invalidations.Mark): boolean;
		isRemove(since: H.map.provider.Invalidations.Mark): boolean;
		isZOrder(since: H.map.provider.Invalidations.Mark): boolean;
		MARK_INITIAL: H.map.provider.Invalidations.Mark
	}

	declare export class MarkerTileProvider extends undefined$RemoteTileProvider {
		constructor(options: H.map.provider.MarkerTileProvider.Options): this;
		invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask): void;
		providesDomMarkers(): boolean
	}

	declare export class ObjectProvider extends undefined$Provider {
		constructor(opt_options?: H.map.provider.Provider.Options): this;
		getInvalidations(opt_type?: H.map.Object.Type): H.map.provider.Invalidations;
		invalidateObject(mapObject: H.map.Object, changes: H.math.BitMask): void;
		providesOverlays(): boolean;
		requestOverlays(
		geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Overlay>;
		providesSpatials(): boolean;
		requestSpatials(
		geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Spatial>;
		requestSpatialsByTile(
		tile: H.map.provider.Tile, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Spatial>;
		providesMarkers(): boolean;
		requestMarkers(
		geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.Marker>;
		providesDomMarkers(): boolean;
		requestDomMarkers(
		geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean
	): Array<H.map.DomMarker>
	}

	declare export class Provider extends undefined$EventTarget {
		constructor(opt_options?: H.map.provider.Provider.Options): this;
		getCopyrights(bounds: H.geo.Rect, level: number): Array<H.map.ICopyright>;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void;
		uri: string;
		min: number;
		max: number;
		uid: string
	}

	declare export class RemoteTileProvider extends undefined$TileProvider {
		constructor(options: H.map.provider.TileProvider.Options): this;
		getCache(): H.util.ICache;
		requestInternal(
		x: number, y: number, z: number, onResponse?: (
		object: Array<H.map.Object> | HTMLImageElement | HTMLCanvasElement | ArrayBuffer, response: any
	) => void, onError?: (s: string) => void, opt_priority?: H.net.Request.Priority
	): H.util.ICancelable;
		reload(hard: boolean): void
	}

	declare export class Tile  {
		constructor(x: number, y: number, z: number, data?: any): this;
		key: string;
		data: any;
		valid: boolean;
		x: number;
		y: number;
		z: number
	}

	declare export class TileProvider extends undefined$Provider {
		constructor(options: H.map.provider.TileProvider.Options): this;
		createTileInternal(
		x: number, y: number, z: number, data: (HTMLImageElement | HTMLCanvasElement), opt_options?: {
		[key: string]: any
	}
	): H.map.provider.Tile;
		getTileKey(x: number, y: number, z: number): string;
		requestTile: any;
		cancelTile: any;
		cancelTileByKey: any;
		uri: string;
		min: number;
		max: number;
		uid: string
	}

	
}

declare module 'ImageTileProvider' {
		declare export interface Options {
		uri?: string,
		min?: number,
		max?: number,
		getCopyrights?: ((rect: H.geo.Rect, n: number) => Array<H.map.ICopyright>),
		tileSize?: number,
		getURL: (n1: number, n2: number, n3: number) => string,
		crossOrigin?: (string | boolean)
	}

			
}

declare module 'Invalidations' {
		declare export interface Mark {
		
	}

			
}

declare module 'MarkerTileProvider' {
		declare export interface Options {
		min?: number,
		max?: number,
		requestData: (
		n1: number, n2: number, n3: number, markerCallback: (markers: Array<H.map.AbstractMarker>) => void, f: Function
	) => H.util.ICancelable,
		providesDomMarkers?: boolean
	}

			
}

declare module 'TileProvider' {
		declare export interface Options {
		uri?: string,
		min?: number,
		max?: number,
		getCopyrights(rect: H.geo.Rect, number: number): Array<H.map.ICopyright>,
		tileSize?: number
	}

	declare export interface Options {
		tileType?: string,
		scheme?: string,
		tileCacheSize?: number,
		tileSize?: number,
		pixelRatio?: number,
		categoryFilter?: Array<string>
	}

	declare export interface Options {
		tileCacheSize?: number,
		pixelRatio?: number,
		onSpaceCreated?: (space: H.service.venues.Space) => void
	}

			
}

declare module 'mapevents' {
				declare export class Behavior extends undefined$Disposable {
		constructor(mapEvents: H.mapevents.MapEvents, options?: H.mapevents.Behavior.Options): this;
		dispose(): void;
		disable(opt_behavior?: H.math.BitMask): void;
		enable(opt_behavior?: H.math.BitMask): void;
		isEnabled(behavior: number): boolean;
		DRAGGING: number;
		WHEELZOOM: number;
		DBLTAPZOOM: number
	}

	declare export class ContextMenuEvent extends undefined$Event {
		constructor(viewportX: number, viewportY: number, target: (H.Map | H.map.Object), originalEvent: Event): this;
		viewportX: Array<H.util.ContextItem>;
		viewportY: number;
		originalEvent: Event
	}

	declare export class Event extends undefined$Event {
		constructor(type: string, pointers: Array<H.mapevents.Pointer>, changedPointers: Array<H.mapevents.Pointer>, targetPointers: Array<H.mapevents.Pointer>, currentPointer: H.mapevents.Pointer, target: (H.Map | H.map.Object), originalEvent: Event): this;
		preventDefault(): void;
		stopPropagation(): void;
		pointers: Array<H.mapevents.Pointer>;
		changedPointers: Array<H.mapevents.Pointer>;
		targetPointers: Array<H.mapevents.Pointer>;
		currentPointer: H.mapevents.Pointer;
		originalEvent: Event;
		target: (H.map.Object | H.Map);
		currentTarget: (H.map.Object | H.Map);
		type: string;
		defaultPrevented: boolean
	}

	declare export class MapEvents extends undefined$Disposable {
		constructor(map: H.Map): this;
		dispose(): void;
		getAttachedMap(): H.Map
	}

	declare export class Pointer  {
		constructor(viewportX: number, viewportY: number, id: number, type: string, opt_button?: H.mapevents.Pointer.Button, opt_buttons?: H.math.BitMask): this;
		viewportX: number;
		viewportY: number;
		target: (H.map.Object | H.Map);
		id: number;
		type: string;
		dragTarget: (H.map.Object | H.Map);
		button: H.mapevents.Pointer.Button
	}

	declare export class WheelEvent extends undefined$Event {
		constructor(deltaY: number, viewportX: number, viewportY: number, target: (H.Map | H.map.Object), originalEvent: Event): this;
		delta: number;
		viewportX: number;
		viewportY: number;
		originalEvent: Event
	}

	
}

declare module 'Behavior' {
		declare export interface Options {
		kinetics?: H.util.kinetics.IKinetics,
		enable?: H.math.BitMask
	}

			
}

declare module 'Pointer' {
	declare export type Buttons = H.math.BitMask;

				
}

declare module 'math' {
	declare export type BitMask = number;

	declare export interface IPoint {
		x: number,
		y: number
	}

	declare export interface ISize {
		w: number,
		h: number
	}

		declare export class Point extends IPoint {
		constructor(x: number, y: number): this;
		set(x: number, y: number): void;
		clone(opt_out?: Point): Point;
		add(other: IPoint): Point;
		sub(other: IPoint): Point;
		scale(factor: number, opt_factorY?: number): Point;
		round(): Point;
		floor(): Point;
		ceil(): Point;
		equals(other: IPoint): boolean;
		getNearest(start: IPoint, end: IPoint): IPoint;
		distance(other: IPoint): number;
		fromIPoint(iPoint: IPoint): Point;
		x: number;
		y: number
	}

	declare export class Rect  {
		constructor(left: number, top: number, right: number, bottom: number): this;
		set(left: number, top: number, right: number, bottom: number): void;
		getTopLeft(): H.math.Point;
		getBottomRight(): H.math.Point;
		containsXY(x: number, y: number): boolean;
		fromPoints(topLeft: H.math.IPoint, bottomRight: H.math.IPoint): H.math.Rect;
		clone(): H.math.Rect
	}

	declare export class Size  {
		constructor(width: number, height: number): this;
		w: number;
		h: number
	}

	
}

declare module 'Request' {
		declare export interface Priority {
		
	}

			
}

declare module 'service' {
		declare export interface IConfigurable {
		configure(
		appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url
	): H.service.IConfigurable
	}

	declare export interface JsonpRequestHandle {
		id: number,
		cancel: () => void
	}

	declare export interface MapType {
		map: H.map.layer.TileLayer,
		mapnight: H.map.layer.TileLayer,
		xbase?: H.map.layer.TileLayer,
		xbasenight?: H.map.layer.TileLayer,
		base?: H.map.layer.TileLayer,
		basenight?: H.map.layer.TileLayer,
		traffic?: H.map.layer.TileLayer,
		trafficnight?: H.map.layer.TileLayer,
		transit?: H.map.layer.TileLayer,
		panorama?: H.map.layer.TileLayer,
		panoramanight?: H.map.layer.TileLayer,
		labels?: H.map.layer.TileLayer
	}

	declare export interface ServiceParameters {
		[key: string]: string
	}

	declare export interface ServiceResult {
		[key: string]: string
	}

	declare export interface TileProviderOptions {
		crossOrigin?: boolean
	}

		declare export class AbstractRestService extends undefined$IConfigurable {
		constructor(opt_options?: H.service.AbstractRestService.Options): this;
		configure(
		appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url
	): H.service.IConfigurable
	}

	declare export class EnterpriseRoutingService extends undefined$AbstractRestService {
		constructor(opt_options?: H.service.EnterpriseRoutingService.Options): this;
		calculateRoute(
		calculateRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): void;
		getRoute(
		getRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): void;
		getLinkInfo(
		getLinkInfoParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): void;
		calculateIsoline(
		calculateIsolineParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): void
	}

	declare export class GeocodingService extends undefined$AbstractRestService {
		constructor(opt_options?: H.service.GeocodingService.Options): this;
		geocode(
		geoodingParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): H.service.JsonpRequestHandle;
		reverseGeocode(
		reverseGeocodingParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): H.service.JsonpRequestHandle;
		search(
		searchParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): H.service.JsonpRequestHandle
	}

	declare export class MapTileService extends undefined$EventTarget, undefined$IConfigurable {
		constructor(opt_options?: H.service.MapTileService.Options): this;
		getType(): string;
		getVersion(): string;
		getInfo(): H.service.MapTileService.Info | void;
		createTileProvider(
		tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_options?: H.service.TileProviderOptions
	): H.map.provider.ImageTileProvider;
		createTileLayer(
		tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_opacity?: number, opt_dark?: boolean, opt_options?: H.service.TileProviderOptions
	): H.map.layer.TileLayer;
		configure(
		appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url
	): H.service.IConfigurable
	}

	declare export class PlacesService extends undefined$AbstractRestService {
		constructor(opt_options?: H.service.PlacesService.Options): this;
		request(
		entryPoint: string, entryPointParams: Object, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		search(
		searchParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		suggest(
		suggestParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		explore(
		exploreParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		around(
		aroundParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		here(
		hereParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		categories(
		categoriesParams: H.service.ServiceParameters, onResult: Function, onError: Function
	): H.service.JsonpRequestHandle;
		follow(
		hyperlink: string, onResult: Function, onError: Function, opt_additionalParameters?: Object
	): H.service.JsonpRequestHandle
	}

	declare export class Platform  {
		constructor(options: H.service.Platform.Options): this;
		configure(configurable: H.service.IConfigurable): H.service.IConfigurable;
		setUseHTTPS(useHTTPS: boolean): void;
		setUseCIT(useCIT: boolean): void;
		setBaseUrl(baseUrl: H.service.Url): void;
		getBaseUrl(): H.service.Url;
		getTrafficIncidentsService(): H.service.TrafficIncidentsService;
		getMapTileService(opt_options?: H.service.MapTileService.Options): H.service.MapTileService;
		getVenueService(opt_params?: H.service.venues.Service.Options): H.service.venues.Service;
		getMetaInfoService(opt_params?: H.service.metaInfo.Service.Options): H.service.metaInfo.Service;
		createDefaultLayers(
		opt_tileSize?: (H.service.Platform.DefaultLayersOptions | number), opt_ppi?: number, opt_lang?: string, opt_secondaryLang?: string, opt_style?: string, opt_pois?: (string | boolean)
	): H.service.Platform.MapTypes;
		getRoutingService(opt_options?: H.service.RoutingService.Options): H.service.RoutingService;
		getGeocodingService(opt_options?: H.service.GeocodingService.Options): H.service.GeocodingService;
		getPlacesService(): H.service.PlacesService;
		getEnterpriseRoutingService(
		opt_options?: H.service.EnterpriseRoutingService.Options
	): H.service.EnterpriseRoutingService
	}

	declare export class RoutingService extends undefined$AbstractRestService {
		constructor(opt_options?: H.service.RoutingService.Options): this;
		calculateRoute(
		calculateRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void
	): void
	}

	declare export class TrafficIncidentsService extends undefined$AbstractRestService {
		constructor(opt_options?: H.service.TrafficIncidentsService.Options): this;
		requestIncidents(
		serviceParams: H.service.ServiceParameters, onResponse: (result: H.service.ServiceResult) => void, onError: () => void
	): H.service.JsonpRequestHandle;
		requestIncidentsByTile(
		x: number, y: number, z: number, onResponse: (result: H.service.ServiceResult) => void, onError: () => void, opt_serviceParams?: H.service.ServiceParameters
	): H.service.JsonpRequestHandle
	}

	declare export class Url  {
		constructor(scheme: string, host: string, opt_path?: string, opt_params?: Object, opt_port?: number, opt_anchor?: string): this;
		parse(url: string, opt_baseURL?: string): H.service.Url;
		clone(): H.service.Url;
		setScheme(scheme: string): H.service.Url;
		getScheme(): string;
		setHost(host: string): H.service.Url;
		getHost(): string;
		setPath(path: string | boolean): H.service.Url;
		getPath(): string | void;
		setQuery(params?: Object | boolean): H.service.Url;
		hasQuery(): boolean;
		getQuery(): Object;
		setAnchor(anchor?: string | boolean): H.service.Url;
		getAnchor(): string | void;
		mergeQuery(other: Object): H.service.Url;
		addSubDomain(subDomain: string): H.service.Url;
		addSubPath(subPath: string): H.service.Url;
		toString(): string
	}

	
}

declare module 'AbstractRestService' {
		declare export interface Options {
		
	}

			
}

declare module 'EnterpriseRoutingService' {
		declare export interface Options {
		subDomain?: string,
		path?: string,
		baseUrl?: H.service.Url
	}

			
}

declare module 'GeocodingService' {
		declare export interface Options {
		subDomain?: string,
		path?: string
	}

			
}

declare module 'MapTileService' {
		declare export interface Info {
		maps: {
		[key: string]: any
	},
		schemes: {
		[key: string]: any
	},
		tiletypes: {
		[key: string]: any
	},
		formats: {
		[key: string]: any
	},
		resolutions: {
		[key: string]: any
	},
		languages: {
		[key: string]: any
	}
	}

	declare export interface Options {
		type?: string,
		version?: string,
		subDomain?: string,
		path?: string
	}

			
}

declare module 'PlacesService' {
		declare export interface Options {
		subDomain?: string,
		path?: string,
		baseUrl?: H.service.Url
	}

			
}

declare module 'Platform' {
		declare export interface DefaultLayersOptions {
		tileSize?: number,
		ppi?: number,
		lg?: string,
		lg2?: string,
		style?: string,
		pois?: boolean,
		crossOrigin?: (string | boolean)
	}

	declare export interface Options {
		app_id: string,
		app_code: string,
		baseUrl?: H.service.Url,
		useCIT?: boolean,
		useHTTPS?: boolean
	}

	declare export interface MapTypes {
		normal?: H.service.MapType,
		satellite?: H.service.MapType,
		terrain?: H.service.MapType,
		[key: string]: H.service.MapType
	}

			
}

declare module 'RoutingService' {
		declare export interface Options {
		subDomain?: string,
		path?: string,
		baseUrl?: H.service.Url
	}

			
}

declare module 'TrafficIncidentsService' {
		declare export interface Options {
		subDomain?: string,
		path?: string,
		baseUrl?: H.service.Url
	}

			
}

declare module 'metaInfo' {
				declare export class Service extends undefined$EventTarget, undefined$IConfigurable {
		constructor(opt_options?: H.service.metaInfo.Service.Options): this;
		getVersion(): string;
		getInfo(): H.service.metaInfo.Service.Info | void;
		createTileProvider(
		tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string
	): H.map.provider.TileProvider;
		createTileLayer(
		tileSize: number, pixelRatio: number, opt_categoryFilter?: Array<string>, opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string, opt_scheme?: string
	): H.map.layer.TileLayer;
		configure(
		appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url
	): H.service.IConfigurable
	}

	declare export class TileProvider extends undefined$RemoteTileProvider {
		constructor(service: (H.service.metaInfo.Service | H.service.MapTileService), opt_params?: H.service.ServiceParameters, opt_options?: H.service.metaInfo.TileProvider.Options): this
	}

	
}

declare module 'Service' {
		declare export interface Info {
		maps: {
		[key: string]: any
	},
		schemes: {
		[key: string]: any
	},
		tiletypes: {
		[key: string]: any
	},
		formats: {
		[key: string]: any
	},
		resolutions: {
		[key: string]: any
	},
		languages: {
		[key: string]: any
	}
	}

	declare export interface Options {
		type?: string,
		version?: string,
		subDomain?: string
	}

	declare export interface Options {
		subDomain?: string,
		path?: string
	}

			
}

declare module 'venues' {
				declare export class Building extends undefined$Group {
		constructor(provider: H.map.provider.ObjectProvider, uid: string, minLevel: number, maxLevel: number): this;
		getVenue(): H.service.venues.Venue;
		getMinLevel(): number;
		getMaxLevel(): number;
		getFloor(level: number): H.service.venues.Floor | void
	}

	declare export class Floor extends undefined$Group {
		constructor(provider: H.map.provider.ObjectProvider, data: any, level: number): this;
		getLevel(): number;
		getFloorSpace(): H.service.venues.Space | void;
		getSpaces(): H.map.Group;
		getBuilding(): H.service.venues.Building;
		getData(): any;
		getSpace(id: string): H.service.venues.Space | void
	}

	declare export class Service extends undefined$EventTarget, undefined$IConfigurable {
		constructor(opt_options?: H.service.venues.Service.Options): this;
		discover(
		serviceParams: H.service.ServiceParameters, onResult: (res: H.service.ServiceResult) => void, onError: (s: string) => void
	): void;
		createTileLayer(opt_options?: H.service.venues.TileProvider.Options): H.map.layer.TileLayer;
		getState(): H.service.venues.Service.State;
		configure(
		appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url
	): H.service.IConfigurable
	}

	declare export class Space  {
		constructor(provider: H.map.provider.ObjectProvider, uid: string, data?: any, opt_isFloorSpace?: boolean): this;
		isFloorSpace(): boolean;
		initLabelStyle(labelStyle: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): void;
		getFloor(): H.service.venues.Floor;
		getData(): Object
	}

	declare export class TileProvider extends undefined$RemoteTileProvider {
		constructor(service: H.service.venues.Service, opt_options?: H.service.venues.TileProvider.Options): this;
		setCurrentLevel(level: number): void;
		getCurrentLevel(): number
	}

	declare export class Venue extends undefined$Group {
		constructor(provider: H.map.provider.ObjectProvider, uid: string): this;
		getBuilding(id: string): H.service.venues.Building | void;
		getBuildings(): any
	}

	
}

declare module 'ui' {
	declare type ES6Element = Element;

			declare export class Control extends undefined$Container {
		onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;
		onMapEngineTypeChange(engineType: H.Map.EngineType): void;
		getMap(): H.Map;
		getLocalization(): H.ui.i18n.Localization;
		getAlignment(): H.ui.LayoutAlignment;
		setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control
	}

	declare export class DistanceMeasurement extends undefined$Control {
		constructor(opt_options?: H.ui.DistanceMeasurement.Options): this
	}

	declare export class InfoBubble extends base$Element {
		constructor(position: H.geo.IPoint, opt_options?: InfoBubble.Options): this;
		setPosition(position: H.geo.IPoint | H.geo.Point): void;
		getState(): InfoBubble.State;
		setState(state: InfoBubble.State): void;
		close(): void;
		open(): void;
		getContentElement(): HTMLElement;
		setContent(content: string | Node): void
	}

	declare export class MapSettingsControl extends undefined$Control {
		constructor(opt_options?: H.ui.MapSettingsControl.Options): this;
		setIncidentsLayer(incidentsLayer: H.map.layer.Layer): void
	}

	declare export class Pano extends undefined$Control {
		constructor(opt_options?: H.ui.Pano.Options): this
	}

	declare export class ScaleBar  {
		constructor(opt_options?: H.ui.ScaleBar.Options): this
	}

	declare export class UI extends undefined$ICapturable {
		constructor(map: H.Map, opt_options?: UI.Options): this;
		getElement(): Element;
		getMap(): H.Map;
		getUnitSystem(): UnitSystem;
		setUnitSystem(unitSystem: UnitSystem): void;
		toggleUnitSystem(): void;
		addBubble(bubble: InfoBubble): void;
		removeBubble(bubble: InfoBubble): void;
		getBubbles(): Array<InfoBubble>;
		addControl(name: string, control: Control): void;
		removeControl(name: string): Control;
		getControl(name: string): Control;
		createDefault(
		map: H.Map, mapTypes: H.service.Platform.MapTypes, opt_locale?: H.ui.i18n.Localization | string
	): UI;
		capture(
		canvas: HTMLCanvasElement, pixelRation: number, callback: (canvas?: HTMLCanvasElement) => void, opt_errback?: (error: string) => void
	): void
	}

	declare export class ZoomControl extends undefined$Control {
		constructor(opt_options?: H.ui.ZoomControl.Options): this;
		getZoomSpeed(): number
	}

	declare export class ZoomRectangle extends undefined$Control {
		constructor(opt_options?: H.ui.ZoomRectangle.Options): this
	}

	
}

declare module 'DistanceMeasurement' {
		declare export interface Options {
		alignment?: H.ui.LayoutAlignment,
		startIcon?: H.map.Icon,
		stopoverIcon?: H.map.Icon,
		endIcon?: H.map.Icon,
		splitIcon?: H.map.Icon,
		lineStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options,
		distanceFormatter(n: number): void
	}

			
}

declare module 'InfoBubble' {
		declare export interface Options {
		onStateChange(event: H.util.Event): void,
		content: string | Node
	}

			
}

declare module 'MapSettingsControl' {
		declare export interface MapTypeEntry {
		name: string,
		mapType: H.service.MapType
	}

	declare export interface Options {
		alignment?: H.ui.LayoutAlignment,
		entries?: Array<H.ui.MapSettingsControl.MapTypeEntry>,
		incidents: H.map.layer.Layer
	}

			
}

declare module 'Pano' {
		declare export interface Options {
		alignment?: H.ui.LayoutAlignment,
		mapTypes: H.service.MapType
	}

			
}

declare module 'ScaleBar' {
		declare export interface Options {
		alignment?: H.ui.LayoutAlignment
	}

			
}

declare module 'UI' {
		declare export interface Options {
		unitSystem?: H.ui.UnitSystem,
		zoom?: (H.ui.ZoomControl.Options | boolean),
		zoomrectangle?: (H.ui.ZoomRectangle.Options | boolean),
		mapsettings?: (H.ui.MapSettingsControl.Options | boolean),
		scalebar?: (H.ui.ScaleBar.Options | boolean),
		panorama?: (H.ui.Pano.Options | boolean),
		distancemeasurement?: (H.ui.DistanceMeasurement.Options | boolean),
		locale?: (H.ui.i18n.Localization | string)
	}

			
}

declare module 'ZoomControl' {
		declare export interface Options {
		zoomSpeed?: number,
		alignment?: H.ui.LayoutAlignment,
		slider?: boolean,
		sliderSnaps?: boolean
	}

			
}

declare module 'ZoomRectangle' {
		declare export interface Options {
		alignment?: H.ui.LayoutAlignment,
		adjustZoom(n: number, m: H.Map): number
	}

			
}

declare module 'base' {
				declare export class Container extends undefined$EventTarget {
		constructor(opt_elementType?: string, opt_className?: string, opt_children?: Array<Element>): this;
		addChild(child: Element): Container;
		getChildren(): Array<Element>;
		removeChild(child: Element): void;
		renderInternal(element: ES6Element, doc: Document): void;
		isDisabled(): boolean;
		setDisabled(disabled: boolean, opt_force?: boolean): ES6Element;
		getData(): any;
		setData(data: any): void;
		getElement(): HTMLElement;
		setVisibility(visibility: boolean): void;
		getVisibility(): boolean;
		addClass(className: string): Element;
		removeClass(className: string): Element
	}

	declare export class Element extends undefined$EventTarget {
		constructor(opt_elementType?: string, opt_className?: string): this;
		renderInternal(element: ES6Element, doc: Document): void;
		isDisabled(): boolean;
		setDisabled(disabled: boolean, opt_force?: boolean): ES6Element;
		getData(): any;
		setData(data: any): void;
		getElement(): HTMLElement;
		setVisibility(visibility: boolean): void;
		getVisibility(): boolean;
		addClass(className: string): Element;
		removeClass(className: string): Element
	}

	
}

declare module 'i18n' {
				declare export class Localization  {
		constructor(locale: string, opt_translationMap?: any): this;
		getLocale(): string;
		getKeys(): Array<string>;
		hasKey(key: string): boolean;
		translate(key: string): string
	}

	
}

declare module 'util' {
		declare export interface ICache {
		add(id: any, data: any, size: number): boolean,
		get(id: string, opt_noUpdate?: boolean): any,
		drop(id: any): void,
		forEach(
		callback: (s: string, t: any, n: number) => void, opt_ctx?: Object, opt_matcher?: ((s: string, t: any, n: number) => boolean)
	): void,
		removeAll(opt_matcher?: ((s: string, t: any, n: number) => boolean)): void,
		registerOnDrop(callback: ((s: string, t: any, n: number) => void)): void
	}

	declare export interface ICancelable {
		cancel(): void
	}

	declare export interface ICapturable {
		capture(
		canvas: HTMLCanvasElement, pixelRation: number, callback: (canvas?: HTMLCanvasElement) => void, opt_errback?: (error: string) => void
	): void
	}

		declare export class Cache extends undefined$ICache {
		constructor(maxSize: number, opt_onDrop?: (s: string, i: any, n: number) => void, opt_filter?: (s: string, i: any, n: number) => boolean): this;
		setMaxSize(maxSize: number): H.util.Cache;
		getMaxSize(): number;
		getCurrentSize(): number;
		add(id: any, data: any, size: number): boolean;
		get(id: string, opt_noUpdate?: boolean): any;
		drop(id: any): void;
		forEach(
		callback: (s: string, i: any, n: number) => void, opt_ctx?: any, opt_matcher?: (s: string, i: any, n: number) => boolean
	): void;
		removeAll(opt_matcher?: (s: string, i: any, n: number) => boolean): void;
		registerOnDrop(callback: (s: string, i: any, n: number) => void): void
	}

	declare export class ChangeEvent extends undefined$Event {
		constructor(type: string, newValue: any, oldValue: any): this;
		preventDefault(): void;
		stopPropagation(): void;
		target: any;
		currentTarget: any;
		type: string;
		defaultPrevented: boolean
	}

	declare export class ContextItem extends undefined$EventTarget {
		constructor(opt_options?: H.util.ContextItem.Options): this;
		getLabel(): string;
		setLabel(label: string): H.util.ContextItem;
		isDisabled(): boolean;
		setDisabled(disabled: boolean): H.util.ContextItem;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void;
		SEPARATOR: H.util.ContextItem
	}

	declare export class Disposable  {
		constructor(): this;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class Event  {
		constructor(type: string, opt_target?: any): this;
		preventDefault(): void;
		stopPropagation(): void;
		target: any;
		currentTarget: any;
		type: string;
		defaultPrevented: boolean
	}

	declare export class EventTarget  {
		constructor(): this;
		addEventListener(
		type: string, handler: EventListenerOrEventListenerObject, opt_capture?: boolean, opt_scope?: any
	): void;
		removeEventListener(
		type: string, handler: EventListenerOrEventListenerObject, opt_capture?: boolean, opt_scope?: any
	): void;
		dispatchEvent(evt: H.util.Event | string): void;
		dispose(): void;
		addOnDisposeCallback(callback: () => void, opt_scope?: any): void
	}

	declare export class OList extends undefined$EventTarget {
		add(entry: any, opt_idx?: number): void;
		removeAt(idx: number): any;
		remove(entry: any): boolean;
		set(idx: number, entry: any): any;
		indexOf(entry: any): number;
		get(idx: number): any;
		getLength(): number;
		asArray(): Array<any>;
		flush(): void;
		dispatchEvent(evt: (H.util.Event | string)): void;
		dispose(): void;
		addOnDisposeCallback(callback: Function, opt_scope?: Object): void
	}

	declare export class Request  {
		constructor(opt_onprogress?: (req: H.util.Request) => void, opt_total?: number): this;
		getState(): H.util.Request.State;
		getTotal(): number;
		getProcessed(): number;
		getFailed(): number
	}

	
}

declare module 'ContextItem' {
		declare export interface Options {
		label?: string,
		disabled?: boolean,
		callback?: (event: H.util.Event) => void
	}

			
}

declare module 'OList' {
				declare export class Event extends undefined$Event {
		constructor(list: H.util.OList, type: string, idx: number, added: any, removed: any, moved: any): this;
		preventDefault(): void;
		stopPropagation(): void;
		target: any;
		currentTarget: any;
		type: string;
		defaultPrevented: boolean
	}

	
}

declare module 'animation' {
				declare export class ease  {
		LINEAR(val: number): number;
		EASE_IN_QUAD(val: number): number;
		EASE_OUT_QUAD(val: number): number;
		EASE_IN_OUT_QUINT(val: number): number;
		EASE_OUT_CIRC(val: number): number
	}

	
}

declare module 'kinetics' {
		declare export interface IKinetics {
		ease(p: number): number,
		power: number,
		duration: number
	}

			
}