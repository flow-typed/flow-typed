

declare module 'jsonwebtoken' {
		declare export interface SignOptions {
		algorithm?: string,
		expiresIn?: string | number,
		notBefore?: string,
		audience?: string,
		subject?: string,
		issuer?: string,
		jwtid?: string,
		noTimestamp?: boolean,
		header?: Object,
		encoding?: string
	}

	declare export interface VerifyOptions {
		algorithms?: string[],
		audience?: string | string[],
		clockTolerance?: number,
		issuer?: string | string[],
		ignoreExpiration?: boolean,
		ignoreNotBefore?: boolean,
		jwtId?: string,
		subject?: string,
		maxAge?: string
	}

	declare export interface DecodeOptions {
		complete?: boolean,
		json?: boolean
	}

	declare export interface VerifyCallback {
		(err: JsonWebTokenError | TokenExpiredError | NotBeforeError, decoded: any): void
	}

	declare export interface SignCallback {
		(err: Error, encoded: string): void
	}

	declare export function sign(
		payload: string | Buffer | Object, secretOrPrivateKey: string | Buffer, options?: SignOptions
	): string

	declare export function sign(
		payload: string | Buffer | Object, secretOrPrivateKey: string | Buffer, callback: SignCallback
	): void

	declare export function sign(
		payload: string | Buffer | Object, secretOrPrivateKey: string | Buffer, options: SignOptions, callback: SignCallback
	): void

	declare function verify(token: string, secretOrPublicKey: string | Buffer): any

	declare function verify(
		token: string, secretOrPublicKey: string | Buffer, options?: VerifyOptions
	): any

	declare function verify(
		token: string, secretOrPublicKey: string | Buffer, callback?: VerifyCallback
	): void

	declare function verify(
		token: string, secretOrPublicKey: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback
	): void

	declare function decode(token: string, options?: DecodeOptions): any

	declare export class JsonWebTokenError extends Error {
		inner: Error;
		constructor(message: string, error?: Error): this
	}

	declare export class TokenExpiredError extends JsonWebTokenError {
		expiredAt: number;
		constructor(message: string, expiredAt: number): this
	}

	declare export class NotBeforeError extends JsonWebTokenError {
		date: Date;
		constructor(message: string, date: Date): this
	}

	
}