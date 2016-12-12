

declare module 'openlayers' {
	declare type GlobalObject = Object;

				declare module.exports: undefined


}

declare module 'animation' {
		declare interface BounceOptions {
		resolution: number,
		start?: number,
		duration?: number,
		easing: ((t: number) => number)
	}

	declare interface PanOptions {
		source: ol.Coordinate,
		start?: number,
		duration?: number,
		easing: ((t: number) => number)
	}

	declare interface RotateOptions {
		rotation?: number,
		anchor?: ol.Coordinate,
		start?: number,
		duration?: number,
		easing: ((t: number) => number)
	}

	declare interface ZoomOptions {
		resolution: number,
		start?: number,
		duration?: number,
		easing: ((t: number) => number)
	}

	declare function bounce(options: olx.animation.BounceOptions): ol.PreRenderFunction

	declare function pan(options: olx.animation.PanOptions): ol.PreRenderFunction

	declare function rotate(options: olx.animation.RotateOptions): ol.PreRenderFunction

	declare function zoom(options: olx.animation.ZoomOptions): ol.PreRenderFunction

		
}

declare module 'ol' {
	declare type ImageState = number;

	declare type OverlayPositioning = string;

	declare type RendererType = string;

	declare type RasterOperationType = string;

	declare type AttributionLike = (string | string[] | ol.Attribution | ol.Attribution[]);

	declare type CanvasFunctionType = (
		extent: ol.Extent, resolution: number, pixelRatio: number, size: ol.Size, proj: ol.proj.Projection
	) => HTMLCanvasElement;

	declare type Color = ([number, number, number, number] | Uint8Array | Uint8ClampedArray);

	declare type ColorLike = (string | CanvasPattern | CanvasGradient);

	declare type Coordinate = [number, number];

	declare type CoordinateFormatType = (coords?: ol.Coordinate) => string;

	declare type DragBoxEndConditionType = (event: ol.MapBrowserEvent, pixel1: ol.Pixel, pixel2: ol.Pixel) => boolean;

	declare type DrawGeometryFunctionType = (
		coords: (ol.Coordinate | ol.Coordinate[] | ol.Coordinate[][]), geo: ol.geom.SimpleGeometry
	) => ol.geom.SimpleGeometry;

	declare type EventsConditionType = (event: ol.MapBrowserEvent) => boolean;

	declare type EventsKey = Object;

	declare type Extent = [number, number, number, number];

	declare type FeatureLoader = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => void;

	declare type FeatureStyleFunction = (resolution: number) => (ol.style.Style | ol.style.Style[]);

	declare type FeatureUrlFunction = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => string;

	declare type ImageLoadFunctionType = (image: ol.Image, url: string) => void;

	declare type LoadingStrategy = (extent: ol.Extent, resolution: number) => ol.Extent[];

	declare type ModifyEventType = string;

	declare type Pixel = [number, number];

	declare type PreRenderFunction = (map: ol.Map, state?: olx.FrameState) => boolean;

	declare type ProjectionLike = (ol.proj.Projection | string);

	declare type RasterOperation = (data: (number[][] | ImageData[]), obj: GlobalObject) => (number[] | ImageData);

	declare type SelectFilterFunction = (feature: (ol.Feature | ol.render.Feature), layer: ol.layer.Layer) => boolean;

	declare type Size = [number, number];

	declare type StyleFunction = (
		feature: (ol.Feature | ol.render.Feature), resolution: number
	) => (ol.style.Style | ol.style.Style[]);

	declare type StyleGeometryFunction = (
		feature: (ol.Feature | ol.render.Feature)
	) => (ol.geom.Geometry | ol.render.Feature);

	declare type TileCoord = [number, number, number];

	declare type TileLoadFunctionType = (tile: ol.Tile, url: string) => void;

	declare type TileUrlFunctionType = (coords: ol.TileCoord, pixelRatio: number, proj: ol.proj.Projection) => string;

	declare type TransformFunction = (array: number[], out?: number[], dimension?: number) => number[];

	declare type WFSFeatureCollectionMetadata = Object;

	declare type WFSTransactionResponse = Object;

	declare interface SourceImageOptions {
		attributions?: ol.AttributionLike,
		extent?: (ol.Extent),
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		resolutions?: number[],
		state?: ol.source.State
	}

	declare interface SourceSourceOptions {
		attributions?: ol.AttributionLike,
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		state?: ol.source.State,
		wrapX?: boolean
	}

	declare interface SourceUrlTileOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		extent?: ol.Extent,
		logo?: (string | olx.LogoOptions),
		opaque?: boolean,
		projection: ol.ProjectionLike,
		state?: ol.source.State,
		tileGrid?: ol.tilegrid.TileGrid,
		tileLoadFunction: ol.TileLoadFunctionType,
		tilePixelRatio?: number,
		tileUrlFunction?: ol.TileUrlFunctionType,
		url?: string,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface SourceTileOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		extent?: ol.Extent,
		logo?: (string | olx.LogoOptions),
		opaque?: boolean,
		tilePixelRatio?: number,
		projection: ol.ProjectionLike,
		state?: ol.source.State,
		tileGrid?: ol.tilegrid.TileGrid,
		wrapX?: boolean
	}

	declare interface StyleImageOptions {
		opacity: number,
		rotateWithView: boolean,
		rotation: number,
		scale: number,
		snapToPixel: boolean
	}

	declare function inherits(childCtor: (() => any), parentCtor: (() => any)): void

	declare class AssertionError extends Error {
		constructor(code: number): this;
		code: number
	}

	declare class Attribution  {
		constructor(options: olx.AttributionOptions): this;
		getHTML(): string
	}

	declare class Collection<T> extends ol$Object {
		constructor(opt_array?: T[]): this;
		clear(): void;
		extend(arr: T[]): ol.Collection<T>;
		forEach<S>(f: ((item: T, index: number, array: T[]) => any), opt_this?: S): void;
		getArray(): T[];
		item(index: number): T;
		getLength(): number;
		insertAt(index: number, elem: T): void;
		pop(): (T);
		push(elem: T): number;
		remove(elem: T): (T);
		removeAt(index: number): (T);
		setAt(index: number, elem: T): void
	}

	declare class DeviceOrientation extends ol$Object {
		constructor(opt_options?: olx.DeviceOrientationOptions): this;
		getAlpha(): (number);
		getBeta(): (number);
		getGamma(): (number);
		getHeading(): (number);
		getTracking(): boolean;
		setTracking(tracking: boolean): void
	}

	declare class Disposable  {
		constructor(): this
	}

	declare class Feature extends ol$Object {
		constructor(opt_geometryOrProperties?: (ol.geom.Geometry | {
		[k: string]: any
	})): this;
		clone(): ol.Feature;
		getGeometry(): (ol.geom.Geometry);
		getId(): (number | string);
		getGeometryName(): string;
		getStyle(): (ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction);
		getStyleFunction(): (ol.FeatureStyleFunction);
		setGeometry(geometry: (ol.geom.Geometry)): void;
		setStyle(style: (ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction)): void;
		setId(id: (number | string)): void;
		setGeometryName(name: string): void
	}

	declare class Geolocation extends ol$Object {
		constructor(opt_options?: olx.GeolocationOptions): this;
		getAccuracy(): (number);
		getAccuracyGeometry(): ol.geom.Geometry;
		getAltitude(): (number);
		getAltitudeAccuracy(): (number);
		getHeading(): (number);
		getPosition(): (ol.Coordinate);
		getProjection(): (ol.proj.Projection);
		getSpeed(): (number);
		getTracking(): boolean;
		getTrackingOptions(): (PositionOptions);
		setProjection(projection: ol.proj.Projection): void;
		setTracking(tracking: boolean): void;
		setTrackingOptions(options: PositionOptions): void
	}

	declare class Graticule  {
		constructor(opt_options?: olx.GraticuleOptions): this;
		getMap(): ol.Map;
		getMeridians(): ol.geom.LineString[];
		getParallels(): ol.geom.LineString[];
		setMap(map: ol.Map): void
	}

	declare class Image extends ol$ImageBase {
		constructor(extent: ol.Extent, resolution: (number), pixelRatio: number, attributions: ol.Attribution[], src: string, crossOrigin?: string, imageLoadFunction?: ol.ImageLoadFunctionType): this;
		getImage(opt_context?: GlobalObject): (HTMLCanvasElement | Image | HTMLVideoElement);
		load(): void
	}

	declare class ImageBase extends undefined$EventTarget {
		constructor(extent: ol.Extent, resolution: (number), pixelRatio: number, state: ol.ImageState, attributions: ol.Attribution[]): this
	}

	declare class ImageTile extends ol$Tile {
		constructor(tileCoord: ol.TileCoord, state: ol.Tile.State, src: string, crossOrigin?: string, tileLoadFunction?: ol.TileLoadFunctionType): this;
		getImage(
		opt_context?: GlobalObject
	): (HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)
	}

	declare class DragBoxEvent extends undefined$Event {
		constructor(type: string, coordinate: ol.Coordinate, mapBrowserEvent: ol.MapBrowserEvent): this;
		coordinate: ol.Coordinate;
		mapBrowserEvent: ol.MapBrowserEvent
	}

	declare class Kinetic  {
		constructor(decay: number, minVelocity: number, delay: number): this
	}

	declare class Map extends ol$Object {
		constructor(options: olx.MapOptions): this;
		addControl(control: ol.control.Control): void;
		addInteraction(interaction: ol.interaction.Interaction): void;
		addLayer(layer: ol.layer.Base): void;
		addOverlay(overlay: ol.Overlay): void;
		beforeRender(var_args: ol.PreRenderFunction): void;
		forEachFeatureAtPixel<S, T, U>(
		pixel: ol.Pixel, callback: ((feature: (ol.Feature | ol.render.Feature), layer: ol.layer.Layer) => T), opt_this?: S, opt_layerFilter?: ((layer: ol.layer.Layer) => boolean), opt_this2?: U
	): (T);
		forEachLayerAtPixel<S, T, U>(
		pixel: ol.Pixel, callback: ((layer: ol.layer.Layer, color: ol.Color) => T), opt_this?: S, opt_layerFilter?: ((layer: ol.layer.Layer) => boolean), opt_this2?: U
	): (T);
		hasFeatureAtPixel<U>(
		pixel: ol.Pixel, opt_layerFilter?: ((layer: ol.layer.Layer) => boolean), opt_this?: U
	): boolean;
		getEventCoordinate(event: Event): ol.Coordinate;
		getEventPixel(event: Event): ol.Pixel;
		getTarget(): (Element | string);
		getTargetElement(): Element;
		getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;
		getControls(): ol.Collection<ol.control.Control>;
		getOverlays(): ol.Collection<ol.Overlay>;
		getOverlayById(id: (string | number)): ol.Overlay;
		getInteractions(): ol.Collection<ol.interaction.Interaction>;
		getLayerGroup(): ol.layer.Group;
		getLayers(): ol.Collection<ol.layer.Base>;
		getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;
		getSize(): (ol.Size);
		getView(): ol.View;
		getViewport(): Element;
		renderSync(): void;
		render(): void;
		removeControl(control: ol.control.Control): (ol.control.Control);
		removeInteraction(interaction: ol.interaction.Interaction): (ol.interaction.Interaction);
		removeLayer(layer: ol.layer.Base): (ol.layer.Base);
		removeOverlay(overlay: ol.Overlay): (ol.Overlay);
		setLayerGroup(layerGroup: ol.layer.Group): void;
		setSize(size: (ol.Size)): void;
		setTarget(target: (Element | string)): void;
		setView(view: ol.View): void;
		updateSize(): void
	}

	declare class MapBrowserEvent extends ol$MapEvent {
		constructor(type: string, map: ol.Map, browserEvent: Event, opt_dragging?: boolean, opt_frameState?: olx.FrameState): this;
		originalEvent: Event;
		pixel: ol.Pixel;
		coordinate: ol.Coordinate;
		dragging: boolean
	}

	declare class MapBrowserPointerEvent extends ol$MapBrowserEvent {
		pointerEvent: ol.pointer.PointerEvent
	}

	declare class MapEvent extends undefined$Event {
		constructor(type: string, map: ol.Map, opt_frameState?: olx.FrameState): this;
		map: ol.Map;
		frameState: olx.FrameState
	}

	declare class ObjectEvent extends undefined$Event {
		constructor(type: string, key: string, oldValue: any): this;
		key: string;
		oldValue: any
	}

	declare class Object extends ol$Observable {
		constructor(opt_values?: {
		[k: string]: any
	}): this;
		get(key: string): any;
		getKeys(): string[];
		getProperties(): {
		[k: string]: any
	};
		set(key: string, value: any, opt_silent?: boolean): void;
		setProperties(values: {
		[k: string]: any
	}, opt_silent?: boolean): void;
		unset(key: string, opt_silent?: boolean): void
	}

	declare class Observable extends undefined$EventTarget {
		constructor(): this;
		unByKey(key: (ol.EventsKey | ol.EventsKey[])): void;
		changed(): void;
		dispatchEvent(event: (GlobalObject | ol.events.Event | string)): void;
		getRevision(): number;
		on(
		type: (string | string[]), listener: Function, opt_this?: GlobalObject
	): (ol.EventsKey | ol.EventsKey[]);
		once(
		type: (string | string[]), listener: Function, opt_this?: GlobalObject
	): (ol.EventsKey | ol.EventsKey[]);
		un(type: (string | string[]), listener: Function, opt_this?: GlobalObject): void;
		unByKey(key: (ol.EventsKey | ol.EventsKey[])): void
	}

	declare class Overlay extends ol$Object {
		constructor(options: olx.OverlayOptions): this;
		getElement(): (Element);
		getId(): (number | string);
		getMap(): (ol.Map);
		getOffset(): number[];
		getPosition(): (ol.Coordinate);
		getPositioning(): ol.OverlayPositioning;
		setElement(element: (Element)): void;
		setMap(map: (ol.Map)): void;
		setOffset(offset: number[]): void;
		setPosition(position: (ol.Coordinate)): void;
		setPositioning(positioning: ol.OverlayPositioning): void
	}

	declare class Sphere  {
		constructor(radius: number): this;
		geodesicArea(coordinates: ol.Coordinate[]): number;
		haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number
	}

	declare class Tile extends undefined$EventTarget {
		constructor(tileCoord: ol.TileCoord, state: ol.Tile.State): this;
		getTileCoord(): ol.TileCoord;
		load(): void
	}

	declare class VectorTile extends ol$Tile {
		constructor(tileCoord: ol.TileCoord, state: ol.Tile.State, src: string, format: ol.format.Feature, tileLoadFunction: ol.TileLoadFunctionType): this;
		getFormat(): ol.format.Feature;
		setFeatures(features: ol.Feature[]): void;
		setProjection(projection: ol.proj.Projection): void;
		setLoader(loader: ol.FeatureLoader): void
	}

	declare class View extends ol$Object {
		constructor(opt_options?: olx.ViewOptions): this;
		constrainCenter(center: (ol.Coordinate)): (ol.Coordinate);
		constrainResolution(resolution: (number), opt_delta?: number, opt_direction?: number): (number);
		constrainRotation(rotation: (number), opt_delta?: number): (number);
		getCenter(): (ol.Coordinate);
		calculateExtent(size: ol.Size): ol.Extent;
		getMaxResolution(): number;
		getMinResolution(): number;
		getProjection(): ol.proj.Projection;
		getResolution(): (number);
		getResolutions(): (number[]);
		getRotation(): number;
		getZoom(): (number);
		fit(
		geometry: (ol.geom.SimpleGeometry | ol.Extent), size: ol.Size, opt_options?: olx.view.FitOptions
	): void;
		centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;
		rotate(rotation: number, opt_anchor?: ol.Coordinate): void;
		setCenter(center: (ol.Coordinate)): void;
		setResolution(resolution: (number)): void;
		setRotation(rotation: number): void;
		setZoom(zoom: number): void
	}

	
}

