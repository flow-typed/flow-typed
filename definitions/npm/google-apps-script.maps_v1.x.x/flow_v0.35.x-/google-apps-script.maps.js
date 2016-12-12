

declare module 'google-apps-script.maps' {
					
}

declare module 'Maps' {
		declare export interface DirectionFinder {
		addWaypoint(latitude: Number, longitude: Number): DirectionFinder,
		addWaypoint(address: string): DirectionFinder,
		clearWaypoints(): DirectionFinder,
		getDirections(): Object,
		setAlternatives(useAlternatives: boolean): DirectionFinder,
		setArrive(time: Date): DirectionFinder,
		setAvoid(avoid: string): DirectionFinder,
		setDepart(time: Date): DirectionFinder,
		setDestination(latitude: Number, longitude: Number): DirectionFinder,
		setDestination(address: string): DirectionFinder,
		setLanguage(language: string): DirectionFinder,
		setMode(mode: string): DirectionFinder,
		setOptimizeWaypoints(optimizeOrder: boolean): DirectionFinder,
		setOrigin(latitude: Number, longitude: Number): DirectionFinder,
		setOrigin(address: string): DirectionFinder,
		setRegion(region: string): DirectionFinder
	}

	declare export interface DirectionFinderEnums {
		Avoid: Avoid,
		Mode: Mode
	}

	declare export interface ElevationSampler {
		sampleLocation(latitude: Number, longitude: Number): Object,
		sampleLocations(points: Number[]): Object,
		sampleLocations(encodedPolyline: string): Object,
		samplePath(points: Number[], numSamples: Integer): Object,
		samplePath(encodedPolyline: string, numSamples: Integer): Object
	}

	declare export interface Geocoder {
		geocode(address: string): Object,
		reverseGeocode(latitude: Number, longitude: Number): Object,
		reverseGeocode(
		swLatitude: Number, swLongitude: Number, neLatitude: Number, neLongitude: Number
	): Object,
		setBounds(
		swLatitude: Number, swLongitude: Number, neLatitude: Number, neLongitude: Number
	): Geocoder,
		setLanguage(language: string): Geocoder,
		setRegion(region: string): Geocoder
	}

	declare export interface Maps {
		DirectionFinder: DirectionFinderEnums,
		StaticMap: StaticMapEnums,
		decodePolyline(polyline: string): Number[],
		encodePolyline(points: Number[]): string,
		newDirectionFinder(): DirectionFinder,
		newElevationSampler(): ElevationSampler,
		newGeocoder(): Geocoder,
		newStaticMap(): StaticMap,
		setAuthentication(clientId: string, signingKey: string): void
	}

	declare export interface StaticMap {
		addAddress(address: string): StaticMap,
		addMarker(latitude: Number, longitude: Number): StaticMap,
		addMarker(address: string): StaticMap,
		addPath(points: Number[]): StaticMap,
		addPath(polyline: string): StaticMap,
		addPoint(latitude: Number, longitude: Number): StaticMap,
		addVisible(latitude: Number, longitude: Number): StaticMap,
		addVisible(address: string): StaticMap,
		beginPath(): StaticMap,
		clearMarkers(): StaticMap,
		clearPaths(): StaticMap,
		clearVisibles(): StaticMap,
		endPath(): StaticMap,
		getAs(contentType: string): Base.Blob,
		getBlob(): Base.Blob,
		getMapImage(): Byte[],
		getMapUrl(): string,
		setCenter(latitude: Number, longitude: Number): StaticMap,
		setCenter(address: string): StaticMap,
		setCustomMarkerStyle(imageUrl: string, useShadow: boolean): StaticMap,
		setFormat(format: string): StaticMap,
		setLanguage(language: string): StaticMap,
		setMapType(mapType: string): StaticMap,
		setMarkerStyle(size: string, color: string, label: string): StaticMap,
		setMobile(useMobileTiles: boolean): StaticMap,
		setPathStyle(weight: Integer, color: string, fillColor: string): StaticMap,
		setSize(width: Integer, height: Integer): StaticMap,
		setZoom(zoom: Integer): StaticMap
	}

	declare export interface StaticMapEnums {
		Color: Color,
		Format: Format,
		MarkerSize: MarkerSize,
		Type: Type
	}

			
}