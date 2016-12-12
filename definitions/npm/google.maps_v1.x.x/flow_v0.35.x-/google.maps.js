

declare module 'google.maps' {
					
}

declare module 'maps' {
	declare export type LatLngLiteral = {
		lat: number,
		lng: number
	};

	declare export type LatLngBoundsLiteral = {
		east: number,
		north: number,
		south: number,
		west: number
	};

	declare export interface MapOptions {
		backgroundColor?: string,
		center?: LatLng | LatLngLiteral,
		disableDefaultUI?: boolean,
		clickableIcons?: boolean,
		disableDoubleClickZoom?: boolean,
		draggable?: boolean,
		draggableCursor?: string,
		draggingCursor?: string,
		heading?: number,
		keyboardShortcuts?: boolean,
		mapMaker?: boolean,
		mapTypeControl?: boolean,
		mapTypeControlOptions?: MapTypeControlOptions,
		mapTypeId?: MapTypeId,
		maxZoom?: number,
		minZoom?: number,
		noClear?: boolean,
		overviewMapControl?: boolean,
		overviewMapControlOptions?: OverviewMapControlOptions,
		panControl?: boolean,
		panControlOptions?: PanControlOptions,
		rotateControl?: boolean,
		rotateControlOptions?: RotateControlOptions,
		scaleControl?: boolean,
		scaleControlOptions?: ScaleControlOptions,
		scrollwheel?: boolean,
		streetView?: StreetViewPanorama,
		streetViewControl?: boolean,
		streetViewControlOptions?: StreetViewControlOptions,
		styles?: MapTypeStyle[],
		tilt?: number,
		zoom?: number,
		zoomControl?: boolean,
		zoomControlOptions?: ZoomControlOptions
	}

	declare export interface MapTypeControlOptions {
		mapTypeIds?: (MapTypeId | string)[],
		position?: ControlPosition,
		style?: MapTypeControlStyle
	}

	declare export interface OverviewMapControlOptions {
		opened?: boolean
	}

	declare export interface PanControlOptions {
		position?: ControlPosition
	}

	declare export interface RotateControlOptions {
		position?: ControlPosition
	}

	declare export interface ScaleControlOptions {
		style?: ScaleControlStyle
	}

	declare export interface StreetViewControlOptions {
		position?: ControlPosition
	}

	declare export interface ZoomControlOptions {
		position?: ControlPosition,
		style?: ZoomControlStyle
	}

	declare export interface MarkerOptions {
		anchorPoint?: Point,
		animation?: Animation,
		clickable?: boolean,
		cursor?: string,
		draggable?: boolean,
		icon?: string | Icon | Symbol,
		label?: string | MarkerLabel,
		map?: Map | StreetViewPanorama,
		opacity?: number,
		optimized?: boolean,
		place?: Place,
		position: LatLng | LatLngLiteral,
		shape?: MarkerShape,
		title?: string,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface Icon {
		anchor?: Point,
		labelOrigin?: Point,
		origin?: Point,
		scaledSize?: Size,
		size?: Size,
		url?: string
	}

	declare export interface MarkerLabel {
		color?: string,
		fontFamily?: string,
		fontSize?: string,
		fontWeight?: string,
		text?: string
	}

	declare export interface MarkerShape {
		coords?: number[],
		type?: string
	}

	declare export interface Symbol {
		anchor?: Point,
		fillColor?: string,
		fillOpacity?: number,
		path?: SymbolPath | string,
		rotation?: number,
		scale?: number,
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWeight?: number
	}

	declare export interface InfoWindowOptions {
		content?: string | Node,
		disableAutoPan?: boolean,
		maxWidth?: number,
		pixelOffset?: Size,
		position?: LatLng | LatLngLiteral,
		zIndex?: number
	}

	declare export interface PolylineOptions {
		clickable?: boolean,
		draggable?: boolean,
		editable?: boolean,
		geodesic?: boolean,
		icons?: IconSequence[],
		map?: Map,
		path?: MVCArray | LatLng[] | LatLngLiteral[],
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWeight?: number,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface IconSequence {
		fixedRotation?: boolean,
		icon?: Symbol,
		offset?: string,
		repeat?: string
	}

	declare export interface PolygonOptions {
		clickable?: boolean,
		draggable?: boolean,
		editable?: boolean,
		fillColor?: string,
		fillOpacity?: number,
		geodesic?: boolean,
		map?: Map,
		paths?: any[],
		strokeColor?: string,
		strokeOpacity?: number,
		strokePosition?: StrokePosition,
		strokeWeight?: number,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface PolyMouseEvent {
		edge?: number,
		path?: number,
		vertex?: number
	}