declare module 'Collection' {
	declare type EventType = string;

			declare class Event extends undefined$Event {
		constructor(type: ol.Collection.EventType, opt_element?: any): this;
		element: any
	}

	
}

declare module 'color' {
			declare function asArray(color: (ol.Color | string)): ol.Color

	declare function asString(color: (ol.Color | string)): string

		
}

declare module 'colorlike' {
			declare function asColorLike(color: (ol.Color | ol.ColorLike)): ol.ColorLike

		
}

declare module 'control' {
		declare interface AttributionOptions {
		className?: string,
		target?: Element,
		collapsible?: boolean,
		collapsed?: boolean,
		tipLabel?: string,
		label?: (string | Node),
		collapseLabel?: (string | Node),
		render?: ((event: ol.MapEvent) => any)
	}

	declare interface ControlOptions {
		element?: Element,
		render?: ((event: ol.MapEvent) => any),
		target?: (Element | string)
	}

	declare interface DefaultsOptions {
		attribution?: boolean,
		attributionOptions?: olx.control.AttributionOptions,
		rotate?: boolean,
		rotateOptions?: olx.control.RotateOptions,
		zoom?: boolean,
		zoomOptions?: olx.control.ZoomOptions
	}

	declare interface FullScreenOptions {
		className?: string,
		label?: (string | Node),
		labelActive?: (string | Node),
		tipLabel?: string,
		keys?: boolean,
		target?: Element,
		source?: (Element | string)
	}

	declare interface MousePositionOptions {
		className?: string,
		coordinateFormat?: ol.CoordinateFormatType,
		projection: ol.ProjectionLike,
		render?: ((event: ol.MapEvent) => any),
		target?: Element,
		undefinedHTML?: string
	}

	declare interface OverviewMapOptions {
		collapsed?: boolean,
		collapseLabel?: (string | Node),
		collapsible?: boolean,
		label?: (string | Node),
		layers?: (ol.layer.Layer[] | ol.Collection<ol.layer.Layer>),
		render?: ((event: ol.MapEvent) => any),
		target?: Element,
		tipLabel?: string,
		view?: ol.View
	}

	declare interface ScaleLineOptions {
		className?: string,
		minWidth?: number,
		render?: ((event: ol.MapEvent) => any),
		target?: Element,
		units?: (ol.control.ScaleLine.Units | string)
	}

	declare interface RotateOptions {
		className?: string,
		label?: (string | Element),
		tipLabel?: string,
		duration?: number,
		autoHide?: boolean,
		render?: ((event: ol.MapEvent) => any),
		resetNorth?: (() => any),
		target?: Element
	}

	declare interface ZoomOptions {
		duration?: number,
		className?: string,
		zoomInLabel?: (string | Node),
		zoomOutLabel?: (string | Node),
		zoomInTipLabel?: string,
		zoomOutTipLabel?: string,
		delta?: number,
		target?: Element
	}

	declare interface ZoomSliderOptions {
		className?: string,
		duration?: number,
		maxResolution?: number,
		minResolution?: number,
		render?: ((event: ol.MapEvent) => any)
	}

	declare interface ZoomToExtentOptions {
		className?: string,
		target?: Element,
		label?: (string | Node),
		tipLabel?: string,
		extent?: ol.Extent
	}

	declare function defaults(opt_options?: olx.control.DefaultsOptions): ol.Collection<ol.control.Control>

	declare class Attribution extends undefined$Control {
		constructor(opt_options?: olx.control.AttributionOptions): this;
		render(mapEvent: ol.MapEvent): void;
		getCollapsible(): boolean;
		setCollapsible(collapsible: boolean): void;
		setCollapsed(collapsed: boolean): void;
		getCollapsed(): boolean
	}

	declare class Control extends ol$Object {
		constructor(options: olx.control.ControlOptions): this;
		getMap(): ol.Map;
		setMap(map: ol.Map): void;
		setTarget(target: (Element | string)): void
	}

	declare class FullScreen extends undefined$Control {
		constructor(opt_options?: olx.control.FullScreenOptions): this
	}

	declare class MousePosition extends undefined$Control {
		constructor(opt_options?: olx.control.MousePositionOptions): this;
		render(mapEvent: ol.MapEvent): void;
		getCoordinateFormat(): (ol.CoordinateFormatType);
		getProjection(): (ol.proj.Projection);
		setCoordinateFormat(format: ol.CoordinateFormatType): void;
		setProjection(projection: ol.proj.Projection): void
	}

