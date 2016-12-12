

declare module 'openlayers-3.6.0' {
					
}

declare module 'npm$namespace$olx' {
		declare interface StaticImageOptions {
		attributions?: Array<ol.Attribution>,
		crossOrigin?: string,
		imageExtent: ol.Extent,
		imageSize?: ol.Size,
		imageLoadFunction?: ol.TileLoadFunctionType,
		logo?: olx.LogoOptions,
		projection: ol.proj.Projection,
		url: string
	}

	declare interface ZoomToExtentOptions {
		className?: string,
		target?: Element,
		label?: string | Node,
		tipLabel?: string,
		extent: ol.Extent
	}

	declare interface OverviewMapOptions {
		collapsed?: boolean,
		collapseLabel?: string | Node,
		collapsible?: boolean,
		label?: string | Node,
		layers?: ol.layer.Layer[] | ol.Collection<ol.layer.Layer>,
		render?: Function,
		target?: Element,
		tipLabel?: string,
		view?: ol.View
	}

	declare interface RotateOptions {
		className?: string,
		label?: string | Element,
		tipLabel?: string,
		duration?: number,
		autoHide?: boolean,
		render?: Function,
		resetNorth?: Function,
		target?: Element
	}

	declare interface AttributionOptions {
		html: string
	}

	declare interface DeviceOrientationOptions {
		tracking?: boolean
	}

	declare interface FrameState {
		pixelRatio: number,
		time: number,
		viewState: olx.ViewState
	}

	declare interface FeatureOverlayOptions {
		features?: Array<ol.Feature> | ol.Collection<ol.Feature> | ol.style.StyleFunction,
		map: ol.Map,
		style: ol.style.Style | Array<ol.style.Style>
	}

	declare interface GeolocationOptions {
		tracking?: boolean,
		trackingOptions?: PositionOptions,
		projection?: ol.proj.ProjectionLike | ol.proj.Projection
	}

	declare interface GraticuleOptions {
		map?: ol.Map,
		maxLines?: number,
		strokeStyle?: ol.style.Stroke,
		targetSize?: number
	}

	declare interface BaseWMSOptions {
		attributions?: Array<ol.Attribution>,
		params?: any,
		crossOrigin?: string,
		hidpi?: boolean,
		serverType?: ol.source.wms.ServerType,
		url?: string,
		logo?: olx.LogoOptions,
		projection?: ol.proj.ProjectionLike
	}

	declare interface ImageWMSOptions {
		imageLoadFunction?: ol.ImageLoadFunctionType,
		ratio?: number,
		resolutions?: Array<number>
	}

	declare interface TileWMSOptions {
		attributions?: Array<ol.Attribution>,
		params: Object,
		crossOrigin?: string,
		gutter?: number,
		hidpi?: boolean,
		logo?: string | olx.LogoOptions,
		tileGrid?: ol.tilegrid.TileGrid,
		maxZoom?: number,
		projection?: ol.proj.ProjectionLike,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string,
		urls?: Array<string>,
		serverType?: ol.source.wms.ServerType,
		wrapX?: boolean
	}

	declare interface OSMOptions {
		attributions?: ol.AttributionLike,
		cacheSize?: number,
		crossOrigin?: string,
		maxZoom?: number,
		opaque?: boolean,
		reprojectionErrorThreshold?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		url?: string,
		wrapX?: boolean
	}

	declare interface LogoOptions {
		href: string,
		src: string
	}

	declare interface MapOptions {
		controls?: any,
		pixelRatio?: number,
		interactions?: any,
		keyboardEventTarget?: any,
		layers?: Array<any>,
		loadTilesWhileAnimating?: boolean,
		loadTilesWhileInteracting?: boolean,
		logo?: any,
		overlays?: any,
		renderer?: any,
		target?: any,
		view?: ViewOptions
	}

	declare interface OverlayOptions {
		element?: Element,
		offset?: Array<number>,
		position?: ol.Coordinate,
		positioning?: ol.OverlayPositioning,
		stopEvent?: boolean,
		insertFirst?: boolean,
		autoPan?: boolean,
		autoPanAnimation?: olx.animation.PanOptions,
		autoPanMargin?: number
	}

	declare interface ViewOptions {
		center?: ol.Coordinate,
		constrainRotation?: boolean,
		enableRotation?: boolean,
		extent?: ol.Extent,
		maxResolution?: number,
		minResolution?: number,
		maxZoom?: number,
		minZoom?: number,
		projection?: ol.proj.ProjectionLike | ol.proj.Projection,
		resolution?: number,
		resolutions?: Array<number>,
		rotation?: number,
		zoom?: number,
		zoomFactor?: number
	}

	declare interface ViewState {
		center: ol.Coordinate,
		projection: ol.proj.Projection,
		resolution: number,
		rotation: number
	}

	declare interface Projection {
		code: string,
		units?: ol.proj.Units,
		extent?: Array<number>,
		axisOrientation?: string,
		global?: boolean,
		worldExtent?: ol.Extent,
		getPointResolution?: (resolution: number, coordinate: ol.Coordinate) => number
	}

			
}

declare module 'animation' {
		declare interface BounceOptions {
		resolution: number,
		start?: number,
		duration?: number,
		easing?: (t: number) => number
	}

	declare interface PanOptions {
		source: ol.Coordinate,
		start?: number,
		duration?: number,
		easing?: (t: number) => number
	}

	declare interface RotateOptions {
		rotation?: number,
		anchor?: ol.Coordinate,
		start?: number,
		duration?: number,
		easing?: (t: number) => number
	}

	declare interface ZoomOptions {
		resolution: number,
		start?: number,
		duration?: number,
		easing?: (t: number) => number
	}

	declare function bounce(options: olx.animation.BounceOptions): ol.PreRenderFunction

	declare function pan(options: olx.animation.PanOptions): ol.PreRenderFunction

	declare function rotate(options: olx.animation.RotateOptions): ol.PreRenderFunction

	declare function zoom(options: olx.animation.ZoomOptions): ol.PreRenderFunction

		
}

declare module 'control' {
		declare interface DefaultsOptions {
		attribution?: boolean,
		attributionOptions?: any,
		rotate?: boolean,
		rotateOptions?: any,
		zoom?: boolean,
		zoomOptions?: any
	}

