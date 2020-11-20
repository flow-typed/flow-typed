type $entur$sdk$TransportMode =
    | 'air'
    | 'bus'
    | 'cableway'
    | 'coach'
    | 'funicular'
    | 'lift'
    | 'metro'
    | 'rail'
    | 'tram'
    | 'unknown'
    | 'water'

// All valid values for the "mode" parameter to JourneyPlanner
 type $entur$sdk$QueryMode =
    | 'air'
    | 'bicycle'
    | 'bus'
    | 'cableway'
    | 'car'
    | 'car_dropoff'
    | 'car_park'
    | 'car_pickup'
    | 'coach'
    | 'foot'
    | 'funicular'
    | 'lift'
    | 'metro'
    | 'rail'
    | 'tram'
    | 'transit'
    | 'water'

type $entur$sdk$LegMode =
    | $entur$sdk$TransportMode
    | 'bicycle'
    | 'car'
    | 'foot'

type $entur$sdk$TransportSubmode =
    | 'localBus'
    | 'regionalBus'
    | 'expressBus'
    | 'nightBus'
    | 'sightseeingBus'
    | 'shuttleBus'
    | 'schoolBus'
    | 'railReplacementBus'
    | 'airportLinkBus'
    | 'internationalCoach'
    | 'nationalCoach'
    | 'localTram'
    | 'cityTram'
    | 'metro'
    | 'local'
    | 'regionalRail'
    | 'interregionalRail'
    | 'longDistance'
    | 'international'
    | 'touristRailway'
    | 'nightRail'
    | 'airportLinkRail'
    | 'internationalCarFerry'
    | 'nationalCarFerry'
    | 'regionalCarFerry'
    | 'localCarFerry'
    | 'internationalPassengerFerry'
    | 'localPassengerFerry'
    | 'sightseeingService'
    | 'highSpeedVehicleService'
    | 'highSpeedPassengerService'
    | 'internationalFlight'
    | 'domesticFlight'
    | 'helicopterService'
    | 'telecabin'
    | 'funicular'


type $entur$sdk$DestinationDisplay = {
    frontText: string,
    ...
}

type $entur$sdk$Config = {|
    clientName: string,
    hosts?: {|
        journeyPlanner?: string,
        geocoder?: string,
        nsr?: string,
        scooters?: string,
    |},
    headers?: {|
        [string]: string
    |},
    fetch?: (
        url: string,
        init?: Object,
    ) => Promise<any>
|}

type $entur$sdk$OverrideConfig = {|
    clientName?: string,
    hosts?: {|
        journeyPlanner?: string,
        geocoder?: string,
        nsr?: string,
        scooters?: string,
    |},
    headers?: {| [string]: string |},
    fetch?: (
        url: string,
        init?: Object,
    ) => Promise<any>
|}

type $entur$sdk$Coordinates = {
    latitude: number,
    longitude: number,
    ...
}

type $entur$sdk$MultilingualString = {
    lang: 'eng' | 'nob' | 'nno',
    language?: 'en' | 'nb' | 'nn' | 'no',
    value: string,
    ...
}

type $entur$sdk$Notice = {|
    text: string,
|}

type $entur$sdk$ReportType = 'general' | 'incident' | null

type $entur$sdk$ServiceConfig = {
    clientName: string,
    hosts: {|
        journeyPlanner: string,
        geocoder: string,
        nsr: string,
        scooters: string,
    |},
    headers: {| [string]: string |},
    ...
}

type $entur$sdk$ValidityPeriod = {|
    startTime: string,
    endTime: string,
|}

type $entur$sdk$InfoLink = {|
    uri: string,
    label: string,
|}

type $entur$sdk$BookingMethod = 'callOffice' | 'online'

type $entur$sdk$BookingContact = {
    phone: string,
    url: string,
    ...
}

