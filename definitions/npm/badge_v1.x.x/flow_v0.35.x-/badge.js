

declare module 'badge' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IBadgeService {
		hasPermission(): ng.IPromise<boolean>,
		promptForPermission(): ng.IPromise<any>,
		set(badge: number, callback?: Function, scope?: {
		
	}): ng.IPromise<any>,
		get(): ng.IPromise<number>,
		clear(callback?: Function, scope?: {
		
	}): ng.IPromise<any>,
		increase(count?: number, callback?: Function, scope?: {
		
	}): ng.IPromise<any>,
		decrease(count?: number, callback?: Function, scope?: {
		
	}): ng.IPromise<any>
	}

			
}