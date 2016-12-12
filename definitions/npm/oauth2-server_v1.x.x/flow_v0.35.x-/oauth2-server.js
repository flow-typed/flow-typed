

declare module 'oauth2-server' {
			declare function o(config: o.Config): o.OAuth2Server

		declare module.exports: undefined


}

declare module 'o' {
		declare interface OAuth2Server {
		grant(): RequestHandler,
		authorise(): any,
		errorHandler(): any
	}

	declare interface Config {
		model: {
		
	},
		grants: string[],
		debug?: boolean,
		accessTokenLifetime?: number,
		refreshTokenLifetime?: number,
		authCodeLifetime?: number,
		clientIdRegex?: RegExp,
		passthroughErrors?: boolean,
		continueAfterResponse?: boolean
	}

	declare interface BaseModel {
		getAccessToken(bearerToken: string, callback: GetAccessTokenCallback): void,
		getClient(clientId: string, clientSecret: string, callback: GetClientCallback): void,
		grantTypeAllowed(clientId: string, grantType: string, callback: GrantTypeAllowedCallback): void,
		saveAccessToken(
		accessToken: string, clientId: string, expires: Date, user: User, callback: SaveAccessTokenCallback
	): void
	}

	declare interface AuthorizationCodeModel {
		getAuthCode(authCode: string, callback: GetAuthCodeCallback): void,
		saveAuthCode(
		authCode: string, clientId: string, expires: Date, user: User | string, callback: SaveAuthCodeCallback
	): void
	}

	declare interface PasswordModel {
		getUser(username: string, password: string, callback: GetUserCallback): void
	}

	declare interface RefreshTokenModel {
		saveRefreshToken(
		refreshToken: string, clientId: string, expires: Date, user: User, callback: SaveRefreshTokenCallback
	): void,
		getRefreshToken(refreshToken: string, callback: GetRefreshTokenCallback): void,
		revokeRefreshToken(refreshToken: string, callback: RevokeRefreshTokenCallback): void
	}

	declare interface ExtensionModel {
		extendedGrant(grantType: string, req: Request, callback: ExtendedGrantCallback): void
	}

	declare interface ClientCredentialsModel {
		getUserFromClient(
		clientId: string, clientSecret: string, callback: GetUserFromClientCallback
	): void,
		generateToken(type: string, req: Request, callback: GenerateTokenCallback): void
	}

	declare interface GenerateTokenCallback {
		(error: any, token: string | Object): void
	}

	declare interface GetUserFromClientCallback {
		(error: any, user: User): void
	}

	declare interface ExtendedGrantCallback {
		(error: any, supported: boolean, user: User): void
	}

	declare interface RevokeRefreshTokenCallback {
		(error: any): void
	}

	declare interface GetRefreshTokenCallback {
		(error: any, refreshToken: RefreshToken): void
	}

	declare interface SaveRefreshTokenCallback {
		(error: any): void
	}

	declare interface GetUserCallback {
		(error: any, user: User): void
	}

	declare interface SaveAuthCodeCallback {
		(error: any): void
	}

	declare interface GetAuthCodeCallback {
		(error: String, authCode: AuthCode): void
	}

	declare interface SaveAccessTokenCallback {
		(error: any): void
	}

	declare interface GetAccessTokenCallback {
		(error: any, accessToken: AccessToken): void
	}

	declare interface GetClientCallback {
		(error: any, client: Client): void
	}

	declare interface GrantTypeAllowedCallback {
		(error: any, allowed: boolean): void
	}

	declare interface RefreshToken {
		clientId: string,
		expires: Date,
		userId: string
	}

	declare interface AuthCode {
		clientId: string,
		expires: Date,
		userId: string
	}

	declare interface User {
		id: string
	}

	declare interface Client {
		clientId: string,
		redirectUri: string
	}

	declare interface AccessToken {
		expires: Date,
		user?: User,
		userId?: string
	}

			
}