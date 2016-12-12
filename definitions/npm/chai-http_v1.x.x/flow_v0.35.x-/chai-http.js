

declare module 'chai-http' {
			declare function chaiHttp(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface ChaiStatic {
		request: ChaiHttpRequest
	}

	declare interface ChaiHttpRequest {
		(server: any): ChaiHttp.Agent,
		agent(server: any): ChaiHttp.Agent,
		addPromises(promiseConstructor: any): void
	}

	declare interface Assertion {
		status(code: number): Assertion,
		header(key: string, value?: string): Assertion,
		header(key: string, value?: RegExp): Assertion,
		headers: Assertion,
		json: Assertion,
		text: Assertion,
		html: Assertion,
		redirect: Assertion,
		redirectTo(location: string): Assertion,
		param(key: string, value?: string): Assertion,
		cookie(key: string, value?: string): Assertion
	}

	declare interface TypeComparison {
		ip: Assertion
	}

			
}

declare module 'npm$namespace$ChaiHttp' {
		declare interface Promise<T> {
		then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Promise<U>
	}

	declare interface Response {
		body: any,
		type: string,
		status: number
	}

	declare interface Request {
		attach(field: string, file: string | Buffer, filename: string): Request,
		set(field: string, val: string): Request,
		query(params: Object): Request,
		send(data: Object): Request,
		auth(user: string, name: string): Request,
		field(name: string, val: string): Request,
		end(callback?: (err: any, res: Response) => void): FinishedRequest
	}

	declare interface FinishedRequest {
		then(
		success?: (res: Response) => void, failure?: (err: any) => void
	): FinishedRequest,
		catch(failure?: (err: any) => void): FinishedRequest
	}

	declare interface Agent {
		get(url: string, callback?: (err: any, res: Response) => void): Request,
		post(url: string, callback?: (err: any, res: Response) => void): Request,
		put(url: string, callback?: (err: any, res: Response) => void): Request,
		head(url: string, callback?: (err: any, res: Response) => void): Request,
		del(url: string, callback?: (err: any, res: Response) => void): Request,
		options(url: string, callback?: (err: any, res: Response) => void): Request,
		patch(url: string, callback?: (err: any, res: Response) => void): Request
	}

	declare interface TypeComparison {
		ip: any
	}

			
}