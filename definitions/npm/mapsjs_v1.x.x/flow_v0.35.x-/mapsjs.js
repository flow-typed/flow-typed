

declare module 'mapsjs' {
		declare interface pointObject {
		x: number,
		y: number
	}

	declare interface envObject {
		minX: number,
		minY: number,
		maxX: number,
		maxY: number
	}

	declare interface extentChangeStatsObj {
		centerX: number,
		centerY: number,
		centerLat: number,
		centerLon: number,
		zoomLevel: number,
		mapScale: number,
		mapScaleProjected: number,
		mapUnitsPerPixel: number,
		extents: envelope
	}

	declare interface repositionStatsObj {
		centerX: number,
		centerY: number,
		zoomLevel: number,
		mapUnitsPerPixel: number
	}

	declare interface beginDigitizeOptions {
		key?: string,
		shapeType: string,
		geometryStyle?: geometryStyle,
		styledGeometry?: styledGeometry,
		nodeTapAndHoldAction?: (setIdx: number, idx: number) => boolean,
		nodeMoveAction?: (x: number, y: number, actionType: string) => any,
		shapeChangeAction?: () => void,
		envelopeEndAction?: (env: envelope) => void,
		circleEndAction?: (circle: geometry.polygon) => void,
		suppressNodeAdd?: boolean,
		leavePath?: boolean
	}

	declare interface styleObj {
		fillColor?: string,
		fillOpacity?: number,
		outlineColor?: string,
		outlineOpacity?: number,
		outlineThicknessPix?: number,
		dashArray?: string
	}

	declare interface mapsjsWidget {
		getMapCenter(): point,
		setMapCenter(center: point): void,
		setMapCenterAnimate(center: point, durationMs?: number, completeAction?: () => void): void,
		setMapCenterToGeolocationAnimate(durationMs?: number, completeAction?: () => void): void,
		offsetMapCenterByPixelDelta(dx: number, dy: number): void,
		offsetMapCenterByPixelDeltaAnimate(dx: number, dy: number, durationMs?: number): void,
		getZoomLevel(): number,
		setZoomLevel(zl: number): void,
		setMinZoomLevel(zl: number): void,
		setMaxZoomLevel(zl: number): void,
		setZoomLevelAnimate(zl: number, durationMs?: number, completeAction?: () => void): void,
		zoomDelta(delta: number): void,
		zoomDeltaAnimate(delta: number, durationMs?: number): void,
		flyTo(
		center: point, zl: number, durationMs?: number, completeAction?: () => void
	): void,
		getMapExtents(): envelope,
		getMapUnitsPerPixel(): number,
		getViewExtentsInPix(): {
		w: number,
		h: number
	},
		getProjectedMapScale(): number,
		getActualMapScale(): number,
		getBestFitZoomLevelByExtents(extentsNew: envelope): number,
		redraw(): void,
		resize(): void,
		pushTileLayer(tl: tile.layer): void,
		popTileLayer(): tile.layer,
		removeTileLayer(tl: tile.layer): void,
		removeAllTileLayers(): void,
		getTileLayerCount(): number,
		getTileLayer(key: string): tile.layer,
		computeMapPointFromPixelLocation(x: number, y: number): point,
		setSuspendMapExtentChangesByGestures(flag: boolean): void,
		setDrawnContentZorderToTop(flag: boolean): void,
		addFixedContentElement(
		element: HTMLElement, mapUnitsX: number, mapUnitsY: number, addAction?: (ele: HTMLElement) => void, dragOptions?: {
		dragEnabled: boolean,
		useElementInsteadOfNewGestureOverlay: boolean,
		downAction?: (downPoint: point) => any,
		moveAction?: (movePoint: point) => void,
		upAction?: (upPoint: point) => void,
		wheelAction?: (delta: number) => void
	}
	): void,
		moveFixedContentElement(element: HTMLElement, mapUnitsX: number, mapUnitsY: number): void,
		removeFixedContentElement(element: HTMLElement): void,
		addPathGeometry(
		styledGeom: styledGeometry, key: string, addAction?: (svg: SVGElement) => void, removeAction?: (svg: SVGElement) => void
	): SVGElement,
		updatePathGeometryStyle(styleNew: geometryStyle, key: string): void,
		removePathGeometry(key?: string): SVGElement,
		beginDigitize(options: beginDigitizeOptions): void,
		endDigitize(): void,
		getDigitizeSnapshot(): geometry,
		pushSetOnDigitizePath(): void,
		popSetFromDigitizePath(): number[],
		deleteNodeOnDigitizePath(setIdx: number, nodeIdx: number): void,
		isDigitizingEnabled(): boolean,
		setExtentChangeCompleteAction(action: (vals: extentChangeStatsObj) => void): void,
		setContentRepositionAction(action: (vals: repositionStatsObj) => void): void,
		setPointerClickAction(action: (pt: point) => void): void,
		setPointerHoverAction(action: (pt: point) => void): void,
		setContentExtentsMarginInPixels(cem: number): void,
		setBackground(b: string): void
	}

