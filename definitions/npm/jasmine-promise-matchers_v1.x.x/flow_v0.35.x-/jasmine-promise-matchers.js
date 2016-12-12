

declare module 'jasmine-promise-matchers' {
			declare function installPromiseMatchers(): void

		
}

declare module 'npm$namespace$jasmine' {
		declare interface Matchers {
		toBeRejected(): boolean,
		toBeRejectedWith(value: any): boolean,
		toBeResolved(): boolean,
		toBeResolvedWith(value: any): boolean
	}

			
}