	declare class OverviewMap extends undefined$Control {
		constructor(opt_options?: olx.control.OverviewMapOptions): this;
		render(mapEvent: ol.MapEvent): void;
		getCollapsible(): boolean;
		setCollapsible(collapsible: boolean): void;
		setCollapsed(collapsed: boolean): void;
		getCollapsed(): boolean;
		getOverviewMap(): ol.Map
	}

	declare class Rotate extends undefined$Control {
		constructor(opt_options?: olx.control.RotateOptions): this;
		render(mapEvent: ol.MapEvent): void
	}

	declare class ScaleLine extends undefined$Control {
		constructor(opt_options?: olx.control.ScaleLineOptions): this;
		getUnits(): (ol.control.ScaleLine.Units);
		render(mapEvent: ol.MapEvent): void;
		setUnits(units: ol.control.ScaleLine.Units): void
	}

	declare class Zoom extends undefined$Control {
		constructor(opt_options?: olx.control.ZoomOptions): this
	}

	declare class ZoomSlider extends undefined$Control {
		constructor(opt_options?: olx.control.ZoomSliderOptions): this;
		render(mapEvent: ol.MapEvent): void
	}

	declare class ZoomToExtent extends undefined$Control {
		constructor(opt_options?: olx.control.ZoomToExtentOptions): this
	}

	
}

declare module 'ScaleLine' {
	declare type Property = string;

	declare type Units = string;

				
}

declare module 'coordinate' {
			declare function add(coordinate: ol.Coordinate, delta: ol.Coordinate): ol.Coordinate

	declare function createStringXY(opt_fractionDigits?: number): ol.CoordinateFormatType

	declare function format(
		coordinate: (ol.Coordinate), template: string, opt_fractionDigits?: number
	): string

	declare function rotate(coordinate: ol.Coordinate, angle: number): ol.Coordinate

	declare function toStringHDMS(coordinate?: ol.Coordinate, opt_fractionDigits?: number): string

	declare function toStringXY(coordinate?: ol.Coordinate, opt_fractionDigits?: number): string

		
}

declare module 'easing' {
			declare function easeIn(t: number): number

	declare function easeOut(t: number): number

	declare function inAndOut(t: number): number

	declare function linear(t: number): number

	declare function upAndDown(t: number): number

		
}

