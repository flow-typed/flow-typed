

declare module 'google-earth' {
					
}

declare module 'npm$namespace$google' {
			declare export function load(moduleName: string, moduleVersion: string, optionalSettings?: any): void

		
}

declare module 'earth' {
	declare export type GEEventPhaseEnum = any;

	declare export type KmlListItemTypeEnum = any;

	declare export type KmlColorModeEnum = any;

	declare export type KmlAltitudeModeEnum = any;

	declare export type KmlRefreshModeEnum = any;

	declare export type KmlViewRefreshModeEnum = any;

	declare type KmlUnitsEnum = any;

	declare type GEMapTypeEnum = any;

	declare type GEVisibilityEnum = any;

	declare type GEHitTestModeEnum = any;

	declare type GENavigationControlEnum = any;

	declare type GEViewerOptionsValueEnum = any;

	declare type GEViewerOptionsTypeEnum = any;

		declare export function isSupported(): boolean

	declare export function isInstalled(): boolean

	declare export function createInstance(
		domNode: string | Element, initCallback: (plugin: GEPlugin) => void, failureCallback: (error: any) => void, options?: any
	): void

	declare export function addEventListener(
		targetObject: any, eventID: string, listenerCallback: (event: KmlEvent) => void, useCapture?: boolean
	): void

	declare export function removeEventListener(
		targetObject: any, eventID: string, listenerCallback: (event: KmlEvent) => void, useCapture?: boolean
	): void

	declare export function fetchKml(
		pluginInstance: GEPlugin, url: string, completionCallback: (feature: KmlFeature) => void
	): void

	declare export function executeBatch(pluginInstance: GEPlugin, batchFunction: Function): void

	declare export function setLanguage(languageCode: string): void

	declare export class GEPhotoOverlayViewer  {
		setPhotoOverlay(photoOverlay: KmlPhotoOverlay): void
	}

	declare export class GENavigationControl  {
		getVisibility(): GEVisibilityEnum;
		setVisibility(visibility: GEVisibilityEnum): void;
		getControlType(): GENavigationControlEnum;
		setControlType(controlType: GENavigationControlEnum): void;
		getScreenXY(): KmlVec2;
		setStreetViewEnabled(streetViewEnabled: boolean): void;
		getStreetViewEnabled(): boolean
	}

	declare export class KmlTour extends KmlFeature {
		
	}

	declare export class GETourPlayer  {
		setTour(tour: KmlTour): void;
		play(): void;
		pause(): void;
		reset(): void;
		getCurrentTime(): number;
		setCurrentTime(currentTime: number): void;
		getDuration(): number
	}

	declare export class GEHitTestResult  {
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void
	}

	declare export class KmlStyleMap extends KmlStyleSelector {
		setUrl(normalStyleUrl: string, highlightStyleUrl: string): void;
		setStyle(normalStyle: KmlStyle, highlightStyle: KmlStyle): void;
		getNormalStyleUrl(): string;
		setNormalStyleUrl(normalStyleUrl: string): void;
		getHighlightStyleUrl(): string;
		setHighlightStyleUrl(highlightStyleUrl: string): void;
		getNormalStyle(): KmlStyle;
		setNormalStyle(normalStyle: KmlStyle): void;
		getHighlightStyle(): KmlStyle;
		setHighlightStyle(highlightStyle: KmlStyle): void
	}

	declare export class KmlNetworkLink extends KmlFeature {
		set(link: KmlLink, refreshVisibility: boolean, flyToView: boolean): void;
		getLink(): KmlLink;
		setLink(link: KmlLink): void;
		getRefreshVisibility(): boolean;
		setRefreshVisibility(refreshVisibility: boolean): void;
		getFlyToView(): boolean;
		setFlyToView(flyToView: boolean): void
	}

	declare export class KmlScreenOverlay extends KmlOverlay {
		getScreenXY(): KmlVec2;
		getOverlayXY(): KmlVec2;
		getRotationXY(): KmlVec2;
		getSize(): KmlVec2;
		getRotation(): number;
		setRotation(rotation: number): void
	}