	declare interface JQuery {
		rimMap(): JQuery,
		rimMap(
		command: any, param?: any, param2?: any, param3?: any, param4?: any, param5?: any
	): JQuery,
		getMapsjs(): any
	}

	declare export function clusterPoints(
		options: {
		data: {
		
	}[],
		pointKey: string,
		valueFunction?: (row: any) => number,
		radiusFunction: (row: any) => number,
		aggregateFunction?: (srcRow: any, cmpRow: any, aggRow: any) => void,
		mapUnitsPerPixel: number,
		marginPixels?: number
	}
	): {
		
	}[]

	declare export class envelope  {
		constructor(minX: number, minY: number, maxX: number, maxY: number): this;
		getMinX(): number;
		getMinY(): number;
		getMaxX(): number;
		getMaxY(): number;
		clone(): envelope;
		createFromMargins(marginX: number, marginY: number): envelope;
		createFromBleed(bleed: number): envelope;
		getCenter(): point;
		getWidth(): number;
		getHeight(): number;
		getArea(): number;
		toObject(): envObject;
		getUL(): point;
		getUR(): point;
		getLL(): point;
		getLR(): point;
		getAspect(): number;
		equals(env: envelope): boolean;
		toString(): string;
		toGeometry(): geometry;
		contains(pt: point): boolean
	}

	declare export class geometry  {
		constructor(isPath?: boolean, isClosed?: boolean): this;
		factoryPoly(): any;
		clone(): geometry;
		foreachVertex(
		action: (setIdx: number, idx: number, x: number, y: number, s: number[]) => void
	): void;
		getBounds(): envelope;
		getIsPath(): boolean;
		getIsClosed(): boolean;
		getSetCount(): number;
		getSet(idx: number): number[];
		pushSet(s: number[]): void;
		popSet(): number[];
		toSvgPathData(): string;
		addPointToLastSet(pt: point): {
		setIdx: number,
		idx: number
	};
		isValid(): boolean;
		toString(): string;
		toWkt(): string;
		findNearestVertex(
		pt: point
	): {
		setIdx: number,
		ptIdx: number,
		pt: point,
		distance: number
	};
		findNearestSegment(
		pt: point, close?: boolean
	): {
		setIdx: number,
		ptIdx: number,
		pt: point,
		distance: number
	};
		getLabelingPoint(idx?: number): point;
		contains(pt: point): boolean
	}

	declare export class geometryStyle  {
		constructor(options?: styleObj): this;
		getOutlineThicknessPix(): number;
		setOutlineThicknessPix(t: number): void;
		getOutlineColor(): string;
		setOutlineColor(c: string): void;
		getOutlineOpacity(): number;
		setOutlineOpacity(o: number): void;
		getFillColor(): string;
		setFillColor(c: string): void;
		getFillOpacity(): number;
		setFillOpacity(o: number): void;
		getDashArray(): string;
		setDashArray(da: string): void
	}

	declare export class point  {
		constructor(x: number, y: number): this;
		getX(): number;
		getY(): number;
		toProps(): pointObject;
		equals(pt: point): boolean;
		createOffsetBy(dx: number, dy: number): point;
		convertToPoly(side: number, radius: number): geometry.polygon;
		toString(): string;
		clone(): point;
		getBounds(): envelope;
		distanceTo(pt: point): number
	}

