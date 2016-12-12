

declare module 'jasmine-es6-promise-matchers' {
					
}

declare module 'npm$namespace$JasminePromiseMatchers' {
			declare export function install(): void

	declare export function uninstall(): void

		
}

declare module 'npm$namespace$jasmine' {
		declare interface Matchers {
		toBeRejected(done?: () => void): boolean,
		toBeRejectedWith(value: any, done?: () => void): boolean,
		toBeResolved(done?: () => void): boolean,
		toBeResolvedWith(value: any, done?: () => void): boolean
	}

			
}