declare module 'condition' {
			declare function altKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function altShiftKeysOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function always(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function click(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function never(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function pointerMove(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function singleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function doubleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function noModifierKeys(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function platformModifierKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function shiftKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function targetNotEditable(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function mouseOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function primaryAction(mapBrowserEvent: ol.MapBrowserEvent): boolean

		
}

declare module 'events' {
				declare class Event  {
		constructor(type: string): this;
		type: string;
		target: GlobalObject;
		preventDefault(): void;
		stopPropagation(): void
	}

	declare class EventTarget extends ol$Disposable {
		constructor(): this
	}

	
}

declare module 'extent' {
			declare function boundingExtent(coordinates: ol.Coordinate[]): ol.Extent

	declare function buffer(extent: ol.Extent, value: number, opt_extent?: ol.Extent): ol.Extent

	declare function containsCoordinate(extent: ol.Extent, coordinate: ol.Coordinate): boolean

	declare function containsExtent(extent1: ol.Extent, extent2: ol.Extent): boolean

	declare function containsXY(extent: ol.Extent, x: number, y: number): boolean

	declare function createEmpty(): ol.Extent

	declare function equals(extent1: ol.Extent, extent2: ol.Extent): boolean

	declare function extend(extent1: ol.Extent, extent2: ol.Extent): ol.Extent

	declare function getBottomLeft(extent: ol.Extent): ol.Coordinate

	declare function getBottomRight(extent: ol.Extent): ol.Coordinate

	declare function getCenter(extent: ol.Extent): ol.Coordinate

	declare function getHeight(extent: ol.Extent): number

	declare function getIntersection(extent1: ol.Extent, extent2: ol.Extent, opt_extent?: ol.Extent): ol.Extent

	declare function getSize(extent: ol.Extent): ol.Size

	declare function getTopLeft(extent: ol.Extent): ol.Coordinate

	declare function getTopRight(extent: ol.Extent): ol.Coordinate

	declare function getWidth(extent: ol.Extent): number

	declare function intersects(extent1: ol.Extent, extent2: ol.Extent): boolean

	declare function isEmpty(extent: ol.Extent): boolean

	declare function applyTransform(
		extent: ol.Extent, transformFn: ol.TransformFunction, opt_extent?: ol.Extent
	): ol.Extent

		
}

declare module 'featureloader' {
			declare function tile(
		url: (string | ol.FeatureUrlFunction), format: ol.format.Feature
	): ol.FeatureLoader

	declare function xhr(
		url: (string | ol.FeatureUrlFunction), format: ol.format.Feature
	): ol.FeatureLoader

		
}

declare module 'format' {
	declare type EsriJSONGeometry = JSON;

	declare type GeoJSONFeature = JSON;

	declare type GeoJSONFeatureCollection = JSON;

	declare type GeoJSONGeometry = JSON;

	declare type GeoJSONGeometryCollection = JSON;

	declare type IGCZ = string;

	declare interface ReadOptions {
		dataProjection: ol.ProjectionLike,
		featureProjection: ol.ProjectionLike
	}

	declare interface WriteOptions {
		dataProjection: ol.ProjectionLike,
		featureProjection: ol.ProjectionLike,
		rightHanded?: boolean,
		decimals?: number
	}

	declare interface GeoJSONOptions {
		defaultDataProjection: ol.ProjectionLike,
		geometryName?: string
	}

	declare interface EsriJSONOptions {
		geometryName?: string
	}

	declare interface MVTOptions {
		featureClass?: (((geom: (ol.geom.Geometry | {
		[k: string]: any
	})) => any) | ((
		geom: ol.geom.GeometryType, arg2: number[], arg3: (number[] | number[][]), arg4: {
		[k: string]: any
	}
	) => any)),
		geometryName?: string,
		layerName?: string,
		layers?: string[]
	}

	declare interface PolylineOptions {
		factor?: number,
		geometryLayout?: ol.geom.GeometryLayout
	}

	declare interface TopoJSONOptions {
		defaultDataProjection: ol.ProjectionLike
	}

	declare interface IGCOptions {
		altitudeMode?: ol.format.IGCZ
	}

	declare interface KMLOptions {
		extractStyles?: boolean,
		showPointNames?: boolean,
		defaultStyle?: ol.style.Style[],
		writeStyles?: boolean
	}

	declare interface GMLOptions {
		featureNS?: ({
		[k: string]: string
	} | string),
		featureType?: (string[] | string),
		srsName: string,
		surface?: boolean,
		curve?: boolean,
		multiCurve?: boolean,
		multiSurface?: boolean,
		schemaLocation?: string
	}

	declare interface GPXOptions {
		readExtensions?: ((feature: ol.Feature, node: Node) => any)
	}

	declare interface WFSOptions {
		featureNS?: ({
		[k: string]: string
	} | string),
		featureType?: (string[] | string),
		gmlFormat?: ol.format.GMLBase,
		schemaLocation?: string
	}

	declare interface WFSWriteGetFeatureOptions {
		featureNS: string,
		featurePrefix: string,
		featureTypes: string[],
		srsName?: string,
		handle?: string,
		outputFormat?: string,
		maxFeatures?: number,
		geometryName?: string,
		propertyNames?: string[],
		startIndex?: number,
		count?: number,
		bbox?: ol.Extent,
		filter?: ol.format.ogc.filter.Filter,
		resultType?: string
	}

	declare interface WFSWriteTransactionOptions {
		featureNS: string,
		featurePrefix: string,
		featureType: string,
		srsName?: string,
		handle?: string,
		nativeElements: GlobalObject[],
		gmlOptions?: olx.format.GMLOptions
	}

	declare interface WKTOptions {
		splitCollection?: boolean
	}

	declare interface WMSGetFeatureInfoOptions {
		layers?: string[]
	}

		declare class EsriJSON extends undefined$JSONFeature {
		constructor(opt_options?: olx.format.EsriJSONOptions): this;
		readFeature(
		source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readGeometry(
		source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		readProjection(
		source: (ArrayBuffer | Document | Node | GlobalObject | string)
	): ol.proj.Projection;
		writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
		writeGeometryObject(
		geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions
	): EsriJSONGeometry;
		writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
		writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GlobalObject;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): GlobalObject
	}

	declare class Feature  {
		constructor(): this
	}

	declare class GeoJSON extends undefined$JSONFeature {
		constructor(opt_options?: olx.format.GeoJSONOptions): this;
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readGeometry(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
		writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
		writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GeoJSONFeature;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesObject(
		features: ol.Feature[], opt_options?: olx.format.WriteOptions
	): GeoJSONFeatureCollection;
		writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
		writeGeometryObject(
		geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions
	): (GeoJSONGeometry | GeoJSONGeometryCollection)
	}

	declare class GML extends undefined$GMLBase {
		constructor(opt_options?: olx.format.GMLOptions): this;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node
	}

	declare class GML2 extends undefined$GMLBase {
		constructor(opt_options?: olx.format.GMLOptions): this
	}

	declare class GML3 extends undefined$GMLBase {
		constructor(opt_options?: olx.format.GMLOptions): this;
		writeGeometryNode(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Node;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node
	}

	declare class GMLBase extends undefined$XMLFeature {
		constructor(opt_options?: olx.format.GMLOptions): this;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[]
	}

	declare class GPX extends undefined$XMLFeature {
		constructor(opt_options?: olx.format.GPXOptions): this;
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node
	}

	declare class IGC extends undefined$TextFeature {
		constructor(opt_options?: olx.format.IGCOptions): this;
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection
	}

	declare class JSONFeature extends undefined$Feature {
		constructor(): this
	}

	declare class KML extends undefined$XMLFeature {
		constructor(opt_options?: olx.format.KMLOptions): this;
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readName(source: (Document | Node | string)): (string);
		readNetworkLinks(source: (Document | Node | string)): GlobalObject[];
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node
	}

	declare class MVT extends undefined$Feature {
		constructor(opt_options?: olx.format.MVTOptions): this;
		readFeatures(
		source: (Document | Node | ArrayBuffer | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
		setLayers(layers: string[]): void
	}

	declare class OSMXML extends undefined$XMLFeature {
		constructor(): this;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection
	}

	declare class Polyline extends undefined$TextFeature {
		constructor(opt_options?: olx.format.PolylineOptions): this;
		encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;
		decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];
		encodeFloats(numbers: number[], opt_factor?: number): string;
		decodeFloats(encoded: string, opt_factor?: number): number[];
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readGeometry(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
		writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string
	}

	declare class TextFeature extends undefined$Feature {
		constructor(): this
	}

	declare class TopoJSON extends undefined$JSONFeature {
		constructor(opt_options?: olx.format.TopoJSONOptions): this;
		readFeatures(source: (Document | Node | GlobalObject | string)): ol.Feature[];
		readProjection(object: (Document | Node | GlobalObject | string)): ol.proj.Projection
	}

	declare class WFS extends undefined$XMLFeature {
		constructor(opt_options?: olx.format.WFSOptions): this;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readTransactionResponse(source: (Document | Node | GlobalObject | string)): (ol.WFSTransactionResponse);
		readFeatureCollectionMetadata(
		source: (Document | Node | GlobalObject | string)
	): (ol.WFSFeatureCollectionMetadata);
		writeGetFeature(options: olx.format.WFSWriteGetFeatureOptions): Node;
		writeTransaction(
		inserts: ol.Feature[], updates: ol.Feature[], deletes: ol.Feature[], options: olx.format.WFSWriteTransactionOptions
	): Node;
		readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection
	}

	declare class WKT extends undefined$TextFeature {
		constructor(opt_options?: olx.format.WKTOptions): this;
		readFeature(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[];
		readGeometry(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
		writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
		writeGeometry(geometry: ol.geom.Geometry): string
	}

	declare class WMSCapabilities extends undefined$XML {
		constructor(): this;
		read(source: (Document | Node | string)): GlobalObject
	}

	declare class WMSGetFeatureInfo extends undefined$XMLFeature {
		constructor(opt_options?: olx.format.WMSGetFeatureInfoOptions): this;
		readFeatures(
		source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions
	): ol.Feature[]
	}

	declare class WMTSCapabilities extends undefined$XML {
		constructor(): this;
		read(source: (Document | Node | string)): GlobalObject
	}

	declare class XML  {
		constructor(): this
	}

	declare class XMLFeature extends undefined$Feature {
		constructor(): this
	}

	
}

declare module 'filter' {
		declare interface Filter {
		
	}

			
}

declare module 'geom' {
	declare type GeometryType = string;

	declare type GeometryLayout = string;

			declare class Circle extends undefined$SimpleGeometry {
		constructor(center: ol.Coordinate, opt_radius?: number, opt_layout?: ol.geom.GeometryLayout): this;
		clone(): ol.geom.Circle;
		getCenter(): ol.Coordinate;
		getRadius(): number;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCenter(center: ol.Coordinate): void;
		setCenterAndRadius(
		center: ol.Coordinate, radius: number, opt_layout?: ol.geom.GeometryLayout
	): void;
		setRadius(radius: number): void
	}

	declare class Geometry extends ol$Object {
		constructor(): this;
		getClosestPoint(point: ol.Coordinate, opt_closestPoint?: ol.Coordinate): ol.Coordinate;
		intersectsCoordinate(coordinate: ol.Coordinate): boolean;
		getExtent(opt_extent?: ol.Extent): ol.Extent;
		rotate(angle: number, anchor: ol.Coordinate): void;
		scale(sx: number, opt_sy?: number, opt_anchor?: ol.Coordinate): void;
		simplify(tolerance: number): ol.geom.Geometry;
		transform(source: ol.ProjectionLike, destination: ol.ProjectionLike): ol.geom.Geometry
	}

	declare class GeometryCollection extends undefined$Geometry {
		constructor(opt_geometries?: ol.geom.Geometry[]): this;
		clone(): ol.geom.GeometryCollection;
		getGeometries(): ol.geom.Geometry[];
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setGeometries(geometries: ol.geom.Geometry[]): void;
		applyTransform(transformFn: ol.TransformFunction): void;
		translate(deltaX: number, deltaY: number): void
	}

	declare class LinearRing extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): this;
		clone(): ol.geom.LinearRing;
		getArea(): number;
		getCoordinates(): ol.Coordinate[];
		getType(): ol.geom.GeometryType;
		setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class LineString extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): this;
		appendCoordinate(coordinate: ol.Coordinate): void;
		clone(): ol.geom.LineString;
		forEachSegment<T, S>(callback: (() => T), opt_this?: S): (T | boolean);
		getCoordinateAtM(m: number, opt_extrapolate?: boolean): ol.Coordinate;
		getCoordinates(): ol.Coordinate[];
		getCoordinateAt(fraction: number, opt_dest?: ol.Coordinate): ol.Coordinate;
		getLength(): number;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class MultiLineString extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): this;
		appendLineString(lineString: ol.geom.LineString): void;
		clone(): ol.geom.MultiLineString;
		getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): ol.Coordinate;
		getCoordinates(): ol.Coordinate[][];
		getLineString(index: number): ol.geom.LineString;
		getLineStrings(): ol.geom.LineString[];
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class MultiPoint extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): this;
		appendPoint(point: ol.geom.Point): void;
		clone(): ol.geom.MultiPoint;
		getCoordinates(): ol.Coordinate[];
		getPoint(index: number): ol.geom.Point;
		getPoints(): ol.geom.Point[];
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class MultiPolygon extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[][][], opt_layout?: ol.geom.GeometryLayout): this;
		appendPolygon(polygon: ol.geom.Polygon): void;
		clone(): ol.geom.MultiPolygon;
		getArea(): number;
		getCoordinates(opt_right?: boolean): ol.Coordinate[][][];
		getInteriorPoints(): ol.geom.MultiPoint;
		getPolygon(index: number): ol.geom.Polygon;
		getPolygons(): ol.geom.Polygon[];
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate[][][], opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class Point extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate, opt_layout?: ol.geom.GeometryLayout): this;
		clone(): ol.geom.Point;
		getCoordinates(): ol.Coordinate;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate, opt_layout?: ol.geom.GeometryLayout): void
	}

	declare class Polygon extends undefined$SimpleGeometry {
		constructor(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): this;
		appendLinearRing(linearRing: ol.geom.LinearRing): void;
		clone(): ol.geom.Polygon;
		getArea(): number;
		getCoordinates(opt_right?: boolean): ol.Coordinate[][];
		getInteriorPoint(): ol.geom.Point;
		getLinearRingCount(): number;
		getLinearRing(index: number): ol.geom.LinearRing;
		getLinearRings(): ol.geom.LinearRing[];
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): void;
		circular(
		sphere: ol.Sphere, center: ol.Coordinate, radius: number, opt_n?: number
	): ol.geom.Polygon;
		fromExtent(extent: ol.Extent): ol.geom.Polygon;
		fromCircle(
		circle: ol.geom.Circle, opt_sides?: number, opt_angle?: number
	): ol.geom.Polygon
	}

	declare class SimpleGeometry extends undefined$Geometry {
		constructor(): this;
		getFirstCoordinate(): ol.Coordinate;
		getLastCoordinate(): ol.Coordinate;
		getLayout(): ol.geom.GeometryLayout;
		applyTransform(transformFn: ol.TransformFunction): void;
		translate(deltaX: number, deltaY: number): void
	}

	
}

declare module 'interaction' {
	declare type DragAndDropEventType = string;

	declare type DrawEventType = string;

	declare type TranslateEventType = string;

	declare interface InteractionOptions {
		handleEvent: (event: ol.MapBrowserEvent) => boolean
	}

	declare interface DefaultsOptions {
		altShiftDragRotate?: boolean,
		doubleClickZoom?: boolean,
		keyboard?: boolean,
		mouseWheelZoom?: boolean,
		shiftDragZoom?: boolean,
		dragPan?: boolean,
		pinchRotate?: boolean,
		pinchZoom?: boolean,
		zoomDelta?: number,
		zoomDuration?: number
	}

	declare interface DoubleClickZoomOptions {
		duration?: number,
		delta?: number
	}

	declare interface DragAndDropOptions {
		formatConstructors?: ((n: ol.format.Feature) => any)[],
		projection: ol.ProjectionLike,
		target?: Element
	}

	declare interface DragBoxOptions {
		className?: string,
		condition?: ol.EventsConditionType,
		boxEndCondition?: ol.DragBoxEndConditionType
	}

	declare interface DragPanOptions {
		condition?: ol.EventsConditionType,
		kinetic?: ol.Kinetic
	}

	declare interface DragRotateAndZoomOptions {
		condition?: ol.EventsConditionType,
		duration?: number
	}

	declare interface DragRotateOptions {
		condition?: ol.EventsConditionType,
		duration?: number
	}

	declare interface DragZoomOptions {
		className?: string,
		condition?: ol.EventsConditionType,
		duration?: number,
		out?: boolean
	}

	declare interface DrawOptions {
		clickTolerance?: number,
		features?: ol.Collection<ol.Feature>,
		source?: ol.source.Vector,
		snapTolerance?: number,
		type: ol.geom.GeometryType,
		maxPoints?: number,
		minPoints?: number,
		finishCondition?: ol.EventsConditionType,
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction),
		geometryFunction?: ol.DrawGeometryFunctionType,
		geometryName?: string,
		condition?: ol.EventsConditionType,
		freehandCondition?: ol.EventsConditionType,
		wrapX?: boolean
	}

	declare interface TranslateOptions {
		features?: ol.Collection<ol.Feature>,
		layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean))
	}

	declare interface KeyboardPanOptions {
		condition?: ol.EventsConditionType,
		duration?: number,
		pixelDelta?: number
	}

	declare interface KeyboardZoomOptions {
		duration?: number,
		condition?: ol.EventsConditionType,
		delta?: number
	}