	declare export class KmlPhotoOverlay extends KmlOverlay {
		
	}

	declare export class KmlGroundOverlay extends KmlOverlay {
		getAltitude(): number;
		setAltitude(altitude: number): void;
		getAltitudeMode(): KmlAltitudeModeEnum;
		setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void;
		getLatLonBox(): KmlLatLonBox;
		setLatLonBox(latLonBox: KmlLatLonBox): void
	}

	declare export class KmlOverlay extends KmlFeature {
		getColor(): KmlColor;
		getDrawOrder(): number;
		setDrawOrder(drawOrder: number): void;
		getIcon(): KmlIcon;
		setIcon(icon: KmlIcon): void
	}

	declare export class KmlViewerOptions extends KmlObject {
		setOption(type: GEViewerOptionsTypeEnum, state: GEViewerOptionsValueEnum): void;
		getOption(type: GEViewerOptionsValueEnum): GEViewerOptionsValueEnum
	}

	declare export class KmlOrientation extends KmlObject {
		set(heading: number, tilt: number, roll: number): void;
		getHeading(): number;
		setHeading(heading: number): void;
		getTilt(): number;
		setTilt(tilt: number): void;
		getRoll(): number;
		setRoll(roll: number): void
	}

	declare export class KmlLocation extends KmlObject {
		setLatLngAlt(lat: number, lng: number, alt: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void
	}

	declare export class KmlScale extends KmlObject {
		set(x: number, y: number, z: number): void;
		getX(): number;
		setX(x: number): void;
		getY(): number;
		setY(y: number): void;
		getZ(): number;
		setZ(z: number): void
	}

	declare export class KmlCoord  {
		setLatLngAlt(latitude: number, longitude: number, altitude: number): void;
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void
	}

	declare export class KmlCoordArray  {
		get(index: number): KmlCoord;
		set(index: number, coord: KmlCoord): void;
		setLatLngAlt(index: number, latitude: number, longitude: number, altitude: number): void;
		pushLatLngAlt(latitude: number, longitude: number, altitude: number): void;
		push(coordOrList: KmlCoord): void;
		pop(): KmlCoord;
		unshift(coordOrList: KmlCoord): number;
		unshiftLatLngAlt(latitude: number, longitude: number, altitude: number): void;
		shift(): KmlCoord;
		reverse(): void;
		clear(): void;
		getLength(): number
	}

	declare export class GEWindow extends GEEventEmitter {
		focus(): void;
		blur(): void;
		getVisibility(): boolean;
		setVisibility(visibility: boolean): void
	}

	declare export class GEGlobe extends KmlObject {
		getGroundAltitude(lat: number, lon: number): number;
		getFeatures(): GEFeatureContainer
	}

	declare export class GEView  {
		project(
		lat: number, lng: number, alt: number, altitudeMode: KmlAltitudeModeEnum
	): KmlVec2;
		setAbstractView(view: KmlAbstractView): void;
		copyAsLookAt(altitudeMode: KmlAltitudeModeEnum): KmlLookAt;
		copyAsCamera(altitudeMode: KmlAltitudeModeEnum): KmlCamera;
		getViewportGlobeBounds(): KmlLatLonBox;
		hitTest(
		x: number, xUnits: KmlUnitsEnum, y: number, yUnits: KmlUnitsEnum, mode: GEHitTestModeEnum
	): GEHitTestResult
	}

	declare export class KmlIcon extends KmlLink {
		getX(): number;
		setX(x: number): number;
		getY(): number;
		setY(y: number): void;
		getW(): number;
		setW(w: number): void;
		getH(): number;
		setH(h: number): void
	}