	declare interface ControlOptions {
		element?: Element,
		render?: any,
		target?: Element | string
	}

	declare function defaults(options?: olx.control.DefaultsOptions): ol.Collection<ol.control.Control>

	declare class Control extends ol$Object {
		constructor(options: olx.control.ControlOptions): this;
		getMap(): ol.Map;
		setMap(map: ol.Map): void;
		setTarget(target: Element | string): void
	}

	declare class Attribution extends Control {
		
	}

	declare class FullScreen extends Control {
		
	}

	declare class MousePosition extends Control {
		
	}

	declare class OverviewMap extends Control {
		constructor(options?: olx.OverviewMapOptions): this;
		render(mapEvent: ol.MapEvent): void;
		getCollapsed(): boolean;
		getCollapsible(): boolean;
		getOverviewMap(): ol.Map;
		setCollapsed(collapsed: boolean): void;
		setCollapsible(collapsible: boolean): void
	}

	declare class Rotate extends Control {
		constructor(opt_options?: olx.RotateOptions): this
	}

	declare class ScaleLine extends Control {
		getUnits(): ScaleLine.Units;
		setUnits(units: ScaleLine.Units): void
	}

	declare class Zoom extends Control {
		
	}

	declare class ZoomSlider extends Control {
		
	}

	declare class ZoomToExtent extends Control {
		constructor(options?: olx.ZoomToExtentOptions): this
	}

	
}

declare module 'interaction' {
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

	declare interface InteractionOptions {
		handleEvent: Function
	}

	declare interface ModifyOptions {
		condition?: ol.events.ConditionType,
		deleteCondition?: ol.events.ConditionType,
		pixelTolerance?: number,
		style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction,
		features: ol.Collection<ol.Feature>,
		wrapX?: boolean
	}

	declare interface DragBoxOptions {
		className?: string,
		condition?: ol.events.ConditionType,
		boxEndCondition?: ol.interaction.DragBoxEndConditionType
	}

	declare interface DrawOptions {
		clickTolerance?: number,
		features?: ol.Collection<ol.Feature>,
		source?: ol.source.Vector,
		snapTolerance?: number,
		type: ol.geom.GeometryType,
		maxPoints?: number,
		minPoints?: number,
		finishCondition?: ol.events.ConditionType,
		style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction,
		geometryFunction?: ol.interaction.DrawGeometryFunctionType,
		geometryName?: string,
		condition?: ol.events.ConditionType,
		freehandCondition?: ol.events.ConditionType,
		wrapX?: boolean
	}

	declare interface DoubleClickZoomOptions {
		duration?: number,
		delta?: number
	}

	declare interface DragAndDropOptions {
		formatConstructors?: Array<ol.format.Feature>,
		projection: ol.proj.ProjectionLike,
		target?: Element
	}

	declare interface DragPanOptions {
		condition?: ol.events.ConditionType,
		kinetic?: ol.Kinetic
	}

	declare interface DragRotateOptions {
		condition?: ol.events.ConditionType,
		duration?: number
	}

	declare interface DragRotateAndZoomOptions {
		condition?: ol.events.ConditionType,
		duration?: number
	}

	declare interface DragZoomOptions {
		className?: string,
		condition?: ol.events.ConditionType,
		duration?: number,
		out?: boolean
	}

	declare interface KeyboardPanOptions {
		condition?: ol.events.ConditionType,
		duration?: number,
		pixelDelta?: number
	}

	declare interface KeyboardZoomOptions {
		duration?: number,
		condition?: ol.events.ConditionType,
		delta?: number
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
		handleDownEvent?: Function,
		handleDragEvent?: Function,
		handleEvent?: Function,
		handleMoveEvent?: Function,
		handleUpEvent?: Function
	}

	declare interface SnapOptions {
		features?: ol.Collection<ol.Feature>,
		edge?: boolean,
		vertex?: boolean,
		pixelTolerance?: number,
		source?: ol.source.Vector
	}

	declare interface SelectOptions {
		addCondition?: ol.events.ConditionType,
		condition?: ol.events.ConditionType,
		layers?: Array<ol.layer.Layer> | ((layer: ol.layer.Layer) => boolean),
		style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction,
		removeCondition?: ol.events.ConditionType,
		toggleCondition?: ol.events.ConditionType,
		multi?: boolean,
		features?: ol.Collection<ol.Feature>,
		filter?: ol.interaction.SelectFilterFunction,
		wrapX?: boolean
	}

	declare interface DrawGeometryFunctionType {
		(coordinates: ol.Coordinate, geom?: ol.geom.Geometry): ol.geom.Geometry
	}

	declare interface SelectFilterFunction {
		(feature: ol.Feature | ol.render.Feature, layer: ol.layer.Layer): boolean
	}

	declare interface DragBoxEndConditionType {
		(evt: ol.MapBrowserEvent, startPixel: ol.Pixel, endPixel: ol.Pixel): boolean
	}

	declare function defaults(
		opts: olx.interaction.DefaultsOptions
	): ol.Collection<ol.interaction.Interaction>

	declare class DoubleClickZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.DoubleClickZoomOptions): this
	}

	declare class DragAndDrop extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.DragAndDropOptions): this
	}

	declare class DragAndDropEvent extends undefined$Event {
		
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

	declare class Draw extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.DrawOptions): this
	}

	declare class DrawEvent extends undefined$Event {
		feature: ol.Feature;
		target: ol.Object;
		type: string
	}

	declare class Interaction extends ol$Object {
		constructor(options: olx.interaction.InteractionOptions): this;
		getActive(): boolean;
		getMap(): ol.Map;
		setActive(active: boolean): void
	}

	declare class KeyboardPan extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.KeyboardPanOptions): this
	}

	declare class KeyboardZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.KeyboardZoomOptions): this
	}

	declare class Modify extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.ModifyOptions): this
	}

	declare class MouseWheelZoom extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.MouseWheelZoomOptions): this
	}

	declare class PinchRotate extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.PinchRotateOptions): this
	}

	declare class PinchZoom extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.PinchZoomOptions): this
	}

	declare class Pointer extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.PointerOptions): this
	}

	declare class Select extends undefined$Interaction {
		constructor(opt_options?: olx.interaction.SelectOptions): this;
		getLayer(): ol.layer.Layer;
		getFeatures(): ol.Collection<ol.Feature>
	}

	declare class SelectEvent extends undefined$Event {
		deselected: Array<ol.Feature>;
		mapBrowserEvent: ol.MapBrowserEvent;
		selected: Array<ol.Feature>;
		target: ol.Object;
		type: string;
		preventDefault(): void;
		stopPropagation(): void
	}

	declare class Snap extends undefined$Pointer {
		constructor(opt_options?: olx.interaction.SnapOptions): this
	}

	
}

