

declare module 'passport-jwt' {
		declare export interface StrategyOptions {
		secretOrKey: string,
		jwtFromRequest: JwtFromRequestFunction,
		issuer?: string,
		audience?: string,
		algorithms?: string[],
		ignoreExpiration?: boolean,
		passReqToCallback?: boolean
	}

	declare export interface VerifyCallback {
		(payload: any, done: VerifiedCallback): void
	}

	declare export interface VerifyCallbackWithRequest {
		(req: Request, payload: any, done: VerifiedCallback): void
	}

	declare export interface VerifiedCallback {
		(error: any, user?: any, info?: any): void
	}

	declare export interface JwtFromRequestFunction {
		(req: Request): string
	}

		declare export class Strategy extends PassportStrategy {
		constructor(opt: StrategyOptions, verify: VerifyCallback): this;
		constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest): this
	}

	
}

declare module 'ExtractJwt' {
			declare export function fromHeader(header_name: string): JwtFromRequestFunction

	declare export function fromBodyField(field_name: string): JwtFromRequestFunction

	declare export function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction

	declare export function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction

	declare export function fromAuthHeader(): JwtFromRequestFunction

		
}