	declare export class KmlLink extends KmlObject {
		getHref(): string;
		setHref(href: string): void;
		getRefreshMode(): KmlRefreshModeEnum;
		setRefreshMode(refreshMode: KmlRefreshModeEnum): void;
		getRefreshInterval(): number;
		setRefreshInterval(refreshInterval: number): void;
		getViewRefreshMode(): KmlViewRefreshModeEnum;
		setViewRefreshMode(viewRefreshMode: KmlViewRefreshModeEnum): void;
		getViewRefreshTime(): number;
		setViewRefreshTime(viewRefreshTime: number): void;
		getViewBoundScale(): number;
		setViewBoundScale(viewBoundScale: number): void;
		getViewFormat(): string;
		setViewFormat(viewFormat: string): void
	}

	declare export class GETime  {
		setRate(rate: number): void;
		getRate(): number;
		getSystemTime(): KmlTimeStamp;
		getControl(): GETimeControl;
		getHistoricalImageryEnabled(): boolean;
		setHistoricalImageryEnabled(historicalImageryEnabled: boolean): void;
		getTimePrimitive(): KmlTimePrimitive;
		setTimePrimitive(timePrimitive: KmlTimePrimitive): void
	}

	declare export class GEOptions  {
		setMapType(type: GEMapTypeEnum): void;
		getScrollWheelZoomSpeed(): number;
		setScrollWheelZoomSpeed(scrollWheelZoomSpeed: number): void;
		getFlyToSpeed(): number;
		setFlyToSpeed(flyToSpeed: number): void;
		getStatusBarVisibility(): boolean;
		setStatusBarVisibility(statusBarVisibility: boolean): void;
		getGridVisibility(): boolean;
		setGridVisibility(gridVisibility: boolean): void;
		getOverviewMapVisibility(): boolean;
		setOverviewMapVisibility(overviewMapVisibility: boolean): void;
		getScaleLegendVisibility(): boolean;
		setScaleLegendVisibility(scaleLegendVisibility: boolean): void;
		getAtmosphereVisibility(): boolean;
		setAtmosphereVisibility(atmosphereVisibility: boolean): void;
		getMouseNavigationEnabled(): boolean;
		setMouseNavigationEnabled(mouseNavigationEnabled: boolean): void;
		getFadeInOutEnabled(): boolean;
		setFadeInOutEnabled(fadeInOutEnabled: boolean): void;
		getUnitsFeetMiles(): boolean;
		setUnitsFeetMiles(unitsFeetMiles: boolean): void;
		setBuildingSelectionEnabled(buildingSelectionEnabled: boolean): void;
		getBuildingSelectionEnabled(): boolean;
		getBuildingHighlightingEnabled(): boolean;
		setBuildingHighlightingEnabled(buildingHighlightingEnabled: boolean): void;
		getTerrainExaggeration(): number;
		setTerrainExaggeration(terrainExaggeration: number): void;
		setAutoGroundLevelViewEnabled(autoGroundLevelViewEnabled: boolean): void;
		getAutoGroundLevelViewEnabled(): boolean
	}

	declare export class GESchemaObjectContainer<T>  {
		appendChild(object: T): void;
		removeChild(oldChild: T): void;
		insertBefore(newChild: T, refChild: T): void;
		replaceChild(newChild: T, oldChild: T): void;
		hasChildNodes(): boolean;
		getFirstChild(): T;
		getLastChild(): T;
		getChildNodes(): KmlObjectList<T>
	}

	declare export class GEFeatureContainer extends GESchemaObjectContainer<KmlFeature> {
		
	}

	declare export class GEGeometryContainer extends GESchemaObjectContainer<KmlGeometry> {
		
	}

	declare export class GELinearRingContainer extends GESchemaObjectContainer<KmlLinearRing> {
		
	}

	declare export class GEStyleSelectorContainer extends GESchemaObjectContainer<KmlStyleSelector> {
		
	}

	declare export class KmlVec2  {
		set(x: number, xUnits: KmlUnitsEnum, y: number, yUnits: KmlUnitsEnum): void;
		getX(): number;
		setX(x: number): void;
		getY(): number;
		setY(y: number): void;
		getXUnits(): KmlUnitsEnum;
		setXUnits(xUnits: KmlUnitsEnum): void;
		getYUnits(): KmlUnitsEnum;
		setYUnits(xUnits: KmlUnitsEnum): void
	}