type $entur$sdk$BookingArrangement = {
    bookingAccess: boolean,
    bookingContact: $entur$sdk$BookingContact,
    latestBookingTime: string,
    bookingMethods?: Array<$entur$sdk$BookingMethod>,
    bookWhen?: string,
    minimumBookingPeriod?: string,
    bookingNote?: string,
    buyWhen: string,
    ...
}

type $entur$sdk$FlexibleLineType =
    | 'corridorService'
    | 'mainRouteWithFlexibleEnds'
    | 'flexibleAreasOnly'
    | 'hailAndRideSections'
    | 'fixedStopAreaWide'
    | 'freeAreaAreaWide'
    | 'mixedFlexible'
    | 'mixedFlexibleAndFixed'
    | 'fixed'
    | 'other'

type $entur$sdk$Line = {
    bookingArrangements?: $entur$sdk$BookingArrangement,
    description?: string,
    flexibleLineType?: $entur$sdk$FlexibleLineType,
    id: string,
    name: string,
    notices: Array<$entur$sdk$Notice>,
    publicCode: string,
    transportMode: $entur$sdk$TransportMode,
    transportSubmode: $entur$sdk$TransportSubmode,
    ...
}

type $entur$sdk$Situation = {|
    situationNumber: string,
    summary: Array<$entur$sdk$MultilingualString>,
    description: Array<$entur$sdk$MultilingualString>,
    advice: Array<$entur$sdk$MultilingualString>,
    lines: Array<$entur$sdk$Line>,
    validityPeriod: $entur$sdk$ValidityPeriod,
    reportType: $entur$sdk$ReportType,
    infoLinks: Array<$entur$sdk$InfoLink>,
|}


/**
 * Bike rental
 */

type $entur$sdk$BikeRentalStation = {
    id: string,
    name: string,
    bikesAvailable?: number,
    spacesAvailable?: number,
    longitude: number,
    latitude: number,
    networks: Array<string>,
    ...
}

/**
 * Scooters
 */

type $entur$sdk$ScooterOperator = 'voi' | 'lime' | 'tier' | 'zvipp'

type $entur$sdk$BaseScooter = {|
    id: string,
    lat: number,
    lon: number,
    code?: string,
    rental_uris?: {|
        android: string,
        ios: string,
    |},
|}

type $entur$sdk$BatteryScooter = {|
    ...$entur$sdk$BaseScooter,
    operator: 'voi' | 'tier' | 'zvipp',
    battery: number,
|}

type $entur$sdk$BatteryLevel = 'LOW' | 'MEDIUM' | 'HIGH'

type $entur$sdk$BatteryLevelScooter = {|
    ...$entur$sdk$BaseScooter,
    operator: 'lime',
    batteryLevel: $entur$sdk$BatteryLevel,
|}

type $entur$sdk$Scooter = $entur$sdk$BatteryScooter | $entur$sdk$BatteryLevelScooter

/**
 * Geocoder
 */

type $entur$sdk$FeatureCategory =
    | 'onstreetBus'
    | 'onstreetTram'
    | 'airport'
    | 'railStation'
    | 'metroStation'
    | 'busStation'
    | 'coachStation'
    | 'tramStation'
    | 'harbourPort'
    | 'ferryPort'
    | 'ferryStop'
    | 'liftStation'
    | 'vehicleRailInterchange'
    | 'other'
    | 'GroupOfStopPlaces'
    | 'poi'
    | 'Vegadresse'
    | 'street'
    | 'tettsteddel'
    | 'bydel'

// @deprecated. Use FeatureCategory instead
type $entur$sdk$Category = $entur$sdk$FeatureCategory

