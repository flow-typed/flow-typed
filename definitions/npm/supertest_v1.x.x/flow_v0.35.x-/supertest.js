

declare module 'supertest' {
	declare type CallbackHandler = (err: any, res: Response) => void;

	declare interface Response {
		
	}

	declare interface Request {
		
	}

	declare interface Test {
		app?: any,
		url: string,
		serverAddress(app: any, path: string): string,
		expect(status: number, callback?: CallbackHandler): this,
		expect(status: number, body: any, callback?: CallbackHandler): this,
		expect(body: string, callback?: CallbackHandler): this,
		expect(body: RegExp, callback?: CallbackHandler): this,
		expect(body: Object, callback?: CallbackHandler): this,
		expect(field: string, val: string, callback?: CallbackHandler): this,
		expect(fzield: string, val: RegExp, callback?: CallbackHandler): this,
		expect(checker: (res: Response) => any): this,
		end(callback?: CallbackHandler): this
	}

	declare interface SuperTest<T> {
		
	}

	declare function supertest(app: any): supertest.SuperTest<supertest.Test>

	declare function agent(app?: any): SuperTest<Test>

		declare module.exports: undefined


}