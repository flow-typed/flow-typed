

declare module 'passport-twitter' {
		declare interface Profile {
		gender: string,
		username: string,
		_raw: string,
		_json: any,
		_accessLevel: string
	}

	declare interface IStrategyOption {
		consumerKey: string,
		consumerSecret: string,
		callbackURL: string,
		reguestTokenURL?: string,
		accessTokenURL?: string,
		userAuthorizationURL?: string,
		sessionKey?: string,
		userProfileURL?: string,
		skipExtendedUserProfile?: boolean
	}

		declare class Strategy extends passport$Strategy {
		constructor(options: IStrategyOption, verify: (
		accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void
	) => void): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	
}