type $entur$sdk$GetFeaturesParams = {
    // @deprecated Use `boundary` object instead
    'boundary.rect.min_lon'?: number,
    // @deprecated Use `boundary` object instead
    'boundary.rect.max_lon'?: number,
    // @deprecated Use `boundary` object instead
    'boundary.rect.min_lat'?: number,
    // @deprecated Use `boundary` object instead
    'boundary.rect.max_lat'?: number,
    // @deprecated Use `boundary` object instead
    'boundary.country'?: string,
    // @deprecated Use `boundary` object instead
    'boundary.county_ids'?: string,
    // @deprecated Use `boundary` object instead
    'boundary.locality_ids'?: string,
    boundary?: {
        rect?: {|
            minLat: number,
            minLon: number,
            maxLat: number,
            maxLon: number,
        |},
        country?: string,
        countyIds?: string[],
        localityIds?: string[],
        ...
    },
    sources?: Array<string>,
    layers?: Array<string>,
    limit?: number,
    ...
}

type $entur$sdk$GetFeaturesReverseParam = {|
    radius?: number,
    size?: number,
    layers?: Array<string>,
|}

type $entur$sdk$Feature = {
    geometry: {
        coordinates: [number, number], // longitude, latitude
        type: 'Point',
        ...
    },
    properties: {
        id: string,
        name: string,
        label?: string,
        borough: string,
        accuracy: 'point',
        layer: 'venue' | 'address',
        borough_gid: string,
        category: Array<$entur$sdk$FeatureCategory>,
        country_gid: string,
        county: string,
        county_gid: string,
        gid: string,
        housenumber?: string,
        locality: string,
        locality_gid: string,
        postalcode: string,
        source: string,
        source_id: string,
        street: string,
        ...
    },
    ...
}

type $entur$sdk$Location = {
    name?: string,
    place?: string,
    coordinates?: $entur$sdk$Coordinates,
    ...
}


/**
 * Trip
 */

type $entur$sdk$Authority = {
    id: string,
    name: string,
    codeSpace: string,
    url?: string,
    ...
}

type $entur$sdk$Operator = {
    id: string,
    name: string,
    url?: string,
    ...
}

type $entur$sdk$StopPlace = {
    id: string,
    description?: string,
    name: string,
    latitude?: number,
    longitude?: number,
    tariffZones?: Array<{
        id: string,
        ...
    }>,
    ...
}

type $entur$sdk$Quay = {
    id: string,
    name: string,
    description: string,
    publicCode: string,
    situations: Array<$entur$sdk$Situation>,
    stopPlace: $entur$sdk$StopPlace;
    ...
}

type $entur$sdk$Place = {
    latitude: number,
    longitude: number,
    name: string,
    quay?: $entur$sdk$Quay,
    bikeRentalStation?: $entur$sdk$BikeRentalStation,
    ...
}

type $entur$sdk$JourneyPattern = {
    line: $entur$sdk$Line,
    notices?: Array<$entur$sdk$Notice>,
    ...
}

type $entur$sdk$ServiceJourney = {
    id: string,
    journeyPattern?: $entur$sdk$JourneyPattern,
    notices?: Array<$entur$sdk$Notice>,
    publicCode?: string,
    privateCode?: string,
    transportSubmode?: $entur$sdk$TransportSubmode,
    ...
}

type $entur$sdk$EstimatedCall = {
    actualArrivalTime?: string, // Only available AFTER arrival has taken place
    actualDepartureTime?: string, // Only available AFTER departure has taken place
    aimedArrivalTime: string,
    aimedDepartureTime: string,
    cancellation: boolean,
    date: string,
    destinationDisplay: $entur$sdk$DestinationDisplay,
    expectedArrivalTime: string,
    expectedDepartureTime: string,
    forAlighting: boolean,
    forBoarding: boolean,
    notices?: Array<$entur$sdk$Notice>,
    predictionInaccurate: boolean,
    quay?: $entur$sdk$Quay,
    realtime: boolean,
    requestStop: boolean,
    serviceJourney: $entur$sdk$ServiceJourney,
    situations: Array<$entur$sdk$Situation>,
    ...
}

type $entur$sdk$IntermediateEstimatedCall = $entur$sdk$EstimatedCall