	declare export interface RectangleOptions {
		bounds?: LatLngBounds,
		clickable?: boolean,
		draggable?: boolean,
		editable?: boolean,
		fillColor?: string,
		fillOpacity?: number,
		map?: Map,
		strokeColor?: string,
		strokeOpacity?: number,
		strokePosition?: StrokePosition,
		strokeWeight?: number,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface CircleOptions {
		center?: LatLng,
		clickable?: boolean,
		draggable?: boolean,
		editable?: boolean,
		fillColor?: string,
		fillOpacity?: number,
		map?: Map,
		radius?: number,
		strokeColor?: string,
		strokeOpacity?: number,
		strokePosition?: StrokePosition,
		strokeWeight?: number,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface GroundOverlayOptions {
		clickable?: boolean,
		map?: Map,
		opacity?: number
	}

	declare export interface MapPanes {
		floatPane: Element,
		mapPane: Element,
		markerLayer: Element,
		overlayLayer: Element,
		overlayMouseTarget: Element
	}

	declare export interface GeocoderRequest {
		address?: string,
		bounds?: LatLngBounds,
		componentRestrictions?: GeocoderComponentRestrictions,
		location?: LatLng | LatLngLiteral,
		placeId?: string,
		region?: string
	}

	declare export interface GeocoderComponentRestrictions {
		administrativeArea?: string,
		country?: string,
		locality?: string,
		postalCode?: string,
		route?: string
	}

	declare export interface GeocoderResult {
		address_components: GeocoderAddressComponent[],
		formatted_address: string,
		geometry: GeocoderGeometry,
		partial_match: boolean,
		place_id: string,
		postcode_localities: string[],
		types: string[]
	}

	declare export interface GeocoderAddressComponent {
		long_name: string,
		short_name: string,
		types: string[]
	}

	declare export interface GeocoderGeometry {
		bounds: LatLngBounds,
		location: LatLng,
		location_type: GeocoderLocationType,
		viewport: LatLngBounds
	}

	declare export interface DirectionsRendererOptions {
		directions?: DirectionsResult,
		draggable?: boolean,
		hideRouteList?: boolean,
		infoWindow?: InfoWindow,
		map?: Map,
		markerOptions?: MarkerOptions,
		panel?: Element,
		polylineOptions?: PolylineOptions,
		preserveViewport?: boolean,
		routeIndex?: number,
		suppressBicyclingLayer?: boolean,
		suppressInfoWindows?: boolean,
		suppressMarkers?: boolean,
		suppressPolylines?: boolean
	}

	declare export interface DirectionsRequest {
		avoidFerries?: boolean,
		avoidHighways?: boolean,
		avoidTolls?: boolean,
		destination?: string | LatLng | Place,
		durationInTraffic?: boolean,
		drivingOptions?: DrivingOptions,
		optimizeWaypoints?: boolean,
		origin?: string | LatLng | Place,
		provideRouteAlternatives?: boolean,
		region?: string,
		transitOptions?: TransitOptions,
		travelMode?: TravelMode,
		unitSystem?: UnitSystem,
		waypoints?: DirectionsWaypoint[]
	}

	declare export interface TransitOptions {
		arrivalTime?: Date,
		departureTime?: Date,
		modes: TransitMode[],
		routingPreference: TransitRoutePreference
	}

	declare export interface TransitFare {
		
	}

	declare export interface DrivingOptions {
		departureTime: Date,
		trafficModel: TrafficModel
	}

	declare export interface DirectionsWaypoint {
		location: LatLng | LatLngLiteral | string,
		stopover: boolean
	}

	declare export interface DirectionsResult {
		routes: DirectionsRoute[]
	}

	declare export interface DirectionsRoute {
		bounds: LatLngBounds,
		copyrights: string,
		fare: TransitFare,
		legs: DirectionsLeg[],
		overview_path: LatLng[],
		overview_polyline: string,
		warnings: string[],
		waypoint_order: number[]
	}

	declare export interface DirectionsLeg {
		arrival_time: Time,
		departure_time: Time,
		distance: Distance,
		duration: Duration,
		duration_in_traffic: Duration,
		end_address: string,
		end_location: LatLng,
		start_address: string,
		start_location: LatLng,
		steps: DirectionsStep[],
		via_waypoints: LatLng[]
	}

	declare export interface DirectionsStep {
		distance: Distance,
		duration: Duration,
		end_location: LatLng,
		instructions: string,
		path: LatLng[],
		start_location: LatLng,
		steps: DirectionsStep,
		transit: TransitDetails,
		travel_mode: TravelMode
	}

	declare export interface Distance {
		text: string,
		value: number
	}

	declare export interface Duration {
		text: string,
		value: number
	}

	declare export interface Time {
		text: string,
		time_zone: string,
		value: Date
	}

	declare export interface TransitDetails {
		arrival_stop: TransitStop,
		arrival_time: Time,
		departure_stop: TransitStop,
		departure_time: Time,
		headsign: string,
		headway: number,
		line: TransitLine,
		num_stops: number
	}

	declare export interface TransitStop {
		location: LatLng,
		name: string
	}

	declare export interface TransitLine {
		agencies: TransitAgency[],
		color: string,
		icon: string,
		name: string,
		short_name: string,
		text_color: string,
		url: string,
		vehicle: TransitVehicle
	}

	declare export interface TransitAgency {
		name: string,
		phone: string,
		url: string
	}

	declare export interface TransitVehicle {
		icon: string,
		local_icon: string,
		name: string,
		type: VehicleType
	}

	declare export interface LocationElevationRequest {
		locations: LatLng[]
	}

	declare export interface PathElevationRequest {
		path?: LatLng[],
		samples?: number
	}

	declare export interface ElevationResult {
		elevation: number,
		location: LatLng,
		resolution: number
	}

	declare export interface MaxZoomResult {
		status: MaxZoomStatus,
		zoom: number
	}

	declare export interface DistanceMatrixRequest {
		avoidFerries?: boolean,
		avoidHighways?: boolean,
		avoidTolls?: boolean,
		destinations?: string[] | LatLng[] | Place[],
		drivingOptions?: DrivingOptions,
		durationInTraffic?: boolean,
		origins?: string[] | LatLng[] | Place[],
		region?: string,
		transitOptions?: TransitOptions,
		travelMode?: TravelMode,
		unitSystem?: UnitSystem
	}

	declare export interface DistanceMatrixResponse {
		destinationAddresses: string[],
		originAddresses: string[],
		rows: DistanceMatrixResponseRow[]
	}

	declare export interface DistanceMatrixResponseRow {
		elements: DistanceMatrixResponseElement[]
	}

	declare export interface DistanceMatrixResponseElement {
		distance: Distance,
		duration: Duration,
		duration_in_traffic: Duration,
		fare: TransitFare,
		status: DistanceMatrixElementStatus
	}

	declare export interface Attribution {
		iosDeepLinkId?: string,
		source?: string,
		webUrl?: string
	}

	declare export interface Place {
		location?: LatLng | LatLngLiteral,
		placeId?: string,
		query?: string
	}

	declare export interface SaveWidgetOptions {
		attribution?: Attribution,
		place?: Place
	}

	declare export interface MapType {
		getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element,
		releaseTile(tile: Element): void,
		alt?: string,
		maxZoom?: number,
		minZoom?: number,
		name?: string,
		projection?: Projection,
		radius?: number,
		tileSize?: Size
	}

	declare export interface Projection {
		fromLatLngToPoint(latLng: LatLng, point?: Point): Point,
		fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng
	}

	declare export interface ImageMapTypeOptions {
		alt?: string,
		getTileUrl(tileCoord: Point, zoom: number): string,
		maxZoom?: number,
		minZoom?: number,
		name?: string,
		opacity?: number,
		tileSize?: Size
	}

	declare export interface StyledMapTypeOptions {
		alt?: string,
		maxZoom?: number,
		minZoom?: number,
		name?: string
	}

	declare export interface MapTypeStyle {
		elementType?: MapTypeStyleElementType,
		featureType?: MapTypeStyleFeatureType,
		stylers?: MapTypeStyler[]
	}

	declare export interface MapTypeStyleFeatureType {
		administrative?: {
		country?: string,
		land_parcel?: string,
		locality?: string,
		neighborhood?: string,
		province?: string
	},
		all?: string,
		landscape?: {
		man_made?: string,
		natural?: {
		landcover?: string,
		terrain?: string
	}
	},
		poi?: {
		attraction?: string,
		business?: string,
		government?: string,
		medical?: string,
		park?: string,
		place_of_worship?: string,
		school?: string,
		sports_complex?: string
	},
		road?: {
		arterial?: string,
		highway?: {
		controlled_access?: string
	},
		local?: string
	},
		transit?: {
		line?: string,
		station?: {
		airport?: string,
		bus?: string,
		rail?: string
	}
	},
		water?: string
	}

	declare export interface MapTypeStyleElementType {
		all?: string,
		geometry?: {
		fill?: string,
		stroke?: string
	},
		labels?: {
		icon?: string,
		text?: {
		fill?: string,
		stroke?: string
	}
	}
	}

	declare export interface MapTypeStyler {
		color?: string,
		gamma?: number,
		hue?: string,
		invert_lightness?: boolean,
		lightness?: number,
		saturation?: number,
		visibility?: string,
		weight?: number
	}

	declare export interface FusionTablesLayerOptions {
		clickable?: boolean,
		heatmap?: FusionTablesHeatmap,
		map?: Map,
		query?: FusionTablesQuery,
		styles?: FusionTablesStyle[],
		suppressInfoWindows?: boolean
	}

	declare export interface FusionTablesQuery {
		from?: string,
		limit?: number,
		offset?: number,
		orderBy?: string,
		select?: string,
		where?: string
	}

	declare export interface FusionTablesStyle {
		markerOptions?: FusionTablesMarkerOptions,
		polygonOptions?: FusionTablesPolygonOptions,
		polylineOptions?: FusionTablesPolylineOptions,
		where?: string
	}

	declare export interface FusionTablesHeatmap {
		enabled: boolean
	}

	declare export interface FusionTablesMarkerOptions {
		iconName: string
	}

	declare export interface FusionTablesPolygonOptions {
		fillColor?: string,
		fillOpacity?: number,
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWeight?: number
	}

	declare export interface FusionTablesPolylineOptions {
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWeight?: number
	}

	declare export interface FusionTablesMouseEvent {
		infoWindowHtml?: string,
		latLng?: LatLng,
		pixelOffset?: Size,
		row?: Object
	}

	declare export interface FusionTablesCell {
		columnName?: string,
		value?: string
	}

	declare export interface KmlLayerOptions {
		clickable?: boolean,
		map?: Map,
		preserveViewport?: boolean,
		screenOverlays?: boolean,
		suppressInfoWindows?: boolean,
		url?: string,
		zIndex?: number
	}

	declare export interface KmlLayerMetadata {
		author: KmlAuthor,
		description: string,
		hasScreenOverlays: boolean,
		name: string,
		snippet: string
	}

	declare export interface KmlMouseEvent {
		featureData: KmlFeatureData,
		latLng: LatLng,
		pixelOffset: Size
	}

	declare export interface KmlFeatureData {
		author: KmlAuthor,
		description: string,
		id: string,
		infoWindowHtml: string,
		name: string,
		snippet: string
	}

	declare export interface KmlAuthor {
		email: string,
		name: string,
		uri: string
	}

	declare export interface FullscreenControlOptions {
		position?: ControlPosition
	}

	declare export interface StreetViewPanoramaOptions {
		addressControl?: boolean,
		addressControlOptions?: StreetViewAddressControlOptions,
		clickToGo?: boolean,
		disableDefaultUI?: boolean,
		disableDoubleClickZoom?: boolean,
		enableCloseButton?: boolean,
		fullscreenControl?: boolean,
		fullscreenControlOptions?: FullscreenControlOptions,
		imageDateControl?: boolean,
		linksControl?: boolean,
		mode?: "html4" | "html5" | "webgl",
		panControl?: boolean,
		panControlOptions?: PanControlOptions,
		pano?: string,
		panoProvider?: (input: string) => StreetViewPanoramaData,
		position?: LatLng | LatLngLiteral,
		pov?: StreetViewPov,
		scrollwheel?: boolean,
		visible?: boolean,
		zoom?: number,
		zoomControl?: boolean,
		zoomControlOptions?: ZoomControlOptions
	}

	declare export interface StreetViewAddressControlOptions {
		position?: ControlPosition
	}

	declare export interface StreetViewLink {
		description?: string,
		heading?: number,
		pano?: string
	}

	declare export interface StreetViewPov {
		heading?: number,
		pitch?: number
	}

	declare export interface StreetViewPanoramaData {
		copyright?: string,
		imageDate?: string,
		links?: StreetViewLink[],
		location?: StreetViewLocation,
		tiles?: StreetViewTileData
	}

	declare export interface StreetViewLocation {
		description?: string,
		latLng?: LatLng,
		pano?: string,
		shortDescription?: string
	}

	declare export interface StreetViewTileData {
		getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number): string,
		centerHeading?: number,
		tileSize?: Size,
		worldSize?: Size
	}