	declare export class styledGeometry  {
		constructor(geom: geometry, gStyle?: geometryStyle): this;
		setGeometry(g: geometry): void;
		setGeometryStyle(gs: geometryStyle): void;
		getGeometry(): geometry;
		getGeometryStyle(): geometryStyle;
		getOutlineThicknessPix(): number;
		setOutlineThicknessPix(t: number): void;
		getOutlineColor(): string;
		setOutlineColor(c: string): void;
		getOutlineOpacity(): number;
		setOutlineOpacity(o: number): void;
		getFillColor(): string;
		setFillColor(c: string): void;
		getFillOpacity(): number;
		setFillOpacity(o: number): void;
		getDashArray(): string;
		setDashArray(da: string): void;
		getAnimation(): (pathElement: HTMLElement, loopback: () => void) => void;
		setAnimation(action: (pathElement: HTMLElement, loopback: () => void) => void): void;
		createSvgPathElement(key: string, mapUnitsPerPix: number): HTMLElement;
		renderPathToCanvasContext(ctx: CanvasRenderingContext2D): void
	}

	
}

declare module 'envelope' {
			declare export function createFromMdnXml(xml: string): envelope

	declare export function createFromPoints(pt1: point, pt2: point): envelope

	declare export function createFromCenterAndMargins(
		centerPtX: number, centerPtY: number, marginX: number, marginY: number
	): envelope

	declare export function intersects(env1: envelope, env2: envelope): boolean

	declare export function union(env1: envelope, env2: envelope): envelope

		
}

declare module 'geometry' {
				declare class polyline extends geometry {
		constructor(geom: geometry): this;
		getGeometry(): geometry;
		clone(): polyline;
		getLineCount(): number;
		getLine(idx: number): number[];
		pushLine(s: number[]): void;
		popLine(): number[];
		getProjectedDistance(idx: number): number;
		getActualDistance(idx?: number): number;
		intersects(geom: geometry): boolean
	}

	declare class polygon extends geometry {
		constructor(geom: geometry): this;
		getGeometry(): geometry;
		clone(): polygon;
		getRingCount(): number;
		getRing(idx: number): number[];
		pushRing(s: number[]): void;
		popRing(): number[];
		getProjectedArea(idx: number): number;
		getProjectedPerimeter(idx: number): number;
		getActualArea(idx?: number): number;
		getActualPerimeter(idx?: number): number;
		intersects(geom: geometry): boolean;
		overlaps(poly: polygon): boolean;
		toMultiPolygon(): polygon[]
	}

	
}

declare module 'point' {
			declare export function distance(x1: number, y1: number, x2: number, y2: number): number

	declare export function midpoint(x1: number, y1: number, x2: number, y2: number): point

		
}

declare module 'sphericalMercator' {
			declare export function getEpsg(): number

	declare export function getMinZoomLevel(): number

	declare export function setMinZoomLevel(minZ: number): void

	declare export function getMaxZoomLevel(): number

	declare export function setMaxZoomLevel(maxZ: number): void

	declare export function getTileSizePix(): number

	declare export function getDpi(): number

	declare export function setDpi(dpi: number): void

	declare export function getRadius(): number

	declare export function getCircumference(): number

	declare export function getHalfCircumference(): number

	declare export function getQuadTreeNodeToMapEnvelope(x: number, y: number, z: number): envelope

	declare export function getQuadTreeNodeRangeFromEnvelope(env: envelope, z: number): envelope

	declare export function getProjectionUnitsPerPixel(zoomLevel: number): number

	declare export function getActualShapeScaleTransform(mapPtY: number): number

	declare export function getActualUnitsPerPixel(mapPt: point, zoomLevel: number): number

	declare export function getBestFitZoomLevelByExtents(envelopeMap: envelope, envelopeDevice: envelope): number

	declare export function getQuadKeyFromXYZ(x: number, y: number, z: number): string

	declare export function getXYZFromQuadKey(key: string): {
		x: number,
		y: number,
		z: number
	}

	declare export function projectFromLatLon(lonLat: point): point

	declare export function deprojectToLatLon(mapPt: point): point

		
}

declare module 'wkt' {
			declare export function parsePoint(wkt: string): point

	declare export function parseMultiPoint(wkt: string): geometry

	declare export function parseLineString(wkt: string): geometry

	declare export function parseMultiLineString(wkt: string): geometry

	declare export function parsePolygon(wkt: string): geometry

	declare export function parseMultiPolygon(wkt: string): geometry

	declare export function parse(wkt: string): any

	declare export function toMultiPolygonString(polys: geometry.polygon[]): string

		
}