	declare interface ModifyOptions {
		condition?: ol.EventsConditionType,
		deleteCondition?: ol.EventsConditionType,
		pixelTolerance?: number,
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction),
		features: ol.Collection<ol.Feature>,
		wrapX?: boolean
	}

	declare interface MouseWheelZoomOptions {
		duration?: number,
		useAnchor?: boolean
	}

	declare interface PinchRotateOptions {
		duration?: number,
		threshold?: number
	}

	declare interface PinchZoomOptions {
		duration?: number
	}

	declare interface PointerOptions {
		handleDownEvent?: ((event: ol.MapBrowserPointerEvent) => boolean),
		handleDragEvent?: ((event: ol.MapBrowserPointerEvent) => boolean),
		handleEvent?: ((event: ol.MapBrowserPointerEvent) => boolean),
		handleMoveEvent?: ((event: ol.MapBrowserPointerEvent) => boolean),
		handleUpEvent?: ((event: ol.MapBrowserPointerEvent) => boolean)
	}

	declare interface SelectOptions {
		addCondition?: ol.EventsConditionType,
		condition?: ol.EventsConditionType,
		layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean)),
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction),
		removeCondition?: ol.EventsConditionType,
		toggleCondition?: ol.EventsConditionType,
		multi?: boolean,
		features?: ol.Collection<ol.Feature>,
		filter?: ol.SelectFilterFunction,
		wrapX?: boolean
	}

	declare interface SnapOptions {
		features?: ol.Collection<ol.Feature>,
		edge?: boolean,
		vertex?: boolean,
		pixelTolerance?: number,
		source?: ol.source.Vector
	}

	declare function defaults(
		opt_options?: olx.interaction.DefaultsOptions
	): ol.Collection<ol.interaction.Interaction>

	declare class DoubleClickZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.DoubleClickZoomOptions): this;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean
	}

	declare class DragAndDrop extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.DragAndDropOptions): this;
		handleEvent: any
	}

	declare class DragAndDropEvent extends undefined$Event {
		constructor(type: ol.interaction.DragAndDropEventType, file: File, opt_features?: ol.Feature[], opt_projection?: ol.proj.Projection): this;
		features: ol.Feature[];
		file: File;
		projection: ol.proj.Projection
	}

	declare class DragBox extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.DragBoxOptions): this;
		getGeometry(): ol.geom.Polygon
	}

	declare class DragPan extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.DragPanOptions): this
	}

	declare class DragRotate extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.DragRotateOptions): this
	}

	declare class DragRotateAndZoom extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.DragRotateAndZoomOptions): this
	}

	declare class DragZoom extends undefined$DragBox {
		constructor(opt_options?: olx.interaction.DragZoomOptions): this
	}

	declare class DrawEvent extends undefined$Event {
		constructor(type: ol.interaction.DrawEventType, feature: ol.Feature): this;
		feature: ol.Feature
	}

	declare class Draw extends undefined$Pointer {
		constructor(options: olx.interaction.DrawOptions): this;
		removeLastPoint(): void;
		finishDrawing(): void;
		extend(feature: ol.Feature): void;
		createRegularPolygon(opt_sides?: number, opt_angle?: number): ol.DrawGeometryFunctionType
	}

	declare class Interaction extends ol$Object {
		constructor(options: olx.interaction.InteractionOptions): this;
		getActive(): boolean;
		getMap(): ol.Map;
		setActive(active: boolean): void
	}

	declare class KeyboardPan extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.KeyboardPanOptions): this;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean
	}

	declare class KeyboardZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.KeyboardZoomOptions): this;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean
	}

	declare class ModifyEvent extends undefined$Event {
		constructor(type: ol.ModifyEventType, features: ol.Collection<ol.Feature>, mapBrowserPointerEvent: ol.MapBrowserPointerEvent): this;
		features: ol.Collection<ol.Feature>;
		mapBrowserEvent: ol.MapBrowserEvent
	}

	declare class Modify extends undefined$Pointer {
		constructor(options: olx.interaction.ModifyOptions): this;
		removePoint(): boolean
	}

	declare class MouseWheelZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.MouseWheelZoomOptions): this;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
		setMouseAnchor(useAnchor: boolean): void
	}

	declare class PinchRotate extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.PinchRotateOptions): this
	}

	declare class PinchZoom extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.PinchZoomOptions): this
	}

	declare class Pointer extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.PointerOptions): this;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean
	}

	declare class SelectEvent extends undefined$Event {
		constructor(type: string, selected: ol.Feature[], deselected: ol.Feature[], mapBrowserEvent: ol.MapBrowserEvent): this;
		selected: ol.Feature[];
		deselected: ol.Feature[];
		mapBrowserEvent: ol.MapBrowserEvent
	}

	declare class Select extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.SelectOptions): this;
		getFeatures(): ol.Collection<ol.Feature>;
		getLayer(feature: (ol.Feature | ol.render.Feature)): ol.layer.Vector;
		handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
		setMap(map: ol.Map): void
	}

	declare class Snap extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.SnapOptions): this;
		addFeature(feature: ol.Feature, opt_listen?: boolean): void;
		removeFeature(feature: ol.Feature, opt_unlisten?: boolean): void
	}

	declare class TranslateEvent extends undefined$Event {
		constructor(type: ol.interaction.TranslateEventType, features: ol.Collection<ol.Feature>, coordinate: ol.Coordinate): this;
		features: ol.Collection<ol.Feature>;
		coordinate: ol.Coordinate
	}

	declare class Translate extends undefined$Pointer {
		constructor(options: olx.interaction.TranslateOptions): this
	}

	
}

declare module 'layer' {
	declare type VectorTileRenderType = string;

	declare interface BaseOptions {
		opacity?: number,
		visible?: boolean,
		extent?: ol.Extent,
		zIndex?: number,
		minResolution?: number,
		maxResolution?: number
	}

	declare interface LayerOptions {
		opacity?: number,
		source?: ol.source.Source,
		visible?: boolean,
		extent?: ol.Extent,
		zIndex?: number,
		minResolution?: number,
		maxResolution?: number
	}

	declare interface GroupOptions {
		opacity?: number,
		visible?: boolean,
		extent?: ol.Extent,
		zIndex?: number,
		minResolution?: number,
		maxResolution?: number,
		layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>)
	}

	declare interface HeatmapOptions {
		gradient?: string[],
		radius?: number,
		blur?: number,
		shadow?: number,
		weight: (string | ((feature: ol.Feature) => number)),
		extent?: ol.Extent,
		minResolution?: number,
		maxResolution?: number,
		opacity?: number,
		source: ol.source.Vector,
		visible?: boolean
	}

	declare interface ImageOptions {
		opacity?: number,
		source: ol.source.Image,
		map?: ol.Map,
		visible?: boolean,
		extent?: ol.Extent,
		minResolution?: number,
		maxResolution?: number
	}

	declare interface TileOptions {
		opacity?: number,
		preload?: number,
		source: ol.source.Tile,
		map?: ol.Map,
		visible?: boolean,
		extent?: ol.Extent,
		minResolution?: number,
		maxResolution?: number,
		useInterimTilesOnError?: boolean
	}

	declare interface VectorOptions {
		renderOrder?: (feature1: ol.Feature, feature2: ol.Feature) => number,
		map?: ol.Map,
		extent?: ol.Extent,
		minResolution?: number,
		maxResolution?: number,
		opacity?: number,
		renderBuffer?: number,
		source: ol.source.Vector,
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction),
		updateWhileAnimating?: boolean,
		updateWhileInteracting?: boolean,
		visible?: boolean
	}

	declare interface VectorTileOptions {
		renderBuffer?: number,
		renderMode?: (ol.layer.VectorTileRenderType | string),
		renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number,
		map?: ol.Map,
		extent?: ol.Extent,
		minResolution?: number,
		maxResolution?: number,
		opacity?: number,
		source?: ol.source.VectorTile,
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction),
		updateWhileAnimating?: boolean,
		updateWhileInteracting?: boolean,
		visible?: boolean
	}

		declare class Base extends ol$Object {
		constructor(options: olx.layer.BaseOptions): this;
		getExtent(): (ol.Extent);
		getMaxResolution(): number;
		getMinResolution(): number;
		getOpacity(): number;
		getVisible(): boolean;
		getZIndex(): number;
		setExtent(extent: (ol.Extent)): void;
		setMaxResolution(maxResolution: number): void;
		setMinResolution(minResolution: number): void;
		setOpacity(opacity: number): void;
		setVisible(visible: boolean): void;
		setZIndex(zindex: number): void
	}

	declare class Group extends undefined$Base {
		constructor(opt_options?: olx.layer.GroupOptions): this;
		getLayers(): ol.Collection<ol.layer.Base>;
		setLayers(layers: ol.Collection<ol.layer.Base>): void
	}

	declare class Heatmap extends undefined$Vector {
		constructor(opt_options?: olx.layer.HeatmapOptions): this;
		getBlur(): number;
		getGradient(): string[];
		getRadius(): number;
		setBlur(blur: number): void;
		setGradient(colors: string[]): void;
		setRadius(radius: number): void
	}

	declare class Image extends undefined$Layer {
		constructor(opt_options?: olx.layer.ImageOptions): this
	}

	declare class Layer extends undefined$Base {
		constructor(options: olx.layer.LayerOptions): this;
		getSource(): ol.source.Source;
		setMap(map: ol.Map): void;
		setSource(source: ol.source.Source): void
	}

	declare class Tile extends undefined$Layer {
		constructor(opt_options?: olx.layer.TileOptions): this;
		getPreload(): number;
		setPreload(preload: number): void;
		getUseInterimTilesOnError(): boolean;
		setUseInterimTilesOnError(useInterimTilesOnError: boolean): void
	}

	declare class Vector extends undefined$Layer {
		constructor(opt_options?: olx.layer.VectorOptions): this;
		getSource(): ol.source.Vector;
		getStyle(): (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
		getStyleFunction(): (ol.StyleFunction);
		setStyle(style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction)): void
	}

	declare class VectorTile extends undefined$Vector {
		constructor(opt_options?: olx.layer.VectorTileOptions): this;
		getPreload(): number;
		getUseInterimTilesOnError(): boolean;
		setPreload(preload: number): void;
		setUseInterimTilesOnError(useInterimTilesOnError: boolean): void
	}

	
}

declare module 'loadingstrategy' {
			declare function all(extent: ol.Extent, resolution: number): ol.Extent[]