	declare export interface StreetViewLocationRequest {
		location: LatLng | LatLngLiteral,
		preference?: StreetViewPreference,
		radius?: number,
		source?: StreetViewSource
	}

	declare export interface StreetViewPanoRequest {
		pano: string
	}

	declare export interface MapsEventListener {
		remove(): void
	}

	declare export interface MouseEvent {
		stop(): void,
		latLng: LatLng
	}

		declare export class Map extends MVCObject {
		constructor(mapDiv: Element, opts?: MapOptions): this;
		fitBounds(bounds: LatLngBounds): void;
		getBounds(): LatLngBounds;
		getCenter(): LatLng;
		getDiv(): Element;
		getHeading(): number;
		getMapTypeId(): MapTypeId | string;
		getProjection(): Projection;
		getStreetView(): StreetViewPanorama;
		getTilt(): number;
		getZoom(): number;
		panBy(x: number, y: number): void;
		panTo(latLng: LatLng | LatLngLiteral): void;
		panToBounds(latLngBounds: LatLngBounds): void;
		setCenter(latlng: LatLng | LatLngLiteral): void;
		setHeading(heading: number): void;
		setMapTypeId(mapTypeId: MapTypeId | string): void;
		setOptions(options: MapOptions): void;
		setStreetView(panorama: StreetViewPanorama): void;
		setTilt(tilt: number): void;
		setZoom(zoom: number): void;
		controls: MVCArray[];
		data: Data;
		mapTypes: MapTypeRegistry;
		overlayMapTypes: MVCArray
	}

