

declare module 'google.geolocation' {
		declare interface GeolocationStatic {
		init(): boolean,
		getCurrentPosition(
		success: (position: Position) => void, error?: (positionError: PositionError) => void, opts?: PositionOptions
	): void,
		showMap(latitude: number, longitude: number): void
	}

			
}