	declare function bbox(extent: ol.Extent, resolution: number): ol.Extent[]

	declare function tile(
		tileGrid: ol.tilegrid.TileGrid
	): ((extent: ol.Extent, i: number) => ol.Extent[])

		
}

declare module 'pointer' {
				declare class PointerEvent  {
		
	}

	
}

declare module 'proj' {
	declare type Units = string;

		declare function setProj4(proj4: any): void

	declare function addEquivalentProjections(projections: ol.proj.Projection[]): void

	declare function addProjection(projection: ol.proj.Projection): void

	declare function addCoordinateTransforms(
		source: ol.ProjectionLike, destination: ol.ProjectionLike, forward: ((coords: ol.Coordinate) => ol.Coordinate), inverse: ((coords: ol.Coordinate) => ol.Coordinate)
	): void

	declare function fromLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate

	declare function toLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate

	declare function get(projectionLike: ol.ProjectionLike): ol.proj.Projection

	declare function equivalent(projection1: ol.proj.Projection, projection2: ol.proj.Projection): boolean

	declare function getTransform(
		source: ol.ProjectionLike, destination: ol.ProjectionLike
	): ol.TransformFunction

	declare function transform(
		coordinate: ol.Coordinate, source: ol.ProjectionLike, destination: ol.ProjectionLike
	): ol.Coordinate

	declare function transformExtent(
		extent: ol.Extent, source: ol.ProjectionLike, destination: ol.ProjectionLike
	): ol.Extent

	declare class Projection  {
		constructor(options: olx.ProjectionOptions): this;
		getCode(): string;
		getExtent(): ol.Extent;
		getUnits(): ol.proj.Units;
		getMetersPerUnit(): (number);
		getWorldExtent(): ol.Extent;
		isGlobal(): boolean;
		setGlobal(global: boolean): void;
		setExtent(extent: ol.Extent): void;
		setWorldExtent(worldExtent: ol.Extent): void;
		setGetPointResolution(func: ((resolution: number, coords: ol.Coordinate) => number)): void;
		getPointResolution(resolution: number, point: ol.Coordinate): number
	}

	
}

declare module 'canvas' {
				declare class Immediate extends undefined$VectorContext {
		constructor(context: CanvasRenderingContext2D, pixelRatio: number, extent: ol.Extent, transform: any, viewRotation: number): this;
		drawCircle(geometry: ol.geom.Circle): void;
		setStyle(style: ol.style.Style): void;
		drawGeometry(geometry: (ol.geom.Geometry | ol.render.Feature)): void;
		drawFeature(feature: ol.Feature, style: ol.style.Style): void
	}

	
}

declare module 'render' {
	declare type EventType = string;

	declare interface ToContextOptions {
		size?: ol.Size,
		pixelRatio?: number
	}

	declare function toContext(
		context: CanvasRenderingContext2D, opt_options?: olx.render.ToContextOptions
	): ol.render.canvas.Immediate

	declare class Event extends undefined$Event {
		constructor(type: ol.render.EventType, opt_vectorContext?: ol.render.VectorContext, opt_frameState?: olx.FrameState, opt_context?: CanvasRenderingContext2D, opt_glContext?: any): this;
		vectorContext: ol.render.VectorContext;
		frameState: olx.FrameState;
		context: CanvasRenderingContext2D;
		glContext: any
	}

	declare class Feature  {
		constructor(type: ol.geom.GeometryType, flatCoordinates: number[], ends: (number[] | number[][]), properties: {
		[k: string]: any
	}): this;
		get(key: string): any;
		getExtent(): ol.Extent;
		getGeometry(): ol.render.Feature;
		getProperties(): {
		[k: string]: any
	};
		getType(): ol.geom.GeometryType
	}

	declare class VectorContext  {
		constructor(): this
	}

	
}

declare module 'source' {
	declare type State = string;

	declare type WMTSRequestEncoding = string;

	declare type TileJSON = JSON;

	declare interface BingMapsOptions {
		cacheSize?: number,
		culture?: string,
		key: string,
		imagerySet: string,
		maxZoom?: number,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		wrapX?: boolean
	}

	declare interface ClusterOptions {
		attributions?: ol.AttributionLike,
		distance?: number,
		extent?: ol.Extent,
		geometryFunction?: ((feature: ol.Feature) => ol.geom.Point),
		format?: ol.format.Feature,
		logo?: string,
		projection?: ol.ProjectionLike,
		source: ol.source.Vector,
		wrapX?: boolean
	}

	declare interface TileUTFGridOptions {
		jsonp?: boolean,
		preemptive?: boolean,
		tileJSON?: TileJSON,
		url?: string
	}

	declare interface TileImageOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		opaque?: boolean,
		projection: ol.ProjectionLike,
		reprojectionErrorThreshold?: number,
		state?: ol.source.State,
		tileClass?: ((
		n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType
	) => any),
		tileGrid?: ol.tilegrid.TileGrid,
		tileLoadFunction?: ol.TileLoadFunctionType,
		tilePixelRatio?: number,
		tileUrlFunction?: ol.TileUrlFunctionType,
		url?: string,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface VectorTileOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		format?: ol.format.Feature,
		logo?: (string | olx.LogoOptions),
		overlaps?: boolean,
		projection: ol.ProjectionLike,
		state?: ol.source.State,
		tileClass?: ((
		n: ol.VectorTile, coords: ol.TileCoord, state: ol.Tile.State, s: string, feature: ol.format.Feature, type: ol.TileLoadFunctionType
	) => any),
		tileGrid?: ol.tilegrid.TileGrid,
		tileLoadFunction?: ol.TileLoadFunctionType,
		tilePixelRatio?: number,
		tileUrlFunction?: ol.TileUrlFunctionType,
		url?: string,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface ImageMapGuideOptions {
		url?: string,
		displayDpi?: number,
		metersPerUnit?: number,
		hidpi?: boolean,
		useOverlay?: boolean,
		projection: ol.ProjectionLike,
		ratio?: number,
		resolutions?: number[],
		imageLoadFunction?: ol.ImageLoadFunctionType,
		params?: GlobalObject
	}

	declare interface MapQuestOptions {
		cacheSize?: number,
		layer: string,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string
	}

	declare interface TileDebugOptions {
		projection: ol.ProjectionLike,
		tileGrid?: ol.tilegrid.TileGrid,
		wrapX?: boolean
	}