declare module 'layer' {
		declare interface BaseOptions {
		opacity?: number,
		visible?: boolean,
		extent?: ol.Extent,
		zIndex?: number,
		minResolution?: number,
		maxResolution?: number
	}

	declare interface GroupOptions {
		layers?: Array<ol.layer.Base> | ol.Collection<ol.layer.Base>
	}

	declare interface HeatmapOptions {
		gradient?: Array<String>,
		radius?: number,
		blur?: number,
		shadow?: number
	}

	declare interface ImageOptions {
		
	}

	declare interface LayerOptions {
		source?: ol.source.Source
	}

	declare interface TileOptions {
		preload?: number,
		source?: ol.source.Tile,
		useInterimTilesOnError?: boolean
	}

	declare interface VectorOptions {
		updateWhileAnimating?: boolean,
		updateWhileInteracting?: boolean,
		renderOrder?: any,
		renderBuffer?: number,
		source?: ol.source.Vector,
		style?: ol.style.Style | Array<ol.style.Style> | any
	}

		declare class Base extends ol$Object {
		constructor(options?: olx.layer.BaseOptions): this;
		getBrightness(): number;
		getContrast(): number;
		getExtent(): ol.Extent;
		getHue(): number;
		getMaxResolution(): number;
		getMinResolution(): number;
		getOpacity(): number;
		getSaturation(): number;
		getVisible(): boolean;
		setBrightness(brigthness: number): void;
		setContrast(contrast: number): void;
		setExtent(extent?: ol.Extent): void;
		setHue(hue: number): void;
		setMaxResolution(maxResolution: number): void;
		setMinResolution(minResolution: number): void;
		setOpacity(opacity: number): void;
		setSaturation(saturation: number): void;
		setVisible(visible: boolean): void
	}

	declare class Group extends undefined$Base {
		constructor(options?: olx.layer.GroupOptions): this;
		getLayers(): ol.Collection<ol.layer.Base>;
		setLayers(layers: ol.Collection<ol.layer.Base>): void
	}

	declare class Heatmap extends undefined$Vector {
		constructor(options?: olx.layer.HeatmapOptions): this;
		getBlur(): number;
		getGradient(): Array<string>;
		getRadius(): number;
		setBlur(blur: number): void;
		setGradient(colors: Array<string>): void;
		setRadius(radius: number): void
	}

	declare class Image extends undefined$Layer {
		constructor(options?: olx.layer.ImageOptions): this;
		getSource(): ol.source.Image
	}

	declare class Layer extends undefined$Base {
		constructor(options?: olx.layer.LayerOptions): this;
		getSource(): ol.source.Source;
		setSource(source: ol.source.Source): void
	}

	declare class Tile extends undefined$Layer {
		constructor(options?: olx.layer.TileOptions): this;
		getPreload(): number;
		getSource(): ol.source.Tile;
		getUseInterimTilesOnError(): boolean;
		setPreload(preload: number): void;
		setUseInterimTilesOnError(useInterimTilesOnError: boolean): void
	}

	declare class Vector extends undefined$Layer {
		constructor(options?: olx.layer.VectorOptions): this;
		getSource(): ol.source.Vector;
		getStyle(): ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;
		getStyleFunction(): ol.style.StyleFunction;
		setStyle(): void;
		setStyle(style: ol.style.Style): void;
		setStyle(style: Array<ol.style.Style>): void;
		setStyle(style: ol.style.StyleFunction): void;
		setMap(map: ol.Map): void;
		setZIndex(zIndex: number): void
	}

	
}

declare module 'source' {
		declare interface VectorOptions {
		attributions?: Array<ol.Attribution>,
		features?: Array<ol.Feature> | ol.Collection<ol.Feature>,
		format?: ol.format.Feature,
		loader?: ol.FeatureLoader,
		logo?: string | olx.LogoOptions,
		strategy?: ol.LoadingStrategy,
		url?: string,
		useSpatialIndex?: boolean,
		wrapX?: boolean
	}

	declare interface ClusterOptions {
		distance?: number,
		extent?: ol.Extent,
		geometryFunction?: any,
		projection?: ol.proj.ProjectionLike,
		source: ol.source.Vector
	}

	declare interface WMTSOptions {
		attributions?: Array<ol.Attribution>,
		crossOrigin?: string,
		logo?: string | olx.LogoOptions,
		tileGrid: ol.tilegrid.WMTS,
		projection?: ol.proj.ProjectionLike,
		reprojectionErrorThreshold?: number,
		requestEncoding?: ol.source.WMTSRequestEncoding,
		layer: string,
		style: string,
		tileClass?: Function,
		tilePixelRatio?: number,
		version?: string,
		format?: string,
		matrixSet: string,
		dimensions?: Object,
		url?: string,
		maxZoom?: number,
		tileLoadFunction?: ol.TileLoadFunctionType,
		urls?: Array<string>,
		wrapX: boolean
	}

	declare interface State {
		
	}

	declare interface WMTSRequestEncoding {
		
	}

		declare class BingMaps extends TileImage {
		
	}

	declare class CartoDB extends XYZ {
		
	}

	declare class Cluster extends Vector {
		constructor(options: olx.source.ClusterOptions): this
	}

	declare class Image extends Source {
		
	}

	declare class ImageArcGISRest extends Image {
		
	}

	declare class ImageCanvas extends Image {
		
	}

	declare class ImageEvent extends undefined$Event {
		
	}

	declare class ImageMapGuide extends Image {
		
	}

	declare class ImageStatic extends undefined$Image {
		constructor(options?: olx.StaticImageOptions): this
	}

	declare class ImageVector extends ImageCanvas {
		
	}

	declare class ImageWMS extends Image {
		constructor(options: olx.ImageWMSOptions): this
	}

	declare class MapQuest extends XYZ {
		constructor(options: any): this
	}