type $entur$sdk$Departure = $entur$sdk$EstimatedCall

type $entur$sdk$Interchange = {
    guaranteed: boolean,
    staySeated: boolean,
    FromServiceJourney?: {
        id: string,
        ...
    },
    ToServiceJourney?: {
        id: string,
        ...
    },
    ...
}

type $entur$sdk$PointsOnLink = {
    points: string,
    length: number,
    ...
}

type $entur$sdk$Leg = {
    aimedEndTime: string,
    aimedStartTime: string,
    authority?: $entur$sdk$Authority,
    distance: number,
    directDuration: number,
    duration: number,
    expectedEndTime: string,
    expectedStartTime: string,
    fromEstimatedCall?: $entur$sdk$EstimatedCall,
    fromPlace: $entur$sdk$Place,
    interchangeFrom?: $entur$sdk$Interchange,
    interchangeTo?: $entur$sdk$Interchange,
    intermediateEstimatedCalls: Array<$entur$sdk$IntermediateEstimatedCall>,
    line?: $entur$sdk$Line,
    mode: $entur$sdk$LegMode,
    notices?: Array<$entur$sdk$Notice>,
    operator?: $entur$sdk$Operator,
    pointsOnLink: $entur$sdk$PointsOnLink,
    realtime: boolean,
    ride: boolean,
    rentedBike?: boolean,
    serviceJourney: $entur$sdk$ServiceJourney,
    situations: Array<$entur$sdk$Situation>,
    toEstimatedCall?: $entur$sdk$EstimatedCall,
    toPlace: $entur$sdk$Place,
    transportSubmode: $entur$sdk$TransportSubmode,
    ...
}

type $entur$sdk$TransportSubmodeParam = {
    transportMode: $entur$sdk$TransportMode,
    transportSubmodes: Array<$entur$sdk$TransportSubmode>,
    ...
}

type $entur$sdk$InputBanned = {|
    lines?: Array<string>,
    authorities?: Array<string>,
    organisations?: Array<string>,
    quays?: Array<string>,
    quaysHard?: Array<string>,
    serviceJourneys?: Array<string>,
|}

type $entur$sdk$InputWhiteListed = {|
    lines?: Array<string>,
    authorities?: Array<string>,
    organisations?: Array<string>,
|}

type $entur$sdk$GetTripPatternsParams = {
    from: $entur$sdk$Location,
    to: $entur$sdk$Location,
    allowBikeRental?: boolean,
    arriveBy?: boolean,
    limit?: number,
    maxPreTransitWalkDistance?: number;
    modes?: Array<$entur$sdk$QueryMode>,
    searchDate?: Date,
    transportSubmodes?: Array<$entur$sdk$TransportSubmodeParam>,
    useFlex?: boolean,
    walkSpeed?: number,
    minimumTransferTime?: number,
    wheelchairAccessible?: boolean,
    banned?: $entur$sdk$InputBanned,
    whiteListed?: $entur$sdk$InputWhiteListed,
    ...
}

type $entur$sdk$TripPattern = {
    distance: number,
    directDuration: number,
    duration: number,
    endTime: string,
    id?: string,
    legs: Array<$entur$sdk$Leg>,
    startTime: string,
    walkDistance: number,
    ...
}

type $entur$sdk$DeparturesById = {
    id: string,
    departures: Array<$entur$sdk$Departure>,
    ...
}

type $entur$sdk$GetDeparturesParams = {
    includeCancelledTrips?: boolean,
    includeNonBoarding?: boolean,
    limit?: number,
    limitPerLine?: number,
    start?: Date,
    timeRange?: number,
    whiteListedAuthorities?: Array<string>,
    whiteListedLines?: Array<string>,
    whiteListedModes?: Array<$entur$sdk$QueryMode>;
    ...
}

type $entur$sdk$GetDeparturesBetweenStopPlacesParams = {
    limit?: number,
    start?: Date,
    ...
}