declare module 'tile' {
				declare export class layer  {
		constructor(id: string, useBackdrop?: boolean, maxConcurrentRequests?: number): this;
		getId(): string;
		getUseBackdrop(): boolean;
		getDescriptor(): any;
		setDescriptor(d: any): void;
		notifyDescriptorChange(): void;
		getRequestor(): tile.requestor;
		setRequestor(req: tile.requestor, desc?: any): void;
		getRenderer(): tile.renderer;
		setRenderer(r: any): void;
		notifyRendererChange(): void;
		getIsVisible(): boolean;
		setIsVisible(v: boolean): void;
		getOpacity(): number;
		setOpacity(o: number): void;
		getMinZoomLevel(): number;
		setMinZoomLevel(minZ: number): void;
		getMaxZoomLevel(): number;
		setMaxZoomLevel(maxZ: number): void;
		setTileBleedPix(bleed: number): void;
		setRetainInterlevelContent(retain: boolean): void;
		setEnableTileFadeIn(fadeIn: boolean): void;
		setNotifyErrorAction(action: () => void): void;
		setNotifyLoadingQueueHasEmptiedAction(action: () => void): void;
		setNotifyLoadingQueueProgressAction(action: (tilesLoaded: number, tilesTotal: number) => void): void;
		setRequestProcessor(
		processorFunc: (
		requestor: tile.requestor, descriptor: any, quad: tile.quad, timeoutMs: number, completeAction: (img: HTMLElement) => void, errorAction: (msg: string) => void
	) => void
	): void;
		preload(extents: envelope, startZoomLevel: number, endZoomLevel: number): void;
		compose(
		extentsMapUnits: envelope, extentsDeviceUnits: envelope
	): {
		quadCollection: tile.quad[],
		endpointCollection: string[],
		idxMinX: number,
		idxMinY: number,
		ulX: number,
		ulY: number
	};
		dispose(): void
	}

	declare export class layerOptions  {
		constructor(id: string, options: {
		useBackdrop?: boolean,
		maxConcurrentRequests?: number,
		requestor?: tile.requestor,
		descriptor?: any,
		renderer?: tile.renderer,
		requestProcessor?: any,
		visible?: boolean,
		opacity?: number,
		minZoomLevel?: number,
		maxZoomLevel?: number,
		tileBleedPix?: number,
		retainInterlevelContent?: boolean,
		enableTileFadeIn?: boolean,
		notifyErrorAction?: (msg?: string) => void,
		notifyLoadingQueueHasEmptiedAction?: () => void
	}): this;
		getTileLayer(): tile.layer;
		getId(): string;
		getOptions(): any
	}

	declare export class quad  {
		getX(): number;
		getY(): number;
		getLevel(): number;
		getEnvelope(): envelope;
		toString(): string;
		getKey(): string;
		equals(q: quad): boolean;
		factoryParent(ancestorsBack: number): quad
	}

	declare export class renderer  {
		constructor(options?: {
		renderPoint?: (pt: point, context: CanvasRenderingContext2D) => void,
		renderGeometry?: (shape: geometry, context: CanvasRenderingContext2D) => void,
		renderBitmap?: (
		img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number
	) => void
	}): this;
		setRenderPoint(func: (pt: point, context: CanvasRenderingContext2D) => void): void;
		setRenderGeometry(func: (shape: geometry, context: CanvasRenderingContext2D) => void): void;
		setRenderBitmap(
		func: (
		img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number
	) => void
	): void
	}

	declare export class rendererDensityMap  {
		constructor(): this;
		setBleed(bleed: number): void;
		setGridSize(gridSize: number): void;
		setFilterStdDevRadius(filterStdDevRadius: number): void;
		setColorMatrix(matrix: number[][]): void;
		setMinCellValue(min: number): void;
		setRowAction(action: (row: any) => number): void;
		notifyRecompute(extents?: envelope): void
	}

	declare export class requestor  {
		constructor(): this;
		getFormattedEndpoint(quad: quad, descriptor: any): string;
		getLocalData(quad: quad, descriptor: any): string;
		hash(descriptor: any): string;
		getIsRestImage(): boolean;
		setIsRestImage(flag: boolean): void;
		getUsesEndpoint(): boolean;
		setUsesEndpoint(flag: boolean): void;
		getDataFormat(): string;
		setDataFormat(df: string): void;
		getCacheEnabled(): boolean;
		setCacheEnabled(flag: boolean): void;
		getTimeoutMs(): number;
		setTimeoutMs(ms: number): void;
		getKeyVals(): {
		
	}[];
		setKeyVals(options: {
		
	}[]): void;
		getMaxAvailableZoomLevel(): number;
		setMaxAvailableZoomLevel(max: number): void
	}