	declare class OSM extends XYZ {
		constructor(opt_options?: olx.OSMOptions): this
	}

	declare class Source extends ol$Object {
		constructor(options: any): this;
		getProjection(): ol.proj.Projection;
		refresh(): void
	}

	declare class Stamen extends XYZ {
		
	}

	declare class Tile extends Source {
		
	}

	declare class TileArcGISRest extends TileImage {
		
	}

	declare class TileDebug extends Tile {
		
	}

	declare class TileEvent extends undefined$Event {
		
	}

	declare class TileImage extends UrlTile {
		
	}

	declare class TileJSON extends TileImage {
		
	}

	declare class TileUTFGrid extends Tile {
		
	}

	declare class TileWMS extends TileImage {
		constructor(options: olx.TileWMSOptions): this;
		updateParams(params: any): void;
		getParams(): any;
		getGetFeatureInfoUrl(
		coordinate: ol.Coordinate, resolution: number, projection: ol.proj.ProjectionLike, params: {
		
	}
	): string
	}

	declare class UrlTile extends Tile {
		
	}

	declare class Vector extends Source {
		constructor(opts?: olx.source.VectorOptions): this;
		addFeature(feature: ol.Feature): void;
		addFeatures(features: ol.Feature[]): void;
		clear(fast?: boolean): void;
		getExtent(): ol.Extent;
		getFeaturesInExtent(extent: ol.Extent): ol.Feature[];
		getFeatures(): ol.Feature[];
		getFeaturesAtCoordinate(coordinate: ol.Coordinate): ol.Feature[]
	}

	declare class VectorEvent extends undefined$Event {
		
	}

	declare class VectorTile extends UrlTile {
		
	}

	declare class WMTS extends TileImage {
		constructor(options: olx.source.WMTSOptions): this
	}

	declare class XYZ extends TileImage {
		
	}

	declare class Zoomify extends TileImage {
		
	}

	
}

declare module 'style' {
		declare interface FillOptions {
		color?: ol.Color | string
	}

	declare interface StyleOptions {
		geometry?: string | ol.geom.Geometry | ol.style.GeometryFunction,
		fill?: ol.style.Fill,
		image?: ol.style.Image,
		stroke?: ol.style.Stroke,
		text?: ol.style.Text,
		zIndex?: number
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

	declare interface StrokeOptions {
		color?: ol.Color | string,
		lineCap?: string,
		lineJoin?: string,
		lineDash?: Array<number>,
		miterLimit?: number,
		width?: number
	}

	declare interface IconOptions {
		anchor?: Array<number>,
		anchorOrigin?: string,
		anchorXUnits?: string,
		anchorYUnits?: string,
		crossOrigin?: string,
		img?: ol.Image | HTMLCanvasElement,
		offset?: Array<number>,
		offsetOrigin?: string,
		opacity?: number,
		scale?: number,
		snapToPixel?: boolean,
		rotateWithView?: boolean,
		rotation?: number,
		size?: ol.Size,
		imgSize?: ol.Size,
		src?: string
	}

	declare interface CircleOptions {
		fill?: ol.style.Fill,
		radius: number,
		snapToPixel?: boolean,
		stroke?: ol.style.Stroke
	}

	declare interface GeometryFunction {
		(feature: Feature): ol.geom.Geometry
	}

	declare interface StyleFunction {
		(feature: ol.Feature, resolution: number): ol.style.Style
	}

		declare class AtlasManager  {
		
	}

	declare class Circle extends Image {
		constructor(opt_options?: olx.style.CircleOptions): this
	}

	declare class Fill  {
		constructor(opt_options?: olx.style.FillOptions): this;
		getColor(): ol.Color | string;
		setColor(color: ol.Color | string): void;
		getChecksum(): string
	}

	declare class Icon extends Image {
		constructor(option: olx.style.IconOptions): this
	}

	declare class Image  {
		getOpacity(): number;
		getRotateWithView(): boolean;
		getRotation(): number;
		getScale(): number;
		getSnapToPiexl(): boolean;
		setOpacity(opacity: number): void;
		setRotation(rotation: number): void;
		setScale(scale: number): void
	}

	declare class RegularShape  {
		
	}

	declare class Stroke  {
		constructor(opts?: olx.style.StrokeOptions): this;
		getColor(): ol.Color | string;
		getLineCap(): string;
		getLineDash(): number[];
		getLineJoin(): string;
		getMitterLimit(): number;
		getWidth(): number;
		setColor(color: ol.Color | string): void;
		setLineCap(lineCap: string): void;
		setLineDash(lineDash: number[]): void;
		setLineJoin(lineJoin: string): void;
		setMiterLimit(miterLimit: number): void;
		setWidth(width: number): void
	}

	declare class Style  {
		constructor(opts: olx.style.StyleOptions): this;
		getFill(): ol.style.Fill;
		getGeometry(): string | ol.geom.Geometry | ol.style.GeometryFunction;
		getGeometryFunction(): ol.style.GeometryFunction;
		getImage(): ol.style.Image;
		getStroke(): ol.style.Stroke;
		getText(): ol.style.Text;
		getZIndex(): number;
		setGeometry(geometry: string | ol.geom.Geometry | ol.style.GeometryFunction): void;
		setZIndex(zIndex: number): void
	}

	declare class Text  {
		constructor(opt?: olx.style.TextOptions): this;
		getFont(): string;
		getOffsetX(): number;
		getOffsetY(): number;
		getFill(): Fill;
		getRotation(): number;
		getScale(): number;
		getStroke(): Stroke;
		getText(): string;
		getTextAlign(): string;
		getTextBaseline(): string;
		setFont(font: string): void;
		setOffsetX(offsetX: number): void;
		setOffsetY(offsetY: number): void;
		setFill(fill: Fill): void;
		setRotation(rotation: number): void;
		setScale(scale: number): void;
		setStroke(stroke: Stroke): void;
		setText(text: string): void;
		setTextAlign(textAlign: string): void;
		setTextBaseline(textBaseline: string): void
	}

	
}

declare module 'tilegrid' {
		declare interface TileGridOptions {
		extent?: ol.Extent,
		minZoom?: number,
		origin?: ol.Coordinate,
		origins?: Array<ol.Coordinate>,
		resolutions?: Array<number>,
		tileSize?: number | ol.Size,
		tileSizes?: Array<number | ol.Size>
	}

