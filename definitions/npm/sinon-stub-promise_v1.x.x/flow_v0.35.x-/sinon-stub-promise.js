

declare module 'sinon-stub-promise' {
					
}

declare module 'npm$namespace$Sinon' {
		declare interface SinonPromise {
		resolves(value?: any): void,
		rejects(value?: any): void
	}

	declare interface SinonStub {
		returnsPromise(): SinonPromise
	}

			
}