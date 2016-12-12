

declare module 'passport-facebook-token' {
		declare interface Profile {
		gender: string,
		profileUrl: string
	}

	declare interface StrategyOptions {
		clientID: string,
		clientSecret: string,
		authorizationURL?: string,
		tokenURL?: string,
		scopeSeparator?: string,
		passReqToCallback?: Function,
		enableProof?: boolean,
		profileFields?: any[]
	}

		declare class Strategy extends passport$Strategy {
		constructor(options: StrategyOptions, verify: (
		accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: any) => void
	) => void): this;
		name: string;
		authenticate: (req: express.Request, options?: any) => void
	}

	
}