	declare interface WMTSOptions {
		extent?: ol.Extent,
		origin?: ol.Coordinate,
		origins?: Array<ol.Coordinate>,
		resolutions?: Array<number>,
		matrixIds?: Array<string>,
		sizes?: Array<ol.Size>,
		tileSize?: number | ol.Size,
		tileSizes?: Array<number | ol.Size>,
		widths?: Array<number>
	}

	declare interface XYZOptions {
		extent?: ol.Extent,
		maxZoom?: number,
		minZoom?: number,
		tileSize?: number | ol.Size
	}

	declare interface ZoomifyOptions {
		resolutions: Array<number>
	}

	declare function createXYZ(options?: olx.tilegrid.XYZOptions): ol.tilegrid.TileGrid

	declare class TileGrid  {
		constructor(options: olx.tilegrid.TileGridOptions): this;
		createTileCoordTransform(
		
	): {
		(tilecoord: ol.TileCoord, projection: ol.proj.Projection): ol.TileCoord
	};
		getMaxZoom(): number;
		getMinZoom(): number;
		getOrigin(z: number): ol.Coordinate;
		getResolution(z: number): number;
		getResolutions(): Array<number>;
		getTileCoordForCoordAndResolution(
		coordinate: ol.Coordinate, resolution: number, tileCoord?: ol.TileCoord
	): ol.TileCoord;
		getTileCoordForCoordAndZ(coordinate: ol.Coordinate, z: number, tileCoord?: ol.TileCoord): ol.TileCoord;
		getTileSize(z: number): number | ol.Size
	}

	declare class WMTS extends TileGrid {
		constructor(options: olx.tilegrid.WMTSOptions): this;
		createFromCapabilitiesMatrixSet(matrixSet: any, extent: ol.Extent): ol.tilegrid.WMTS;
		getMatrixIds(): Array<string>
	}

	declare class Zoomify extends TileGrid {
		constructor(options?: olx.tilegrid.ZoomifyOptions): this
	}

	
}

declare module 'view' {
		declare interface FitGeometryOptions {
		padding?: Array<number>,
		constrainResolution?: boolean,
		nearest?: boolean,
		minResolution?: number,
		maxZoom?: number
	}

			
}

declare module 'format' {
		declare interface WKTOptions {
		splitCollection?: boolean
	}

	declare interface GeoJSONOptions {
		defaultDataProjection?: ol.proj.ProjectionLike | ol.proj.Projection,
		geometryName?: string
	}

	declare interface ReadOptions {
		dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection,
		featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection
	}

	declare interface WriteOptions {
		dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection,
		featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection,
		rightHanded?: boolean
	}

	declare interface IGCZ {
		
	}

		declare class EsriJSON  {
		
	}

	declare class Feature  {
		
	}

	declare class GeoJSON extends undefined$JSONFeature {
		constructor(options?: olx.format.GeoJSONOptions): this;
		readFeature(
		source: Document | Node | JSON | string, options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: Document | Node | JSON | string, options?: olx.format.ReadOptions
	): Array<ol.Feature>;
		readGeometry(
		source: Document | Node | JSON | string, options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		readProjection(source: Document | Node | JSON | string): ol.proj.Projection;
		writeFeature(feature: ol.Feature, options?: olx.format.WriteOptions): string;
		writeFeatureObject(feature: ol.Feature, options?: olx.format.WriteOptions): JSON;
		writeFeatures(features: Array<ol.Feature>, options?: olx.format.WriteOptions): string;
		writeFeaturesObject(features: Array<ol.Feature>, options?: olx.format.WriteOptions): JSON;
		writeGeometry(geometry: ol.geom.Geometry, options?: olx.format.WriteOptions): string;
		writeGeometryObject(geometry: ol.geom.Geometry, options?: olx.format.WriteOptions): JSON
	}

	declare class GML  {
		
	}

	declare class GML2  {
		
	}

	declare class GML3  {
		
	}

	declare class GMLBase  {
		
	}

	declare class GPX  {
		
	}

	declare class IGC  {
		
	}

	declare class JSONFeature  {
		
	}

	declare class KML  {
		
	}

	declare class OSMXML  {
		
	}

	declare class Polyline  {
		
	}

	declare class TextFeature  {
		
	}

	declare class TopoJSON  {
		
	}

	declare class WFS  {
		readFeatures(
		source: Document | Node | Object | string, option?: olx.format.ReadOptions
	): Array<ol.Feature>
	}

	declare class WKT  {
		constructor(opt_options?: olx.format.WKTOptions): this;
		readFeature(
		source: Document | Node | JSON | string, opt_options?: olx.format.ReadOptions
	): ol.Feature;
		readFeatures(
		source: Document | Node | JSON | string, options?: olx.format.ReadOptions
	): Array<ol.Feature>;
		readGeometry(
		source: Document | Node | JSON | string, options?: olx.format.ReadOptions
	): ol.geom.Geometry;
		writeFeature(feature: ol.Feature, options?: olx.format.WriteOptions): string;
		writeFeatures(features: Array<ol.Feature>, options?: olx.format.WriteOptions): string;
		writeGeometry(geometry: ol.geom.Geometry, options?: olx.format.WriteOptions): string
	}

	declare class WMSCapabilities  {
		
	}

	declare class WMSGetFeatureInfo  {
		
	}

	declare class WMTSCapabilities  {
		
	}

	declare class XML  {
		
	}

	declare class XMLFeature  {
		
	}

	
}

declare module 'npm$namespace$ol' {
	declare type AttributionLike = string | Array<string> | ol.Attribution | Array<ol.Attribution>;

	declare interface TileLoadFunctionType {
		(image: ol.Image, url: string): void
	}

	declare interface ImageLoadFunctionType {
		(image: ol.Image, url: string): void
	}

	declare interface Color {
		
	}

	declare interface Coordinate {
		
	}

	declare interface Extent {
		
	}

	declare interface OverlayPositioning {
		
	}

	declare interface Pixel {
		
	}

	declare interface RendererType {
		
	}

	declare interface Size {
		
	}

	declare interface TileCoord {
		
	}

	declare interface CoordinateFormatType {
		(coordinate?: Coordinate): string
	}

	declare interface FeatureLoader {
		(extent: ol.Extent, number: number, projection: ol.proj.Projection): string
	}

