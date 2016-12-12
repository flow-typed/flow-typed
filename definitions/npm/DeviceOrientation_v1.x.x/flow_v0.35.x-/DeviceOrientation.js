

declare module 'deviceOrientation' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IDeviceOrientationHeading {
		magneticHeading: number,
		trueHeading?: number,
		headingAccuracy?: number,
		timestamp?: number
	}

	declare export interface IDeviceOrientationWatchOptions {
		frequency?: number,
		filter?: number
	}

	declare export interface IDeviceOrientationWatchPromise {
		watchID: number,
		cancel: () => void,
		clearWatch: (watchId?: number) => void
	}

	declare export interface IDeviceOrientationService {
		getCurrentHeading(): ng.IPromise<IDeviceOrientationHeading>,
		watchHeading(options: IDeviceOrientationWatchOptions): IDeviceOrientationWatchPromise,
		clearWatch(watchID: number): void
	}

			
}