	declare export class Data extends MVCObject {
		constructor(options?: Data.DataOptions): this;
		add(feature: Data.Feature | Data.FeatureOptions): Data.Feature;
		addGeoJson(geoJson: Object, options?: Data.GeoJsonOptions): Data.Feature[];
		contains(feature: Data.Feature): boolean;
		forEach(callback: (feature: Data.Feature) => void): void;
		getControlPosition(): ControlPosition;
		getControls(): string[];
		getDrawingMode(): string;
		getFeatureById(id: number | string): Data.Feature;
		getMap(): Map;
		getStyle(): Data.StylingFunction | Data.StyleOptions;
		loadGeoJson(
		url: string, options?: Data.GeoJsonOptions, callback?: (features: Data.Feature[]) => void
	): void;
		overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
		remove(feature: Data.Feature): void;
		revertStyle(feature?: Data.Feature): void;
		setControlPosition(controlPosition: ControlPosition): void;
		setControls(controls: string[]): void;
		setDrawingMode(drawingMode: string): void;
		setMap(map: Map): void;
		setStyle(style: Data.StylingFunction | Data.StyleOptions): void;
		toGeoJson(callback: (feature: Object) => void): void
	}

	declare export class Marker extends MVCObject {
		MAX_ZINDEX: number;
		constructor(opts?: MarkerOptions): this;
		getAnimation(): Animation;
		getAttribution(): Attribution;
		getClickable(): boolean;
		getCursor(): string;
		getDraggable(): boolean;
		getIcon(): string | Icon | Symbol;
		getLabel(): MarkerLabel;
		getMap(): Map | StreetViewPanorama;
		getOpacity(): number;
		getPlace(): Place;
		getPosition(): LatLng;
		getShape(): MarkerShape;
		getTitle(): string;
		getVisible(): boolean;
		getZIndex(): number;
		setAnimation(animation: Animation): void;
		setAttribution(attribution: Attribution): void;
		setClickable(flag: boolean): void;
		setCursor(cursor: string): void;
		setDraggable(flag: boolean): void;
		setIcon(icon: string | Icon | Symbol): void;
		setLabel(label: string | MarkerLabel): void;
		setMap(map: Map | StreetViewPanorama): void;
		setOpacity(opacity: number): void;
		setOptions(options: MarkerOptions): void;
		setPlace(place: Place): void;
		setPosition(latlng: LatLng | LatLngLiteral): void;
		setShape(shape: MarkerShape): void;
		setTitle(title: string): void;
		setVisible(visible: boolean): void;
		setZIndex(zIndex: number): void
	}

	declare export class InfoWindow extends MVCObject {
		constructor(opts?: InfoWindowOptions): this;
		close(): void;
		getContent(): string | Element;
		getPosition(): LatLng;
		getZIndex(): number;
		open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void;
		setContent(content: string | Node): void;
		setOptions(options: InfoWindowOptions): void;
		setPosition(position: LatLng): void;
		setZIndex(zIndex: number): void
	}

	declare export class Polyline extends MVCObject {
		constructor(opts?: PolylineOptions): this;
		getDraggable(): boolean;
		getEditable(): boolean;
		getMap(): Map;
		getPath(): MVCArray;
		getVisible(): boolean;
		setDraggable(draggable: boolean): void;
		setEditable(editable: boolean): void;
		setMap(map: Map): void;
		setOptions(options: PolylineOptions): void;
		setPath(path: MVCArray | LatLng[] | LatLngLiteral[]): void;
		setVisible(visible: boolean): void
	}