	declare interface FeatureStyleFunction {
		(resolution: number): ol.style.Style
	}

	declare interface LoadingStrategy {
		(extent: ol.Extent, resolution: number): Array<ol.Extent>
	}

	declare interface PreRenderFunction {
		(map: ol.Map, frameState?: olx.FrameState): boolean
	}

	declare interface TransformFunction {
		(input: Array<number>, output?: Array<number>, dimension?: number): Array<number>
	}

	declare function CanvasFunctionType(
		extent: Extent, resolution: number, pixelRatio: number, size: Size, projection: proj.Projection
	): HTMLCanvasElement

	declare class Attribution  {
		constructor(options: olx.AttributionOptions): this;
		getHTML(): string
	}

	declare class Collection<T> extends ol$Object {
		constructor(values: Array<T>): this;
		clear(): void;
		extend(arr: Array<T>): Collection<T>;
		forEach(f: (element: T, index: number, array: Array<T>) => void, ref?: any): void;
		getArray(): Array<T>;
		getLength(): number;
		insertAt(index: number, elem: T): void;
		item(index: number): T;
		pop(): T;
		push(elem: T): number;
		remove(elem: T): T;
		removeAt(index: number): T;
		setAt(index: number, elem: T): void
	}

	declare class CollectionEvent<T> extends undefined$Event {
		element: T
	}

	declare class DeviceOrientation extends ol$Object {
		constructor(options?: olx.DeviceOrientationOptions): this;
		getAlpha(): number;
		getBeta(): number;
		getGamma(): number;
		getHeading(): number;
		getTracking(): boolean;
		setTracking(tracking: boolean): void
	}

	declare class DragBoxEvent extends undefined$Event {
		coordinate: ol.Coordinate
	}

	declare class Feature extends ol$Object {
		constructor(geometryOrProperties?: ol.geom.Geometry | any): this;
		clone(): Feature;
		getGeometry(): ol.geom.Geometry;
		getGeometryName(): string;
		getId(): string | number;
		getStyle(): ol.style.Style | Array<ol.style.Style> | ol.FeatureStyleFunction;
		getStyleFunction(): ol.FeatureStyleFunction;
		setGeometry(geometry: ol.geom.Geometry): void;
		setGeometryName(name: string): void;
		setId(id: string | number): void;
		setStyle(style: ol.style.Style): void;
		setStyle(style: Array<ol.style.Style>): void;
		setStyle(style: ol.FeatureStyleFunction): void
	}

	declare class FeatureOverlay  {
		constructor(options?: olx.FeatureOverlayOptions): this;
		addFeature(feature: ol.Feature): void;
		getFeatures: ol.Collection<ol.Feature>;
		getMap(): ol.Map;
		getStyle(): ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;
		getStyleFunction(): ol.style.StyleFunction;
		removeFeature(feature: ol.Feature): void;
		setFeatures(features: ol.Collection<ol.Feature>): void;
		setMap(map: ol.Map): void;
		setStyle(style: ol.style.Style): void;
		setStyle(style: Array<ol.style.Style>): void;
		setStyle(style: ol.style.StyleFunction): void
	}

	declare class Geolocation extends ol$Object {
		constructor(options?: olx.GeolocationOptions): this;
		getAccuracy(): number;
		getAccuracyGeometry(): ol.geom.Geometry;
		getAltitude(): number;
		getAltitudeAccuracy(): number;
		getHeading(): number;
		getPosition(): ol.Coordinate;
		getProjection(): ol.proj.Projection;
		getSpeed(): number;
		getTracking(): boolean;
		getTrackingOptions(): PositionOptions;
		setProjection(projection: ol.proj.Projection): void;
		setTracking(tracking: boolean): void;
		setTrackingOptions(options: PositionOptions): void
	}

	declare class Graticule  {
		constructor(options?: olx.GraticuleOptions): this;
		getMap(): Map;
		getMeridians(): Array<ol.geom.LineString>;
		getParallels(): Array<ol.geom.LineString>;
		setMap(map: Map): void
	}

	declare class Image extends ol$ImageBase {
		getImage(context: HTMLCanvasElement): Image;
		getImage(context: HTMLImageElement): Image;
		getImage(context: HTMLVideoElement): Image
	}

	declare class ImageBase  {
		
	}