/**
 * Nearest
 */

type $entur$sdk$TypeName =
    | 'BikePark'
    | 'BikeRentalStation'
    | 'CarPark'
    | 'Quay'
    | 'StopPlace'

type $entur$sdk$NearestPlace = {
    id: string,
    type: $entur$sdk$TypeName,
    distance: number,
    latitude: number,
    longitude: number,
    ...
}

/**
 * Stop Place
 */

type $entur$sdk$StopPlaceDetails = {
    id: string,
    name: string,
    description?: string,
    latitude: number,
    longitude: number,
    wheelchairBoarding: 'noInformation' | 'possible' | 'notPossible',
    weighting: 'preferredInterchange' | 'recommendedInterchange' | 'interchangeAllowed' | 'noInterchange',
    transportMode: $entur$sdk$TransportMode,
    transportSubmode?: $entur$sdk$TransportSubmode,
    quays?: Array<$entur$sdk$Quay>,
    ...
}

type $entur$sdk$LimitationStatusType = 'FALSE' | 'TRUE' | 'PARTIAL' | 'UNKNOWN'

type $entur$sdk$WaitingRoomEquipment = {
    id: string,
    ...
}

type $entur$sdk$ShelterEquipment = {
    id: string,
    ...
}

type $entur$sdk$SanitaryEquipment = {
    id: string,
    numberOfToilets: number,
    gender: 'both' | 'femaleOnly' | 'maleOnly' | 'sameSexOnly',
    ...
}

type $entur$sdk$TicketingEquipment = {
    id: string,
    ticketOffice: boolean,
    ticketMachines: boolean,
    numberOfMachines: number,
    ...
}

type $entur$sdk$ParkingVehicle =
    | 'pedalCycle'
    | 'moped'
    | 'motorcycle'
    | 'motorcycleWithSidecar'
    | 'motorScooter'
    | 'twoWheeledVehicle'
    | 'threeWheeledVehicle'
    | 'car'
    | 'smallCar'
    | 'passengerCar'
    | 'largeCar'
    | 'fourWheelDrive'
    | 'taxi'
    | 'camperCar'
    | 'carWithTrailer'
    | 'carWithCaravan'
    | 'minibus'
    | 'bus'
    | 'van'
    | 'largeVan'
    | 'highSidedVehicle'
    | 'lightGoodsVehicle'
    | 'heavyGoodsVehicle'
    | 'truck'
    | 'agriculturalVehicle'
    | 'tanker'
    | 'tram'
    | 'articulatedVehicle'
    | 'vehicleWithTrailer'
    | 'lightGoodsVehicleWithTrailer'
    | 'heavyGoodsVehicleWithTrailer'
    | 'undefined'
    | 'other'
    | 'allPassengerVehicles'
    | 'all'

type $entur$sdk$StopPlaceFacilitiesStopPlace = {|
    id: string,
    name: $entur$sdk$MultilingualString,
    accessibilityAssessment: {|
        limitations: {|
            wheelchairAccess: $entur$sdk$LimitationStatusType,
            stepFreeAccess: $entur$sdk$LimitationStatusType,
        |}
    |},
    placeEquipments: {|
        waitingRoomEquipment?: Array<$entur$sdk$WaitingRoomEquipment>,
        shelterEquipment?: Array<$entur$sdk$ShelterEquipment>,
        sanitaryEquipment?: Array<$entur$sdk$SanitaryEquipment>,
        ticketingEquipment?: Array<$entur$sdk$TicketingEquipment>,
    |}
|}

type $entur$sdk$StopPlaceFacilitiesParking = {|
    name: $entur$sdk$MultilingualString,
    parentSiteRef: string,
    totalCapacity?: number,
    principalCapacity?: number,
    parkingVehicleTypes?: Array<$entur$sdk$ParkingVehicle>
|}

