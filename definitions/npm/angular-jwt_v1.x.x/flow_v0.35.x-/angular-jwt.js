

declare module 'angular-jwt' {
					
}

declare module 'jwt' {
		declare interface JwtToken {
		iss?: string,
		sub?: string,
		aud?: string,
		exp?: number,
		nbf?: number,
		iat?: number,
		jti?: string,
		unique_name?: string
	}

	declare interface IJwtHelper {
		decodeToken(token: string): JwtToken,
		getTokenExpirationDate(token: any): Date,
		isTokenExpired(token: any, offsetSeconds?: number): boolean
	}

	declare interface IJwtInterceptor {
		tokenGetter(...params: any[]): string
	}

	declare interface IAuthManagerServiceProvider {
		authenticate(): void,
		unauthenticate(): void,
		checkAuthOnRefresh(): void,
		redirectWhenUnauthenticated(): void
	}

			
}