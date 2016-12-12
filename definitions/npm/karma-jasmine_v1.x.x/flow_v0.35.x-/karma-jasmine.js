

declare module 'karma-jasmine' {
			declare function fdescribe(description: string, specDefinitions: () => void): void

	declare function fit(expectation: string, assertion: () => void): void

		
}