type $entur$sdk$StopPlaceFacilities = {|
    stopPlace: Array<$entur$sdk$StopPlaceFacilitiesStopPlace>,
    parking: Array<$entur$sdk$StopPlaceFacilitiesParking>,
|}
type $entur$sdk$StopPlaceParams = {|
    filterByInUse?: boolean
|}

declare module '@entur/sdk' {
    declare type EnturService = {|
        journeyPlannerQuery: <E>(
            queryObj: string,
            variables?: Object,
            config?: $entur$sdk$ServiceConfig,
        ) => Promise<E>,

        queryJourneyPlanner: <E>(
            queryObj: string,
            variables?: Object
        ) => Promise<E>,

        nsrQuery: <E>(
            queryObj: string,
            variables?: Object,
            config?: $entur$sdk$ServiceConfig,
        ) => Promise<E>,

        queryNsr: <E>(
            queryObj: string,
            variables?: Object,
        ) => Promise<E>,

        getFeatures: (
            query: string,
            coords?: $entur$sdk$Coordinates,
            params?: $entur$sdk$GetFeaturesParams,
        ) => Promise<Array<$entur$sdk$Feature>>,

        getFeaturesReverse: (
            coords: $entur$sdk$Coordinates,
            params?: $entur$sdk$GetFeaturesReverseParam,
        ) => Promise<Array<$entur$sdk$Feature>>,

        getTripPatterns: (
            params: $entur$sdk$GetTripPatternsParams,
            overrideConfig?: $entur$sdk$OverrideConfig,
        ) => Promise<Array<$entur$sdk$TripPattern>>,

        findTrips: (
            from: string,
            to: string,
            date?: Date | string | number
        ) => Promise<Array<$entur$sdk$TripPattern>>,

        getDeparturesFromStopPlaces: (
            stopPlaceIds: Array<string>,
            params?: $entur$sdk$GetDeparturesParams,
        ) => Promise<Array<$entur$sdk$DeparturesById | void>>,

        getDeparturesFromStopPlace: (
            stopPlaceId: string,
            params?: $entur$sdk$GetDeparturesParams,
        ) => Promise<Array<$entur$sdk$Departure>>,

        getDeparturesFromQuays: (
            quayIds: Array<string>,
            params?: $entur$sdk$GetDeparturesParams,
        ) => Promise<Array<$entur$sdk$DeparturesById | void>>,

        getDeparturesBetweenStopPlaces: (
            fromStopPlaceId: string,
            toStopPlaceId: string,
            params?: $entur$sdk$GetDeparturesBetweenStopPlacesParams,
        ) => Promise<Array<$entur$sdk$Departure>>,

        getDeparturesForServiceJourney: (
            id: string,
            date?: string,
        ) => Promise<Array<$entur$sdk$Departure>>,

        getNearestPlaces: (
            coordinates: $entur$sdk$Coordinates,
            params?: {|
                maximumDistance?: number,
                maximumResults?: number,
                filterByPlaceTypes?: Array<$entur$sdk$TypeName>,
                filterByModes?: Array<$entur$sdk$TransportMode>,
                filterByInUse?: boolean,
                multiModalMode?: 'parent' | 'child' | 'all',
            |},
        ) => Promise<Array<$entur$sdk$NearestPlace>>,

        getStopPlace: (
            stopPlaceId: string,
            params?: $entur$sdk$StopPlaceParams,
        ) => Promise<$entur$sdk$StopPlaceDetails>,

        getStopPlaces: (
            stopPlaceIds: Array<string>,
            params?: $entur$sdk$StopPlaceParams,
        ) => Promise<Array<$entur$sdk$StopPlaceDetails | void>>,

        getParentStopPlace: (
            stopPlaceId: string,
            params?: $entur$sdk$StopPlaceParams,
        ) => Promise<$entur$sdk$StopPlaceDetails | null>,

        getStopPlacesByPosition: (
            coordinates: $entur$sdk$Coordinates,
            distance?: number,
            params?: $entur$sdk$StopPlaceParams,
        ) => Promise<Array<$entur$sdk$StopPlaceDetails>>,

        getStopPlaceFacilities: (stopPlaceId: string) => Promise<$entur$sdk$StopPlaceFacilities>,

        getQuaysForStopPlace: (
            stopPlaceId: string,
            params?: $entur$sdk$StopPlaceParams,
        ) => Promise<Array<$entur$sdk$Quay>>,

        getBikeRentalStation: (stationId: string) => Promise<$entur$sdk$BikeRentalStation>,

        getBikeRentalStations: (stationId: Array<string>) => Promise<Array<$entur$sdk$BikeRentalStation | void>>,

        getBikeRentalStationsByPosition: (
            coordinates: $entur$sdk$Coordinates,
            distance?: number
        ) => Promise<Array<$entur$sdk$BikeRentalStation>>,

        getScootersByPosition: (params: {|
            latitude: number,
            longitude: number,
            distance?: number,
            limit?: number,
            operators?: $entur$sdk$ScooterOperator[],
        |}) => Promise<$entur$sdk$Scooter[]>
    |}