	declare class ImageTile extends ol$Tile {
		getImage(context: HTMLCanvasElement): Image;
		getImage(context: HTMLImageElement): Image;
		getImage(context: HTMLVideoElement): Image
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
		forEachFeatureAtPixel(
		pixel: ol.Pixel, callback: (feature: ol.Feature, layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any
	): void;
		forEachLayerAtPixel(
		pixel: ol.Pixel, callback: (layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any
	): void;
		getControls(): ol.Collection<ol.control.Control>;
		getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;
		getEventCoordinate(event: Event): ol.Coordinate;
		getEventPixel(event: Event): ol.Pixel;
		getInteractions(): ol.Collection<ol.interaction.Interaction>;
		getLayerGroup(): ol.layer.Group;
		getLayers(): ol.Collection<ol.layer.Base>;
		getOverlays(): ol.Collection<ol.Overlay>;
		getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;
		getSize(): ol.Size;
		getTarget(): Element | string;
		getTargetElement(): Element;
		getView(): View;
		getViewport(): Element;
		hasFeatureAtPixel(
		pixel: ol.Pixel, layerFilter?: (layer: ol.layer.Layer) => boolean, ref?: any
	): boolean;
		removeControl(control: ol.control.Control): ol.control.Control;
		removeInteraction(interaction: ol.interaction.Interaction): ol.interaction.Interaction;
		removeLayer(layer: ol.layer.Base): ol.layer.Base;
		removeOverlay(overlay: ol.Overlay): ol.Overlay;
		render(): void;
		renderSync(): void;
		setLayerGroup(layerGroup: ol.layer.Group): void;
		setSize(size: ol.Size): void;
		setTarget(target: Element): void;
		setTarget(target: string): void;
		setView(view: View): void;
		updateSize(): void
	}

	declare class MapBrowserEvent extends MapEvent {
		coordinate: Coordinate;
		dragging: boolean;
		frameState: olx.FrameState;
		map: Map;
		originalEvent: Event;
		pixel: Pixel;
		preventDefault(): void;
		stopPropagation(): void
	}

	declare class MapEvent extends undefined$Event {
		frameState: olx.FrameState;
		map: Map
	}

	declare class Object extends Observable {
		constructor(values?: Object): this;
		get(key: string): any;
		getKeys(): Array<string>;
		getProperties(): Object;
		getRevision(): number;
		set(key: string, value: any): void;
		setProperties(values: Object): void;
		unset(key: string): void
	}

	declare class ObjectEvent extends undefined$Event {
		key: string;
		oldValue: any
	}

	declare class Observable  {
		unByKey(key: any): void;
		changed(): void;
		getRevision(): number;
		on(type: string, listener: (event: ol.events.Event) => void, ref?: any): any;
		on(
		type: Array<string>, listener: (event: ol.events.Event) => void, ref?: any
	): any;
		once(type: string, listener: (event: ol.events.Event) => void, ref?: any): any;
		once(
		type: Array<string>, listener: (event: ol.events.Event) => void, ref?: any
	): any;
		un(
		type: Array<string>, listener: (event: ol.events.Event) => void, ref?: any
	): any;
		unByKey(key: any): void
	}

	declare class Overlay extends ol$Object {
		constructor(options: olx.OverlayOptions): this;
		getElement(): Element;
		getMap(): ol.Map;
		getOffset(): Array<number>;
		getPosition(): ol.Coordinate;
		getPositioning(): ol.OverlayPositioning;
		setElement(element: Element): void;
		setMap(map: Map): void;
		setOffset(offset: Array<number>): void;
		setPosition(position: ol.Coordinate): void;
		setPositioning(positioning: ol.OverlayPositioning): void
	}

	declare class SelectEvent extends undefined$Event {
		deselected: Array<ol.Feature>;
		mapBrowserEvent: ol.MapBrowserEvent;
		selected: Array<ol.Feature>
	}

	declare class Sphere  {
		constructor(radius: number): this;
		geodesicArea(coordinates: Array<ol.Coordinate>): number;
		haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number
	}

	declare class Tile  {
		getTileCoord(): ol.TileCoord
	}

	declare class View extends ol$Object {
		constructor(options?: olx.ViewOptions): this;
		calculateExtent(size: ol.Size): ol.Extent;
		centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;
		constrainCenter(center: ol.Coordinate): ol.Coordinate;
		constrainResolution(resolution: number, delta?: number, direction?: number): number;
		fit(
		geometry: ol.geom.SimpleGeometry | ol.Extent, size: ol.Size, opt_options?: olx.view.FitGeometryOptions
	): void;
		getCenter(): ol.Coordinate;
		getProjection(): ol.proj.Projection;
		getResolution(): number;
		getRotation(): number;
		getZoom(): number;
		rotate(rotation: number, anchor: ol.Coordinate): void;
		setCenter(center: ol.Coordinate): void;
		setResolution(resolution: number): void;
		setRotation(rotation: number): void;
		setZoom(zoom: number): void
	}

	
}

declare module 'color' {
			declare function asArray(color: ol.Color): ol.Color

	declare function asArray(color: string): ol.Color

	declare function asString(color: ol.Color): string

	declare function asString(color: string): string

		
}

declare module 'ScaleLine' {
	declare type Units = "degrees" | "imperial" | "nautical" | "metric" | "us";

				
}

declare module 'coordinate' {
			declare function add(coordinate: ol.Coordinate, delta: ol.Coordinate): ol.Coordinate

	declare function createStringXY(fractionDigits?: number): ol.CoordinateFormatType

	declare function format(coordinate: ol.Coordinate, template: string, fractionDigits?: number): string

	declare function rotate(coordinate: ol.Coordinate, angle: number): ol.Coordinate

	declare function toStringHDMS(coordinate?: ol.Coordinate): string

	declare function toStringXY(coordinate?: ol.Coordinate, fractionDigits?: number): string

		
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

	declare function altShiftKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function always(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function click(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function doubleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function mouseOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function never(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function noModifierKeys(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function platformModifierKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function pointerMove(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function shiftKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function singleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean

	declare function targetNotEditable(mapBrowserEvent: ol.MapBrowserEvent): boolean

		
}

declare module 'events' {
		declare interface ConditionType {
		(mapBrowseEvent: ol.MapBrowserEvent): boolean
	}

		declare class Event  {
		target: any;
		type: string;
		preventDefault(): void;
		stopPropagation(): void
	}

	
}

declare module 'extent' {
			declare function applyTransform(
		extent: ol.Extent, transformFn: ol.TransformFunction, destinationExtent?: ol.Extent
	): ol.Extent

	declare function boundingExtent(coordinates: Array<ol.Coordinate>): ol.Extent

	declare function buffer(extent: ol.Extent, value: number, destinationExtent?: ol.Extent): ol.Extent

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

	declare function getIntersection(extent1: ol.Extent, extent2: ol.Extent, extent?: ol.Extent): ol.Extent

	declare function getSize(extent: ol.Extent): ol.Size

	declare function getTopLeft(extent: ol.Extent): ol.Coordinate

	declare function getTopRight(extent: ol.Extent): ol.Coordinate

	declare function getWidth(extent: ol.Extent): number

	declare function intersects(extent1: ol.Extent, extent2: ol.Extent): boolean

	declare function isEmpty(extent: ol.Extent): boolean

		
}

declare module 'featureloader' {
			declare function xhr(url: string, format: ol.format.Feature): ol.FeatureLoader

		
}

declare module 'geom' {
		declare interface GeometryLayout {
		
	}

	declare interface GeometryType {
		
	}

		declare class Circle extends undefined$SimpleGeometry {
		intersectsExtent(extent: ol.Extent): boolean;
		transform(
		source: ol.proj.ProjectionLike, destination: ol.proj.ProjectionLike
	): ol.geom.Circle
	}

	declare class Geometry extends ol$Object {
		getClosestPoint(point: ol.Coordinate, closestPoint?: ol.Coordinate): ol.Coordinate;
		getExtent(extent?: ol.Extent): ol.Extent;
		transform(
		source: ol.proj.ProjectionLike | ol.proj.Projection, destination: ol.proj.ProjectionLike | ol.proj.Projection
	): ol.geom.Geometry
	}

	declare class GeometryCollection extends undefined$Geometry {
		constructor(geometries?: Array<ol.geom.Geometry>): this;
		applyTransform(transformFn: ol.TransformFunction): void;
		clone(): ol.geom.GeometryCollection;
		getGeometries(): Array<Geometry>;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setGeometries(geometries: Array<ol.geom.Geometry>): void
	}

	declare class LinearRing extends SimpleGeometry {
		constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): this;
		clone(): ol.geom.LinearRing;
		getArea(): number;
		getCoordinates(): Array<ol.Coordinate>;
		getType(): ol.geom.GeometryType;
		setCoordinates(coordinates: Array<ol.Coordinate>, layout?: any): void
	}

	declare class LineString extends undefined$SimpleGeometry {
		constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): this;
		appendCoordinate(coordinate: ol.Coordinate): void;
		clone(): ol.geom.LineString;
		getCoordinateAtM(m: number, extrapolate?: boolean): ol.Coordinate;
		getCoordinates(): Array<ol.Coordinate>;
		getLength(): number;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): void
	}

	declare class MultiLineString extends undefined$SimpleGeometry {
		constructor(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout): this;
		appendLineString(lineString: ol.geom.LineString): void;
		clone(): ol.geom.MultiLineString;
		getCoordinateAtM(m: number, extrapolate?: boolean, interpolate?: boolean): ol.Coordinate;
		getCoordinates(): Array<Array<ol.Coordinate>>;
		getLineString(index: number): ol.geom.LineString;
		getLineStrings(): Array<ol.geom.LineString>;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(
		coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout
	): void
	}

	declare class MultiPoint extends undefined$SimpleGeometry {
		constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): this;
		appendPoint(point: ol.geom.Point): void;
		clone(): ol.geom.MultiPoint;
		getCoordinates(): Array<ol.Coordinate>;
		getPoint(index: number): ol.geom.Point;
		getPoints(): Array<ol.geom.Point>;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): void
	}

