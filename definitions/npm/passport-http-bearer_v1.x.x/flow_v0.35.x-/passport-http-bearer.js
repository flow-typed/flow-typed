

declare module 'passport-http-bearer' {
		declare interface IStrategyOptions {
		scope: string | Array<string>,
		realm: string,
		passReqToCallback: boolean
	}

	declare interface IVerifyOptions {
		message: string,
		scope: string | Array<string>
	}

	declare interface VerifyFunction {
		(token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void
	}

	declare interface VerifyFunctionWithRequest {
		(req: express.Request, token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void
	}

		declare class Strategy extends passport$Strategy {
		constructor(verify: VerifyFunction): this;
		constructor(options: IStrategyOptions, verify: VerifyFunction): this;
		constructor(options: IStrategyOptions, verify: VerifyFunctionWithRequest): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	
}