

declare module 'supertest-as-promised' {
			declare function supertestAsPromised(app: any): SuperTest<supertestAsPromised.Test>

		declare module.exports: undefined


}

declare module 'supertestAsPromised' {
		declare interface Request {
		
	}

	declare interface Response {
		
	}

	declare interface Test {
		toPromise(): PromiseBlurbird<Response>
	}

	declare interface SuperTest<T> {
		
	}

	declare function agent(app?: any): SuperTest<Test>

		
}