	declare class MultiPolygon extends undefined$SimpleGeometry {
		constructor(coordinates: Array<Array<Array<ol.Coordinate>>>, layout?: ol.geom.GeometryLayout): this;
		appendPolygon(polygon: ol.geom.Polygon): void;
		clone(): ol.geom.MultiPolygon;
		getArea(): number;
		getCoordinates(right?: boolean): Array<Array<Array<ol.Coordinate>>>;
		getInteriorPoints(): ol.geom.MultiPoint;
		getPolygon(index: number): ol.geom.Polygon;
		getPolygons(): Array<ol.geom.Polygon>;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(
		coordinates: Array<Array<Array<ol.Coordinate>>>, layout?: ol.geom.GeometryLayout
	): void
	}

	declare class Point extends SimpleGeometry {
		constructor(coordinates: ol.Coordinate, layout?: ol.geom.GeometryLayout): this;
		clone(): ol.geom.Point;
		getCoordinates(): ol.Coordinate;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(coordinates: ol.Coordinate, layout?: ol.geom.GeometryLayout): void
	}

	declare class Polygon extends SimpleGeometry {
		constructor(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout): this;
		circular(
		sphere: ol.Sphere, center: ol.Coordinate, radius: number, n?: number
	): ol.geom.Polygon;
		appendLinearRing(linearRing: ol.geom.LinearRing): void;
		clone(): ol.geom.Polygon;
		getArea(): number;
		getCoordinates(right?: boolean): Array<Array<ol.Coordinate>>;
		getInteriorPoint(): ol.geom.Point;
		getLinearRing(index: number): ol.geom.LinearRing;
		getLinearRings(): Array<ol.geom.LinearRing>;
		getType(): ol.geom.GeometryType;
		intersectsExtent(extent: ol.Extent): boolean;
		setCoordinates(
		coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout
	): void
	}

	declare class SimpleGeometry extends undefined$Geometry {
		applyTransform(transformFn: ol.TransformFunction): void;
		getFirstCoordinate(): ol.Coordinate;
		getLastCoordinate(): ol.Coordinate;
		getLayout(): ol.geom.GeometryLayout;
		translate(deltaX: number, deltaY: number): void
	}

	
}

declare module 'loadingstrategy' {
			declare function all(extent: ol.Extent, resolution: number): Array<ol.Extent>

	declare function bbox(extent: ol.Extent, resolution: number): Array<ol.Extent>

	declare function tile(tileGrid: ol.tilegrid.TileGrid): ol.LoadingStrategy

		
}

declare module 'proj' {
		declare interface ProjectionLike {
		
	}

	declare interface Units {
		
	}

	declare function addCoordinateTransforms(
		source: ProjectionLike, destination: ProjectionLike, forward: (coordinate: Coordinate) => Coordinate, inverse: (coordinate: Coordinate) => Coordinate
	): void

	declare function addEquivalentProjections(projections: Array<Projection>): void

	declare function addProjection(projection: Projection): void

	declare function fromLonLat(coordinate: Coordinate, opt_projection: ProjectionLike): Coordinate

	declare function get(projectionLike: ProjectionLike): Projection

	declare function getTransform(source: ProjectionLike, destination: ProjectionLike): ol.TransformFunction

	declare function toLonLat(coordinate: Coordinate, projection: ProjectionLike): Coordinate

	declare function transform(
		coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike
	): Coordinate

	declare function transformExtent(extent: Extent, source: ProjectionLike, destination: ProjectionLike): Extent

	declare class Projection  {
		constructor(options: olx.Projection): this;
		getExtent(): Extent;
		setExtent(extent: Extent): void
	}

	
}

declare module 'render' {
				declare class Event extends undefined$Event {
		
	}

	declare class VectorContext  {
		
	}

	declare class Feature  {
		get(key: string): any;
		getExtent(): ol.Extent;
		getGeometry(): ol.geom.Geometry;
		getProperties: Object[];
		getType(): ol.geom.GeometryType
	}

	
}

declare module 'canvas' {
				declare class Immediate  {
		
	}

	
}

declare module 'wms' {
		declare interface ServerType {
		
	}

			
}

declare module 'webgl' {
				declare class Context  {
		constructor(canvas: HTMLCanvasElement, gl: WebGLRenderingContext): this;
		getGL(): WebGLRenderingContext;
		getHitDetectionFramebuffer(): WebGLFramebuffer;
		useProgram(program: WebGLProgram): boolean
	}

	
}

declare module 'openlayers' {
					declare module.exports: undefined


}