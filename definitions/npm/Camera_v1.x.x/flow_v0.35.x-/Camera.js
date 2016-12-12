

declare module 'camera' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface ICameraService {
		getPicture(options?: CameraOptions): ng.IPromise<string>,
		cleanup(): ng.IPromise<void>
	}

			
}