	declare interface OSMOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		maxZoom?: number,
		opaque?: boolean,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string,
		wrapX?: boolean
	}

	declare interface ImageArcGISRestOptions {
		attributions?: ol.Attribution[],
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		imageLoadFunction?: ol.ImageLoadFunctionType,
		params?: {
		[k: string]: any
	},
		projection: ol.ProjectionLike,
		ratio?: number,
		resolutions?: number[],
		url?: string
	}

	declare interface ImageCanvasOptions {
		attributions?: ol.AttributionLike,
		canvasFunction: ol.CanvasFunctionType,
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		ratio?: number,
		resolutions?: number[],
		state?: ol.source.State
	}

	declare interface ImageVectorOptions {
		attributions?: ol.AttributionLike,
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		ratio?: number,
		renderBuffer?: number,
		resolutions?: number[],
		source: ol.source.Vector,
		style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction)
	}

	declare interface RasterOptions {
		sources: ol.source.Source[],
		operation?: ol.RasterOperation,
		lib?: GlobalObject,
		threads?: number,
		operationType?: ol.RasterOperationType
	}

	declare interface ImageWMSOptions {
		attributions?: ol.AttributionLike,
		crossOrigin?: (string),
		hidpi?: boolean,
		serverType?: (ol.source.wms.ServerType | string),
		imageLoadFunction?: ol.ImageLoadFunctionType,
		logo?: (string | olx.LogoOptions),
		params: {
		[k: string]: any
	},
		projection: ol.ProjectionLike,
		ratio?: number,
		resolutions?: number[],
		url?: string
	}

	declare interface StamenOptions {
		cacheSize?: number,
		layer: string,
		minZoom?: number,
		maxZoom?: number,
		opaque?: boolean,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string
	}

	declare interface ImageStaticOptions {
		attributions?: ol.AttributionLike,
		crossOrigin?: (string),
		imageExtent: ol.Extent,
		imageLoadFunction?: ol.ImageLoadFunctionType,
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		imageSize?: ol.Size,
		url: string
	}

	declare interface TileArcGISRestOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		params?: {
		[k: string]: any
	},
		logo?: (string | olx.LogoOptions),
		tileGrid?: ol.tilegrid.TileGrid,
		projection?: ol.ProjectionLike,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string,
		wrapX?: boolean,
		urls?: string[]
	}

	declare interface TileJSONOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		jsonp?: boolean,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url: string,
		wrapX?: boolean
	}

	declare interface TileWMSOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		params: {
		[k: string]: any
	},
		crossOrigin?: (string),
		gutter?: number,
		hidpi?: boolean,
		logo?: (string | olx.LogoOptions),
		tileGrid?: ol.tilegrid.TileGrid,
		projection: ol.ProjectionLike,
		reprojectionErrorThreshold?: number,
		serverType?: (ol.source.wms.ServerType | string),
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface VectorOptions {
		attributions?: ol.AttributionLike,
		features?: (ol.Feature[] | ol.Collection<ol.Feature>),
		format?: ol.format.Feature,
		loader?: ol.FeatureLoader,
		logo?: (string | olx.LogoOptions),
		overlaps?: boolean,
		strategy?: ol.LoadingStrategy,
		url?: (string | ol.FeatureUrlFunction),
		useSpatialIndex?: boolean,
		wrapX?: boolean
	}

	declare interface WMTSOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		tileGrid: ol.tilegrid.WMTS,
		projection: ol.ProjectionLike,
		reprojectionErrorThreshold?: number,
		requestEncoding?: (ol.source.WMTSRequestEncoding | string),
		layer: string,
		style: string,
		tileClass?: ((
		n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType
	) => any),
		tilePixelRatio?: number,
		version?: string,
		format?: string,
		matrixSet: string,
		dimensions?: GlobalObject,
		url?: string,
		tileLoadFunction?: ol.TileLoadFunctionType,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface XYZOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		opaque?: boolean,
		projection?: ol.ProjectionLike,
		reprojectionErrorThreshold?: number,
		maxZoom?: number,
		minZoom?: number,
		tileGrid?: ol.tilegrid.TileGrid,
		tileLoadFunction?: ol.TileLoadFunctionType,
		tilePixelRatio?: number,
		tileSize?: (number | ol.Size),
		tileUrlFunction?: ol.TileUrlFunctionType,
		url?: string,
		urls?: string[],
		wrapX?: boolean
	}

	declare interface CartoDBOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		projection: ol.ProjectionLike,
		maxZoom?: number,
		minZoom?: number,
		wrapX?: boolean,
		config?: GlobalObject,
		map?: string,
		account: string
	}

	declare interface ZoomifyOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: (string),
		logo?: (string | olx.LogoOptions),
		reprojectionErrorThreshold?: number,
		url: string,
		tierSizeCalculation?: string,
		size: ol.Size
	}

		declare class BingMaps extends undefined$TileImage {
		constructor(options: olx.source.BingMapsOptions): this;
		TOS_ATTRIBUTION: ol.Attribution
	}

	declare class CartoDB extends undefined$XYZ {
		constructor(options: olx.source.CartoDBOptions): this;
		getConfig(): GlobalObject;
		updateConfig(config: GlobalObject): void;
		setConfig(config: GlobalObject): void
	}

	declare class Cluster extends undefined$Vector {
		constructor(options: olx.source.ClusterOptions): this;
		getSource(): ol.source.Vector;
		setDistance(distance: number): void
	}

	declare class Image extends undefined$Source {
		constructor(options: ol.SourceImageOptions): this
	}

	declare class ImageEvent extends undefined$Event {
		constructor(type: string, image: ol.Image): this;
		image: ol.Image
	}

	declare class ImageArcGISRest extends undefined$Image {
		constructor(opt_options?: olx.source.ImageArcGISRestOptions): this;
		getParams(): GlobalObject;
		getImageLoadFunction(): ol.ImageLoadFunctionType;
		getUrl(): (string);
		setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;
		setUrl(url: (string)): void;
		updateParams(params: GlobalObject): void
	}

	declare class ImageCanvas extends undefined$Image {
		constructor(options: olx.source.ImageCanvasOptions): this
	}

	declare class ImageMapGuide extends undefined$Image {
		constructor(options: olx.source.ImageMapGuideOptions): this;
		getParams(): GlobalObject;
		getImageLoadFunction(): ol.ImageLoadFunctionType;
		updateParams(params: GlobalObject): void;
		setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void
	}

	declare class ImageStatic extends undefined$Image {
		constructor(options: olx.source.ImageStaticOptions): this
	}

	declare class ImageVector extends undefined$ImageCanvas {
		constructor(options: olx.source.ImageVectorOptions): this;
		getSource(): ol.source.Vector;
		getStyle(): (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
		getStyleFunction(): (ol.StyleFunction);
		setStyle(style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction)): void
	}

	declare class ImageWMS extends undefined$Image {
		constructor(opt_options?: olx.source.ImageWMSOptions): this;
		getGetFeatureInfoUrl(
		coordinate: ol.Coordinate, resolution: number, projection: ol.ProjectionLike, params: GlobalObject
	): (string);
		getParams(): GlobalObject;
		getImageLoadFunction(): ol.ImageLoadFunctionType;
		getUrl(): (string);
		setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;
		setUrl(url: (string)): void;
		updateParams(params: GlobalObject): void
	}

	declare class OSM extends undefined$XYZ {
		constructor(opt_options?: olx.source.OSMOptions): this;
		ATTRIBUTION: ol.Attribution
	}

	declare class Raster extends undefined$Image {
		constructor(options: olx.source.RasterOptions): this;
		setOperation(operation: ol.RasterOperation, opt_lib?: GlobalObject): void
	}

	declare class RasterEvent extends undefined$Event {
		constructor(type: string, frameState: olx.FrameState, data: GlobalObject): this;
		extent: ol.Extent;
		resolution: number;
		data: GlobalObject
	}

	declare class Source extends ol$Object {
		constructor(options: ol.SourceSourceOptions): this;
		getAttributions(): ol.Attribution[];
		getLogo(): (string | olx.LogoOptions);
		getProjection(): ol.proj.Projection;
		getState(): ol.source.State;
		refresh(): void;
		setAttributions(attributions: (ol.AttributionLike)): void
	}

	declare class Stamen extends undefined$XYZ {
		constructor(options: olx.source.StamenOptions): this
	}

	declare class Tile extends undefined$Source {
		constructor(options: ol.SourceTileOptions): this;
		getTileGrid(): ol.tilegrid.TileGrid
	}

	declare class TileEvent extends undefined$Event {
		constructor(type: string, tile: ol.Tile): this;
		tile: ol.Tile
	}

	declare class TileArcGISRest extends undefined$TileImage {
		constructor(opt_options?: olx.source.TileArcGISRestOptions): this;
		getParams(): GlobalObject;
		updateParams(params: GlobalObject): void
	}

	declare class TileDebug extends undefined$Tile {
		constructor(options: olx.source.TileDebugOptions): this
	}

	declare class TileImage extends undefined$UrlTile {
		constructor(options: olx.source.TileImageOptions): this;
		setRenderReprojectionEdges(render: boolean): void;
		setTileGridForProjection(projection: ol.ProjectionLike, tilegrid: ol.tilegrid.TileGrid): void
	}

	declare class TileJSON extends undefined$TileImage {
		constructor(options: olx.source.TileJSONOptions): this;
		getTileJSON(): TileJSON
	}

	declare class TileUTFGrid extends undefined$Tile {
		constructor(options: olx.source.TileUTFGridOptions): this;
		getTemplate(): (string);
		forDataAtCoordinateAndResolution<T>(
		coordinate: ol.Coordinate, resolution: number, callback: ((d: any) => any), opt_this?: T, opt_request?: boolean
	): void
	}

	declare class TileWMS extends undefined$TileImage {
		constructor(opt_options?: olx.source.TileWMSOptions): this;
		getGetFeatureInfoUrl(
		coordinate: ol.Coordinate, resolution: number, projection: ol.ProjectionLike, params: GlobalObject
	): (string);
		getParams(): GlobalObject;
		updateParams(params: GlobalObject): void
	}

	declare class UrlTile extends undefined$Tile {
		constructor(options: ol.SourceUrlTileOptions): this;
		getTileLoadFunction(): ol.TileLoadFunctionType;
		getTileUrlFunction(): ol.TileUrlFunctionType;
		getUrls(): (string[]);
		setTileLoadFunction(tileLoadFunction: ol.TileLoadFunctionType): void;
		setTileUrlFunction(tileUrlFunction: ol.TileUrlFunctionType, opt_key?: string): void;
		setUrl(url: string): void;
		setUrls(urls: string[]): void
	}

	declare class Vector extends undefined$Source {
		constructor(opt_options?: olx.source.VectorOptions): this;
		addFeature(feature: ol.Feature): void;
		addFeatures(features: ol.Feature[]): void;
		clear(opt_fast?: boolean): void;
		forEachFeature<T, S>(callback: ((feature: ol.Feature) => S), opt_this?: T): (S);
		forEachFeatureInExtent<T, S>(
		extent: ol.Extent, callback: ((feature: ol.Feature) => S), opt_this?: T
	): (S);
		forEachFeatureIntersectingExtent<T, S>(
		extent: ol.Extent, callback: ((feature: ol.Feature) => S), opt_this?: T
	): (S);
		getFeaturesCollection(): ol.Collection<ol.Feature>;
		getFeatures(): ol.Feature[];
		getFeaturesAtCoordinate(coordinate: ol.Coordinate): ol.Feature[];
		getFeaturesInExtent(extent: ol.Extent): ol.Feature[];
		getClosestFeatureToCoordinate(
		coordinate: ol.Coordinate, opt_filter?: ((feature: ol.Feature) => boolean)
	): ol.Feature;
		getExtent(): ol.Extent;
		getFeatureById(id: (string | number)): ol.Feature;
		getFormat(): (ol.format.Feature);
		getUrl(): (string | ol.FeatureUrlFunction);
		removeFeature(feature: ol.Feature): void
	}

	declare class VectorEvent extends undefined$Event {
		constructor(type: string, opt_feature?: ol.Feature): this;
		feature: ol.Feature
	}

	declare class VectorTile extends undefined$UrlTile {
		constructor(options: olx.source.VectorTileOptions): this
	}

	declare class WMTS extends undefined$TileImage {
		constructor(options: olx.source.WMTSOptions): this;
		getDimensions(): GlobalObject;
		getFormat(): string;
		getLayer(): string;
		getMatrixSet(): string;
		getRequestEncoding(): ol.source.WMTSRequestEncoding;
		getStyle(): string;
		getVersion(): string;
		updateDimensions(dimensions: GlobalObject): void;
		optionsFromCapabilities(wmtsCap: GlobalObject, config: GlobalObject): olx.source.WMTSOptions
	}

	declare class XYZ extends undefined$TileImage {
		constructor(opt_options?: olx.source.XYZOptions): this
	}

	declare class Zoomify extends undefined$TileImage {
		constructor(opt_options?: olx.source.ZoomifyOptions): this
	}

	
}

declare module 'wms' {
	declare type ServerType = string;

				
}

declare module 'style' {
	declare type IconAnchorUnits = string;

	declare type IconOrigin = string;

	declare interface CircleOptions {
		fill?: ol.style.Fill,
		radius: number,
		snapToPixel?: boolean,
		stroke?: ol.style.Stroke,
		atlasManager?: ol.style.AtlasManager
	}

	declare interface FillOptions {
		color?: (ol.Color | ol.ColorLike)
	}

	declare interface IconOptions {
		anchor?: number[],
		anchorOrigin?: ol.style.IconOrigin,
		anchorXUnits?: ol.style.IconAnchorUnits,
		anchorYUnits?: ol.style.IconAnchorUnits,
		color?: (ol.Color | string),
		crossOrigin?: (string),
		img?: (any | HTMLCanvasElement),
		offset?: number[],
		offsetOrigin?: ol.style.IconOrigin,
		opacity?: number,
		scale?: number,
		snapToPixel?: boolean,
		rotateWithView?: boolean,
		rotation?: number,
		size?: ol.Size,
		imgSize?: ol.Size,
		src: string
	}

