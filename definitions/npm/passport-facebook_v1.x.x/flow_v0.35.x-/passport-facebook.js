

declare module 'passport-facebook' {
		declare interface Profile {
		gender: string,
		profileUrl: string,
		username: string,
		_raw: string,
		_json: any
	}

	declare interface IStrategyOption {
		clientID: string,
		clientSecret: string,
		callbackURL: string,
		scopeSeparator?: string,
		enableProof?: boolean,
		profileFields?: string[]
	}

		declare class Strategy extends passport$Strategy {
		constructor(options: IStrategyOption, verify: (
		accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void
	) => void): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	
}