	declare export class GESun  {
		getVisibility(): boolean;
		setVisibility(visibility: boolean): void
	}

	declare export class KmlColor  {
		set(color: string): void;
		get(): string;
		getR(): number;
		setR(r: number): void;
		getG(): number;
		setG(g: number): void;
		getB(): number;
		setB(b: number): void;
		getA(): number;
		setA(a: number): void
	}

	declare export class KmlEvent  {
		preventDefault(): void;
		stopPropagation(): void;
		getTarget(): GEEventEmitter;
		getCurrentTarget: GEEventEmitter;
		getEventPhase(): GEEventPhaseEnum;
		getBubbles(): boolean;
		getCancelable(): boolean
	}

	declare export class KmlMouseEvent extends KmlEvent {
		getButton(): number;
		getClientX(): number;
		getClientY(): number;
		getScreenX(): number;
		getScreenY(): number;
		getLatitude(): number;
		getLongitude(): number;
		getAltitude(): number;
		getDidHitGlobe(): boolean;
		getAltKey(): boolean;
		getCtrlKey(): boolean;
		getShiftKey(): boolean;
		getRelatedTarget(): GEEventEmitter;
		getTimeStamp(): number
	}

	declare export class GEEventEmitter  {
		click(event: KmlMouseEvent): void;
		dblclick(event: KmlMouseEvent): void;
		mouseover(event: KmlMouseEvent): void;
		mousedown(event: KmlMouseEvent): void;
		mouseup(event: KmlMouseEvent): void;
		mouseout(event: KmlMouseEvent): void;
		mousemove(event: KmlMouseEvent): void
	}

	declare export class KmlObject extends GEEventEmitter {
		getType(): string;
		equals(compareTo: KmlObject): boolean;
		getId(): string;
		getUrl(): string;
		getParentNode(): KmlObject;
		getOwnerDocument(): KmlDocument;
		release(): void
	}

	declare export class KmlObjectList<T>  {
		item(index: number): T;
		getLength(): number
	}

	declare export class KmlStyleSelector extends KmlObject {
		
	}

	declare export class KmlStyle extends KmlStyleSelector {
		getIconStyle(): KmlIconStyle;
		getLabelStyle(): KmlLabelStyle;
		getLineStyle(): KmlLineStyle;
		getListStyle(): KmlListStyle;
		getPolyStyle(): KmlPolyStyle;
		getBalloonStyle(): KmlBalloonStyle
	}

	declare export class KmlColorStyle extends KmlObject {
		getColor(): KmlColor;
		getColorMode(): KmlColorModeEnum;
		setColorMode(colorMode: KmlColorModeEnum): void
	}

	declare export class KmlIconStyle extends KmlColorStyle {
		getScale(): number;
		setScale(scale: number): void;
		getHeading(): number;
		setHeading(heading: number): void;
		getIcon(): KmlIcon;
		setIcon(icon: KmlIcon): void;
		getHotSpot(): KmlVec2
	}

	declare export class KmlLabelStyle extends KmlColorStyle {
		getScale(): number;
		setScale(scale: number): void
	}

	declare export class KmlLineStyle extends KmlColorStyle {
		getWidth(): number;
		setWidth(width: number): void
	}

	declare export class KmlPolyStyle extends KmlColorStyle {
		getFill(): boolean;
		setFill(fill: boolean): void;
		getOutline(): boolean;
		setOutline(outline: boolean): void
	}

	declare export class KmlListStyle extends KmlObject {
		getBgColor(): KmlColor;
		getMaxSnippetLines(): number;
		setMaxSnippetLines(maxSnippetLines: number): void;
		getListItemType(): KmlListItemTypeEnum
	}

	declare export class KmlBalloonStyle extends KmlObject {
		getBgColor(): KmlColor;
		getTextColor(): KmlColor;
		getText(): string;
		setText(text: string): void
	}