    declare export default function createEnturService(config: $entur$sdk$Config): EnturService
    declare export function journeyPlannerQuery<T>(query: string, variables: Object, config: $entur$sdk$ServiceConfig): Promise<T>
    declare export function nsrQuery<T>(query: string, variables: Object, config: $entur$sdk$ServiceConfig): Promise<T>

    /**
     * Constants
     */

    // Any for of public transportation
    declare export var AIR: 'air'
    declare export var BICYCLE: 'bicycle'
    declare export var BUS: 'bus'
    declare export var CABLEWAY: 'cableway'
    declare export var CAR: 'car'
    declare export var COACH: 'coach'
    declare export var WATER: 'water'
    declare export var FUNICULAR: 'funicular'
    declare export var LIFT: 'lift'
    declare export var RAIL: 'rail'
    declare export var METRO: 'metro'
    declare export var TRAM: 'tram'
    declare export var TRANSIT: 'transit'
    declare export var FOOT: 'foot'

    // Combine with foot and transit for park and ride.
    declare export var CAR_PARK: 'car_park'

    // Combine with foot and transit for ride and kiss
    declare export var CAR_PICKUP: 'car_pickup'

    declare export var AIRPORT_LINK_RAIL: 'airportLinkRail'
    declare export var HIGH_SPEED_PASSENGER_SERVICE: 'highSpeedPassengerService'
    declare export var HIGH_SPEED_VEHICLE_SERVICE: 'highSpeedVehicleService'
    declare export var INTERNATIONAL_CAR_FERRY: 'internationalCarFerry'
    declare export var LOCAL_CAR_FERRY: 'localCarFerry'
    declare export var LOCAL_PASSENGER_FERRY: 'localPassengerFerry'
    declare export var NATIONAL_CAR_FERRY: 'nationalCarFerry'
    declare export var RAIL_REPLACEMENT_BUS: 'railReplacementBus'
    declare export var REGIONAL_CAR_FERRY: 'regionalCarFerry'
    declare export var TOURIST_RAILWAY: 'touristRailway'
    declare export var AIRPORT_LINK_BUS: 'airportLinkBus'

    declare export var TransportMode: {|
        BUS: 'bus',
        TRAM: 'tram',
        RAIL: 'rail',
        METRO: 'metro',
        WATER: 'water',
        AIR: 'air',
        COACH: 'coach',
        CAR: 'car',
    |}

    declare export var LegMode: {|
        BUS: 'bus',
        TRAM: 'tram',
        RAIL: 'rail',
        METRO: 'metro',
        WATER: 'water',
        AIR: 'air',
        COACH: 'coach',
        CAR: 'car',
        FOOT: 'foot',
        BICYCLE: 'bicycle',
    |}