	declare export class requestorBing extends requestor {
		constructor(options?: {
		dataFormat?: string,
		timeoutMs?: number,
		maxAvailableZoomLevel?: number
	}): this;
		getEndpoint(): string;
		getScheme(): string;
		setScheme(s: string): void;
		getGeneration(): string;
		setGeneration(g: string): void;
		getMarket(): string;
		setMarket(m: string): void;
		getBingKey(): string;
		setBingKey(key: string): void
	}

	declare export class requestorMDNRest extends requestor {
		constructor(endpoint: string, options?: {
		dataFormat?: string,
		timeoutMs?: number,
		maxAvailableZoomLevel?: number
	}): this;
		getEndpoint(): string
	}

	declare export class descriptorMDNRestMap  {
		constructor(mapId: string, options?: {
		version?: string,
		imageType?: string,
		bleedRatio?: number,
		mapCacheOption?: string,
		mapCacheName?: string,
		useQuadKeyForMapCacheName?: boolean,
		backgroundColorStr?: string,
		layerVisibility?: {
		
	},
		layerOutline?: {
		
	},
		layerFill?: {
		
	},
		layerWhere?: {
		
	},
		tag?: string
	}): this;
		setSuspendDescriptorChangeNotifications(flag: boolean): void;
		getMapId(): string;
		getVersion(): string;
		setVersion(v: string): void;
		getImageType(): string;
		setImageType(t: string): void;
		getBleedRatio(): number;
		setBleedRatio(br: number): void;
		getMapCacheOption(): string;
		setMapCacheOption(mco: string): void;
		getMapCacheName(): string;
		setMapCacheName(mcn: string): void;
		getUseQuadKeyForMapCacheName(): boolean;
		setUseQuadKeyForMapCacheName(flag: boolean): void;
		getBackgroundColorStr(): string;
		setBackgroundColor(a: number, r: number, g: number, b: number): void;
		getIsBackgroundTransparent(): boolean;
		setLayerVisibility(layerId: string, isVisible: boolean): void;
		getLayerVisibility(layerId: string): boolean;
		setLayerOutline(layerId: string, a: number, r: number, g: number, b: number, thk: number): void;
		getLayerOutline(layerId: string): {
		color: string,
		thickness: number
	};
		setLayerFill(layerId: string, a: number, r: number, g: number, b: number): void;
		setLayerFillAsExpression(layerId: string, exp: string): void;
		getLayerFill(layerId: string): string;
		setLayerWhere(layerId: string, where: string, merge: boolean): void;
		setLayerWhereSep(sep: string): void;
		getLayerWhereSep(): string;
		getLayerWhere(layerId: string): string;
		getTag(): string;
		setTag(tag: string): void
	}

	declare export class descriptorMDNRestFeature  {
		constructor(mapId: string, layerId: string, options?: {
		version?: string,
		bleedRatio?: number,
		fieldNames?: string[],
		clipToRenderBounds?: boolean,
		simplifyEnabled?: boolean
	}): this;
		getMapId(): string;
		getLayerId(): string;
		getVersion(): string;
		setVersion(v: string): void;
		getBleedRatio(): number;
		setBleedRatio(br: number): void;
		getFieldNames(): string[];
		setFieldNames(names: string[]): void;
		getClipToRenderBounds(): boolean;
		setClipToRenderBounds(flag: boolean): void;
		getSimplifyEnabled(): boolean;
		setSimplifyEnabled(flag: boolean): void;
		setNotifyDescriptorChangeAction(action: () => void): void
	}

	declare export class requestorOpen extends requestor {
		constructor(endpoint: string, subdomains: string[], options?: {
		dataFormat?: string,
		timeoutMs?: number,
		maxAvailableZoomLevel?: number
	}): this
	}

	declare export class requestorLocal extends requestor {
		constructor(options?: {
		dataFormat?: string,
		timeoutMs?: number,
		maxAvailableZoomLevel?: number,
		data: {
		
	}[]
	}): this;
		getSource(): {
		
	}[];
		setSource(data: {
		
	}[]): void;
		getParsedData(): {
		Shapes: any[],
		Values: any[],
		Bounds: envelope[]
	}
	}

	declare export class descriptorLocal  {
		constructor(options: {
		valueFieldNames: string[],
		geometryFieldName: string,
		bleedRatio?: number
	}): this
	}

	
}

declare module 'quad' {
			declare export function factoryQuadFromKey(key: string): quad

		
}