

declare module 'Microsoft.Maps.Directions' {
					
}

declare module 'Directions' {
		declare export interface BusinessDetails {
		businessName?: string,
		entityId?: string,
		phoneNumber?: string,
		website?: string
	}

	declare export interface WaypointOptions {
		address?: string,
		businessDetails?: BusinessDetails,
		disambiguationContainer?: HTMLElement,
		exactLocation?: string,
		isViapoint?: boolean,
		location?: Location,
		pushpin?: Pushpin,
		shortAddress?: string
	}

	declare export interface BusinessDisambiguationSuggestion {
		address?: string,
		distance?: number,
		entityId?: number,
		index?: number,
		isApproximate?: boolean,
		location?: Location,
		name?: string,
		phoneNumber?: string,
		photoUrl?: string,
		rooftopLocation?: Location,
		website?: string
	}

	declare export interface LocationDisambiguationSuggestion {
		formattedSuggestion?: string,
		location?: Location,
		rooftopLocation?: Location,
		suggestion?: string
	}

	declare export interface Disambiguation {
		businessSuggestions?: Array<BusinessDisambiguationSuggestion>,
		hasMoreSuggestions?: boolean,
		headerText?: string,
		locationSuggestions?: Array<LocationDisambiguationSuggestion>
	}

	declare export interface WaypointEventArgs {
		waypoint: Waypoint
	}

	declare export interface DirectionsRenderOptions {
		autoDisplayDisambiguation?: boolean,
		autoUpdateMapView?: boolean,
		disambiguationPushpinOptions?: PushpinOptions,
		displayDisclaimer?: boolean,
		displayManeuverIcons?: boolean,
		displayPostItineraryItemHints?: boolean,
		displayPreItineraryItemHints?: boolean,
		displayRouteSelector?: boolean,
		displayStepWarnings?: boolean,
		displayTrafficAvoidanceOption?: boolean,
		displayWalkingWarning?: boolean,
		drivingPolylineOptions?: PolylineOptions,
		itineraryContainer?: HTMLElement,
		lastWaypointIcon?: string,
		middleWaypointIcon?: string,
		stepPushpinOptions?: PushpinOptions,
		transitPolylineOptions?: PolylineOptions,
		viapointPushpinsOptions?: PushpinOptions,
		walkingPolylineOptions?: PolylineOptions,
		waypointPushpinOptions?: PushpinOptions
	}

	declare export interface TransitOptions {
		timeType?: TimeType,
		transitTime?: Date
	}

	declare export interface DirectionsRequestOptions {
		avoidTraffic?: boolean,
		distanceUnit?: DistanceUnit,
		maxRoutes?: number,
		routeAvoidance?: Array<RouteAvoidance>,
		routeDraggable?: boolean,
		routeIndex?: boolean,
		routeMode?: RouteMode,
		routeOptimization?: RouteOptimization,
		transitOptions?: TransitOptions
	}

	declare export interface DirectionsStepEventArgs {
		handled: boolean,
		location: Location,
		routeIndex: number,
		routeLegIndex: number,
		step: DirectionsStep,
		stepIndex: number,
		stepNumber: number
	}

	declare export interface DirectionsErrorEventArgs {
		responseCode: RouteResponseCode,
		message: string
	}

	declare export interface DirectionsEventArgs {
		routeSummary: Array<RouteSummary>,
		route: Array<Route>
	}

	declare export interface DisambiguationRenderEventArgs {
		containerElement: HTMLElement,
		handled: boolean,
		waypoint: Waypoint
	}

	declare export interface DirectionsStepRenderEventArgs {
		containerElement: HTMLElement,
		handled: boolean,
		lastStep: boolean,
		routeIndex: number,
		routeLegIndex: number,
		step: DirectionsStep,
		stepIndex: number
	}

	declare export interface RouteSummaryRenderEventArgs {
		containerElement: HTMLElement,
		handled: boolean,
		routeLegIndex: number,
		summary: RouteSummary
	}