    declare export var TransportSubmode: {|
        AIRPORT_LINK_RAIL: 'airportLinkRail',
        HIGH_SPEED_PASSENGER_SERVICE: 'highSpeedPassengerService',
        HIGH_SPEED_VEHICLE_SERVICE: 'highSpeedVehicleService',
        INTERNATIONAL_CAR_FERRY: 'internationalCarFerry',
        LOCAL_CAR_FERRY: 'localCarFerry',
        LOCAL_PASSENGER_FERRY: 'localPassengerFerry',
        NATIONAL_CAR_FERRY: 'nationalCarFerry',
        RAIL_REPLACEMENT_BUS: 'railReplacementBus',
        REGIONAL_CAR_FERRY: 'regionalCarFerry',
        TOURIST_RAILWAY: 'touristRailway',
        AIRPORT_LINK_BUS: 'airportLinkBus',
        CITY_TRAM: 'cityTram',
    |}

    declare export var FeatureCategory: {|
        ONSTREET_BUS: 'onstreetBus',
        ONSTREET_TRAM: 'onstreetTram',
        AIRPORT: 'airport',
        RAIL_STATION: 'railStation',
        METRO_STATION: 'metroStation',
        BUS_STATION: 'busStation',
        COACH_STATION: 'coachStation',
        TRAM_STATION: 'tramStation',
        HARBOUR_PORT: 'harbourPort',
        FERRY_PORT: 'ferryPort',
        FERRY_STOP: 'ferryStop',
        LIFT_STATION: 'liftStation',
        VEHICLE_RAIL_INTERCHANGE: 'vehicleRailInterchange',
        GROUP_OF_STOP_PLACES: 'GroupOfStopPlaces',
        POI: 'poi',
        VEGADRESSE: 'Vegadresse',
        STREET: 'street',
        TETTSTEDDEL: 'tettsteddel',
        BYDEL: 'bydel',
        OTHER: 'other',
    |}


    declare export var TypeName: {
        BIKE_PARK: 'BikePark',
        BIKE_RENTAL_STATION: 'BikeRentalStation',
        CAR_PARK: 'CarPark',
        QUAY: 'Quay',
        STOP_PLACE: 'StopPlace',
        ...
    }

    /**
     * Utils
     */
    declare export function getTripPatternsQuery(params: $entur$sdk$GetTripPatternsParams): {|
        query: string,
        variables?: Object
    |}

    declare export function convertFeatureToLocation(feature: $entur$sdk$Feature): $entur$sdk$Location
    declare export function convertLocationToPosition(feature: $entur$sdk$Feature): $entur$sdk$Location
    declare export function convertPositionToBbox(coordinates: Coordinates, distance: number): {|
        minLng: number,
        minLat: number,
        maxLng: number,
        maxLat: number,
    |}

    declare export function throttler(func: Function, args: Array<any>): Array<any>

    declare export function isAir(mode: string): boolean
    declare export function isBicycle(mode: string): boolean
    declare export function isBus(mode: string): boolean
    declare export function isCableway(mode: string): boolean
    declare export function isCar(mode: string): boolean
    declare export function isCoach(mode: string): boolean
    declare export function isWater(mode: string): boolean
    declare export function isFunicular(mode: string): boolean
    declare export function isLift(mode: string): boolean
    declare export function isRail(mode: string): boolean
    declare export function isMetro(mode: string): boolean
    declare export function isTram(mode: string): boolean
    declare export function isTransit(mode: string): boolean
    declare export function isFoot(mode: string): boolean
    declare export function isCarPark(mode: string): boolean
    declare export function isCarPickup(mode: string): boolean

    declare export function isBatteryScooter(scooter: $entur$sdk$Scooter): boolean
    declare export function isBatteryLevelScooter(
        scooter: $entur$sdk$Scooter,
    ): boolean

}
