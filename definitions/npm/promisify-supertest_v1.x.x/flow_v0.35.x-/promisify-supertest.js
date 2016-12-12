

declare module 'promisify-supertest' {
	declare type CallbackHandler = (err: any, res: supertest.Response) => void;

		declare function supertest(app: express.Express): supertest.SuperTest

		declare module.exports: undefined


}

declare module 'supertest' {
		declare interface SuperTest {
		
	}

	declare interface Test {
		url: string,
		serverAddress(app: any, path: string): string,
		expect(status: number, callback?: CallbackHandler): this,
		expect(status: number, body: string, callback?: CallbackHandler): this,
		expect(body: string, callback?: CallbackHandler): this,
		expect(body: RegExp, callback?: CallbackHandler): this,
		expect(body: Object, callback?: CallbackHandler): this,
		expect(field: string, val: string, callback?: CallbackHandler): this,
		expect(field: string, val: RegExp, callback?: CallbackHandler): this,
		expect(checker: (res: Response) => any): this,
		end(callback?: CallbackHandler): this & Promise<Response>
	}

	declare interface Response {
		
	}

	declare function agent(app?: any): supertest.SuperTest

		
}