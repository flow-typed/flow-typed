

declare module 'cookie-session' {
			declare function cookieSession(options?: CookieSessionInterfaces.CookieSessionOptions): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare interface Request {
		
	}

			
}

declare module 'npm$namespace$CookieSessionInterfaces' {
		declare interface CookieSessionOptions {
		name: string,
		keys?: Array<string>,
		secret?: string,
		maxAge?: number,
		expires?: Date,
		path?: string,
		domain?: string,
		secure?: boolean,
		secureProxy?: boolean,
		httpOnly?: boolean,
		signed?: boolean,
		overwrite?: boolean
	}

	declare interface CookieSessionObject {
		isChanged: boolean,
		isNew: boolean,
		isPopulated: boolean,
		[propertyName: string]: any
	}

	declare interface CookieSessionRequest {
		session: CookieSessionObject,
		sessionOptions: CookieSessionOptions
	}

			
}