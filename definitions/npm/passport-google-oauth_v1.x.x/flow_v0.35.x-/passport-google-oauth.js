

declare module 'passport-google-oauth' {
		declare interface Profile {
		gender: string,
		_raw: string,
		_json: any
	}

	declare interface IOAuthStrategyOption {
		consumerKey: string,
		consumerSecret: string,
		callbackURL: string,
		reguestTokenURL?: string,
		accessTokenURL?: string,
		userAuthorizationURL?: string,
		sessionKey?: string
	}

	declare interface VerifyOptions {
		message: string
	}

	declare interface VerifyFunction {
		(error: any, user?: any, msg?: VerifyOptions): void
	}

	declare interface IOAuth2StrategyOption {
		clientID: string,
		clientSecret: string,
		callbackURL: string,
		authorizationURL?: string,
		tokenURL?: string,
		accessType?: string,
		approval_prompt?: string,
		prompt?: string,
		loginHint?: string,
		userID?: string,
		hostedDomain?: string,
		display?: string,
		requestVisibleActions?: string,
		openIDRealm?: string
	}

		declare class OAuthStrategy extends passport$Strategy {
		constructor(options: IOAuthStrategyOption, verify: (
		accessToken: string, refreshToken: string, profile: Profile, done: VerifyFunction
	) => void): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	declare class OAuth2Strategy extends passport$Strategy {
		constructor(options: IOAuth2StrategyOption, verify: (
		accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void
	) => void): this;
		name: string;
		authenticate: (req: express.Request, options?: Object) => void
	}

	
}