	declare export class Polygon extends MVCObject {
		constructor(opts?: PolygonOptions): this;
		getDraggable(): boolean;
		getEditable(): boolean;
		getMap(): Map;
		getPath(): MVCArray;
		getPaths(): MVCArray;
		getVisible(): boolean;
		setDraggable(draggable: boolean): void;
		setEditable(editable: boolean): void;
		setMap(map: Map): void;
		setOptions(options: PolygonOptions): void;
		setPath(path: MVCArray | LatLng[] | LatLngLiteral[]): void;
		setPaths(paths: MVCArray): void;
		setPaths(paths: MVCArray[]): void;
		setPaths(path: LatLng[]): void;
		setPaths(path: LatLng[][]): void;
		setPaths(path: LatLngLiteral[]): void;
		setPaths(path: LatLngLiteral[][]): void;
		setVisible(visible: boolean): void
	}

	declare export class Rectangle extends MVCObject {
		constructor(opts?: RectangleOptions): this;
		getBounds(): LatLngBounds;
		getDraggable(): boolean;
		getEditable(): boolean;
		getMap(): Map;
		getVisible(): boolean;
		setBounds(bounds: LatLngBounds): void;
		setDraggable(draggable: boolean): void;
		setEditable(editable: boolean): void;
		setMap(map: Map): void;
		setOptions(options: RectangleOptions): void;
		setVisible(visible: boolean): void
	}

	declare export class Circle extends MVCObject {
		constructor(opts?: CircleOptions): this;
		getBounds(): LatLngBounds;
		getCenter(): LatLng;
		getDraggable(): boolean;
		getEditable(): boolean;
		getMap(): Map;
		getRadius(): number;
		getVisible(): boolean;
		setCenter(center: LatLng | LatLngLiteral): void;
		setDraggable(draggable: boolean): void;
		setEditable(editable: boolean): void;
		setMap(map: Map): void;
		setOptions(options: CircleOptions): void;
		setRadius(radius: number): void;
		setVisible(visible: boolean): void
	}

	declare export class GroundOverlay extends MVCObject {
		constructor(url: string, bounds: LatLngBounds, opts?: GroundOverlayOptions): this;
		getBounds(): LatLngBounds;
		getMap(): Map;
		getOpacity(): number;
		getUrl(): string;
		setMap(map: Map): void;
		setOpacity(opacity: number): void
	}

	declare export class OverlayView extends MVCObject {
		draw(): void;
		getMap(): Map | StreetViewPanorama;
		getPanes(): MapPanes;
		getProjection(): MapCanvasProjection;
		onAdd(): void;
		onRemove(): void;
		setMap(map: Map | StreetViewPanorama): void
	}

	declare export class MapCanvasProjection extends MVCObject {
		fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
		fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
		fromLatLngToContainerPixel(latLng: LatLng): Point;
		fromLatLngToDivPixel(latLng: LatLng): Point;
		getWorldWidth(): number
	}

	declare export class Geocoder  {
		geocode(
		request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void
	): void
	}

	declare export class DirectionsRenderer extends MVCObject {
		constructor(opts?: DirectionsRendererOptions): this;
		getDirections(): DirectionsResult;
		getMap(): Map;
		getPanel(): Element;
		getRouteIndex(): number;
		setDirections(directions: DirectionsResult): void;
		setMap(map: Map): void;
		setOptions(options: DirectionsRendererOptions): void;
		setPanel(panel: Element): void;
		setRouteIndex(routeIndex: number): void
	}

	declare export class DirectionsService  {
		route(
		request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void
	): void
	}

	declare export class ElevationService  {
		getElevationAlongPath(
		request: PathElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void
	): void;
		getElevationForLocations(
		request: LocationElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void
	): void
	}

	declare export class MaxZoomService  {
		getMaxZoomAtLatLng(
		latlng: LatLng | LatLngLiteral, callback: (result: MaxZoomResult) => void
	): void
	}

	declare export class DistanceMatrixService  {
		getDistanceMatrix(
		request: DistanceMatrixRequest, callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void
	): void
	}

	declare export class SaveWidget  {
		constructor(container: Node, opts?: SaveWidgetOptions): this;
		getAttribution(): Attribution;
		getPlace(): Place;
		setAttribution(attribution: Attribution): void;
		setOptions(opts: SaveWidgetOptions): void;
		setPlace(place: Place): void
	}

	declare export class MapTypeRegistry extends MVCObject {
		constructor(): this;
		set(id: string, mapType: MapType): void
	}

	declare export class ImageMapType extends MVCObject, MapType {
		constructor(opts: ImageMapTypeOptions): this;
		getOpacity(): number;
		getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
		releaseTile(tile: Element): void;
		setOpacity(opacity: number): void
	}

	declare export class StyledMapType extends MVCObject, MapType {
		constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions): this;
		getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
		releaseTile(tile: Element): void
	}

	declare export class BicyclingLayer extends MVCObject {
		constructor(): this;
		getMap(): Map;
		setMap(map: Map): void
	}

	declare export class FusionTablesLayer extends MVCObject {
		constructor(options: FusionTablesLayerOptions): this;
		getMap(): Map;
		setMap(map: Map): void;
		setOptions(options: FusionTablesLayerOptions): void
	}

	declare export class KmlLayer extends MVCObject {
		constructor(opts?: KmlLayerOptions): this;
		getDefaultViewport(): LatLngBounds;
		getMap(): Map;
		getMetadata(): KmlLayerMetadata;
		getStatus(): KmlLayerStatus;
		getUrl(): string;
		getZIndex(): number;
		setMap(map: Map): void;
		setUrl(url: string): void;
		setZIndez(zIndex: number): void
	}

	declare export class TrafficLayer extends MVCObject {
		constructor(): this;
		getMap(): void;
		setMap(map: Map): void
	}

	declare export class TransitLayer extends MVCObject {
		constructor(): this;
		getMap(): void;
		setMap(map: Map): void
	}