	declare export class KmlLatLonBox extends KmlObject {
		setBox(
		north: number, south: number, east: number, west: number, rotation: number
	): void;
		getNorth(): number;
		setNorth(north: number): void;
		getSouth(): number;
		setSouth(south: number): void;
		getEast(): number;
		setEast(east: number): void;
		getWest(): number;
		setWest(west: number): void;
		getRotation(): number;
		setRotation(rotation: number): void
	}

	declare export class KmlLatLonAltBox extends KmlLatLonBox {
		setAltBox(
		north: number, south: number, east: number, west: number, rotation: number, minAltitude: number, maxAltitude: number, altitudeMode: KmlAltitudeModeEnum
	): void;
		getMinAltitude(): number;
		setMinAltitude(minAltitude: number): void;
		getMaxAltitude(): number;
		setMaxAltitude(maxAltitude: number): void;
		getAltitudeMode(): KmlAltitudeModeEnum;
		setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): number
	}

	declare export class KmlLod extends KmlObject {
		set(
		minLodPixels: number, maxLodPixels: number, minFadeExtent: number, maxFadeExtent: number
	): void;
		getMinLodPixels(): number;
		setMinLodPixels(minLodPixels: number): void;
		getMaxLodPixels(): number;
		setMaxLodPixels(maxLogPixels: number): void;
		getMinFadeExtent(): number;
		setMinFadeExtent(minFadeExtent: number): void;
		getMaxFadeExtent(): number;
		setMaxFadeExtent(maxFadeExtent: number): void
	}

	declare export class KmlRegion extends KmlObject {
		set(latLonAltBox: KmlLatLonAltBox, lod: KmlLod): void;
		getLatLonAltBox(): KmlLatLonAltBox;
		setLatLonAltBox(latLonAltBox: KmlLatLonAltBox): void;
		getLod(): KmlLod;
		setLod(lod: KmlLod): void
	}

	declare export class KmlDateTime  {
		set(date: string): void;
		get(): string
	}

	declare export class KmlTimePrimitive extends KmlObject {
		
	}

	declare export class KmlTimeStamp extends KmlTimePrimitive {
		getWhen(): KmlDateTime
	}

	declare export class KmlTimeSpan extends KmlTimePrimitive {
		getBegin(): KmlDateTime;
		getEnd(): KmlDateTime
	}

	declare export class KmlAbstractView extends KmlObject {
		copyAsLookAt(): KmlLookAt;
		copyAsCamera(): KmlCamera;
		getTimePrimitive(): KmlTimePrimitive;
		setTimePrimitive(timePrimitive: KmlTimePrimitive): void;
		getViewerOptions(): KmlViewerOptions;
		setViewerOptions(viewerOptions: KmlViewerOptions): void
	}

	declare export class KmlLookAt extends KmlAbstractView {
		set(
		latitude: number, longitude: number, altitude: number, altitudeMode: KmlAltitudeModeEnum, heading: number, tilt: number, range: number
	): void;
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getRange(): number;
		setRange(range: number): void;
		getTilt(): number;
		setTilt(tilt: number): void;
		getHeading(): number;
		setHeading(heading: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void;
		getAltitudeMode(): KmlAltitudeModeEnum;
		setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void
	}

	declare export class KmlCamera extends KmlAbstractView {
		set(
		latitude: number, longitude: number, altitude: number, altitudeMode: KmlAltitudeModeEnum, heading: number, tilt: number, roll: number
	): void;
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void;
		getHeading(): number;
		setHeading(heading: number): void;
		getTilt(): number;
		setTilt(tilt: number): void;
		getRoll(): number;
		setRoll(roll: number): void;
		getAltitudeMode(): KmlAltitudeModeEnum;
		setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void
	}

	declare export class KmlGeometry extends KmlObject {
		
	}

	declare export class KmlAltitudeGeometry extends KmlGeometry {
		getAltitudeMode(): KmlAltitudeModeEnum;
		setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void
	}