	declare interface RegularShapeOptions {
		fill?: ol.style.Fill,
		points: number,
		radius?: number,
		radius1?: number,
		radius2?: number,
		angle?: number,
		snapToPixel?: boolean,
		stroke?: ol.style.Stroke
	}

	declare interface StrokeOptions {
		color?: ol.Color | string,
		lineCap?: string,
		lineJoin?: string,
		lineDash?: number[],
		miterLimit?: number,
		width?: number
	}

	declare interface TextOptions {
		font?: string,
		offsetX?: number,
		offsetY?: number,
		scale?: number,
		rotation?: number,
		text?: string,
		textAlign?: string,
		textBaseline?: string,
		fill?: ol.style.Fill,
		stroke?: ol.style.Stroke
	}

	declare interface StyleOptions {
		geometry?: (string | ol.geom.Geometry | ol.StyleGeometryFunction),
		fill?: ol.style.Fill,
		image?: ol.style.Image,
		stroke?: ol.style.Stroke,
		text?: ol.style.Text,
		zIndex?: number
	}

	declare interface AtlasManagerOptions {
		initialSize?: number,
		maxSize?: number,
		space?: number
	}

		declare class AtlasManager  {
		constructor(opt_options?: olx.style.AtlasManagerOptions): this
	}

	declare class Circle extends undefined$Image {
		constructor(opt_options?: olx.style.CircleOptions): this;
		getFill(): ol.style.Fill;
		getImage(pixelRatio: number): HTMLCanvasElement;
		getRadius(): number;
		getStroke(): ol.style.Stroke
	}

	declare class Fill  {
		constructor(opt_options?: olx.style.FillOptions): this;
		getColor(): (ol.Color | ol.ColorLike);
		setColor(color: (ol.Color | ol.ColorLike)): void
	}

	declare class Icon extends undefined$Image {
		constructor(opt_options?: olx.style.IconOptions): this;
		getAnchor(): number[];
		getImage(pixelRatio: number): (Image | HTMLCanvasElement);
		getOrigin(): number[];
		getSrc(): (string);
		getSize(): ol.Size;
		load(): void
	}

	declare class Image  {
		constructor(options: ol.StyleImageOptions): this;
		getOpacity(): number;
		getRotateWithView(): boolean;
		getRotation(): number;
		getScale(): number;
		getSnapToPixel(): boolean;
		setOpacity(opacity: number): void;
		setRotation(rotation: number): void;
		setScale(scale: number): void
	}

	declare class RegularShape extends undefined$Image {
		constructor(options: olx.style.RegularShapeOptions): this;
		getAnchor(): number[];
		getAngle(): number;
		getFill(): ol.style.Fill;
		getImage(pixelRatio: number): (HTMLCanvasElement | HTMLVideoElement | Image);
		getOrigin(): number[];
		getPoints(): number;
		getRadius(): number;
		getRadius2(): number;
		getSize(): ol.Size;
		getStroke(): ol.style.Stroke
	}

	declare class Stroke  {
		constructor(opt_options?: olx.style.StrokeOptions): this;
		getColor(): (ol.Color | string);
		getLineCap(): (string);
		getLineDash(): number[];
		getLineJoin(): (string);
		getMiterLimit(): (number);
		getWidth(): (number);
		setColor(color: (ol.Color | string)): void;
		setLineCap(lineCap: (string)): void;
		setLineDash(lineDash: number[]): void;
		setLineJoin(lineJoin: (string)): void;
		setMiterLimit(miterLimit: (number)): void;
		setWidth(width: (number)): void
	}

	declare class Style  {
		constructor(opt_options?: olx.style.StyleOptions): this;
		getGeometry(): (string | ol.geom.Geometry | ol.StyleGeometryFunction);
		getGeometryFunction(): ol.StyleGeometryFunction;
		getFill(): ol.style.Fill;
		getImage(): ol.style.Image;
		getStroke(): ol.style.Stroke;
		getText(): ol.style.Text;
		getZIndex(): (number);
		setGeometry(geometry: (string | ol.geom.Geometry | ol.StyleGeometryFunction)): void;
		setZIndex(zIndex: (number)): void
	}

	declare class Text  {
		constructor(opt_options?: olx.style.TextOptions): this;
		getFont(): (string);
		getOffsetX(): number;
		getOffsetY(): number;
		getFill(): ol.style.Fill;
		getRotateWithView(): (boolean);
		getRotation(): (number);
		getScale(): (number);
		getStroke(): ol.style.Stroke;
		getText(): (string);
		getTextAlign(): (string);
		getTextBaseline(): (string);
		setFont(font: (string)): void;
		setOffsetX(offsetX: number): void;
		setOffsetY(offsetY: number): void;
		setFill(fill: ol.style.Fill): void;
		setRotation(rotation: (number)): void;
		setScale(scale: (number)): void;
		setStroke(stroke: ol.style.Stroke): void;
		setText(text: (string)): void;
		setTextAlign(textAlign: (string)): void;
		setTextBaseline(textBaseline: (string)): void
	}

	
}

declare module 'Tile' {
	declare type State = number;

				
}

declare module 'tilegrid' {
		declare interface TileGridOptions {
		extent?: ol.Extent,
		minZoom?: number,
		origin?: ol.Coordinate,
		origins?: ol.Coordinate[],
		resolutions: number[],
		tileSize?: (number | ol.Size),
		tileSizes?: ((number | ol.Size)[])
	}

	declare interface WMTSOptions {
		extent?: ol.Extent,
		origin?: ol.Coordinate,
		origins?: ol.Coordinate[],
		resolutions: number[],
		matrixIds: string[],
		sizes?: ol.Size[],
		tileSize?: (number | ol.Size),
		tileSizes?: ((number | ol.Size)[]),
		widths?: number[]
	}

	declare interface XYZOptions {
		extent?: ol.Extent,
		maxZoom?: number,
		minZoom?: number,
		tileSize?: (number | ol.Size)
	}

	declare function createXYZ(opt_options?: olx.tilegrid.XYZOptions): ol.tilegrid.TileGrid

	declare class TileGrid  {
		constructor(options: olx.tilegrid.TileGridOptions): this;
		forEachTileCoord(
		extent: ol.Extent, zoom: number, callback: ((coords: ol.TileCoord) => any)
	): void;
		getMaxZoom(): number;
		getMinZoom(): number;
		getOrigin(z: number): ol.Coordinate;
		getResolution(z: number): number;
		getResolutions(): number[];
		getTileCoordExtent(tileCoord: ol.TileCoord, opt_extent?: ol.Extent): ol.Extent;
		getTileCoordForCoordAndResolution(
		coordinate: ol.Coordinate, resolution: number, opt_tileCoord?: ol.TileCoord
	): ol.TileCoord;
		getTileCoordForCoordAndZ(
		coordinate: ol.Coordinate, z: number, opt_tileCoord?: ol.TileCoord
	): ol.TileCoord;
		getTileSize(z: number): (number | ol.Size);
		getZForResolution(resolution: number, opt_direction?: number): number
	}

	declare class WMTS extends undefined$TileGrid {
		constructor(options: olx.tilegrid.WMTSOptions): this;
		getMatrixIds(): string[];
		createFromCapabilitiesMatrixSet(matrixSet: GlobalObject, opt_extent?: ol.Extent): ol.tilegrid.WMTS
	}

	
}

declare module 'olx' {
		declare interface AttributionOptions {
		html: string
	}

	declare interface DeviceOrientationOptions {
		tracking?: boolean
	}

	declare interface GeolocationOptions {
		tracking?: boolean,
		trackingOptions?: PositionOptions,
		projection: ol.ProjectionLike
	}

	declare interface LogoOptions {
		href: string,
		src: string
	}

	declare interface GraticuleOptions {
		map?: ol.Map,
		maxLines?: number,
		strokeStyle?: ol.style.Stroke,
		targetSize?: number
	}

	declare interface MapOptions {
		controls?: (ol.Collection<ol.control.Control> | ol.control.Control[]),
		pixelRatio?: number,
		interactions?: (ol.Collection<ol.interaction.Interaction> | ol.interaction.Interaction[]),
		keyboardEventTarget?: (Element | Document | string),
		layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>),
		loadTilesWhileAnimating?: boolean,
		loadTilesWhileInteracting?: boolean,
		logo?: (boolean | string | olx.LogoOptions | Element),
		overlays?: (ol.Collection<ol.Overlay> | ol.Overlay[]),
		renderer?: (ol.RendererType | (ol.RendererType | string)[] | string),
		target?: (Element | string),
		view?: ol.View
	}

	declare interface OverlayOptions {
		id?: (number | string),
		element?: Element,
		offset?: number[],
		position?: ol.Coordinate,
		positioning?: (ol.OverlayPositioning | string),
		stopEvent?: boolean,
		insertFirst?: boolean,
		autoPan?: boolean,
		autoPanAnimation?: olx.animation.PanOptions,
		autoPanMargin?: number
	}

	declare interface ProjectionOptions {
		code: string,
		units?: (ol.proj.Units | string),
		extent?: ol.Extent,
		axisOrientation?: string,
		global?: boolean,
		metersPerUnit?: number,
		worldExtent?: ol.Extent,
		getPointResolution?: ((resolution: number, coords: ol.Coordinate) => number)
	}

	declare interface ViewOptions {
		center?: ol.Coordinate,
		constrainRotation?: (boolean | number),
		enableRotation?: boolean,
		extent?: ol.Extent,
		maxResolution?: number,
		minResolution?: number,
		maxZoom?: number,
		minZoom?: number,
		projection?: ol.ProjectionLike,
		resolution?: number,
		resolutions?: number[],
		rotation?: number,
		zoom?: number,
		zoomFactor?: number
	}

	declare interface FrameState {
		pixelRatio: number,
		time: number,
		viewState: olx.ViewState
	}

	declare interface ViewState {
		center: ol.Coordinate,
		projection: ol.proj.Projection,
		resolution: number,
		rotation: number
	}

			
}

declare module 'view' {
		declare interface FitOptions {
		padding?: number[],
		constrainResolution?: boolean,
		nearest?: boolean,
		maxZoom?: number,
		minResolution?: number
	}

			
}