	declare export class StreetViewPanorama  {
		constructor(container: Element, opts?: StreetViewPanoramaOptions): this;
		controls: MVCArray[];
		getLinks(): StreetViewLink[];
		getLocation(): StreetViewLocation;
		getPano(): string;
		getPhotographerPov(): StreetViewPov;
		getPosition(): LatLng;
		getPov(): StreetViewPov;
		getStatus(): StreetViewStatus;
		getVisible(): boolean;
		getZoom(): number;
		registerPanoProvider(provider: (input: string) => StreetViewPanoramaData): void;
		setLinks(links: Array<StreetViewLink>): void;
		setOptions(options: StreetViewPanoramaOptions): void;
		setPano(pano: string): void;
		setPosition(latLng: LatLng | LatLngLiteral): void;
		setPov(pov: StreetViewPov): void;
		setVisible(flag: boolean): void;
		setZoom(zoom: number): void
	}

	declare export class StreetViewService  {
		getPanorama(
		request: StreetViewLocationRequest | StreetViewPanoRequest, cb: (data: StreetViewPanoramaData, status: StreetViewStatus) => void
	): void;
		getPanoramaById(
		pano: string, callback: (
		streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus
	) => void
	): void;
		getPanoramaByLocation(
		latlng: LatLng | LatLngLiteral, radius: number, callback: (
		streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus
	) => void
	): void
	}

	declare export class StreetViewCoverageLayer extends MVCObject {
		getMap(): Map;
		setMap(map: Map): void
	}

	declare export class event  {
		addDomListener(
		instance: Object, eventName: string, handler: Function, capture?: boolean
	): MapsEventListener;
		addDomListenerOnce(
		instance: Object, eventName: string, handler: Function, capture?: boolean
	): MapsEventListener;
		addListener(instance: Object, eventName: string, handler: Function): MapsEventListener;
		addListenerOnce(instance: Object, eventName: string, handler: Function): MapsEventListener;
		clearInstanceListeners(instance: Object): void;
		clearListeners(instance: Object, eventName: string): void;
		removeListener(listener: MapsEventListener): void;
		trigger(instance: any, eventName: string, ...args: any[]): void
	}

	declare export class LatLng  {
		constructor(lat: number, lng: number, noWrap?: boolean): this;
		equals(other: LatLng): boolean;
		lat(): number;
		lng(): number;
		toString(): string;
		toUrlValue(precision?: number): string;
		toJSON(): LatLngLiteral
	}

	declare export class LatLngBounds  {
		constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral): this;
		contains(latLng: LatLng): boolean;
		equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
		extend(point: LatLng): LatLngBounds;
		getCenter(): LatLng;
		getNorthEast(): LatLng;
		getSouthWest(): LatLng;
		intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
		isEmpty(): boolean;
		toSpan(): LatLng;
		toString(): string;
		toUrlValue(precision?: number): string;
		union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds
	}

	declare export class Point  {
		constructor(x: number, y: number): this;
		x: number;
		y: number;
		equals(other: Point): boolean;
		toString(): string
	}

	declare export class Size  {
		constructor(width: number, height: number, widthUnit?: string, heightUnit?: string): this;
		height: number;
		width: number;
		equals(other: Size): boolean;
		toString(): string
	}

	declare export class MVCObject  {
		constructor(): this;
		addListener(eventName: string, handler: (...args: any[]) => void): MapsEventListener;
		bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;
		changed(key: string): void;
		get(key: string): any;
		notify(key: string): void;
		set(key: string, value: any): void;
		setValues(values: any): void;
		unbind(key: string): void;
		unbindAll(): void
	}

	declare export class MVCArray extends MVCObject {
		constructor(array?: any[]): this;
		clear(): void;
		forEach(callback: (elem: any, i: number) => void): void;
		getArray(): any[];
		getAt(i: number): any;
		getLength(): number;
		insertAt(i: number, elem: any): void;
		pop(): any;
		push(elem: any): number;
		removeAt(i: number): any;
		setAt(i: number, elem: any): void
	}

	
}

declare module 'Data' {
	declare export type StylingFunction = (feature: Data.Feature) => Data.StyleOptions;

	declare export interface DataOptions {
		controlPosition?: ControlPosition,
		controls?: string[],
		drawingMode?: string,
		featureFactory?: (geometry: Data.Geometry) => Data.Feature,
		map?: Map,
		style?: Data.StylingFunction | Data.StyleOptions
	}

	declare export interface GeoJsonOptions {
		idPropertyName?: string
	}

	declare export interface StyleOptions {
		clickable?: boolean,
		cursor?: string,
		draggable?: boolean,
		editable?: boolean,
		fillColor?: string,
		fillOpacity?: number,
		icon?: string | Icon | Symbol,
		shape?: MarkerShape,
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWeight?: number,
		title?: string,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface FeatureOptions {
		geometry?: Data.Geometry | LatLng | LatLngLiteral,
		id?: number | string,
		properties?: Object
	}

	declare export interface MouseEvent {
		feature: Data.Feature
	}

	declare export interface AddFeatureEvent {
		feature: Data.Feature
	}

	declare export interface RemoveFeatureEvent {
		feature: Data.Feature
	}

	declare export interface SetGeometryEvent {
		feature: Data.Feature,
		newGeometry: Data.Geometry,
		oldGeometry: Data.Geometry
	}

	declare export interface SetPropertyEvent {
		feature: Data.Feature,
		name: string,
		newValue: any,
		oldValue: any
	}

	declare export interface RemovePropertyEvent {
		feature: Data.Feature,
		name: string,
		oldValue: any
	}

		declare export class Feature  {
		constructor(options?: Data.FeatureOptions): this;
		forEachProperty(callback: (value: any, name: string) => void): void;
		getGeometry(): Data.Geometry;
		getId(): number | string;
		getProperty(name: string): any;
		removeProperty(name: string): void;
		setGeometry(newGeometry: Data.Geometry | LatLng | LatLngLiteral): void;
		setProperty(name: string, newValue: any): void;
		toGeoJson(callback: (feature: Object) => void): void
	}

