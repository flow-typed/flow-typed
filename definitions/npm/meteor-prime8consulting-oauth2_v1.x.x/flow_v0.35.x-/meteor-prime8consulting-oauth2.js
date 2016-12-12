import type { OAuth2Server } from 'npm$namespace$OAuth2Server'

declare module 'meteor-prime8consulting-oauth2' {
					
}

declare module 'npm$namespace$OAuth2Server' {
		declare interface RefreshToken {
		refreshToken: string,
		clientId: string,
		userId: string,
		expires: Date
	}

	declare interface AuthCode {
		authCode: string,
		clientId: string,
		userId: string,
		expires: Date
	}

	declare interface AccessToken {
		accessToken: string,
		clientId: string,
		userId: string,
		expires: Date
	}

	declare interface Client {
		clientId: string,
		active: boolean,
		redirectUri: string,
		clientSecret: string
	}

	declare interface PubSubNames {
		authCodes: string,
		refreshTokens: string
	}

	declare interface MethodNames {
		authCodeGrant: string
	}

	declare interface Collections {
		refreshToken: Mongo.Collection<RefreshToken>,
		authCode: Mongo.Collection<AuthCode>,
		accessToken: Mongo.Collection<AccessToken>,
		client: Mongo.Collection<Client>
	}

	declare interface SubscribeTo {
		authCode(): Meteor.SubscriptionHandle
	}

	declare interface AuthCodeGrantResult {
		success: boolean,
		error: any,
		authorizationCode: string,
		redirectToUri: string
	}

	declare interface CallMethod {
		authCodeGrant(
		client_id: string, redirect_uri: string, response_type: string, scope: string[], state: string, callback: (err: Meteor.Error, authCodeGrantResult: AuthCodeGrantResult) => void
	): void
	}

	declare interface OAuth2Server {
		pubSubNames: PubSubNames,
		methodNames: MethodNames,
		collections: Collections,
		oauthserver: any,
		subscribeTo: SubscribeTo,
		callMethod: CallMethod
	}

			
}