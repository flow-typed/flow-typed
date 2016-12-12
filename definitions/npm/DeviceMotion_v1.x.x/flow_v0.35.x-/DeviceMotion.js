

declare module 'deviceMotion' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IDeviceMotionAcceleration {
		x: number,
		y: number,
		z: number,
		timestamp: number
	}

	declare export interface IDeviceMotionAccelerometerOptions {
		frequency: number
	}

	declare export interface IDeviceMotionWatchPromise {
		watchID: number,
		cancel: () => void,
		clearWatch: (watchId?: number) => void
	}

	declare export interface IDeviceMotionService {
		getCurrentAcceleration(): ng.IPromise<IDeviceMotionAcceleration>,
		watchAcceleration(options: IDeviceMotionAccelerometerOptions): IDeviceMotionWatchPromise,
		clearWatch(watchId: number): void
	}

			
}