	declare export class KmlModel extends KmlAltitudeGeometry {
		getLocation(): KmlLocation;
		setLocation(location: KmlLocation): void;
		getOrientation(): KmlOrientation;
		setOrientation(orientation: KmlOrientation): void;
		getScale(): KmlScale;
		setScale(scale: KmlScale): void;
		getLink(): KmlLink;
		setLink(link: KmlLink): void
	}

	declare export class KmlMultiGeometry extends KmlGeometry {
		getGeometries(): GEGeometryContainer
	}

	declare export class KmlExtrudableGeometry extends KmlAltitudeGeometry {
		getExtrude(): boolean;
		setExtrude(extrude: boolean): void;
		getTessellate(): boolean;
		setTessellate(tessellate: boolean): void
	}

	declare export class KmlPolygon extends KmlExtrudableGeometry {
		getOuterBoundary(): KmlLinearRing;
		setOuterBoundary(outerBoundary: KmlLinearRing): void;
		getInnerBoundaries(): GELinearRingContainer
	}

	declare export class KmlPoint extends KmlExtrudableGeometry {
		set(
		latitude: number, longitude: number, altitude: number, altitudeMode: KmlAltitudeModeEnum, extrude: boolean, tessellate: boolean
	): void;
		setLatLng(latitude: number, longitude: number): void;
		setLatLngAlt(latitude: number, longitude: number, altitude: number): void;
		getLatitude(): number;
		setLatitude(latitude: number): void;
		getLongitude(): number;
		setLongitude(longitude: number): void;
		getAltitude(): number;
		setAltitude(altitude: number): void
	}

	declare export class KmlLineString extends KmlExtrudableGeometry {
		getCoordinates(): KmlCoordArray;
		setAltitudeOffset(altitudeOffset: number): void;
		getAltitudeOffset(): number
	}

	declare export class KmlLinearRing extends KmlLineString {
		
	}

	declare export class KmlFeature extends KmlObject {
		getBalloonHtml(): string;
		getBalloonHtmlUnsafe(): string;
		getName(): string;
		setName(name: string): void;
		getVisibility(): boolean;
		setVisibility(visibility: boolean): void;
		getOpen(): boolean;
		setOpen(open: boolean): void;
		getAddress(): string;
		setAddress(address: string): void;
		getSnippet(): string;
		setSnippet(snippet: string): void;
		getDescription(): string;
		setDescription(description: string): void;
		getAbstractView(): KmlAbstractView;
		setAbstractView(abstractView: KmlAbstractView): void;
		getStyleUrl(): string;
		setStyleUrl(styleUrl: string): void;
		getStyleSelector(): KmlStyleSelector;
		setStyleSelector(styleSelector: KmlStyleSelector): void;
		getRegion(): KmlRegion;
		setRegion(region: KmlRegion): void;
		getKml(): string;
		getPreviousSibling(): KmlFeature;
		getNextSibling(): KmlFeature;
		getTimePrimitive(): KmlTimePrimitive;
		setTimePrimitive(timePrimitive: KmlTimePrimitive): void;
		getComputedStyle(): KmlStyle;
		getOpacity(): number;
		setOpacity(opacity: number): void
	}

	declare export class KmlContainer extends KmlFeature {
		getElementById(id: string): KmlObject;
		getElementByUrl(url: string): KmlObject;
		getElementsByType(type: string): KmlObjectList<KmlObject>;
		getFeatures(): GEFeatureContainer
	}

	declare export class KmlFolder extends KmlContainer {
		
	}

	declare export class KmlLayer extends KmlFolder {
		
	}

	declare export class KmlLayerRoot extends KmlFolder {
		getLayerById(id: string): KmlLayer;
		enableLayerById(id: string, visibility: boolean): void;
		getDrawOrder(): number;
		setDrawOrder(drawOrder: number): void
	}

