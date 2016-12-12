

declare module 'angular.throttle' {
					
}

declare module 'npm$namespace$angular' {
		declare interface IAngularStatic {
		throttle: (
		fn: Function, throttle: number, options?: {
		leading?: boolean,
		trailing?: boolean
	}
	) => Function
	}

			
}