	declare export interface WaypointRenderEventArgs {
		containerElement: HTMLElement,
		handled: boolean,
		waypoint: Waypoint
	}

	declare export interface DirectionsStep {
		childItineraryItems: Array<DirectionsStep>,
		coordinate: Location,
		distance: string,
		durationInSeconds: number,
		formattedText: string,
		iconType: IconType,
		isImageRoadShield: boolean,
		maneuver: Maneuver,
		maneuverImageName: string,
		monetaryCost: number,
		postIntersectionHints: Array<string>,
		preIntersectionHings: Array<string>,
		startStopName: string,
		transitLine: TransitLine,
		transitStepIcon: string,
		transitStopId: string,
		transitTerminus: string,
		warnings: Array<DirectionsStepWarning>
	}

	declare export interface TransitLine {
		abbreviatedName: string,
		agencyId: number,
		agencyName: string,
		agencyUrl: string,
		lineColor: Color,
		lineTextColor: Color,
		providerInfo: string,
		verboseName: string
	}

	declare export interface DirectionsStepWarning {
		style: StepWarningStyle,
		text: string
	}

	declare export interface ResetDirectionsOptions {
		removeAllWaypoints?: boolean,
		resetRenderOptions?: boolean,
		resetRequestOptions?: boolean
	}

	declare export interface Route {
		routeLegs: Array<RouteLeg>
	}

	declare export interface RouteLeg {
		endTime: Date,
		endWaypointLocation: Location,
		itineraryItems: Array<DirectionsStep>,
		originalRouteIndex: number,
		startTime: Date,
		startWaypointLocation: Location,
		subLegs: Array<RouteSubLeg>,
		summary: RouteSummary
	}

	declare export interface RouteSubLeg {
		actualEnd: Location,
		actualStart: Location,
		endDescription: string,
		routePath: RoutePath,
		startDescription: string,
		summary: RouteSummary
	}

	declare export interface RoutePath {
		decodedLatitudes: Array<number>,
		decodedLongitudes: Array<number>,
		decodedRegions: Array<any>
	}

	declare export interface RouteSummary {
		distance: number,
		monetaryCost: number,
		northEast: Location,
		southWest: Location,
		time: number,
		timeWithTraffic: number
	}

	declare export interface RouteSelectorEventArgs {
		handled: boolean,
		routeIndex: number
	}

	declare export interface RouteSelectorRenderEventArgs {
		containerElement: HTMLElement,
		handled: boolean,
		routeIndex: number,
		routeLeg: RouteLeg
	}

		declare export class Waypoint  {
		constructor(options: WaypointOptions): this;
		clear(): void;
		dispose(): void;
		getAddress(): string;
		getBusinessDetails(): BusinessDetails;
		getDisambiguationContainer(): HTMLElement;
		getDisambiguationResult(): Disambiguation;
		getLocation(): Location;
		getPushpin(): Pushpin;
		getShortAddress(): string;
		isExactLocation(): boolean;
		isViapoint(): boolean;
		setOptions(options: WaypointOptions): void
	}

	declare export class DirectionsManager  {
		constructor(map: Microsoft.Maps.Map): this;
		resetDirections(): void;
		addWaypoint(waypoint: Waypoint, index?: number): void;
		calculateDirections(): void;
		clearDisplay(): void;
		dispose(): void;
		getAllWaypoints(): Array<Waypoint>;
		getMap(): Map;
		getNearbyMajorRoads(location: Location, callback: any, errorCallback: any, userData: any): void;
		getRenderOptions(): DirectionsRenderOptions;
		getRequestOptions(): DirectionsRequestOptions;
		getRouteResult(): Array<Route>;
		removeWaypoint(waypoint: Waypoint): void;
		removeWaypoint(index: number): void;
		resetDirections(options: ResetDirectionsOptions): void;
		reverseGeocode(location: Location, callback: any, errorCallback: any, userData: any): void;
		setMapView(): void;
		setRenderOptions(options: DirectionsRenderOptions): void;
		setRequestOptions(options: DirectionsRequestOptions): void
	}

	
}