

declare module 'express-jwt' {
			declare function jwt(options: jwt.Options): jwt.RequestHandler

		declare module.exports: undefined


}

declare module 'jwt' {
	declare export type secretType = string | Buffer;

	declare export interface SecretCallback {
		(req: express.Request, header: any, payload: any, done: (err: any, secret?: boolean) => void): void,
		(req: express.Request, payload: any, done: (err: any, secret?: secretType) => void): void
	}

	declare export interface IsRevokedCallback {
		(req: express.Request, payload: any, done: (err: any, revoked?: boolean) => void): void
	}

	declare export interface GetTokenCallback {
		(req: express.Request): any
	}

	declare export interface Options {
		secret: secretType | SecretCallback,
		userProperty?: string,
		skip?: string[],
		credentialsRequired?: boolean,
		isRevoked?: IsRevokedCallback,
		requestProperty?: string,
		getToken?: GetTokenCallback,
		[property: string]: any
	}

	declare export interface RequestHandler {
		unless?: typeof unless
	}

			
}