	declare export class KmlDocument extends KmlContainer {
		getElementsByStyleUrl(styleUrl: string): KmlObjectList<KmlObject>;
		getStyleSelectors(): GEStyleSelectorContainer
	}

	declare export class KmlPlacemark extends KmlFeature {
		getGeometry(): KmlGeometry;
		setGeometry(geometry: KmlGeometry): void
	}

	declare export class GEAbstractBalloon  {
		getId(): string;
		setId(id: string): void;
		getFeature(): KmlFeature;
		setFeature(feature: KmlFeature): void;
		getMinWidth(): number;
		setMinWidth(minWidth: number): void;
		getMinHeight(): number;
		setMinHeight(minHeight: number): void;
		getMaxWidth(): number;
		setMaxWidth(maxWidth: number): void;
		getMaxHeight(): number;
		setMaxHeight(maxHeight: number): void;
		getCloseButtonEnabled(): boolean;
		setCloseButtonEnabled(closeButtonEnabled: boolean): void
	}

	declare export class GEFeatureBalloon extends GEAbstractBalloon {
		
	}

	declare export class GEHtmlBalloon extends GEAbstractBalloon {
		getForegroundColor(): string;
		setForegroundColor(foregroundColor: string): void;
		getBackgroundColor(): string;
		setBackgroundColor(backgroundColor: string): void
	}

	declare export class GEHtmlDivBalloon extends GEHtmlBalloon {
		getContentDiv(): HTMLDivElement;
		setContentDiv(contentDiv: HTMLElement): void
	}

	declare export class GEHtmlStringBalloon extends GEHtmlBalloon {
		getContentString(): string;
		setContentString(contentString: string): void
	}

	declare export class GEControl  {
		
	}

	declare export class GETimeControl extends GEControl {
		getVisibility(): GEVisibilityEnum;
		setVisibility(visibility: GEVisibilityEnum): void;
		getCalculatedRate(): number;
		getExtents(): KmlTimeSpan;
		getAvailableImageDates(): KmlObjectList<KmlTimeStamp>
	}

