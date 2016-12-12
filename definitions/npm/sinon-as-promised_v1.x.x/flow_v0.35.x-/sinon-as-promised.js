

declare module 'sinon-as-promised' {
					
}

declare module 'npm$namespace$Sinon' {
		declare export interface SinonStub {
		resolves(value: any): SinonStub,
		rejects(err: any): SinonStub
	}

			
}