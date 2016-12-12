

declare module 'geolocation' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IGeoPositionError {
		code: number,
		message: string
	}

	declare export interface IGeoCoordinates {
		latitude?: number,
		longitude?: number,
		accuracy?: number,
		altitude?: number,
		heading?: number,
		speed?: number,
		altitudeAccuracy?: number
	}

	declare export interface IGeoPosition {
		coords: IGeoCoordinates,
		timestamp: Date
	}

	declare export interface IGeolocationOptions {
		timeout?: number,
		maximumAge?: number,
		enableHighAccuracy?: boolean
	}

	declare export interface IGeolocationService {
		getCurrentPosition(options?: IGeolocationOptions): ng.IPromise<IGeoPosition>,
		watchPosition(options?: IGeolocationOptions): ng.IPromise<IGeoPosition>,
		clearWatch(watchID: {
		[key: string]: any
	}): void
	}

			
}