	declare export class GEPlugin  {
		ALTITUDE_CLAMP_TO_GROUND: KmlAltitudeModeEnum;
		ALTITUDE_RELATIVE_TO_GROUND: KmlAltitudeModeEnum;
		ALTITUDE_ABSOLUTE: KmlAltitudeModeEnum;
		ALTITUDE_CLAMP_TO_SEA_FLOOR: KmlAltitudeModeEnum;
		ALTITUDE_RELATIVE_TO_SEA_FLOOR: KmlAltitudeModeEnum;
		REFRESH_ON_CHANGE: KmlRefreshModeEnum;
		REFRESH_ON_INTERVAL: KmlRefreshModeEnum;
		REFRESH_ON_EXPIRE: KmlRefreshModeEnum;
		VIEW_REFRESH_NEVER: KmlViewRefreshModeEnum;
		VIEW_REFRESH_ON_REQUEST: KmlViewRefreshModeEnum;
		VIEW_REFRESH_ON_STOP: KmlViewRefreshModeEnum;
		VIEW_REFRESH_ON_REGION: KmlViewRefreshModeEnum;
		UNITS_FRACTION: KmlUnitsEnum;
		UNITS_PIXELS: KmlUnitsEnum;
		UNITS_INSET_PIXELS: KmlUnitsEnum;
		COLOR_NORMAL: KmlColorModeEnum;
		COLOR_RANDOM: KmlColorModeEnum;
		COLOR_INHERIT: KmlColorModeEnum;
		MAP_TYPE_EARTH: GEMapTypeEnum;
		MAP_TYPE_SKY: GEMapTypeEnum;
		VISIBILITY_HIDE: GEVisibilityEnum;
		VISIBILITY_SHOW: GEVisibilityEnum;
		VISIBILITY_AUTO: GEVisibilityEnum;
		SPEED_TELEPORT: number;
		LAYER_TERRAIN: string;
		LAYER_ROADS: string;
		LAYER_BUILDINGS: string;
		LAYER_BUILDINGS_LOW_RESOLUTION: string;
		LAYER_BORDERS: string;
		LAYER_TREES: string;
		HIT_TEST_GLOBE: GEHitTestModeEnum;
		HIT_TEST_TERRAIN: GEHitTestModeEnum;
		HIT_TEST_BUILDINGS: GEHitTestModeEnum;
		OPTION_STATE_DEFAULT: GEViewerOptionsValueEnum;
		OPTION_STATE_ENABLED: GEViewerOptionsValueEnum;
		OPTION_STATE_DISABLED: GEViewerOptionsValueEnum;
		OPTION_SUNLIGHT: GEViewerOptionsTypeEnum;
		OPTION_HISTORICAL_IMAGERY: GEViewerOptionsTypeEnum;
		OPTION_STREET_VIEW: GEViewerOptionsTypeEnum;
		LIST_ITEM_CHECK: KmlListItemTypeEnum;
		LIST_ITEM_CHECK_OFF_ONLY: KmlListItemTypeEnum;
		LIST_ITEM_CHECK_HIDE_CHILDREN: KmlListItemTypeEnum;
		LIST_ITEM_RADIO_FOLDER: KmlListItemTypeEnum;
		NAVIGATION_CONTROL_LARGE: GENavigationControlEnum;
		NAVIGATION_CONTROL_SMALL: GENavigationControlEnum;
		parseKml(kml: string): KmlObject;
		getElementById(id: string): KmlObject;
		getElementByUrl(url: string): KmlObject;
		getElementsByType(): KmlObjectList<KmlObject>;
		createPlacemark(id: string): KmlPlacemark;
		createPoint(id: string): KmlPoint;
		createLineString(id: string): KmlLineString;
		createFolder(id: string): KmlFolder;
		createLod(id: string): KmlLod;
		createLatLonBox(id: string): KmlLatLonBox;
		createLatLonAltBox(id: string): KmlLatLonAltBox;
		createDocument(id: string): KmlDocument;
		createRegion(id: string): KmlRegion;
		createLocation(id: string): KmlLocation;
		createOrientation(id: string): KmlOrientation;
		createScale(id: string): KmlScale;
		createModel(id: string): KmlModel;
		createStyle(id: string): KmlStyle;
		createLinearRing(id: string): KmlLinearRing;
		createPolygon(id: string): KmlPolygon;
		createIcon(id: string): KmlIcon;
		createLink(id: string): KmlLink;
		createGroundOverlay(id: string): KmlGroundOverlay;
		createNetworkLink(id: string): KmlNetworkLink;
		createScreenOverlay(id: string): KmlScreenOverlay;
		createMultiGeometry(id: string): KmlMultiGeometry;
		createStyleMap(id: string): KmlStyleMap;
		createLookAt(id: string): KmlLookAt;
		createCamera(id: string): KmlCamera;
		createViewerOptions(id: string): KmlViewerOptions;
		createTimeStamp(id: string): KmlTimeStamp;
		createTimeSpan(id: string): KmlTimeSpan;
		createFeatureBalloon(id: string): GEFeatureBalloon;
		createHtmlStringBalloon(id: string): GEHtmlStringBalloon;
		createHtmlDivBalloon(id: string): GEHtmlDivBalloon;
		getBalloon(): GEAbstractBalloon;
		setBalloon(newActiveBalloon: GEAbstractBalloon): void;
		getEarthVersion(): string;
		getPluginVersion(): string;
		getOptions(): GEOptions;
		getTime(): GETime;
		getWindow(): GEWindow;
		getGlobe(): GEGlobe;
		getSun(): GESun;
		getLayerRoot(): KmlLayerRoot;
		getView(): GEView;
		getNavigationControl(): GENavigationControl;
		getFeatures(): GEFeatureContainer;
		getTourPlayer(): GETourPlayer;
		getPhotoOverlayViewer(): GEPhotoOverlayViewer;
		getStreamingPercent(): number
	}

	
}