	declare export class Geometry  {
		getType(): string
	}

	declare export class Point extends Data$Geometry {
		constructor(latLng: LatLng | LatLngLiteral): this;
		get(): LatLng
	}

	declare export class MultiPoint extends Data$Geometry {
		constructor(elements: (LatLng | LatLngLiteral)[]): this;
		getArray(): LatLng[];
		getAt(n: number): LatLng;
		getLength(): number
	}

	declare export class LineString extends Data$Geometry {
		constructor(elements: (LatLng | LatLngLiteral)[]): this;
		getArray(): LatLng[];
		getAt(n: number): LatLng;
		getLength(): number
	}

	declare export class MultiLineString extends Data$Geometry {
		constructor(elements: (Data.LineString | (LatLng | LatLngLiteral)[])[]): this;
		getArray(): Data.LineString[];
		getAt(n: number): Data.LineString;
		getLength(): number
	}

	declare export class LinearRing extends Data$Geometry {
		constructor(elements: (LatLng | LatLngLiteral)[]): this;
		getArray(): LatLng[];
		getAt(n: number): LatLng;
		getLength(): number
	}

	declare export class Polygon extends Data$Geometry {
		constructor(elements: (Data.LinearRing | (LatLng | LatLngLiteral)[])[]): this;
		getArray(): Data.LinearRing[];
		getAt(n: number): Data.LinearRing;
		getLength(): number
	}

	declare export class MultiPolygon extends Data$Geometry {
		constructor(elements: (Data.Polygon | (LinearRing | (LatLng | LatLngLiteral)[])[])[]): this;
		getArray(): Data.Polygon[];
		getAt(n: number): Data.Polygon;
		getLength(): number
	}

	declare export class GeometryCollection extends Data$Geometry {
		constructor(elements: (Data.Geometry[] | LatLng[] | LatLngLiteral)[]): this;
		getArray(): Data.Geometry[];
		getAt(n: number): Data.Geometry;
		getLength(): number
	}

	
}

declare module 'geometry' {
				declare export class encoding  {
		decodePath(encodedPath: string): LatLng[];
		encodePath(path: any[]): string
	}

	declare export class spherical  {
		computeArea(path: any[], radius?: number): number;
		computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number;
		computeHeading(from: LatLng, to: LatLng): number;
		computeLength(path: any[], radius?: number): number;
		computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng;
		computeOffsetOrigin(to: LatLng, distance: number, heading: number, radius?: number): LatLng;
		computeSignedArea(loop: any[], radius?: number): number;
		interpolate(from: LatLng, to: LatLng, fraction: number): LatLng
	}

	declare export class poly  {
		containsLocation(point: LatLng, polygon: Polygon): boolean;
		isLocationOnEdge(point: LatLng, poly: Polygon | Polyline, tolerance?: number): boolean
	}

	
}

declare module 'adsense' {
		declare export interface AdUnitOptions {
		backgroundColor?: string,
		borderColor?: string,
		channelNumber?: string,
		format?: AdFormat,
		map?: Map,
		position?: ControlPosition,
		publisherId?: string,
		textColor?: string,
		titleColor?: string,
		urlColor?: string
	}

		declare export class AdUnit extends MVCObject {
		constructor(container: Element, opts: AdUnitOptions): this;
		getBackgroundColor(): string;
		getBorderColor(): string;
		getChannelNumber(): string;
		getContainer(): Element;
		getFormat(): AdFormat;
		getMap(): Map;
		getPosition(): ControlPosition;
		getPublisherId(): string;
		getTextColor(): string;
		getTitleColor(): string;
		getUrlColor(): string;
		setBackgroundColor(backgroundColor: string): void;
		setBorderColor(borderColor: string): void;
		setChannelNumber(channelNumber: string): void;
		setFormat(format: AdFormat): void;
		setMap(map: Map): void;
		setPosition(position: ControlPosition): void;
		setTextColor(textColor: string): void;
		setTitleColor(titleColor: string): void;
		setUrlColor(urlColor: string): void
	}

	
}

declare module 'places' {
		declare export interface AutocompleteOptions {
		bounds?: LatLngBounds,
		componentRestrictions?: ComponentRestrictions,
		types?: string[]
	}

	declare export interface AutocompletePrediction {
		description: string,
		matched_substrings: PredictionSubstring[],
		place_id: string,
		terms: PredictionTerm[],
		types: string[]
	}

	declare export interface PredictionTerm {
		offset: number,
		value: string
	}

	declare export interface PredictionSubstring {
		length: number,
		offset: number
	}

	declare export interface AutocompletionRequest {
		bounds?: LatLngBounds,
		componentRestrictions?: ComponentRestrictions,
		input: string,
		location?: LatLng,
		offset?: number,
		radius?: number,
		types?: string[]
	}

	declare export interface ComponentRestrictions {
		country: string
	}

	declare export interface PlaceAspectRating {
		rating: number,
		type: string
	}

	declare export interface PlaceDetailsRequest {
		placeId: string
	}

	declare export interface PlaceGeometry {
		location: LatLng,
		viewport: LatLngBounds
	}

	declare export interface PlacePhoto {
		height: number,
		html_attributions: string[],
		width: number,
		getUrl(opts: PhotoOptions): string
	}

	declare export interface PhotoOptions {
		maxHeight?: number,
		maxWidth?: number
	}

	declare export interface PlaceResult {
		address_components: GeocoderAddressComponent[],
		aspects: PlaceAspectRating[],
		formatted_address: string,
		formatted_phone_number: string,
		geometry: PlaceGeometry,
		html_attributions: string[],
		icon: string,
		international_phone_number: string,
		name: string,
		permanently_closed: boolean,
		photos: PlacePhoto[],
		place_id: string,
		price_level: number,
		rating: number,
		reviews: PlaceReview[],
		types: string[],
		url: string,
		vicinity: string,
		website: string
	}

