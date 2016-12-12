

declare module 'passport-local' {
		declare interface IStrategyOptions {
		usernameField?: string,
		passwordField?: string,
		passReqToCallback?: boolean
	}

	declare interface IStrategyOptionsWithRequest {
		usernameField?: string,
		passwordField?: string,
		passReqToCallback: boolean
	}

	declare interface IVerifyOptions {
		message: string
	}

	declare interface VerifyFunctionWithRequest {
		(req: express.Request, username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void
	}

	declare interface VerifyFunction {
		(username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void
	}

		declare class Strategy extends passport$Strategy {
		constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): this;
		constructor(options: IStrategyOptions, verify: VerifyFunction): this;
		constructor(verify: VerifyFunction): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	
}