	declare export interface PlaceReview {
		aspects: PlaceAspectRating[],
		author_name: string,
		author_url: string,
		language: string,
		text: string
	}

	declare export interface PlaceSearchPagination {
		nextPage(): void,
		hasNextPage: boolean
	}

	declare export interface PlaceSearchRequest {
		bounds?: LatLngBounds,
		keyword?: string,
		location?: LatLng | LatLngLiteral,
		maxPriceLevel?: number,
		minPriceLevel?: number,
		name?: string,
		openNow?: boolean,
		radius?: number,
		rankBy?: RankBy,
		types?: string[],
		type?: string
	}

	declare export interface QueryAutocompletePrediction {
		description: string,
		matched_substrings: PredictionSubstring[],
		place_id: string,
		terms: PredictionTerm[]
	}

	declare export interface QueryAutocompletionRequest {
		bounds?: LatLngBounds,
		input?: string,
		location?: LatLng,
		offset?: number,
		radius?: number
	}

	declare export interface RadarSearchRequest {
		bounds?: LatLngBounds,
		keyword?: string,
		location?: LatLng | LatLngLiteral,
		name?: string,
		radius?: number,
		types?: string[],
		type?: string
	}

	declare export interface SearchBoxOptions {
		bounds: LatLngBounds
	}

	declare export interface TextSearchRequest {
		bounds?: LatLngBounds,
		location?: LatLng | LatLngLiteral,
		query: string,
		radius?: number,
		types?: string[],
		type?: string
	}

		declare export class Autocomplete extends MVCObject {
		constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions): this;
		getBounds(): LatLngBounds;
		getPlace(): PlaceResult;
		setBounds(bounds: LatLngBounds): void;
		setComponentRestrictions(restrictions: ComponentRestrictions): void;
		setTypes(types: string[]): void
	}

	declare export class AutocompleteService  {
		constructor(): this;
		getPlacePredictions(
		request: AutocompletionRequest, callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void
	): void;
		getQueryPredictions(
		request: QueryAutocompletionRequest, callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void
	): void
	}

	declare export class PlacesService  {
		constructor(attrContainer: HTMLDivElement | Map): this;
		getDetails(
		request: PlaceDetailsRequest, callback: (result: PlaceResult, status: PlacesServiceStatus) => void
	): void;
		nearbySearch(
		request: PlaceSearchRequest, callback: (
		results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination
	) => void
	): void;
		radarSearch(
		request: RadarSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void
	): void;
		textSearch(
		request: TextSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void
	): void
	}

	declare export class SearchBox extends MVCObject {
		constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions): this;
		getBounds(): LatLngBounds;
		getPlaces(): PlaceResult[];
		setBounds(bounds: LatLngBounds): void
	}

	
}

declare module 'drawing' {
		declare export interface DrawingManagerOptions {
		circleOptions?: CircleOptions,
		drawingControl?: boolean,
		drawingControlOptions?: DrawingControlOptions,
		drawingMode?: OverlayType,
		map?: Map,
		markerOptions?: MarkerOptions,
		polygonOptions?: PolygonOptions,
		polylineOptions?: PolylineOptions,
		rectangleOptions?: RectangleOptions
	}

	declare export interface DrawingControlOptions {
		drawingModes?: OverlayType[],
		position?: ControlPosition
	}

	declare export interface OverlayCompleteEvent {
		overlay: Marker | Polygon | Polyline | Rectangle | Circle,
		type: OverlayType
	}

		declare export class DrawingManager extends MVCObject {
		constructor(options?: DrawingManagerOptions): this;
		getDrawingMode(): OverlayType;
		getMap(): Map;
		setDrawingMode(drawingMode: OverlayType): void;
		setMap(map: Map): void;
		setOptions(options: DrawingManagerOptions): void
	}

	
}

declare module 'visualization' {
		declare export interface MapsEngineLayerOptions {
		accessToken?: string,
		clickable?: boolean,
		fitBounds?: boolean,
		layerId?: string,
		layerKey?: string,
		map?: Map,
		mapId?: string,
		opacity?: number,
		suppressInfoWindows?: boolean,
		zIndex?: number
	}

	declare export interface MapsEngineLayerProperties {
		name: string
	}

	declare export interface MapsEngineMouseEvent {
		featureId?: string,
		infoWindowHtml?: string,
		latLng?: LatLng,
		pixelOffset?: Size
	}

	declare export interface HeatmapLayerOptions {
		data: any,
		dissipating?: boolean,
		gradient?: string[],
		map?: Map,
		maxIntensity?: number,
		opacity?: number,
		radius?: number
	}

	declare export interface WeightedLocation {
		location: LatLng,
		weight: number
	}

		declare export class MapsEngineLayer extends MVCObject {
		constructor(options: MapsEngineLayerOptions): this;
		getLayerId(): string;
		getLayerKey(): string;
		getMap(): Map;
		getMapId(): string;
		getOpacity(): number;
		getProperties(): MapsEngineLayerProperties;
		getStatus(): MapsEngineStatus;
		getZIndex(): number;
		setLayerId(layerId: string): void;
		setLayerKey(layerKey: string): void;
		setMap(map: Map): void;
		setMapId(mapId: string): void;
		setOpacity(opacity: number): void;
		setOptions(options: MapsEngineLayerOptions): void;
		setZIndex(zIndex: number): void
	}

	declare export class HeatmapLayer extends MVCObject {
		constructor(opts?: HeatmapLayerOptions): this;
		getData(): MVCArray;
		getMap(): Map;
		setData(data: MVCArray): void;
		setData(data: LatLng[]): void;
		setData(data: WeightedLocation[]): void;
		setMap(map: Map): void
	}

	declare export class MouseEvent  {
		stop(): void
	}

	declare export class MapsEventListener  {
		
	}

	
}